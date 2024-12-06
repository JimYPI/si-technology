import { SupportedLanguage } from './languageUtils';
import { TranslationMetrics } from './translationMetrics';

interface CacheEntry {
  value: string;
  timestamp: number;
  expiresAt: number;
}

export class TranslationCache {
  private static instance: TranslationCache;
  private cache: Map<string, CacheEntry> = new Map();
  private readonly metrics = TranslationMetrics.getInstance();
  private readonly maxSize: number;
  private readonly defaultTTL: number;

  private constructor(maxSize = 1000, defaultTTL = 3600000) { // 1 hour default TTL
    this.maxSize = maxSize;
    this.defaultTTL = defaultTTL;
  }

  static getInstance(): TranslationCache {
    if (!TranslationCache.instance) {
      TranslationCache.instance = new TranslationCache();
    }
    return TranslationCache.instance;
  }

  get(key: string, language: SupportedLanguage): string | null {
    const cacheKey = this.getCacheKey(key, language);
    const entry = this.cache.get(cacheKey);

    if (!entry) {
      this.metrics.recordCacheMiss();
      return null;
    }

    if (this.isExpired(entry)) {
      this.cache.delete(cacheKey);
      this.metrics.recordCacheMiss();
      return null;
    }

    this.metrics.recordCacheHit();
    return entry.value;
  }

  set(
    key: string,
    language: SupportedLanguage,
    value: string,
    ttl: number = this.defaultTTL
  ): void {
    const cacheKey = this.getCacheKey(key, language);
    const now = Date.now();

    const entry: CacheEntry = {
      value,
      timestamp: now,
      expiresAt: now + ttl
    };

    if (this.cache.size >= this.maxSize) {
      this.evictOldest();
    }

    this.cache.set(cacheKey, entry);
    this.metrics.updateCacheSize(this.cache.size);
  }

  clear(language?: SupportedLanguage): void {
    if (language) {
      const prefix = `${language}:`;
      for (const key of this.cache.keys()) {
        if (key.startsWith(prefix)) {
          this.cache.delete(key);
        }
      }
    } else {
      this.cache.clear();
    }
    this.metrics.updateCacheSize(this.cache.size);
  }

  getStats(): {
    size: number;
    hitRate: number;
    averageAge: number;
    oldestEntry: number;
  } {
    const now = Date.now();
    let totalAge = 0;
    let oldestEntry = now;

    for (const entry of this.cache.values()) {
      const age = now - entry.timestamp;
      totalAge += age;
      oldestEntry = Math.min(oldestEntry, entry.timestamp);
    }

    return {
      size: this.cache.size,
      hitRate: this.metrics.getCacheEfficiency(),
      averageAge: this.cache.size ? totalAge / this.cache.size : 0,
      oldestEntry: this.cache.size ? now - oldestEntry : 0
    };
  }

  private getCacheKey(key: string, language: SupportedLanguage): string {
    return `${language}:${key}`;
  }

  private isExpired(entry: CacheEntry): boolean {
    return Date.now() > entry.expiresAt;
  }

  private evictOldest(): void {
    let oldestKey: string | null = null;
    let oldestTimestamp = Infinity;

    for (const [key, entry] of this.cache.entries()) {
      if (entry.timestamp < oldestTimestamp) {
        oldestTimestamp = entry.timestamp;
        oldestKey = key;
      }
    }

    if (oldestKey) {
      this.cache.delete(oldestKey);
    }
  }

  // For testing purposes
  reset(): void {
    this.cache.clear();
    this.metrics.updateCacheSize(0);
  }
}

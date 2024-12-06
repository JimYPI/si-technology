import { SupportedLanguage } from './languageUtils';

interface TranslationMetric {
  key: string;
  language: SupportedLanguage;
  duration: number;
  timestamp: number;
  success: boolean;
  error?: string;
}

interface CacheMetric {
  hits: number;
  misses: number;
  size: number;
}

export class TranslationMetrics {
  private static instance: TranslationMetrics;
  private metrics: TranslationMetric[] = [];
  private cacheMetrics: CacheMetric = {
    hits: 0,
    misses: 0,
    size: 0
  };

  private constructor() {}

  static getInstance(): TranslationMetrics {
    if (!TranslationMetrics.instance) {
      TranslationMetrics.instance = new TranslationMetrics();
    }
    return TranslationMetrics.instance;
  }

  recordTranslation(
    key: string,
    language: SupportedLanguage,
    duration: number,
    success: boolean,
    error?: string
  ) {
    const metric: TranslationMetric = {
      key,
      language,
      duration,
      timestamp: Date.now(),
      success,
      error
    };
    this.metrics.push(metric);
    this.pruneOldMetrics();
  }

  recordCacheHit() {
    this.cacheMetrics.hits++;
  }

  recordCacheMiss() {
    this.cacheMetrics.misses++;
  }

  updateCacheSize(size: number) {
    this.cacheMetrics.size = size;
  }

  getAverageTranslationTime(language?: SupportedLanguage): number {
    const relevantMetrics = language
      ? this.metrics.filter(m => m.language === language && m.success)
      : this.metrics.filter(m => m.success);

    if (relevantMetrics.length === 0) return 0;

    const totalDuration = relevantMetrics.reduce((sum, m) => sum + m.duration, 0);
    return totalDuration / relevantMetrics.length;
  }

  getErrorRate(language?: SupportedLanguage): number {
    const relevantMetrics = language
      ? this.metrics.filter(m => m.language === language)
      : this.metrics;

    if (relevantMetrics.length === 0) return 0;

    const errorCount = relevantMetrics.filter(m => !m.success).length;
    return errorCount / relevantMetrics.length;
  }

  getCacheEfficiency(): number {
    const total = this.cacheMetrics.hits + this.cacheMetrics.misses;
    return total === 0 ? 0 : this.cacheMetrics.hits / total;
  }

  getMostFrequentErrors(limit: number = 10): Array<{ key: string; count: number }> {
    const errorCounts = new Map<string, number>();

    this.metrics
      .filter(m => !m.success)
      .forEach(m => {
        const count = errorCounts.get(m.key) || 0;
        errorCounts.set(m.key, count + 1);
      });

    return Array.from(errorCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([key, count]) => ({ key, count }));
  }

  getMetricsSummary() {
    return {
      totalTranslations: this.metrics.length,
      averageTime: this.getAverageTranslationTime(),
      errorRate: this.getErrorRate(),
      cacheEfficiency: this.getCacheEfficiency(),
      cacheSize: this.cacheMetrics.size,
      mostFrequentErrors: this.getMostFrequentErrors(5)
    };
  }

  private pruneOldMetrics(maxAge: number = 24 * 60 * 60 * 1000) { // 24 hours
    const cutoff = Date.now() - maxAge;
    this.metrics = this.metrics.filter(m => m.timestamp >= cutoff);
  }

  // For testing purposes
  reset() {
    this.metrics = [];
    this.cacheMetrics = {
      hits: 0,
      misses: 0,
      size: 0
    };
  }
}

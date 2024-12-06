import { SupportedLanguage } from './languageUtils';
import { TranslationMetrics } from './translationMetrics';
import { TranslationCache } from './translationCache';

interface DebugInfo {
  key: string;
  language: SupportedLanguage;
  value: string | null;
  timestamp: number;
  source: 'cache' | 'loader' | 'fallback';
  performance: {
    loadTime: number;
    cacheHit: boolean;
  };
  context: {
    interpolation?: Record<string, any>;
    fallbackLanguage?: SupportedLanguage;
    namespace?: string;
  };
}

export class TranslationDebug {
  private static instance: TranslationDebug;
  private debugLog: DebugInfo[] = [];
  private readonly maxLogSize: number = 1000;
  private isDebugMode: boolean = false;

  private constructor() {}

  static getInstance(): TranslationDebug {
    if (!TranslationDebug.instance) {
      TranslationDebug.instance = new TranslationDebug();
    }
    return TranslationDebug.instance;
  }

  enableDebug(): void {
    this.isDebugMode = true;
  }

  disableDebug(): void {
    this.isDebugMode = false;
    this.clearLog();
  }

  logTranslation(info: Omit<DebugInfo, 'timestamp'>): void {
    if (!this.isDebugMode) return;

    const debugInfo: DebugInfo = {
      ...info,
      timestamp: Date.now()
    };

    this.debugLog.unshift(debugInfo);
    if (this.debugLog.length > this.maxLogSize) {
      this.debugLog.pop();
    }

    if (this.isDebugMode) {
      console.debug('[Translation Debug]', debugInfo);
    }
  }

  getDebugLog(): DebugInfo[] {
    return [...this.debugLog];
  }

  clearLog(): void {
    this.debugLog = [];
  }

  getTranslationStats(): {
    totalTranslations: number;
    cacheHitRate: number;
    averageLoadTime: number;
    languageDistribution: Record<SupportedLanguage, number>;
    commonKeys: Array<{ key: string; count: number }>;
  } {
    const metrics = TranslationMetrics.getInstance();
    const cache = TranslationCache.getInstance();

    const languageCount: Record<SupportedLanguage, number> = {} as Record<SupportedLanguage, number>;
    const keyCount: Record<string, number> = {};
    let totalLoadTime = 0;
    let cacheHits = 0;

    this.debugLog.forEach(entry => {
      // Update language distribution
      languageCount[entry.language] = (languageCount[entry.language] || 0) + 1;

      // Update key frequency
      keyCount[entry.key] = (keyCount[entry.key] || 0) + 1;

      // Update performance metrics
      totalLoadTime += entry.performance.loadTime;
      if (entry.performance.cacheHit) cacheHits++;
    });

    const sortedKeys = Object.entries(keyCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([key, count]) => ({ key, count }));

    return {
      totalTranslations: this.debugLog.length,
      cacheHitRate: this.debugLog.length ? cacheHits / this.debugLog.length : 0,
      averageLoadTime: this.debugLog.length ? totalLoadTime / this.debugLog.length : 0,
      languageDistribution: languageCount,
      commonKeys: sortedKeys
    };
  }

  getMissingTranslations(): Array<{
    key: string;
    language: SupportedLanguage;
    timestamp: number;
  }> {
    return this.debugLog
      .filter(entry => entry.value === null || entry.source === 'fallback')
      .map(({ key, language, timestamp }) => ({ key, language, timestamp }));
  }

  getSlowTranslations(threshold: number = 100): Array<{
    key: string;
    language: SupportedLanguage;
    loadTime: number;
  }> {
    return this.debugLog
      .filter(entry => entry.performance.loadTime > threshold)
      .map(({ key, language, performance }) => ({
        key,
        language,
        loadTime: performance.loadTime
      }));
  }

  exportDebugData(): string {
    const data = {
      log: this.debugLog,
      stats: this.getTranslationStats(),
      missingTranslations: this.getMissingTranslations(),
      slowTranslations: this.getSlowTranslations(),
      timestamp: new Date().toISOString()
    };

    return JSON.stringify(data, null, 2);
  }

  // For testing purposes
  reset(): void {
    this.debugLog = [];
    this.isDebugMode = false;
  }
}

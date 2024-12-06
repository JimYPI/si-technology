import { describe, it, expect, beforeEach, vi } from 'vitest';
import { TranslationDebug } from '../translationDebug';

describe('TranslationDebug', () => {
  let debug: TranslationDebug;
  const consoleSpy = vi.spyOn(console, 'debug').mockImplementation(() => {});

  beforeEach(() => {
    debug = TranslationDebug.getInstance();
    debug.reset();
  });

  afterEach(() => {
    consoleSpy.mockClear();
  });

  describe('debug mode', () => {
    it('should not log when debug mode is disabled', () => {
      debug.logTranslation({
        key: 'test.key',
        language: 'en',
        value: 'Test Value',
        source: 'cache',
        performance: { loadTime: 10, cacheHit: true },
        context: {}
      });

      expect(debug.getDebugLog()).toHaveLength(0);
      expect(consoleSpy).not.toHaveBeenCalled();
    });

    it('should log when debug mode is enabled', () => {
      debug.enableDebug();
      debug.logTranslation({
        key: 'test.key',
        language: 'en',
        value: 'Test Value',
        source: 'cache',
        performance: { loadTime: 10, cacheHit: true },
        context: {}
      });

      expect(debug.getDebugLog()).toHaveLength(1);
      expect(consoleSpy).toHaveBeenCalled();
    });
  });

  describe('log management', () => {
    beforeEach(() => {
      debug.enableDebug();
    });

    it('should maintain max log size', () => {
      const maxSize = 1000;
      for (let i = 0; i < maxSize + 10; i++) {
        debug.logTranslation({
          key: `test.key.${i}`,
          language: 'en',
          value: `Value ${i}`,
          source: 'cache',
          performance: { loadTime: 10, cacheHit: true },
          context: {}
        });
      }

      expect(debug.getDebugLog()).toHaveLength(maxSize);
    });

    it('should clear log', () => {
      debug.logTranslation({
        key: 'test.key',
        language: 'en',
        value: 'Test Value',
        source: 'cache',
        performance: { loadTime: 10, cacheHit: true },
        context: {}
      });

      debug.clearLog();
      expect(debug.getDebugLog()).toHaveLength(0);
    });
  });

  describe('statistics', () => {
    beforeEach(() => {
      debug.enableDebug();
      // Add some test data
      debug.logTranslation({
        key: 'test.key1',
        language: 'en',
        value: 'Value 1',
        source: 'cache',
        performance: { loadTime: 10, cacheHit: true },
        context: {}
      });
      debug.logTranslation({
        key: 'test.key2',
        language: 'fr',
        value: null,
        source: 'fallback',
        performance: { loadTime: 150, cacheHit: false },
        context: {}
      });
    });

    it('should calculate translation stats', () => {
      const stats = debug.getTranslationStats();
      
      expect(stats.totalTranslations).toBe(2);
      expect(stats.cacheHitRate).toBe(0.5);
      expect(stats.averageLoadTime).toBe(80);
      expect(stats.languageDistribution).toEqual({
        en: 1,
        fr: 1
      });
    });

    it('should identify missing translations', () => {
      const missing = debug.getMissingTranslations();
      expect(missing).toHaveLength(1);
      expect(missing[0].key).toBe('test.key2');
      expect(missing[0].language).toBe('fr');
    });

    it('should identify slow translations', () => {
      const slow = debug.getSlowTranslations(100);
      expect(slow).toHaveLength(1);
      expect(slow[0].key).toBe('test.key2');
      expect(slow[0].loadTime).toBe(150);
    });
  });

  describe('data export', () => {
    it('should export debug data in JSON format', () => {
      debug.enableDebug();
      debug.logTranslation({
        key: 'test.key',
        language: 'en',
        value: 'Test Value',
        source: 'cache',
        performance: { loadTime: 10, cacheHit: true },
        context: {}
      });

      const exported = debug.exportDebugData();
      const parsed = JSON.parse(exported);

      expect(parsed).toHaveProperty('log');
      expect(parsed).toHaveProperty('stats');
      expect(parsed).toHaveProperty('missingTranslations');
      expect(parsed).toHaveProperty('slowTranslations');
      expect(parsed).toHaveProperty('timestamp');
    });
  });

  describe('singleton pattern', () => {
    it('should maintain single instance', () => {
      const instance1 = TranslationDebug.getInstance();
      const instance2 = TranslationDebug.getInstance();
      expect(instance1).toBe(instance2);
    });
  });
});

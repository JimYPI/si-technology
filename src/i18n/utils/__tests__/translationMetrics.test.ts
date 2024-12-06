import { describe, it, expect, beforeEach } from 'vitest';
import { TranslationMetrics } from '../translationMetrics';

describe('TranslationMetrics', () => {
  let metrics: TranslationMetrics;

  beforeEach(() => {
    metrics = TranslationMetrics.getInstance();
    metrics.reset();
  });

  describe('singleton pattern', () => {
    it('should always return the same instance', () => {
      const instance1 = TranslationMetrics.getInstance();
      const instance2 = TranslationMetrics.getInstance();
      expect(instance1).toBe(instance2);
    });
  });

  describe('translation metrics', () => {
    beforeEach(() => {
      // Add some test metrics
      metrics.recordTranslation('test.key1', 'en', 100, true);
      metrics.recordTranslation('test.key2', 'fr', 150, true);
      metrics.recordTranslation('test.key3', 'en', 200, false, 'Error message');
    });

    it('should calculate average translation time', () => {
      expect(metrics.getAverageTranslationTime()).toBe(125); // (100 + 150) / 2
      expect(metrics.getAverageTranslationTime('en')).toBe(100);
      expect(metrics.getAverageTranslationTime('fr')).toBe(150);
    });

    it('should calculate error rate', () => {
      expect(metrics.getErrorRate()).toBe(1/3);
      expect(metrics.getErrorRate('en')).toBe(0.5);
      expect(metrics.getErrorRate('fr')).toBe(0);
    });

    it('should track most frequent errors', () => {
      const errors = metrics.getMostFrequentErrors();
      expect(errors).toHaveLength(1);
      expect(errors[0]).toEqual({
        key: 'test.key3',
        count: 1
      });
    });
  });

  describe('cache metrics', () => {
    beforeEach(() => {
      metrics.recordCacheHit();
      metrics.recordCacheHit();
      metrics.recordCacheMiss();
      metrics.updateCacheSize(100);
    });

    it('should calculate cache efficiency', () => {
      expect(metrics.getCacheEfficiency()).toBe(2/3);
    });

    it('should track cache size', () => {
      const summary = metrics.getMetricsSummary();
      expect(summary.cacheSize).toBe(100);
    });
  });

  describe('metrics summary', () => {
    beforeEach(() => {
      metrics.recordTranslation('test.key1', 'en', 100, true);
      metrics.recordTranslation('test.key2', 'fr', 150, true);
      metrics.recordTranslation('test.key3', 'en', 200, false, 'Error 1');
      metrics.recordCacheHit();
      metrics.recordCacheMiss();
      metrics.updateCacheSize(100);
    });

    it('should provide comprehensive metrics summary', () => {
      const summary = metrics.getMetricsSummary();
      
      expect(summary).toEqual({
        totalTranslations: 3,
        averageTime: 125,
        errorRate: 1/3,
        cacheEfficiency: 0.5,
        cacheSize: 100,
        mostFrequentErrors: [{
          key: 'test.key3',
          count: 1
        }]
      });
    });
  });

  describe('metrics pruning', () => {
    it('should prune old metrics', () => {
      const now = Date.now();
      const dayInMs = 24 * 60 * 60 * 1000;
      
      // Mock Date.now
      const originalNow = Date.now;
      Date.now = () => now;
      
      // Add old and new metrics
      metrics.recordTranslation('old.key', 'en', 100, true);
      
      // Move time forward
      Date.now = () => now + dayInMs + 1000;
      
      metrics.recordTranslation('new.key', 'en', 100, true);
      
      // Check metrics
      const summary = metrics.getMetricsSummary();
      expect(summary.totalTranslations).toBe(1);
      
      // Restore Date.now
      Date.now = originalNow;
    });
  });
});

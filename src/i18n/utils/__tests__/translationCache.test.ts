import { describe, it, expect, beforeEach, vi } from 'vitest';
import { TranslationCache } from '../translationCache';

describe('TranslationCache', () => {
  let cache: TranslationCache;

  beforeEach(() => {
    cache = TranslationCache.getInstance();
    cache.reset();
  });

  describe('singleton pattern', () => {
    it('should always return the same instance', () => {
      const instance1 = TranslationCache.getInstance();
      const instance2 = TranslationCache.getInstance();
      expect(instance1).toBe(instance2);
    });
  });

  describe('basic cache operations', () => {
    it('should store and retrieve values', () => {
      cache.set('test.key', 'en', 'Test Value');
      expect(cache.get('test.key', 'en')).toBe('Test Value');
    });

    it('should return null for non-existent keys', () => {
      expect(cache.get('nonexistent.key', 'en')).toBeNull();
    });

    it('should handle different languages separately', () => {
      cache.set('test.key', 'en', 'English Value');
      cache.set('test.key', 'fr', 'French Value');

      expect(cache.get('test.key', 'en')).toBe('English Value');
      expect(cache.get('test.key', 'fr')).toBe('French Value');
    });
  });

  describe('cache expiration', () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it('should expire entries after TTL', () => {
      const ttl = 1000; // 1 second
      cache.set('test.key', 'en', 'Test Value', ttl);

      expect(cache.get('test.key', 'en')).toBe('Test Value');

      vi.advanceTimersByTime(ttl + 1);
      expect(cache.get('test.key', 'en')).toBeNull();
    });

    it('should use default TTL when not specified', () => {
      cache.set('test.key', 'en', 'Test Value');
      expect(cache.get('test.key', 'en')).toBe('Test Value');

      vi.advanceTimersByTime(3600000 + 1); // Default TTL (1 hour) + 1ms
      expect(cache.get('test.key', 'en')).toBeNull();
    });
  });

  describe('cache eviction', () => {
    it('should evict oldest entry when cache is full', () => {
      // Create cache with small max size
      const smallCache = new (TranslationCache as any)(2); // Access private constructor for testing

      smallCache.set('key1', 'en', 'Value 1');
      smallCache.set('key2', 'en', 'Value 2');
      smallCache.set('key3', 'en', 'Value 3');

      expect(smallCache.get('key1', 'en')).toBeNull(); // Oldest entry should be evicted
      expect(smallCache.get('key2', 'en')).toBe('Value 2');
      expect(smallCache.get('key3', 'en')).toBe('Value 3');
    });
  });

  describe('cache clearing', () => {
    beforeEach(() => {
      cache.set('key1', 'en', 'English 1');
      cache.set('key2', 'en', 'English 2');
      cache.set('key1', 'fr', 'French 1');
      cache.set('key2', 'fr', 'French 2');
    });

    it('should clear all entries', () => {
      cache.clear();
      expect(cache.get('key1', 'en')).toBeNull();
      expect(cache.get('key2', 'en')).toBeNull();
      expect(cache.get('key1', 'fr')).toBeNull();
      expect(cache.get('key2', 'fr')).toBeNull();
    });

    it('should clear entries for specific language', () => {
      cache.clear('en');
      expect(cache.get('key1', 'en')).toBeNull();
      expect(cache.get('key2', 'en')).toBeNull();
      expect(cache.get('key1', 'fr')).toBe('French 1');
      expect(cache.get('key2', 'fr')).toBe('French 2');
    });
  });

  describe('cache statistics', () => {
    beforeEach(() => {
      cache.set('key1', 'en', 'Value 1');
      cache.set('key2', 'en', 'Value 2');
      
      // Simulate some cache hits and misses
      cache.get('key1', 'en'); // hit
      cache.get('key2', 'en'); // hit
      cache.get('key3', 'en'); // miss
    });

    it('should track cache statistics', () => {
      const stats = cache.getStats();
      
      expect(stats.size).toBe(2);
      expect(stats.hitRate).toBe(2/3);
      expect(stats.averageAge).toBeGreaterThan(0);
      expect(stats.oldestEntry).toBeGreaterThan(0);
    });
  });
});

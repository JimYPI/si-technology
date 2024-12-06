import { describe, it, expect, beforeEach, vi } from 'vitest';
import { TranslationLoader } from '../translationLoader';

// Mock dynamic imports
vi.mock('../translations/support/en.json', () => ({
  default: { test: { key: 'English Value' } }
}));

vi.mock('../translations/support/fr.json', () => ({
  default: { test: { key: 'French Value' } }
}));

describe('TranslationLoader', () => {
  let loader: TranslationLoader;

  beforeEach(() => {
    loader = new TranslationLoader();
  });

  describe('loadTranslation', () => {
    it('should load translations for a given language and namespace', async () => {
      const translations = await loader.loadTranslation('en', 'support');
      expect(translations.test.key).toBe('English Value');
    });

    it('should cache loaded translations', async () => {
      await loader.loadTranslation('en', 'support');
      const cachedTranslations = await loader.loadTranslation('en', 'support');
      expect(cachedTranslations.test.key).toBe('English Value');
    });

    it('should handle multiple languages', async () => {
      const enTranslations = await loader.loadTranslation('en', 'support');
      const frTranslations = await loader.loadTranslation('fr', 'support');

      expect(enTranslations.test.key).toBe('English Value');
      expect(frTranslations.test.key).toBe('French Value');
    });

    it('should fallback to English if translation is missing', async () => {
      // Mock console.error to avoid noise in test output
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      
      // Try to load non-existent translation
      const translations = await loader.loadTranslation('ja', 'support');
      
      expect(translations.test.key).toBe('English Value');
      expect(consoleSpy).toHaveBeenCalled();
      
      consoleSpy.mockRestore();
    });
  });

  describe('clearCache', () => {
    beforeEach(async () => {
      await loader.loadTranslation('en', 'support');
      await loader.loadTranslation('fr', 'support');
    });

    it('should clear all cached translations when no parameters provided', () => {
      loader.clearCache();
      expect(loader['loadedTranslations'].size).toBe(0);
    });

    it('should clear cached translations for specific language', () => {
      loader.clearCache('en');
      expect(loader['loadedTranslations'].has('en:support')).toBe(false);
      expect(loader['loadedTranslations'].has('fr:support')).toBe(true);
    });

    it('should clear cached translations for specific namespace', () => {
      loader.clearCache(undefined, 'support');
      expect(loader['loadedTranslations'].size).toBe(0);
    });
  });

  describe('preloadTranslations', () => {
    it('should preload multiple translations', async () => {
      await loader.preloadTranslations(['en', 'fr'], ['support']);
      
      expect(loader['loadedTranslations'].has('en:support')).toBe(true);
      expect(loader['loadedTranslations'].has('fr:support')).toBe(true);
    });

    it('should handle errors during preloading', async () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      
      await loader.preloadTranslations(['en', 'ja'], ['support']);
      
      expect(loader['loadedTranslations'].has('en:support')).toBe(true);
      expect(consoleSpy).toHaveBeenCalled();
      
      consoleSpy.mockRestore();
    });
  });
});

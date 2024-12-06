import { describe, it, expect, beforeEach, vi } from 'vitest';
import translationService from '../translationService';
import supportTranslations from '../translations/support';

describe('Translation Service', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  describe('getTranslation', () => {
    it('should return correct translation for existing key', () => {
      const key = 'support.afterSales.troubleTicket.title';
      const result = translationService.getTranslation(key, 'en');
      expect(result).toBe(supportTranslations.en.support.afterSales.troubleTicket.title);
    });

    it('should return key if translation not found', () => {
      const key = 'nonexistent.key';
      const result = translationService.getTranslation(key, 'en');
      expect(result).toBe(key);
    });

    it('should handle nested translations', () => {
      const key = 'support.afterSales.troubleTicket.form.serialNumber';
      const result = translationService.getTranslation(key, 'en');
      expect(result).toBe(supportTranslations.en.support.afterSales.troubleTicket.form.serialNumber);
    });

    it('should fallback to English if translation missing in requested language', () => {
      const key = 'support.afterSales.troubleTicket.title';
      const result = translationService.getTranslation(key, 'nonexistent-language');
      expect(result).toBe(supportTranslations.en.support.afterSales.troubleTicket.title);
    });
  });

  describe('getCurrentLanguage', () => {
    it('should return default language if none set', () => {
      expect(translationService.getCurrentLanguage()).toBe('en');
    });

    it('should return language from localStorage if set', () => {
      localStorage.setItem('preferredLanguage', 'fr');
      expect(translationService.getCurrentLanguage()).toBe('fr');
    });

    it('should return browser language if available and no preference set', () => {
      Object.defineProperty(window.navigator, 'language', { value: 'fr-FR' });
      localStorage.clear();
      expect(translationService.getCurrentLanguage()).toBe('fr');
    });
  });

  describe('setLanguage', () => {
    it('should update localStorage with new language', () => {
      translationService.setLanguage('fr');
      expect(localStorage.getItem('preferredLanguage')).toBe('fr');
    });

    it('should emit language change event', () => {
      const listener = vi.fn();
      window.addEventListener('languagechange', listener);
      
      translationService.setLanguage('fr');
      
      expect(listener).toHaveBeenCalled();
      window.removeEventListener('languagechange', listener);
    });
  });

  describe('getSupportedLanguages', () => {
    it('should return list of supported languages', () => {
      const languages = translationService.getSupportedLanguages();
      expect(languages).toContainEqual({ code: 'en', name: 'English' });
      expect(languages).toContainEqual({ code: 'fr', name: 'French' });
    });
  });

  describe('interpolation', () => {
    it('should handle string interpolation', () => {
      const key = 'support.afterSales.troubleTicket.success';
      const result = translationService.getTranslation(key, 'en', { ticketId: '12345' });
      expect(result).toContain('12345');
    });

    it('should handle multiple interpolation values', () => {
      const key = 'support.training.onlineTraining.progress';
      const result = translationService.getTranslation(key, 'en', { 
        completed: 5,
        total: 10 
      });
      expect(result).toContain('5');
      expect(result).toContain('10');
    });
  });

  describe('error handling', () => {
    it('should handle undefined translation key gracefully', () => {
      const result = translationService.getTranslation(undefined as any, 'en');
      expect(result).toBe('');
    });

    it('should handle null interpolation values', () => {
      const key = 'support.afterSales.troubleTicket.success';
      const result = translationService.getTranslation(key, 'en', { ticketId: null });
      expect(result).not.toBeNull();
    });
  });
});

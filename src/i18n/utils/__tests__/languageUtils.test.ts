import { describe, it, expect, beforeEach } from 'vitest';
import {
  isValidLanguage,
  getLanguageFromLocale,
  getBrowserLanguage,
  getLanguageDirection,
  getFullLocale,
  formatDateTime,
  formatNumber,
  formatCurrency,
  DEFAULT_LANGUAGE,
  SUPPORTED_LANGUAGES,
  type SupportedLanguage
} from '../languageUtils';

describe('Language Utilities', () => {
  describe('isValidLanguage', () => {
    it('should return true for supported languages', () => {
      expect(isValidLanguage('en')).toBe(true);
      expect(isValidLanguage('fr')).toBe(true);
      expect(isValidLanguage('es')).toBe(true);
    });

    it('should return false for unsupported languages', () => {
      expect(isValidLanguage('xx')).toBe(false);
      expect(isValidLanguage('')).toBe(false);
    });
  });

  describe('getLanguageFromLocale', () => {
    it('should extract language code from locale', () => {
      expect(getLanguageFromLocale('en-US')).toBe('en');
      expect(getLanguageFromLocale('fr-FR')).toBe('fr');
    });

    it('should return default language for unsupported locales', () => {
      expect(getLanguageFromLocale('xx-XX')).toBe(DEFAULT_LANGUAGE);
    });

    it('should handle simple language codes', () => {
      expect(getLanguageFromLocale('en')).toBe('en');
      expect(getLanguageFromLocale('fr')).toBe('fr');
    });
  });

  describe('getBrowserLanguage', () => {
    beforeEach(() => {
      Object.defineProperty(window.navigator, 'language', {
        value: 'en-US',
        configurable: true
      });
    });

    it('should detect browser language', () => {
      expect(getBrowserLanguage()).toBe('en');
    });

    it('should fallback to default language if browser language not supported', () => {
      Object.defineProperty(window.navigator, 'language', {
        value: 'xx-XX'
      });
      expect(getBrowserLanguage()).toBe(DEFAULT_LANGUAGE);
    });
  });

  describe('getLanguageDirection', () => {
    it('should return correct text direction', () => {
      expect(getLanguageDirection('en')).toBe('ltr');
      expect(getLanguageDirection('fr')).toBe('ltr');
    });
  });

  describe('getFullLocale', () => {
    it('should return correct locale string', () => {
      expect(getFullLocale('en')).toBe('en-US');
      expect(getFullLocale('fr')).toBe('fr-FR');
    });
  });

  describe('formatDateTime', () => {
    const testDate = new Date('2023-01-01T12:00:00Z');

    it('should format date according to locale', () => {
      const enFormatted = formatDateTime(testDate, 'en');
      const frFormatted = formatDateTime(testDate, 'fr');
      expect(enFormatted).not.toBe(frFormatted);
    });

    it('should handle format options', () => {
      const formatted = formatDateTime(testDate, 'en', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      expect(formatted).toContain('2023');
      expect(formatted).toContain('January');
    });
  });

  describe('formatNumber', () => {
    it('should format numbers according to locale', () => {
      expect(formatNumber(1234.56, 'en')).toBe('1,234.56');
      expect(formatNumber(1234.56, 'fr')).toBe('1 234,56');
    });

    it('should handle format options', () => {
      const formatted = formatNumber(1234.56, 'en', {
        style: 'percent'
      });
      expect(formatted).toContain('%');
    });
  });

  describe('formatCurrency', () => {
    it('should format currency according to locale', () => {
      const enFormatted = formatCurrency(1234.56, 'en', 'USD');
      const frFormatted = formatCurrency(1234.56, 'fr', 'EUR');
      
      expect(enFormatted).toContain('$');
      expect(frFormatted).toContain('€');
    });

    it('should default to USD if no currency specified', () => {
      const formatted = formatCurrency(1234.56, 'en');
      expect(formatted).toContain('$');
    });

    it('should maintain two decimal places', () => {
      expect(formatCurrency(1234, 'en')).toContain('.00');
      expect(formatCurrency(1234.5, 'en')).toContain('.50');
      expect(formatCurrency(1234.56, 'en')).toContain('.56');
    });
  });
});

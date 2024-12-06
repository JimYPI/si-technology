import { describe, it, expect } from 'vitest';
import { validateTranslation, validateAllTranslations, generateTranslationReport } from '../translationValidator';

describe('Translation Validator', () => {
  describe('validateTranslation', () => {
    it('should validate a correct translation', () => {
      const result = validateTranslation(
        'greeting',
        'Hello {name}!',
        'Bonjour {name}!'
      );
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should detect missing translation', () => {
      const result = validateTranslation(
        'greeting',
        'Hello!',
        ''
      );
      expect(result.isValid).toBe(false);
      expect(result.errors).toContainEqual({
        key: 'greeting',
        type: 'missing',
        message: 'Translation is missing'
      });
    });

    it('should detect placeholder mismatches', () => {
      const result = validateTranslation(
        'welcome',
        'Welcome {name} to {site}!',
        'Bienvenue {name}!'
      );
      expect(result.isValid).toBe(false);
      expect(result.errors).toContainEqual({
        key: 'welcome',
        type: 'placeholder',
        message: 'Missing placeholder: {site}'
      });
    });

    it('should detect HTML tag mismatches', () => {
      const result = validateTranslation(
        'bold',
        'This is <b>bold</b> text',
        'Ceci est du texte'
      );
      expect(result.isValid).toBe(false);
      expect(result.errors).toContainEqual({
        key: 'bold',
        type: 'format',
        message: 'HTML tag count mismatch'
      });
    });

    it('should detect excessive length', () => {
      const result = validateTranslation(
        'short',
        'Hi!',
        'Bonjour et bienvenue sur notre plateforme magnifique!'
      );
      expect(result.isValid).toBe(false);
      expect(result.errors).toContainEqual({
        key: 'short',
        type: 'length',
        message: 'Translation length is significantly longer than source text'
      });
    });
  });

  describe('validateAllTranslations', () => {
    it('should validate all translations in a nested structure', () => {
      const translations = {
        en: {
          common: {
            greeting: 'Hello {name}!',
            welcome: 'Welcome to {site}'
          }
        },
        fr: {
          common: {
            greeting: 'Bonjour {name}!',
            welcome: 'Bienvenue sur {site}'
          }
        }
      };

      const errors = validateAllTranslations(translations);
      expect(errors).toHaveLength(0);
    });

    it('should detect errors in nested translations', () => {
      const translations = {
        en: {
          common: {
            greeting: 'Hello {name}!',
            welcome: 'Welcome to {site}'
          }
        },
        fr: {
          common: {
            greeting: 'Bonjour!', // Missing placeholder
            welcome: '' // Missing translation
          }
        }
      };

      const errors = validateAllTranslations(translations);
      expect(errors.length).toBeGreaterThan(0);
      expect(errors).toContainEqual(expect.objectContaining({
        type: 'placeholder'
      }));
      expect(errors).toContainEqual(expect.objectContaining({
        type: 'missing'
      }));
    });
  });

  describe('generateTranslationReport', () => {
    it('should generate a report with error counts', () => {
      const errors = [
        {
          key: 'greeting',
          type: 'missing',
          message: 'Translation is missing'
        },
        {
          key: 'welcome',
          type: 'placeholder',
          message: 'Missing placeholder: {name}'
        },
        {
          key: 'goodbye',
          type: 'missing',
          message: 'Translation is missing'
        }
      ];

      const report = generateTranslationReport(errors);
      expect(report.totalErrors).toBe(3);
      expect(report.byType.missing).toBe(2);
      expect(report.byType.placeholder).toBe(1);
      expect(report.details).toEqual(errors);
    });

    it('should handle empty error list', () => {
      const report = generateTranslationReport([]);
      expect(report.totalErrors).toBe(0);
      expect(report.byType.missing).toBe(0);
      expect(report.byType.format).toBe(0);
      expect(report.byType.placeholder).toBe(0);
      expect(report.byType.length).toBe(0);
      expect(report.details).toEqual([]);
    });
  });
});

import { describe, it, expect, beforeEach } from 'vitest';
import { exportTranslations, importTranslations, exportToExcel, importFromExcel } from '../translationIO';
import { SupportedLanguage } from '../../services/translationService';

describe('Translation IO', () => {
  const mockTranslations = {
    en: {
      common: {
        welcome: 'Welcome',
        goodbye: 'Goodbye',
      },
      menu: {
        home: 'Home',
        about: 'About',
      },
    },
    fr: {
      common: {
        welcome: 'Bienvenue',
        goodbye: 'Au revoir',
      },
      menu: {
        home: 'Accueil',
        about: 'À propos',
      },
    },
  };

  describe('exportTranslations', () => {
    it('should export translations to JSON string', () => {
      const result = exportTranslations(mockTranslations);
      const parsed = JSON.parse(result);

      expect(parsed).toEqual(mockTranslations);
      expect(parsed.en.common.welcome).toBe('Welcome');
      expect(parsed.fr.common.welcome).toBe('Bienvenue');
    });

    it('should handle empty translations', () => {
      const result = exportTranslations({});
      expect(result).toBe('{}');
    });

    it('should throw error for invalid input', () => {
      const circularRef: any = {};
      circularRef.self = circularRef;

      expect(() => exportTranslations(circularRef)).toThrow();
    });
  });

  describe('importTranslations', () => {
    it('should import valid JSON translations', async () => {
      const json = JSON.stringify(mockTranslations);
      const result = await importTranslations(json);

      expect(result.success).toBe(true);
      expect(result.translations).toEqual(mockTranslations);
    });

    it('should reject invalid JSON', async () => {
      const result = await importTranslations('invalid json');

      expect(result.success).toBe(false);
      expect(result.errors).toContain('Invalid JSON format');
    });

    it('should validate imported translations', async () => {
      const invalidTranslations = {
        en: {
          test: 'Hello {name}',
        },
        fr: {
          test: 'Bonjour', // Missing placeholder
        },
      };

      const result = await importTranslations(JSON.stringify(invalidTranslations));

      expect(result.success).toBe(false);
      expect(result.errors).toBeDefined();
      expect(result.errors![0]).toContain('placeholder');
    });
  });

  describe('exportToExcel', () => {
    it('should export translations to CSV format', () => {
      const blob = exportToExcel(mockTranslations);
      const reader = new FileReader();

      return new Promise((resolve) => {
        reader.onload = () => {
          const csv = reader.result as string;
          const lines = csv.split('\n');

          // Check header
          expect(lines[0]).toContain('Key,en,fr');

          // Check content
          expect(lines).toContainEqual(expect.stringContaining('common.welcome,"Welcome","Bienvenue"'));
          expect(lines).toContainEqual(expect.stringContaining('menu.home,"Home","Accueil"'));

          resolve(true);
        };

        reader.readAsText(blob);
      });
    });

    it('should handle nested translations', () => {
      const nestedTranslations = {
        en: {
          deeply: {
            nested: {
              key: 'Deep value',
            },
          },
        },
        fr: {
          deeply: {
            nested: {
              key: 'Valeur profonde',
            },
          },
        },
      };

      const blob = exportToExcel(nestedTranslations);
      const reader = new FileReader();

      return new Promise((resolve) => {
        reader.onload = () => {
          const csv = reader.result as string;
          expect(csv).toContain('deeply.nested.key,"Deep value","Valeur profonde"');
          resolve(true);
        };

        reader.readAsText(blob);
      });
    });
  });

  describe('importFromExcel', () => {
    it('should import valid CSV file', async () => {
      const csvContent = `Key,en,fr
common.welcome,Welcome,Bienvenue
common.goodbye,Goodbye,Au revoir`;

      const file = new File([csvContent], 'translations.csv', { type: 'text/csv' });
      const result = await importFromExcel(file);

      expect(result.success).toBe(true);
      expect(result.translations).toBeDefined();
      if (result.translations) {
        expect(result.translations.en.common.welcome).toBe('Welcome');
        expect(result.translations.fr.common.goodbye).toBe('Au revoir');
      }
    });

    it('should handle malformed CSV', async () => {
      const invalidCsv = `Invalid,CSV,Content
no,proper,structure`;

      const file = new File([invalidCsv], 'invalid.csv', { type: 'text/csv' });
      const result = await importFromExcel(file);

      expect(result.success).toBe(false);
      expect(result.errors).toBeDefined();
    });

    it('should validate imported translations', async () => {
      const csvContent = `Key,en,fr
test.placeholder,Hello {name},Bonjour`;

      const file = new File([csvContent], 'translations.csv', { type: 'text/csv' });
      const result = await importFromExcel(file);

      expect(result.success).toBe(false);
      expect(result.errors).toBeDefined();
      expect(result.errors![0]).toContain('placeholder');
    });

    it('should handle empty file', async () => {
      const file = new File([''], 'empty.csv', { type: 'text/csv' });
      const result = await importFromExcel(file);

      expect(result.success).toBe(false);
      expect(result.errors).toBeDefined();
    });
  });
});

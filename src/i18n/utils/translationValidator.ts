import { SupportedLanguage } from '../types';

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

export class TranslationValidator {
  private supportedLanguages: SupportedLanguage[] = ['en', 'fr', 'es', 'de', 'it', 'ja', 'ko', 'zh'];

  validate(translations: Record<SupportedLanguage, Record<string, any>>): ValidationResult {
    const result: ValidationResult = {
      isValid: true,
      errors: [],
      warnings: []
    };

    // Check if all supported languages are present
    this.supportedLanguages.forEach(lang => {
      if (!translations[lang]) {
        result.isValid = false;
        result.errors.push(`Missing language: ${lang}`);
      }
    });

    // Early return if missing languages
    if (!result.isValid) {
      return result;
    }

    // Check structure consistency
    const baseLanguage = translations['en'];
    this.supportedLanguages.forEach(lang => {
      if (lang === 'en') return;
      
      this.compareStructures('', baseLanguage, translations[lang], result);
    });

    // Check for duplicates within each language
    this.supportedLanguages.forEach(lang => {
      this.checkDuplicates(translations[lang], lang, result);
    });

    // Check placeholder consistency
    this.supportedLanguages.forEach(lang => {
      if (lang === 'en') return;
      
      this.checkPlaceholders(translations['en'], translations[lang], result);
    });

    return result;
  }

  private compareStructures(
    path: string,
    base: Record<string, any>,
    compare: Record<string, any>,
    result: ValidationResult
  ): void {
    const baseKeys = Object.keys(base);
    const compareKeys = Object.keys(compare);

    // Check for missing keys
    baseKeys.forEach(key => {
      const currentPath = path ? `${path}.${key}` : key;
      if (!(key in compare)) {
        result.isValid = false;
        result.errors.push(`Missing key: ${currentPath}`);
        return;
      }

      if (typeof base[key] === 'object' && base[key] !== null) {
        this.compareStructures(currentPath, base[key], compare[key], result);
      }
    });

    // Check for extra keys
    compareKeys.forEach(key => {
      const currentPath = path ? `${path}.${key}` : key;
      if (!(key in base)) {
        result.isValid = false;
        result.errors.push(`Extra key: ${currentPath}`);
      }
    });
  }

  private checkDuplicates(
    translations: Record<string, any>,
    language: string,
    result: ValidationResult,
    path: string = ''
  ): void {
    const values = new Map<string, string[]>();

    const traverse = (obj: Record<string, any>, currentPath: string) => {
      Object.entries(obj).forEach(([key, value]) => {
        const fullPath = currentPath ? `${currentPath}.${key}` : key;
        
        if (typeof value === 'string') {
          const paths = values.get(value) || [];
          paths.push(fullPath);
          values.set(value, paths);
        } else if (typeof value === 'object' && value !== null) {
          traverse(value, fullPath);
        }
      });
    };

    traverse(translations, '');

    values.forEach((paths, value) => {
      if (paths.length > 1) {
        result.warnings.push(
          `Possible duplicate translation in ${language}: ${paths.join(' and ')} have the same value`
        );
      }
    });
  }

  private checkPlaceholders(
    base: Record<string, any>,
    compare: Record<string, any>,
    result: ValidationResult,
    path: string = ''
  ): void {
    const extractPlaceholders = (str: string): string[] => {
      const matches = str.match(/\{([^}]+)\}/g) || [];
      return matches.map(m => m.slice(1, -1));
    };

    const traverse = (baseObj: Record<string, any>, compareObj: Record<string, any>, currentPath: string) => {
      Object.entries(baseObj).forEach(([key, value]) => {
        const fullPath = currentPath ? `${currentPath}.${key}` : key;
        
        if (typeof value === 'string' && typeof compareObj[key] === 'string') {
          const basePlaceholders = extractPlaceholders(value);
          const comparePlaceholders = extractPlaceholders(compareObj[key]);

          // Check for missing placeholders
          basePlaceholders.forEach(placeholder => {
            if (!comparePlaceholders.includes(placeholder)) {
              result.warnings.push(
                `Missing placeholder: ${placeholder} in ${fullPath}`
              );
            }
          });

          // Check for extra placeholders
          comparePlaceholders.forEach(placeholder => {
            if (!basePlaceholders.includes(placeholder)) {
              result.warnings.push(
                `Extra placeholder: ${placeholder} in ${fullPath}`
              );
            }
          });
        } else if (typeof value === 'object' && value !== null && typeof compareObj[key] === 'object') {
          traverse(value, compareObj[key], fullPath);
        }
      });
    };

    traverse(base, compare, '');
  }
}

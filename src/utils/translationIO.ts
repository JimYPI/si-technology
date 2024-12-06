import { Translations, TranslationSet } from '../i18n/types';
import { SupportedLanguage } from '../services/translationService';
import { validateAllTranslations, ValidationError } from './translationValidator';

interface ImportResult {
  success: boolean;
  translations?: Translations;
  errors?: string[];
}

export const exportTranslations = (translations: Translations): string => {
  try {
    return JSON.stringify(translations, null, 2);
  } catch (error) {
    throw new Error('Failed to export translations');
  }
};

export const importTranslations = async (content: string): Promise<ImportResult> => {
  try {
    const parsed = JSON.parse(content) as Translations;
    const validationResult = validateAllTranslations(parsed);

    if (validationResult.errors.length > 0) {
      return {
        success: false,
        errors: validationResult.errors.map((error: ValidationError) => 
          `${error.key}: ${error.message}`
        ),
      };
    }

    return {
      success: true,
      translations: parsed,
    };
  } catch (error) {
    return {
      success: false,
      errors: ['Invalid JSON format'],
    };
  }
};

export const exportToExcel = (translations: Translations): Blob => {
  const rows: string[][] = [];
  const languages = Object.keys(translations) as SupportedLanguage[];
  
  // Add header row
  rows.push(['Key', ...languages]);

  const processTranslationSet = (
    set: TranslationSet,
    prefix: string = ''
  ) => {
    Object.entries(set).forEach(([key, value]) => {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      
      if (typeof value === 'string') {
        const row = [fullKey];
        languages.forEach(lang => {
          const langSet = translations[lang] as TranslationSet;
          const value = getNestedValue(langSet, fullKey);
          row.push(value || '');
        });
        rows.push(row);
      } else {
        processTranslationSet(value as TranslationSet, fullKey);
      }
    });
  };

  processTranslationSet(translations[languages[0]] as TranslationSet);

  // Convert to CSV
  const csv = rows
    .map(row => row.map(cell => `"${cell.replace(/"/g, '""')}"`).join(','))
    .join('\n');

  return new Blob([csv], { type: 'text/csv;charset=utf-8;' });
};

export const importFromExcel = async (file: File): Promise<ImportResult> => {
  try {
    const content = await file.text();
    const rows = content.split('\n').map(row => {
      return row
        .split(',')
        .map(cell => cell.trim().replace(/^"|"$/g, '').replace(/""/g, '"'));
    });

    const [header, ...dataRows] = rows;
    const languages = header.slice(1) as SupportedLanguage[];
    const translations: Translations = {};

    languages.forEach(lang => {
      translations[lang] = {};
    });

    dataRows.forEach(row => {
      const [key, ...values] = row;
      languages.forEach((lang, index) => {
        setNestedValue(translations[lang] as TranslationSet, key, values[index]);
      });
    });

    const validationResult = validateAllTranslations(translations);
    if (validationResult.errors.length > 0) {
      return {
        success: false,
        errors: validationResult.errors.map((error: ValidationError) => 
          `${error.key}: ${error.message}`
        ),
      };
    }

    return {
      success: true,
      translations,
    };
  } catch (error) {
    return {
      success: false,
      errors: ['Failed to parse Excel file'],
    };
  }
};

// Helper functions
const getNestedValue = (obj: any, path: string): string => {
  return path.split('.').reduce((current, key) => current?.[key], obj) || '';
};

const setNestedValue = (obj: any, path: string, value: string): void => {
  const keys = path.split('.');
  const lastKey = keys.pop()!;
  const target = keys.reduce((current, key) => {
    current[key] = current[key] || {};
    return current[key];
  }, obj);
  target[lastKey] = value;
};

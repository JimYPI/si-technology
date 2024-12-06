import { Language, TranslationSet } from './types';
import * as commonTranslations from './translations/common';
import * as productTranslations from './translations/products';
import * as supportTranslations from './translations/support';
import * as homeTranslations from './translations/home';

export type SupportedLanguage = 'en' | 'fr' | 'es' | 'de' | 'it' | 'ja' | 'ko' | 'zh';

class TranslationService {
  private translations: Record<string, Record<Language, TranslationSet>> = {
    common: commonTranslations.default as Record<Language, TranslationSet>,
    products: productTranslations.default as Record<Language, TranslationSet>,
    support: supportTranslations.default as Record<Language, TranslationSet>,
    home: homeTranslations.default as Record<Language, TranslationSet>,
  };

  private getNestedValue(obj: TranslationSet, path: string[]): string | undefined {
    if (path.length === 0) {
      return typeof obj === 'string' ? obj : undefined;
    }

    const [first, ...rest] = path;
    const next = obj[first];
    
    if (!next) {
      return undefined;
    }

    if (typeof next === 'string') {
      return rest.length === 0 ? next : undefined;
    }

    return this.getNestedValue(next, rest);
  }

  public getTranslation(
    key: string,
    language: Language = 'en',
    interpolationValues?: Record<string, any>
  ): string {
    const [namespace, ...path] = key.split('.');
    const translations = this.translations[namespace];
    
    if (!translations) {
      console.warn(`Translation namespace '${namespace}' not found`);
      return key;
    }

    const languageTranslations = translations[language];
    if (!languageTranslations) {
      console.warn(`Translations for language '${language}' not found in namespace '${namespace}'`);
      return key;
    }

    const value = this.getNestedValue(languageTranslations, path);
    if (!value) {
      console.warn(`Translation key '${key}' not found for language '${language}'`);
      return key;
    }

    if (!interpolationValues) {
      return value;
    }

    return Object.entries(interpolationValues).reduce(
      (text, [key, value]) => text.replace(new RegExp(`{{${key}}}`, 'g'), String(value)),
      value
    );
  }

  public getSupportedLanguages(): Language[] {
    return ['en', 'fr', 'es', 'de', 'it', 'ja', 'ko', 'zh'];
  }

  public isLanguageSupported(language: string): language is Language {
    return this.getSupportedLanguages().includes(language as Language);
  }
}

const translationService = new TranslationService();
export default translationService;

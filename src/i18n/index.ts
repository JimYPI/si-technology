import commonTranslations from './translations/common';
import productTranslations from './translations/products';
import supportTranslations from './translations/support';
import homeTranslations from './translations/home';
import { SupportedLanguage } from './types';

export type Language = SupportedLanguage;

type TranslationNamespace = {
  common: typeof commonTranslations;
  products: typeof productTranslations;
  support: typeof supportTranslations;
  home: typeof homeTranslations;
};

export const translations: TranslationNamespace = {
  common: commonTranslations,
  products: productTranslations,
  support: supportTranslations,
  home: homeTranslations,
};

type TranslationKey = string;
type InterpolationValues = Record<string, string | number>;

function getNestedValue(obj: any, path: string[]): string | undefined {
  return path.reduce((acc, key) => (acc && typeof acc === 'object' ? acc[key] : undefined), obj);
}

export function getTranslation(
  lang: Language,
  key: TranslationKey,
  interpolation?: InterpolationValues
): string {
  const [namespace, ...path] = key.split('.');
  const translationSet = translations[namespace as keyof TranslationNamespace];
  
  if (!translationSet) {
    console.warn(`Translation namespace "${namespace}" not found for language "${lang}"`);
    return key;
  }

  const translation = getNestedValue(translationSet[lang], path);
  
  if (typeof translation !== 'string') {
    console.warn(`Translation key "${key}" not found for language "${lang}"`);
    return key;
  }

  if (!interpolation) {
    return translation;
  }

  return Object.entries(interpolation).reduce(
    (text, [key, value]) => text.replace(new RegExp(`{{${key}}}`, 'g'), String(value)),
    translation
  );
}

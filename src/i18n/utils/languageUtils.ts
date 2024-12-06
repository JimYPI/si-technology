export type SupportedLanguage = 'en' | 'fr' | 'es' | 'de' | 'it' | 'ja' | 'ko' | 'zh';

export const SUPPORTED_LANGUAGES = {
  en: { code: 'en', name: 'English', region: 'US' },
  fr: { code: 'fr', name: 'French', region: 'FR' },
  es: { code: 'es', name: 'Spanish', region: 'ES' },
  de: { code: 'de', name: 'German', region: 'DE' },
  it: { code: 'it', name: 'Italian', region: 'IT' },
  ja: { code: 'ja', name: 'Japanese', region: 'JP' },
  ko: { code: 'ko', name: 'Korean', region: 'KR' },
  zh: { code: 'zh', name: 'Chinese', region: 'CN' }
} as const;

export const DEFAULT_LANGUAGE: SupportedLanguage = 'en';

export const isValidLanguage = (lang: string): lang is SupportedLanguage => {
  return Object.keys(SUPPORTED_LANGUAGES).includes(lang);
};

export const getLanguageFromLocale = (locale: string): SupportedLanguage => {
  const langCode = locale.split('-')[0].toLowerCase();
  return isValidLanguage(langCode) ? langCode : DEFAULT_LANGUAGE;
};

export const getBrowserLanguage = (): SupportedLanguage => {
  const browserLang = navigator.language || (navigator as any).userLanguage;
  return getLanguageFromLocale(browserLang);
};

export const getLanguageDirection = (lang: SupportedLanguage): 'ltr' | 'rtl' => {
  // Add RTL languages here if needed in the future
  const rtlLanguages: SupportedLanguage[] = [];
  return rtlLanguages.includes(lang) ? 'rtl' : 'ltr';
};

export const getFullLocale = (lang: SupportedLanguage): string => {
  const { region } = SUPPORTED_LANGUAGES[lang];
  return `${lang}-${region}`;
};

export const formatDateTime = (
  date: Date | number,
  lang: SupportedLanguage,
  options?: Intl.DateTimeFormatOptions
): string => {
  const locale = getFullLocale(lang);
  return new Intl.DateTimeFormat(locale, options).format(date);
};

export const formatNumber = (
  number: number,
  lang: SupportedLanguage,
  options?: Intl.NumberFormatOptions
): string => {
  const locale = getFullLocale(lang);
  return new Intl.NumberFormat(locale, options).format(number);
};

export const formatCurrency = (
  amount: number,
  lang: SupportedLanguage,
  currency: string = 'USD'
): string => {
  return formatNumber(amount, lang, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

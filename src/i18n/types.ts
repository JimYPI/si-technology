import { SupportedLanguage } from './translationService';

export type Language = SupportedLanguage;
export type { SupportedLanguage };

export type TranslationKey = string;

export interface TranslationSet {
  [key: string]: string | TranslationSet;
}

export type TranslationsType = {
  [K in Language]: TranslationSet;
};

export type Translations = {
  [K in Language]?: TranslationSet;
};

export interface TranslationNamespace {
  [key: string]: Translations;
}

export interface TranslationState {
  currentLanguage: Language;
  fallbackLanguage: Language;
  translations: TranslationNamespace;
}

export interface TranslationOptions {
  namespace?: string;
  defaultValue?: string;
  interpolation?: Record<string, string | number>;
}

export interface TranslationContext {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, options?: TranslationOptions) => string;
  isLoading: boolean;
}

export interface TranslationSchema {
  nav: {
    home: string;
    products: string;
    support: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    title2: string;
    subtitle2: string;
    description2: string;
    cta2: string;
    title3: string;
    subtitle3: string;
    description3: string;
    cta3: string;
  };
  stats: {
    globalInstallations: string;
    countriesServed: string;
    satisfiedClients: string;
  };
  features: {
    advancedSecurity: string;
    advancedSecurityDescription: string;
    supportFeature: string;
    supportDescription: string;
    easyIntegration: string;
    easyIntegrationDescription: string;
  };
  whyChooseUs: string;
  readyToTransform: string;
  joinThousands: string;
  contactUs: string;
}

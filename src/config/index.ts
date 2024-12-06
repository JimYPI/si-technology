import { SupportedLanguage } from '../services/translationService';

interface Config {
  app: {
    name: string;
    version: string;
  };
  i18n: {
    defaultLanguage: SupportedLanguage;
    fallbackLanguage: SupportedLanguage;
    translationApi: {
      key: string;
      region: string;
      endpoint: string;
    };
    cache: {
      duration: number;
    };
  };
}

const config: Config = {
  app: {
    name: process.env.REACT_APP_NAME || 'SI Technology',
    version: process.env.REACT_APP_VERSION || '1.0.0',
  },
  i18n: {
    defaultLanguage: (process.env.REACT_APP_DEFAULT_LANGUAGE as SupportedLanguage) || 'en',
    fallbackLanguage: (process.env.REACT_APP_FALLBACK_LANGUAGE as SupportedLanguage) || 'en',
    translationApi: {
      key: process.env.REACT_APP_TRANSLATION_API_KEY || '',
      region: process.env.REACT_APP_TRANSLATION_API_REGION || '',
      endpoint: process.env.REACT_APP_TRANSLATION_API_ENDPOINT || 'https://api.cognitive.microsofttranslator.com/',
    },
    cache: {
      duration: parseInt(process.env.REACT_APP_TRANSLATION_CACHE_DURATION || '3600000', 10),
    },
  },
};

export default config;

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { Language, getTranslation } from '../i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, interpolation?: Record<string, any>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
  defaultLanguage?: Language;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ 
  children, 
  defaultLanguage 
}) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as Language | null;
    const browserLanguage = navigator.language.split('-')[0] as Language;
    return defaultLanguage || savedLanguage || (browserLanguage === 'fr' ? 'fr' : 'en');
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferred-language', lang);
    document.documentElement.lang = lang;
    document.title = getTranslation(language, 'common.siteTitle', {});
  }, [language]);

  const t = useCallback((key: string, interpolation?: Record<string, any>): string => {
    return getTranslation(language, key, interpolation);
  }, [language]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = getTranslation(language, 'common.siteTitle', {});
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

import React, { createContext, useContext, useState, useCallback } from 'react';
import { Language } from './types';
import { getTranslation } from './utils/translationUtils';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, interpolation?: Record<string, any>) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as Language | null;
    const browserLanguage = navigator.language.split('-')[0];
    return (savedLanguage || (browserLanguage === 'fr' ? 'fr' : 'en')) as Language;
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferred-language', lang);
    document.documentElement.lang = lang;
  }, []);

  const t = useCallback((key: string, interpolation?: Record<string, any>): string => {
    return getTranslation(language, key, interpolation);
  }, [language]);

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationProvider;

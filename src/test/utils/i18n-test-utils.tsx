import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { LanguageProvider } from '../../contexts/LanguageContext';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../theme';
import { Language } from '../../i18n';

type TranslationKey = keyof typeof mockTranslations.en;

// Custom render function that wraps components with necessary providers
const customRender = (
  ui: React.ReactElement,
  {
    initialLanguage = 'en',
    ...renderOptions
  }: RenderOptions & { initialLanguage?: Language } = {}
) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <ThemeProvider theme={theme}>
        <LanguageProvider defaultLanguage={initialLanguage}>
          {children}
        </LanguageProvider>
      </ThemeProvider>
    );
  };

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

// Mock translation function
const mockTranslate = (key: string, options?: Record<string, any>) => {
  // Simple mock implementation that returns the key
  if (options?.returnObjects) {
    return {
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced',
      certification: 'Certification',
    };
  }
  return key;
};

// Helper to simulate language change
const changeLanguage = async (newLanguage: Language) => {
  localStorage.setItem('preferredLanguage', newLanguage);
  // Simulate language change event
  window.dispatchEvent(new Event('languagechange'));
};

// Mock responses for different languages
const mockTranslations = {
  en: {
    'support.afterSales.troubleTicket.title': 'Submit Trouble Ticket',
    'support.afterSales.antiCounterfeit.title': 'Anti-Counterfeit Verification',
    'support.training.onlineTraining.title': 'Online Training Portal',
  },
  fr: {
    'support.afterSales.troubleTicket.title': 'Soumettre un Ticket',
    'support.afterSales.antiCounterfeit.title': 'Vérification Anti-Contrefaçon',
    'support.training.onlineTraining.title': 'Portail de Formation en Ligne',
  },
} as const;

// Helper to get mock translation
const getMockTranslation = (key: TranslationKey, language: keyof typeof mockTranslations) => {
  return mockTranslations[language]?.[key] || key;
};

// Mock language detection
const mockDetectLanguage = (): Language => {
  return navigator.language.split('-')[0] as Language;
};

export {
  customRender as render,
  mockTranslate,
  changeLanguage,
  mockTranslations,
  getMockTranslation,
  mockDetectLanguage,
};

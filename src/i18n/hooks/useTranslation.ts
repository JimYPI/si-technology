import { useCallback } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import translationService from '../translationService';

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = useCallback((
    key: string,
    interpolationValues?: Record<string, any>
  ) => {
    return translationService.getTranslation(key, language, interpolationValues) || key;
  }, [language]);

  const tArray = useCallback((
    key: string,
    count: number,
    interpolationValues?: Record<string, any>
  ) => {
    const translation = translationService.getTranslation(key, language, {
      ...interpolationValues,
      count,
    });
    if (!translation) return [key];
    return Array.isArray(translation) ? translation : [translation];
  }, [language]);

  const formatNumber = useCallback((
    number: number,
    options?: Intl.NumberFormatOptions
  ) => {
    return new Intl.NumberFormat(language, options).format(number);
  }, [language]);

  const formatDate = useCallback((
    date: Date | number,
    options?: Intl.DateTimeFormatOptions
  ) => {
    return new Intl.DateTimeFormat(language, options).format(date);
  }, [language]);

  return {
    t,
    tArray,
    formatNumber,
    formatDate,
    language,
  };
};

export type UseTranslation = ReturnType<typeof useTranslation>;

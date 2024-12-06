import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useTranslation } from '../hooks/useTranslation';
import { LanguageProvider } from '../../contexts/LanguageContext';
import { ReactNode } from 'react';

describe('useTranslation', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  const wrapper = ({ children, language = 'en' }: { children: ReactNode, language?: string }) => (
    <LanguageProvider initialLanguage={language}>{children}</LanguageProvider>
  );

  describe('t function', () => {
    it('should translate simple keys', () => {
      const { result } = renderHook(() => useTranslation(), { 
        wrapper: ({ children }) => wrapper({ children }) 
      });

      const translation = result.current.t('support.afterSales.troubleTicket.title');
      expect(translation).toBeTruthy();
    });

    it('should handle interpolation', () => {
      const { result } = renderHook(() => useTranslation(), { 
        wrapper: ({ children }) => wrapper({ children }) 
      });

      const translation = result.current.t('support.afterSales.troubleTicket.success', {
        ticketId: '12345'
      });
      expect(translation).toContain('12345');
    });
  });

  describe('tArray function', () => {
    it('should handle plural translations', () => {
      const { result } = renderHook(() => useTranslation(), { 
        wrapper: ({ children }) => wrapper({ children }) 
      });

      const translation = result.current.tArray('support.training.onlineTraining.courses', 2);
      expect(Array.isArray(translation)).toBe(true);
    });
  });

  describe('formatNumber', () => {
    it('should format numbers according to locale', () => {
      const { result } = renderHook(() => useTranslation(), { 
        wrapper: ({ children }) => wrapper({ children, language: 'fr' }) 
      });

      const formatted = result.current.formatNumber(1234.56);
      expect(formatted).toBe('1 234,56');
    });

    it('should handle number format options', () => {
      const { result } = renderHook(() => useTranslation(), { 
        wrapper: ({ children }) => wrapper({ children }) 
      });

      const formatted = result.current.formatNumber(1234.56, { 
        style: 'currency', 
        currency: 'USD' 
      });
      expect(formatted).toContain('$');
    });
  });

  describe('formatDate', () => {
    it('should format dates according to locale', () => {
      const { result } = renderHook(() => useTranslation(), { 
        wrapper: ({ children }) => wrapper({ children, language: 'fr' }) 
      });

      const date = new Date('2023-01-01');
      const formatted = result.current.formatDate(date);
      expect(formatted).toBeTruthy();
    });

    it('should handle date format options', () => {
      const { result } = renderHook(() => useTranslation(), { 
        wrapper: ({ children }) => wrapper({ children }) 
      });

      const date = new Date('2023-01-01');
      const formatted = result.current.formatDate(date, { 
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      expect(formatted).toContain('2023');
    });
  });
});

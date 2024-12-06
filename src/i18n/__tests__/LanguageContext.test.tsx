import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { LanguageProvider, useLanguage } from '../../contexts/LanguageContext';
import { ReactNode } from 'react';

describe('LanguageContext', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  const wrapper = ({ children }: { children: ReactNode }) => (
    <LanguageProvider initialLanguage="en">{children}</LanguageProvider>
  );

  it('should provide default language', () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });
    expect(result.current.language).toBe('en');
  });

  it('should change language', () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });
    
    act(() => {
      result.current.setLanguage('fr');
    });

    expect(result.current.language).toBe('fr');
    expect(localStorage.getItem('preferredLanguage')).toBe('fr');
  });

  it('should persist language preference', () => {
    localStorage.setItem('preferredLanguage', 'fr');
    const { result } = renderHook(() => useLanguage(), { wrapper });
    expect(result.current.language).toBe('fr');
  });

  it('should handle invalid language code', () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });
    
    act(() => {
      result.current.setLanguage('invalid-code');
    });

    expect(result.current.language).toBe('en'); // fallback to default
  });
});

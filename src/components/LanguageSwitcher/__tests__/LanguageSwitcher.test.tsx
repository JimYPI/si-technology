import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { LanguageProvider } from '../../../contexts/LanguageContext';
import translationService from '../../../i18n/translationService';

describe('LanguageSwitcher', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  const renderLanguageSwitcher = (initialLanguage = 'en') => {
    return render(
      <LanguageProvider initialLanguage={initialLanguage}>
        <LanguageSwitcher />
      </LanguageProvider>
    );
  };

  it('should render all supported languages', () => {
    renderLanguageSwitcher();
    const switcher = screen.getByTestId('language-switcher');
    fireEvent.mouseDown(switcher);

    const supportedLanguages = translationService.getSupportedLanguages();
    supportedLanguages.forEach(lang => {
      expect(screen.getByTestId(`language-option-${lang.code}`)).toBeInTheDocument();
    });
  });

  it('should display current language', () => {
    renderLanguageSwitcher('fr');
    const switcher = screen.getByTestId('language-switcher');
    expect(switcher).toHaveTextContent('French');
  });

  it('should change language when new option selected', () => {
    renderLanguageSwitcher();
    const switcher = screen.getByTestId('language-switcher');
    
    // Open dropdown
    fireEvent.mouseDown(switcher);
    
    // Select French
    const frenchOption = screen.getByTestId('language-option-fr');
    fireEvent.click(frenchOption);
    
    // Verify language changed
    expect(localStorage.getItem('preferredLanguage')).toBe('fr');
    expect(switcher).toHaveTextContent('French');
  });

  it('should persist language selection', () => {
    localStorage.setItem('preferredLanguage', 'fr');
    renderLanguageSwitcher();
    
    const switcher = screen.getByTestId('language-switcher');
    expect(switcher).toHaveTextContent('French');
  });
});

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LanguageSelector from '../LanguageSelector';
import { useLanguage } from '../../../contexts/LanguageContext';
import { translationService } from '../../../services/translationService';
import type { Mock } from 'vitest';

// Mock the language context
vi.mock('../../../contexts/LanguageContext');
// Mock the translation service
vi.mock('../../../services/translationService', () => ({
  translationService: {
    getSupportedLanguages: () => [
      { code: 'en', name: 'English' },
      { code: 'fr', name: 'French' },
      { code: 'es', name: 'Spanish' },
    ],
  },
}));

describe('LanguageSelector', () => {
  const mockSetLanguage = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useLanguage as Mock).mockReturnValue({
      language: 'en',
      setLanguage: mockSetLanguage,
    });
  });

  it('should render language selector button', () => {
    render(<LanguageSelector />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should open menu on button click', async () => {
    render(<LanguageSelector />);
    const button = screen.getByRole('button');
    
    await userEvent.click(button);
    
    const menu = screen.getByRole('menu');
    expect(menu).toBeInTheDocument();
    
    // Check if all languages are listed
    const languages = translationService.getSupportedLanguages();
    languages.forEach(lang => {
      expect(screen.getByText(lang.name)).toBeInTheDocument();
    });
  });

  it('should call setLanguage when selecting a language', async () => {
    render(<LanguageSelector />);
    const button = screen.getByRole('button');
    
    await userEvent.click(button);
    const frenchOption = screen.getByText('French');
    await userEvent.click(frenchOption);
    
    expect(mockSetLanguage).toHaveBeenCalledWith('fr');
  });

  it('should highlight current language', async () => {
    (useLanguage as Mock).mockReturnValue({
      language: 'fr',
      setLanguage: mockSetLanguage,
    });

    render(<LanguageSelector />);
    const button = screen.getByRole('button');
    await userEvent.click(button);
    
    const frenchOption = screen.getByText('French').closest('li');
    expect(frenchOption).toHaveAttribute('aria-selected', 'true');
  });

  it('should close menu when clicking outside', async () => {
    render(
      <div>
        <LanguageSelector />
        <div data-testid="outside">Outside</div>
      </div>
    );

    const button = screen.getByRole('button');
    await userEvent.click(button);
    
    const menu = screen.getByRole('menu');
    expect(menu).toBeInTheDocument();
    
    const outside = screen.getByTestId('outside');
    await userEvent.click(outside);
    
    await waitFor(() => {
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });
  });

  it('should handle keyboard navigation', async () => {
    render(<LanguageSelector />);
    const button = screen.getByRole('button');
    
    // Open menu with Enter key
    button.focus();
    fireEvent.keyDown(button, { key: 'Enter' });
    expect(screen.getByRole('menu')).toBeInTheDocument();
    
    // Navigate with arrow keys
    fireEvent.keyDown(screen.getByRole('menu'), { key: 'ArrowDown' });
    expect(document.activeElement?.textContent).toBe('English');
    
    fireEvent.keyDown(document.activeElement!, { key: 'ArrowDown' });
    expect(document.activeElement?.textContent).toBe('French');
    
    // Select with Enter key
    fireEvent.keyDown(document.activeElement!, { key: 'Enter' });
    expect(mockSetLanguage).toHaveBeenCalledWith('fr');
  });

  it('should show tooltip on hover', async () => {
    render(<LanguageSelector />);
    const button = screen.getByRole('button');
    
    // Hover over button
    fireEvent.mouseEnter(button);
    
    // Check if tooltip appears
    await waitFor(() => {
      expect(screen.getByText('Change language')).toBeInTheDocument();
    });
  });
});

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TranslationErrorBoundary } from '../TranslationErrorBoundary';
import { TranslationProvider } from '../../../i18n/TranslationProvider';

describe('TranslationErrorBoundary', () => {
  const defaultProps = {
    children: <div>Test Content</div>,
  };

  it('renders children when no error occurs', () => {
    render(
      <TranslationProvider>
        <TranslationErrorBoundary {...defaultProps}>
          <div>Test Content</div>
        </TranslationErrorBoundary>
      </TranslationProvider>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders fallback UI when translation error occurs', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
    const ThrowError = () => {
      throw new Error('Translation error');
    };

    render(
      <TranslationProvider>
        <TranslationErrorBoundary {...defaultProps}>
          <ThrowError />
        </TranslationErrorBoundary>
      </TranslationProvider>
    );

    expect(screen.getByText(/An error occurred/i)).toBeInTheDocument();
    consoleError.mockRestore();
  });
});

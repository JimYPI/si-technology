import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Alert, Box, Button } from '@mui/material';
import { useLanguage } from '../../contexts/LanguageContext';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class TranslationErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Translation Error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <Box sx={{ p: 2 }}>
          <Alert 
            severity="error"
            action={
              <Button 
                color="inherit" 
                size="small"
                onClick={this.handleRetry}
                data-testid="translation-retry-button"
              >
                Retry
              </Button>
            }
          >
            Translation Error: {this.state.error?.message}
          </Alert>
        </Box>
      );
    }

    return this.props.children;
  }
}

// HOC to wrap components that need translation error handling
export const withTranslationErrorBoundary = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  fallback?: ReactNode
) => {
  return function WithTranslationErrorBoundary(props: P) {
    return (
      <TranslationErrorBoundary fallback={fallback}>
        <WrappedComponent {...props} />
      </TranslationErrorBoundary>
    );
  };
};

// Hook to handle translation errors in functional components
export const useTranslationErrorHandler = () => {
  const { setLanguage } = useLanguage();

  const handleTranslationError = (error: Error) => {
    console.error('Translation Error:', error);
    // Fallback to English if translation fails
    setLanguage('en');
    return error.message;
  };

  return { handleTranslationError };
};

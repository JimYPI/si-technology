import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageProvider } from '../../../contexts/LanguageContext';
import TroubleTicket from '../aftersales/TroubleTicket';
import AntiCounterfeit from '../aftersales/AntiCounterfeit';
import OnlineTraining from '../training/OnlineTraining';

// Mock translations service
vi.mock('../../../services/translationService', () => ({
  default: {
    translateText: vi.fn(),
    getSupportedLanguages: () => [
      { code: 'en', name: 'English' },
      { code: 'fr', name: 'French' },
    ],
  },
}));

const renderWithLanguage = (component: React.ReactNode, initialLanguage = 'en') => {
  return render(
    <LanguageProvider initialLanguage={initialLanguage}>
      {component}
    </LanguageProvider>
  );
};

describe('Support Pages Integration Tests', () => {
  describe('TroubleTicket Page', () => {
    beforeEach(() => {
      renderWithLanguage(<TroubleTicket />);
    });

    it('should render form with correct translations', () => {
      expect(screen.getByText(/Submit Trouble Ticket/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Product Serial Number/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Issue Type/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Priority/i)).toBeInTheDocument();
    });

    it('should validate form fields in current language', async () => {
      const submitButton = screen.getByText(/Submit Ticket/i);
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getAllByText(/This field is required/i).length).toBeGreaterThan(0);
      });
    });

    it('should switch form language', async () => {
      // Change language to French
      renderWithLanguage(<TroubleTicket />, 'fr');
      
      await waitFor(() => {
        expect(screen.getByText(/Soumettre un Ticket/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Numéro de Série du Produit/i)).toBeInTheDocument();
      });
    });
  });

  describe('AntiCounterfeit Page', () => {
    beforeEach(() => {
      renderWithLanguage(<AntiCounterfeit />);
    });

    it('should render verification form with correct translations', () => {
      expect(screen.getByText(/Anti-Counterfeit Verification/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Enter Serial Number/i)).toBeInTheDocument();
      expect(screen.getByText(/Verify Product/i)).toBeInTheDocument();
    });

    it('should show verification steps in current language', () => {
      const steps = screen.getAllByRole('listitem');
      expect(steps).toHaveLength(3);
      expect(steps[0]).toHaveTextContent(/Locate the QR code/i);
    });

    it('should display verification status messages in current language', async () => {
      const input = screen.getByLabelText(/Enter Serial Number/i);
      const verifyButton = screen.getByText(/Verify Product/i);

      await userEvent.type(input, '123456');
      fireEvent.click(verifyButton);

      await waitFor(() => {
        expect(screen.getByText(/Scanning QR Code/i)).toBeInTheDocument();
      });
    });
  });

  describe('OnlineTraining Page', () => {
    beforeEach(() => {
      renderWithLanguage(<OnlineTraining />);
    });

    it('should render course categories with correct translations', () => {
      expect(screen.getByText(/Beginner Courses/i)).toBeInTheDocument();
      expect(screen.getByText(/Advanced Courses/i)).toBeInTheDocument();
      expect(screen.getByText(/Certification Programs/i)).toBeInTheDocument();
    });

    it('should display course information in current language', () => {
      expect(screen.getByText(/Duration:/i)).toBeInTheDocument();
      expect(screen.getByText(/Prerequisites:/i)).toBeInTheDocument();
      expect(screen.getByText(/Level:/i)).toBeInTheDocument();
    });

    it('should show correct progress status translations', () => {
      expect(screen.getByText(/Not Started/i)).toBeInTheDocument();
      expect(screen.getByText(/In Progress/i)).toBeInTheDocument();
      expect(screen.getByText(/Completed/i)).toBeInTheDocument();
    });

    it('should switch course information language', async () => {
      // Change language to French
      renderWithLanguage(<OnlineTraining />, 'fr');
      
      await waitFor(() => {
        expect(screen.getByText(/Cours Débutant/i)).toBeInTheDocument();
        expect(screen.getByText(/Durée:/i)).toBeInTheDocument();
        expect(screen.getByText(/Niveau:/i)).toBeInTheDocument();
      });
    });
  });

  describe('Cross-component Language Switching', () => {
    it('should maintain language preference across pages', async () => {
      const { rerender } = renderWithLanguage(<TroubleTicket />, 'fr');

      // Verify French content in TroubleTicket
      expect(screen.getByText(/Soumettre un Ticket/i)).toBeInTheDocument();

      // Switch to AntiCounterfeit
      rerender(
        <LanguageProvider initialLanguage="fr">
          <AntiCounterfeit />
        </LanguageProvider>
      );

      // Verify French content persists
      await waitFor(() => {
        expect(screen.getByText(/Vérification Anti-Contrefaçon/i)).toBeInTheDocument();
      });

      // Switch to OnlineTraining
      rerender(
        <LanguageProvider initialLanguage="fr">
          <OnlineTraining />
        </LanguageProvider>
      );

      // Verify French content still persists
      await waitFor(() => {
        expect(screen.getByText(/Portail de Formation en Ligne/i)).toBeInTheDocument();
      });
    });
  });
});

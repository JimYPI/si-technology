import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute'; // Assuming this is where ProtectedRoute is defined
import { ThemeProvider, CssBaseline } from '@mui/material'; // Assuming you're using Material UI
import theme from './theme'; // Assuming you have a theme defined

// Main Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductsPage from './pages/ProductsPage';
import ResourcesPage from './pages/ResourcesPage';
import SolutionsPage from './pages/SolutionsPage';

// Product Pages
import AccessControlPage from './pages/products/AccessControlPage';
import BiometricsPage from './pages/products/BiometricsPage';
import DoorLocksPage from './pages/products/DoorLocksPage';
import SecurityInspectionPage from './pages/products/SecurityInspectionPage';
import SoftwareSolutionsPage from './pages/products/SoftwareSolutionsPage';
import TemperatureScreeningPage from './pages/products/TemperatureScreeningPage';
import TimeAttendancePage from './pages/products/TimeAttendancePage';
import TurnstilesGatesPage from './pages/products/TurnstilesGatesPage';
import VideoSurveillancePage from './pages/products/VideoSurveillancePage';

// Solution Pages
import EnterpriseSecurity from './pages/solutions/EnterpriseSecurity';
import IndustrialSurveillance from './pages/solutions/IndustrialSurveillance';
import TimeManagement from './pages/solutions/TimeManagement';

// Support Pages
import SupportHomePage from './pages/support/SupportHomePage';
import WarrantyServicePage from './pages/support/WarrantyServicePage';
import DocumentationPage from './pages/support/DocumentationPage';
import DownloadsPage from './pages/support/DownloadsPage';
import TrainingPage from './pages/support/TrainingPage';
import KnowledgeBasePage from './pages/support/KnowledgeBasePage';
import DownloadCenterPage from './pages/support/DownloadCenterPage';
import TrainingCenter from './pages/support/training/TrainingCenter';
import OnlineTraining from './pages/support/training/OnlineTraining';
import LearningCenter from './pages/support/training/LearningCenter';
import ApplyForTraining from './pages/support/training/ApplyForTraining';
import DownloadCenter from './pages/support/downloads/DownloadCenter';
import Datasheet from './pages/support/downloads/Datasheet';
import SoftwareDownloads from './pages/support/downloads/Software';
import UserManual from './pages/support/downloads/UserManual';
import InstallationGuide from './pages/support/downloads/InstallationGuide';
import QuickGuide from './pages/support/downloads/QuickGuide';
import SdkDownloads from './pages/support/downloads/Sdk';
import Specifications from './pages/support/downloads/Specifications';
import Solutions from './pages/support/downloads/Solutions';
import CaseStudies from './pages/support/downloads/CaseStudies';
import BiometricsTech from './pages/support/downloads/BiometricsTech';
import Catalog from './pages/support/downloads/Catalog';
import SecurityCenter from './pages/support/security/SecurityCenter';
import SecurityBulletins from './pages/support/security/SecurityBulletins';
import AfterSalesService from './pages/support/aftersales/AfterSalesService';
import FAQ from './pages/support/aftersales/FAQ';
import AntiCounterfeit from './pages/support/aftersales/AntiCounterfeit';
import TroubleTicket from './pages/support/aftersales/TroubleTicket';
import MaintenanceService from './pages/support/aftersales/MaintenanceService';
import LicenseActivation from './pages/support/aftersales/LicenseActivation';
import WarrantyPolicy from './pages/support/aftersales/WarrantyPolicy';
import FreeLicense from './pages/support/aftersales/FreeLicense';
import OnlineSupport from './pages/support/online/OnlineSupport';
import OnlineConsultation from './pages/support/online/OnlineConsultation';
import ToolsUtilities from './pages/support/downloads/ToolsUtilities';

// Industry Pages
import HealthcareSolutionsPage from './pages/industries/HealthcareSolutionsPage';
import EducationSolutionsPage from './pages/industries/EducationSolutionsPage';
import GovernmentSolutionsPage from './pages/industries/GovernmentSolutionsPage';
import ManufacturingSolutionsPage from './pages/industries/ManufacturingSolutionsPage';
import RetailSolutionsPage from './pages/industries/RetailSolutionsPage';
import BankingSolutionsPage from './pages/industries/BankingSolutionsPage';

// Auth
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

// Admin
import TranslationDashboard from './pages/admin/TranslationDashboard';

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Layout>
              <Routes>
                {/* Main Routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/solutions" element={<SolutionsPage />} />

                {/* Product Routes */}
                <Route path="/products/access-control" element={<AccessControlPage />} />
                <Route path="/products/biometric" element={<BiometricsPage />} />
                <Route path="/products/door-locks" element={<DoorLocksPage />} />
                <Route path="/products/security-inspection" element={<SecurityInspectionPage />} />
                <Route path="/products/software-solutions" element={<SoftwareSolutionsPage />} />
                <Route path="/products/temperature-screening" element={<TemperatureScreeningPage />} />
                <Route path="/products/time-attendance" element={<TimeAttendancePage />} />
                <Route path="/products/turnstiles-gates" element={<TurnstilesGatesPage />} />
                <Route path="/products/video-surveillance" element={<VideoSurveillancePage />} />

                {/* Solution Routes */}
                <Route path="/solutions/enterprise-security" element={<EnterpriseSecurity />} />
                <Route path="/solutions/industrial-surveillance" element={<IndustrialSurveillance />} />
                <Route path="/solutions/time-management" element={<TimeManagement />} />

                {/* Support Routes */}
                <Route path="/support" element={<SupportHomePage />} />
                
                {/* Download Center Routes */}
                <Route path="/support/downloads/*" element={<DownloadCenter />} />
                <Route path="/support/downloads/datasheet" element={<Datasheet />} />
                <Route path="/support/downloads/software" element={<SoftwareDownloads />} />
                <Route path="/support/downloads/manual" element={<UserManual />} />
                <Route path="/support/downloads/installation" element={<InstallationGuide />} />
                <Route path="/support/downloads/quickguide" element={<QuickGuide />} />
                <Route path="/support/downloads/sdk" element={<SdkDownloads />} />
                <Route path="/support/downloads/specifications" element={<Specifications />} />
                <Route path="/support/downloads/solutions" element={<Solutions />} />
                <Route path="/support/downloads/cases" element={<CaseStudies />} />
                <Route path="/support/downloads/biometrics" element={<BiometricsTech />} />
                <Route path="/support/downloads/catalog" element={<Catalog />} />
                <Route path="/support/downloads/tools" element={<ToolsUtilities />} />
                
                {/* Training Center Routes */}
                <Route path="/support/training/*" element={<TrainingCenter />} />
                <Route path="/support/training/online" element={<OnlineTraining />} />
                <Route path="/support/training/learning" element={<LearningCenter />} />
                <Route path="/support/training/apply" element={<ApplyForTraining />} />
                
                {/* Security Center Routes */}
                <Route path="/support/security/*" element={<SecurityCenter />} />
                <Route path="/support/security/bulletins" element={<SecurityBulletins />} />
                <Route path="/support/security/best-practices" element={<SecurityBulletins />} />
                <Route path="/support/security/report" element={<SecurityBulletins />} />
                <Route path="/support/security/updates" element={<SecurityBulletins />} />
                <Route path="/support/security/compliance" element={<SecurityBulletins />} />
                
                {/* After-sales Service Routes */}
                <Route path="/support/aftersales/*" element={<AfterSalesService />} />
                <Route path="/support/aftersales/faq" element={<FAQ />} />
                <Route path="/support/aftersales/anti-counterfeit" element={<AntiCounterfeit />} />
                <Route path="/support/aftersales/trouble-ticket" element={<TroubleTicket />} />
                <Route path="/support/aftersales/maintenance" element={<MaintenanceService />} />
                <Route path="/support/aftersales/license" element={<LicenseActivation />} />
                <Route path="/support/aftersales/warranty" element={<WarrantyPolicy />} />
                <Route path="/support/aftersales/free-license" element={<FreeLicense />} />
                
                {/* Online Support Routes */}
                <Route path="/support/online/*" element={<OnlineSupport />} />
                <Route path="/support/online/consultation" element={<OnlineConsultation />} />

                {/* Admin Routes */}
                <Route path="/admin/*" element={
                  <ProtectedRoute requireAdmin={true}>
                    <Outlet />
                  </ProtectedRoute>
                }>
                  <Route path="translations" element={<TranslationDashboard />} />
                </Route>

                {/* Auth Routes */}
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />

                {/* Industry Routes */}
                <Route path="/industries/healthcare" element={<HealthcareSolutionsPage />} />
                <Route path="/industries/education" element={<EducationSolutionsPage />} />
                <Route path="/industries/government" element={<GovernmentSolutionsPage />} />
                <Route path="/industries/manufacturing" element={<ManufacturingSolutionsPage />} />
                <Route path="/industries/retail" element={<RetailSolutionsPage />} />
                <Route path="/industries/banking" element={<BankingSolutionsPage />} />
              </Routes>
            </Layout>
          </Router>
        </ThemeProvider>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;

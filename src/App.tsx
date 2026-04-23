import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Layouts
import RootLayout from './layouts/RootLayout';

// Public Pages
import HomePage from './pages/public/HomePage';
import AboutPage from './pages/public/AboutPage';
import ContactPage from './pages/public/ContactPage';
import BookingPage from './pages/public/BookingPage';
import ThankYouPage from './pages/public/ThankYouPage';
import PrivacyPolicyPage from './pages/public/PrivacyPolicyPage';
import TermsPage from './pages/public/TermsPage';
import DisclaimerPage from './pages/public/DisclaimerPage';
import NotFoundPage from './pages/public/NotFoundPage';

// Service Pages
import EstatePage from './pages/services/EstatePage';
import GeneralTradingPage from './pages/services/GeneralTradingPage';
import AgriculturePage from './pages/services/AgriculturePage';
import FarmProductsPage from './pages/services/FarmProductsPage';
import FinancialPage from './pages/services/FinancialPage';
import PetroleumPage from './pages/services/PetroleumPage';
import ContractsPage from './pages/services/ContractsPage';

import { ROUTES } from './constants/routes';
import RouteScrollToTop from './components/common/RouteScrollToTop';

export default function App() {
  return (
    <HelmetProvider>
      <RouteScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTES.ABOUT} element={<AboutPage />} />
          <Route path={ROUTES.SERVICES.ESTATE} element={<EstatePage />} />
          <Route path={ROUTES.SERVICES.TRADING} element={<GeneralTradingPage />} />
          <Route path={ROUTES.SERVICES.AGRICULTURE} element={<AgriculturePage />} />
          <Route path={ROUTES.SERVICES.FARM_PRODUCTS} element={<FarmProductsPage />} />
          <Route path={ROUTES.SERVICES.FINANCIAL} element={<FinancialPage />} />
          <Route path={ROUTES.SERVICES.PETROLEUM} element={<PetroleumPage />} />
          <Route path={ROUTES.SERVICES.CONTRACTS} element={<ContractsPage />} />
          <Route path={ROUTES.CONTACT} element={<ContactPage />} />
          <Route path={ROUTES.BOOKING} element={<BookingPage />} />
          <Route path={ROUTES.THANK_YOU} element={<ThankYouPage />} />
          <Route path={ROUTES.PRIVACY} element={<PrivacyPolicyPage />} />
          <Route path={ROUTES.TERMS} element={<TermsPage />} />
          <Route path={ROUTES.DISCLAIMER} element={<DisclaimerPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HelmetProvider>
  );
}

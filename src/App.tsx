import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useThemeStore } from './stores/theme';
import { Layout } from './components/layout/layout';
import { HomePage } from './pages/home';
import { MenuPage } from './pages/menu';
import { DealsPage } from './pages/deals';
import { AboutPage } from './pages/about';
import { ContactPage } from './pages/contact';
import { PizzaDetailsPage } from './pages/pizza-details';
import { DrinkDetailsPage } from './pages/drink-details';
import { DessertDetailsPage } from './pages/dessert-details';
import { CartPage } from './pages/cart';
import { CheckoutPage } from './pages/checkout';
import { OrderConfirmationPage } from './pages/order-confirmation';
import { PrivacyPage, ImprintPage, TermsPage } from './pages';

function App() {
  const { isDark } = useThemeStore();

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/menu/pizza/:id" element={<PizzaDetailsPage />} />
          <Route path="/menu/drinks/:id" element={<DrinkDetailsPage />} />
          <Route path="/menu/desserts/:id" element={<DessertDetailsPage />} />
          <Route path="/deals" element={<DealsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/imprint" element={<ImprintPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
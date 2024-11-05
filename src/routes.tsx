import React from 'react';
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { HomePage } from './pages/home';
import { MenuPage } from './pages/menu';
import { DealsPage } from './pages/deals';
import { AboutPage } from './pages/about';
import { ContactPage } from './pages/contact';
import { CartPage } from './pages/cart';
import { PizzaDetailsPage } from './pages/pizza-details';
import { OrderConfirmationPage } from './pages/order-confirmation';

export function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/deals" element={<DealsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/menu/pizza/:id" element={<PizzaDetailsPage />} />
      <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
    </RouterRoutes>
  );
} 
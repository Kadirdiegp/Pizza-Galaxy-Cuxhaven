import React from 'react';
import { HeroSlider } from '../components/home/hero-slider';
import { Features } from '../components/home/features';
import { PopularPizzas } from '../components/home/popular-pizzas';
import { Reviews } from '../components/home/reviews';
import { DealsShowcase } from '../components/home/deals-showcase';
import { QuickMenu } from '../components/home/quick-menu';
import { FloatingCart } from '../components/cart/floating-cart';
import { Footer } from '../components/layout/footer';

export function HomePage() {
  return (
    <>
      {/* Main Content */}
      <main>
        <HeroSlider />
        <QuickMenu />
        <DealsShowcase />
        <Features />
        <PopularPizzas />
        <Reviews />
      </main>

      {/* Footer */}
      <Footer />

      <FloatingCart />
    </>
  );
}
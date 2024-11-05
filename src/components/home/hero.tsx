import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Welcome to
          <br />
          <span className="text-red-500">Pizza Galaxy</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Embark on a cosmic journey of flavors with our artisanal pizzas.
          Handcrafted with love, delivered to your doorstep.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/menu"
            className="inline-flex items-center justify-center px-8 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full text-lg font-semibold transition-colors"
          >
            Order Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            to="/deals"
            className="inline-flex items-center justify-center px-8 py-3 bg-black/50 hover:bg-black/60 text-white rounded-full text-lg font-semibold transition-colors backdrop-blur-sm"
          >
            View Special Offers
          </Link>
        </div>
      </div>
    </div>
  );
}
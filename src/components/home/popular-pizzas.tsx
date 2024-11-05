import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { pizzas } from '../../data/pizzas';
import { PizzaCard } from '../menu/pizza-card';

export function PopularPizzas() {
  const popularPizzas = pizzas.filter(pizza => pizza.isPopular).slice(0, 3);

  return (
    <div className="py-24 bg-white dark:bg-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Most Popular Pizzas
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Discover our customers' favorites
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {popularPizzas.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/menu"
            className="inline-flex items-center px-8 py-3 bg-red-500 text-white rounded-lg text-lg font-medium hover:bg-red-600 transition-colors"
          >
            View Full Menu
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
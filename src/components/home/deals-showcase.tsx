import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Tag, Pizza, Utensils } from 'lucide-react';

const featuredDeals = [
  {
    id: 1,
    title: "2 for Tuesday",
    description: "Any 2 medium pizzas for €18.99",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&q=80",
    tag: "BEST SELLER",
    link: "/deals"
  },
  {
    id: 2,
    title: "Family Feast",
    description: "2 Large Pizzas + Side + 1.5L Drink",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80",
    tag: "SPECIAL",
    link: "/deals"
  },
  {
    id: 3,
    title: "Student Deal",
    description: "Medium Pizza + Side + Drink for €12.99",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80",
    tag: "POPULAR",
    link: "/deals"
  }
];

export function DealsShowcase() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Hot Deals & Offers
          </h2>
          <Link
            to="/deals"
            className="text-red-500 hover:text-red-600 font-medium flex items-center gap-1"
          >
            View All Deals
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDeals.map((deal) => (
            <Link
              key={deal.id}
              to={deal.link}
              className="group bg-white dark:bg-[#1E1E1E] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {deal.tag}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {deal.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {deal.description}
                </p>
                <span className="text-red-500 font-medium flex items-center gap-2">
                  Order Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 
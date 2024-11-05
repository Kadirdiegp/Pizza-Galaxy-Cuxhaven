import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Flame } from 'lucide-react';
import { formatPrice } from '../../lib/utils';
import { Toast } from '../ui/toast';
import { useCartStore } from '../../store/cart';
import { Pizza } from '../../types/menu';

interface PizzaCardProps {
  pizza: Pizza;
}

export function PizzaCard({ pizza }: PizzaCardProps) {
  const [showToast, setShowToast] = useState(false);
  const { addItem } = useCartStore();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation
    addItem({
      id: pizza.id,
      type: 'pizza',
      name: pizza.name,
      price: pizza.prices.medium,
      size: 'medium',
      image: pizza.image,
    });
    setShowToast(true);
  };

  return (
    <>
      <Link
        to={`/menu/pizza/${pizza.id}`}
        className="group bg-white dark:bg-[#121212] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={pizza.image}
            alt={pizza.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {pizza.isPopular && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium flex items-center">
              <Star className="w-4 h-4 mr-1" />
              Popular
            </div>
          )}
          <button
            onClick={handleQuickAdd}
            className="absolute bottom-2 right-2 bg-white/90 dark:bg-gray-800/90 text-red-500 px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
          >
            Quick Add
          </button>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {pizza.name}
            </h3>
            {pizza.spicyLevel && (
              <div className="flex">
                {[...Array(pizza.spicyLevel)].map((_, i) => (
                  <Flame key={i} className="w-4 h-4 text-red-500" />
                ))}
              </div>
            )}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
            {pizza.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              {formatPrice(pizza.prices.medium)}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Medium Size
            </span>
          </div>
        </div>
      </Link>
      <Toast
        message="Added to cart!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
}
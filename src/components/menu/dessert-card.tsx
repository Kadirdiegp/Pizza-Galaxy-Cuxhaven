import React, { useState } from 'react';
import { Star, IceCream } from 'lucide-react';
import { formatPrice } from '../../lib/utils';
import { Toast } from '../ui/toast';
import { useCartStore } from '../../store/cart';
import { Dessert } from '../../types/menu';
import { Link } from 'react-router-dom';

interface DessertCardProps {
  dessert: Dessert;
}

export function DessertCard({ dessert }: DessertCardProps) {
  const [showToast, setShowToast] = useState(false);
  const { addItem } = useCartStore();

  const handleQuickAdd = () => {
    addItem({
      id: dessert.id,
      type: 'dessert',
      name: dessert.name,
      price: dessert.price,
      image: dessert.image,
    });
    setShowToast(true);
  };

  return (
    <Link
      to={`/menu/desserts/${dessert.id}`}
      className="group bg-white dark:bg-[#121212] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={dessert.image}
          alt={dessert.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={handleQuickAdd}
          className="absolute bottom-2 right-2 bg-white/90 dark:bg-gray-800/90 text-red-500 px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Quick Add
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {dessert.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          {dessert.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            {formatPrice(dessert.price)}
          </span>
          <button
            onClick={handleQuickAdd}
            className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <Toast
        message="Added to cart!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </Link>
  );
}
import React, { useState } from 'react';
import { Flame, Leaf } from 'lucide-react';
import { formatPrice } from '../../lib/utils';
import { Toast } from '../ui/toast';
import { useCartStore } from '../../store/cart';
import { FingerFood } from '../../types/menu';

interface FingerFoodCardProps {
  item: FingerFood;
}

export function FingerFoodCard({ item }: FingerFoodCardProps) {
  const [showToast, setShowToast] = useState(false);
  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    addItem({
      id: item.id,
      type: 'fingerfood',
      name: item.name,
      price: item.price,
      image: item.image
    });
    setShowToast(true);
  };

  return (
    <div className="bg-white dark:bg-[#121212] rounded-lg shadow-md overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 flex gap-2">
          {item.isVegetarian && (
            <div className="bg-green-500 text-white px-2 py-1 rounded-full text-sm font-medium flex items-center">
              <Leaf className="w-4 h-4 mr-1" />
              Veg
            </div>
          )}
          {item.isSpicy && (
            <div className="bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium flex items-center">
              <Flame className="w-4 h-4 mr-1" />
              Spicy
            </div>
          )}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {item.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          {item.description}
        </p>
        {item.pieces && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {item.pieces} pieces
          </p>
        )}
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            {formatPrice(item.price)}
          </span>
          <button
            onClick={handleAddToCart}
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
    </div>
  );
} 
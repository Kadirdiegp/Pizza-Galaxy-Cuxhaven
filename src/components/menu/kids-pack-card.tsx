import React, { useState } from 'react';
import { Gift, Star } from 'lucide-react';
import { formatPrice } from '../../lib/utils';
import { Toast } from '../ui/toast';
import { useCartStore } from '../../store/cart';
import { KidsPack } from '../../types/menu';

interface KidsPackCardProps {
  pack: KidsPack;
}

export function KidsPackCard({ pack }: KidsPackCardProps) {
  const [showToast, setShowToast] = useState(false);
  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    addItem({
      id: pack.id,
      type: 'kidspack',
      name: pack.name,
      price: pack.price,
      image: pack.image,
    });
    setShowToast(true);
  };

  return (
    <div className="bg-white dark:bg-[#121212] rounded-lg shadow-md overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={pack.image}
          alt={pack.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        {pack.forAge && (
          <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-sm font-medium flex items-center">
            <Gift className="w-4 h-4 mr-1" />
            Ages {pack.forAge}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {pack.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          {pack.description}
        </p>
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
            Includes:
          </h4>
          <ul className="space-y-1">
            {pack.includes.map((item, index) => (
              <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            {formatPrice(pack.price)}
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
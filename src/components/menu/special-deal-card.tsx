import React, { useState } from 'react';
import { Clock, Tag, Star } from 'lucide-react';
import { formatPrice } from '../../lib/utils';
import { Toast } from '../ui/toast';
import { useCartStore } from '../../store/cart';
import { Combo } from '../../types/menu';
import { ComboSelector } from './combo-selector';

interface SpecialDealCardProps {
  deal: Combo;
}

export function SpecialDealCard({ deal }: SpecialDealCardProps) {
  const [showToast, setShowToast] = useState(false);
  const [showSelector, setShowSelector] = useState(false);
  const { addItem } = useCartStore();

  const handleAddToCart = (selections?: ComboSelections) => {
    addItem({
      id: deal.id,
      type: 'combo',
      name: deal.name,
      price: deal.comboPrice,
      image: deal.image,
      selections
    });
    setShowToast(true);
    setShowSelector(false);
  };

  const handleClick = () => {
    if (deal.id === 'family-feast') {
      setShowSelector(true);
    } else {
      handleAddToCart();
    }
  };

  const savings = deal.originalPrice - deal.comboPrice;

  return (
    <div className="bg-white dark:bg-[#121212] rounded-lg shadow-md overflow-hidden group">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={deal.image}
          alt={deal.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
          <Tag className="w-4 h-4 mr-1" />
          Save {formatPrice(savings)}
        </div>
        {deal.availableUntil && (
          <div className="absolute bottom-2 left-2 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            Until {new Date(deal.availableUntil).toLocaleDateString()}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {deal.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          {deal.description}
        </p>
        <ul className="mb-4 space-y-2">
          {deal.items.map((item, index) => (
            <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              {item}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
              {formatPrice(deal.originalPrice)}
            </span>
            <span className="text-lg font-bold text-red-500">
              {formatPrice(deal.comboPrice)}
            </span>
          </div>
          <button
            onClick={handleClick}
            className="bg-red-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors"
          >
            {deal.id === 'family-feast' ? 'Customize & Add' : 'Add to Cart'}
          </button>
        </div>
      </div>
      {showSelector && (
        <ComboSelector
          onClose={() => setShowSelector(false)}
          onConfirm={handleAddToCart}
        />
      )}
      <Toast
        message="Added to cart!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
} 
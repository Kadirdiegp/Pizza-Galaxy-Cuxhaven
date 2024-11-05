import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Beer, Wine } from 'lucide-react';
import { formatPrice } from '../../lib/utils';
import { Toast } from '../ui/toast';
import { useCartStore } from '../../store/cart';
import { Drink } from '../../types/menu';

interface DrinkCardProps {
  drink: Drink;
}

export function DrinkCard({ drink }: DrinkCardProps) {
  const [showToast, setShowToast] = useState(false);
  const [selectedSize, setSelectedSize] = useState<'small' | 'large'>('small');
  const { addItem } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: drink.id,
      type: 'drink',
      name: drink.name,
      size: selectedSize,
      price: drink.prices[selectedSize],
      image: drink.image,
    });
    setShowToast(true);
  };

  const getSizeLabel = (size: 'small' | 'large') => {
    return size === 'small' ? '0.33L' : '1.00L';
  };

  return (
    <Link
      to={`/menu/drinks/${drink.id}`}
      className="group bg-white dark:bg-[#121212] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={drink.image}
          alt={drink.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        {drink.isAlcoholic && (
          <div className="absolute top-2 right-2 bg-purple-500 text-white px-2 py-1 rounded-full text-sm font-medium flex items-center">
            {drink.alcoholType === 'beer' ? (
              <Beer className="w-4 h-4 mr-1" />
            ) : (
              <Wine className="w-4 h-4 mr-1" />
            )}
            {drink.alcoholContent}%
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {drink.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          {drink.description}
        </p>
        
        <div className="space-y-4">
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedSize('small')}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                selectedSize === 'small'
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
              }`}
            >
              {getSizeLabel('small')} ({formatPrice(drink.prices.small)})
            </button>
            <button
              onClick={() => setSelectedSize('large')}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                selectedSize === 'large'
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
              }`}
            >
              {getSizeLabel('large')} ({formatPrice(drink.prices.large)})
            </button>
          </div>
          
          <button
            onClick={handleAddToCart}
            className="w-full bg-red-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-600 transition-colors"
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
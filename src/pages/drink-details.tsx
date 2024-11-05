import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Beer, Wine } from 'lucide-react';
import { drinks } from '../data/menu';
import { DrinkSize } from '../types/menu';
import { useCartStore } from '../store/cart';
import { formatPrice } from '../lib/utils';
import { Toast } from '../components/ui/toast';
export function DrinkDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState<DrinkSize>('small');
  const [showToast, setShowToast] = useState(false);
  const { addItem } = useCartStore();

  const drink = drinks.find((d) => d.id === id);

  if (!drink) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Drink Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Sorry, we couldn't find the drink you're looking for.
          </p>
          <button
            onClick={() => navigate('/menu')}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Menu
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-6">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <img
                src={drink.image}
                alt={drink.name}
                className="w-full h-full object-cover"
              />
              {drink.isAlcoholic && (
                <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  {drink.alcoholType === 'beer' ? (
                    <Beer className="w-4 h-4 mr-1" />
                  ) : (
                    <Wine className="w-4 h-4 mr-1" />
                  )}
                  {drink.alcoholContent}% ABV
                </div>
              )}
            </div>
          </div>

          {/* Details Section */}
          <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {drink.name}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {drink.description}
            </p>

            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Choose Size
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {(['small', 'large'] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedSize === size
                        ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-red-200 dark:hover:border-red-800'
                    }`}
                  >
                    <div className="text-lg font-medium text-gray-900 dark:text-white capitalize">
                      {size}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {size === 'small' ? '330ml' : '500ml'}
                    </div>
                    <div className="mt-1 text-lg font-bold text-gray-900 dark:text-white">
                      {formatPrice(drink.prices[size])}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {drink.isAlcoholic && (
              <div className="mb-6 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  Must be 18 or older to purchase. ID will be checked upon delivery.
                </p>
              </div>
            )}

            <button
              onClick={handleAddToCart}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-colors"
            >
              Add to Cart ({formatPrice(drink.prices[selectedSize])})
            </button>
          </div>
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
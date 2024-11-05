import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { desserts } from '../data/menu';
import { useCartStore } from '../store/cart';
import { formatPrice } from '../lib/utils';
import { Toast } from '../components/ui/toast';

export function DessertDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const { addItem } = useCartStore();

  const dessert = desserts.find((d) => d.id === id);

  if (!dessert) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Dessert Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Sorry, we couldn't find the dessert you're looking for.
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
      id: dessert.id,
      type: 'dessert',
      name: dessert.name,
      price: dessert.price,
      image: dessert.image,
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
                src={dessert.image}
                alt={dessert.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {dessert.name}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {dessert.description}
            </p>

            <div className="flex items-center justify-between mb-8">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {formatPrice(dessert.price)}
              </span>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-colors"
            >
              Add to Cart
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
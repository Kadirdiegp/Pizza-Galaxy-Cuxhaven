import React, { useState } from 'react';
import { ChevronRight, Plus, Minus } from 'lucide-react';
import { useCartStore } from '../../stores/cart';
import { formatPrice } from '../../utils/format';

interface Topping {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'meat' | 'vegetable' | 'cheese';
}

interface Size {
  id: 'small' | 'medium' | 'large';
  name: string;
  multiplier: number;
}

const sizes: Size[] = [
  { id: 'small', name: 'Small (25cm)', multiplier: 1 },
  { id: 'medium', name: 'Medium (30cm)', multiplier: 1.2 },
  { id: 'large', name: 'Large (35cm)', multiplier: 1.4 },
];

const toppings: Topping[] = [
  { id: 'pepperoni', name: 'Pepperoni', price: 1.5, image: '/toppings/pepperoni.jpg', category: 'meat' },
  { id: 'mushrooms', name: 'Mushrooms', price: 1, image: '/toppings/mushrooms.jpg', category: 'vegetable' },
  { id: 'onions', name: 'Onions', price: 0.5, image: '/toppings/onions.jpg', category: 'vegetable' },
  { id: 'extra-cheese', name: 'Extra Cheese', price: 1.5, image: '/toppings/cheese.jpg', category: 'cheese' },
  // Add more toppings as needed
];

export function PizzaBuilder() {
  const [selectedSize, setSelectedSize] = useState<Size['id']>('medium');
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const { addItem } = useCartStore();

  const basePrice = 8.99;
  const selectedSizeMultiplier = sizes.find(size => size.id === selectedSize)?.multiplier || 1;
  const toppingsPrice = selectedToppings.reduce((total, toppingId) => {
    const topping = toppings.find(t => t.id === toppingId);
    return total + (topping?.price || 0);
  }, 0);

  const totalPrice = (basePrice + toppingsPrice) * selectedSizeMultiplier;

  const handleAddToCart = () => {
    addItem({
      id: 'custom-pizza',
      type: 'pizza',
      name: 'Custom Pizza',
      price: totalPrice,
      image: '/images/custom-pizza.jpg',
      selections: {
        size: selectedSize,
        toppings: selectedToppings,
      },
    });
  };

  return (
    <div className="bg-white dark:bg-[#1E1E1E] rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Build Your Perfect Pizza
      </h2>

      {/* Size Selection */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Choose Your Size
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {sizes.map((size) => (
            <button
              key={size.id}
              onClick={() => setSelectedSize(size.id)}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedSize === size.id
                  ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              <span className="block text-sm font-medium text-gray-900 dark:text-white">
                {size.name}
              </span>
              <span className="block text-sm text-gray-500 dark:text-gray-400 mt-1">
                {formatPrice(basePrice * size.multiplier)}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Toppings Selection */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Add Toppings
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {toppings.map((topping) => (
            <button
              key={topping.id}
              onClick={() => {
                setSelectedToppings(prev =>
                  prev.includes(topping.id)
                    ? prev.filter(id => id !== topping.id)
                    : [...prev, topping.id]
                );
              }}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedToppings.includes(topping.id)
                  ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              <img
                src={topping.image}
                alt={topping.name}
                className="w-full h-24 object-cover rounded-lg mb-2"
              />
              <span className="block text-sm font-medium text-gray-900 dark:text-white">
                {topping.name}
              </span>
              <span className="block text-sm text-gray-500 dark:text-gray-400 mt-1">
                +{formatPrice(topping.price)}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Total and Add to Cart */}
      <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
        <div>
          <span className="block text-sm text-gray-500 dark:text-gray-400">Total</span>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            {formatPrice(totalPrice)}
          </span>
        </div>
        <button
          onClick={handleAddToCart}
          className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
} 
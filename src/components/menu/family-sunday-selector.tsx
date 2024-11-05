import React, { useState } from 'react';
import { Pizza as PizzaIcon, Coffee } from 'lucide-react';
import { pizzas, drinks } from '../../data/menu';
import { formatPrice } from '../../lib/utils';
import { PizzaSize } from '../../types/menu';

interface FamilySundaySelections {
  pizza: { id: string; size: PizzaSize };
  freeDrink: string;
}

interface FamilySundaySelectorProps {
  onClose: () => void;
  onConfirm: (selections: FamilySundaySelections) => void;
  dealPrice: number;
}

export function FamilySundaySelector({ onClose, onConfirm, dealPrice }: FamilySundaySelectorProps) {
  const [selections, setSelections] = useState<FamilySundaySelections>({
    pizza: { id: '', size: 'large' },
    freeDrink: '',
  });

  const isComplete = selections.pizza.id && selections.freeDrink;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Family Sunday - Free Large Drink!
        </h2>

        {/* Pizza Selection */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
            Select Your Pizza
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pizzas.map((pizza) => (
              <button
                key={pizza.id}
                onClick={() => setSelections(prev => ({
                  ...prev,
                  pizza: { ...prev.pizza, id: pizza.id }
                }))}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selections.pizza.id === pizza.id
                    ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <PizzaIcon className="w-5 h-5 text-red-500" />
                  <span className="text-gray-900 dark:text-white">{pizza.name}</span>
                </div>
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {formatPrice(pizza.prices.large)}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Free Drink Selection */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
            Choose Your Free Large Drink
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {drinks
              .filter(drink => !drink.isAlcoholic)
              .map((drink) => (
                <button
                  key={drink.id}
                  onClick={() => setSelections(prev => ({
                    ...prev,
                    freeDrink: drink.id
                  }))}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selections.freeDrink === drink.id
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Coffee className="w-5 h-5 text-red-500" />
                    <span className="text-gray-900 dark:text-white">{drink.name}</span>
                  </div>
                  <div className="mt-2 text-sm">
                    <span className="text-gray-500 dark:text-gray-400 line-through">
                      {formatPrice(drink.prices.large)}
                    </span>
                    <span className="ml-2 text-red-500 font-bold">
                      FREE
                    </span>
                  </div>
                </button>
              ))}
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Cancel
          </button>
          <button
            onClick={() => isComplete && onConfirm(selections)}
            disabled={!isComplete}
            className={`px-6 py-2 rounded-lg font-medium ${
              isComplete
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
            }`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
} 
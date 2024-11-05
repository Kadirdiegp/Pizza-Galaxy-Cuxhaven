import React, { useState } from 'react';
import { Pizza as PizzaIcon, Star, Coffee } from 'lucide-react';
import { pizzas, drinks, sides } from '../../data/menu';
import { formatPrice } from '../../lib/utils';
import { PizzaSize } from '../../types/menu';

interface ComboSelectorProps {
  onClose: () => void;
  onConfirm: (selections: ComboSelections) => void;
}

interface ComboSelections {
  pizzas: { id: string; size: PizzaSize }[];
  side: string;
  drinks: string[];
}

export function ComboSelector({ onClose, onConfirm }: ComboSelectorProps) {
  const [selections, setSelections] = useState<ComboSelections>({
    pizzas: [{id: '', size: 'large'}, {id: '', size: 'large'}],
    side: '',
    drinks: ['', '', '', ''],
  });

  const handlePizzaSelect = (index: number, pizzaId: string) => {
    const newPizzas = [...selections.pizzas];
    newPizzas[index] = { ...newPizzas[index], id: pizzaId };
    setSelections({ ...selections, pizzas: newPizzas });
  };

  const handleDrinkSelect = (index: number, drinkId: string) => {
    const newDrinks = [...selections.drinks];
    newDrinks[index] = drinkId;
    setSelections({ ...selections, drinks: newDrinks });
  };

  const isComplete = 
    selections.pizzas.every(p => p.id) && 
    selections.side && 
    selections.drinks.every(d => d);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Customize Your Family Feast
        </h2>

        {/* First Pizza Selection */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
            Select First Pizza (Large)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pizzas.map((pizza) => (
              <button
                key={`pizza1-${pizza.id}`}
                onClick={() => handlePizzaSelect(0, pizza.id)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selections.pizzas[0].id === pizza.id
                    ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <PizzaIcon className="w-5 h-5 text-red-500" />
                  <span className="text-gray-900 dark:text-white">{pizza.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Second Pizza Selection */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
            Select Second Pizza (Large)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pizzas.map((pizza) => (
              <button
                key={`pizza2-${pizza.id}`}
                onClick={() => handlePizzaSelect(1, pizza.id)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selections.pizzas[1].id === pizza.id
                    ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <PizzaIcon className="w-5 h-5 text-red-500" />
                  <span className="text-gray-900 dark:text-white">{pizza.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Side Selection */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
            Select Side
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sides.map((side) => (
              <button
                key={side.id}
                onClick={() => setSelections({ ...selections, side: side.id })}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selections.side === side.id
                    ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-red-500" />
                  <span className="text-gray-900 dark:text-white">{side.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Drinks Selection */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
            Select 4 Drinks (Large)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {drinks
              .filter(drink => !drink.isAlcoholic)
              .map((drink) => (
                Array.from({ length: 4 }).map((_, index) => (
                  <button
                    key={`drink${index}-${drink.id}`}
                    onClick={() => handleDrinkSelect(index, drink.id)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selections.drinks[index] === drink.id
                        ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                        : 'border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Coffee className="w-5 h-5 text-red-500" />
                      <span className="text-gray-900 dark:text-white">
                        {drink.name} (Drink {index + 1})
                      </span>
                    </div>
                  </button>
                ))
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
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import { useCartStore } from '../store/cart';
import { formatPrice } from '../lib/utils';
import { CartItemSelections } from '../types/menu';
import { pizzas, drinks, sides } from '../data/menu';

export function CartPage() {
  const { items, updateQuantity, removeItem } = useCartStore();

  const cartItems = items.map((item) => ({
    ...item,
    total: item.price * item.quantity,
  }));

  const subtotal = cartItems.reduce((sum, item) => sum + item.total, 0);
  const deliveryFee = 2.99;
  const total = subtotal + deliveryFee;

  const renderSelections = (selections?: CartItemSelections) => {
    if (!selections) return null;

    return (
      <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {selections.pizzas && (
          <>
            <p>Selected Pizzas:</p>
            <ul className="ml-4 list-disc">
              {selections.pizzas.map((pizza, index) => (
                <li key={index}>
                  {pizzas.find(p => p.id === pizza.id)?.name} ({pizza.size})
                </li>
              ))}
            </ul>
          </>
        )}
        {selections.side && (
          <p className="mt-1">Side: {sides.find(s => s.id === selections.side)?.name}</p>
        )}
        {selections.drinks && selections.drinks.length > 0 && (
          <>
            <p>Drinks:</p>
            <ul className="ml-4 list-disc">
              {selections.drinks.map((drinkId, index) => (
                <li key={index}>
                  {drinks.find(d => d.id === drinkId)?.name}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-[#121212] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ShoppingCart className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-600" />
            <h2 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">
              Your cart is empty
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Start adding some delicious pizzas!
            </p>
            <div className="mt-6">
              <Link
                to="/menu"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600 transition-colors"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-6">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={`${item.id}-${item.size}-${JSON.stringify(item.selections)}`}
                    className="bg-gray-50 dark:bg-[#121212] rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {item.name}
                      </h3>
                      {item.size && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                          Size: {item.size}
                        </p>
                      )}
                      {renderSelections(item.selections)}
                      <div className="mt-2 flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.type, Math.max(1, item.quantity - 1), item.size, item.selections)}
                            className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center text-gray-900 dark:text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.type, item.quantity + 1, item.size, item.selections)}
                            className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.type, item.size, item.selections)}
                          className="p-1 text-red-500 hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="text-right self-end sm:self-center">
                      <p className="text-lg font-medium text-gray-900 dark:text-white">
                        {formatPrice(item.total)}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {formatPrice(item.price)} each
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-6 sticky top-24">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Order Summary
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                  <span className="text-gray-900 dark:text-white">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Delivery Fee</span>
                  <span className="text-gray-900 dark:text-white">{formatPrice(deliveryFee)}</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex justify-between mb-4">
                    <span className="text-lg font-medium text-gray-900 dark:text-white">Total</span>
                    <span className="text-lg font-medium text-gray-900 dark:text-white">
                      {formatPrice(total)}
                    </span>
                  </div>
                  <Link
                    to="/checkout"
                    className="block w-full bg-red-500 text-white py-3 px-4 rounded-lg text-center font-medium hover:bg-red-600 transition-colors"
                  >
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
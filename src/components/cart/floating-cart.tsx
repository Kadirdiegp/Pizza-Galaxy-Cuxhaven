import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ChevronRight, Plus, Minus } from 'lucide-react';
import { useCartStore, CartItemType } from '../../stores/cart';
import { formatPrice } from '../../utils/format';

interface CartItem {
  id: string;
  type: CartItemType;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export function FloatingCart() {
  const { items, updateQuantity, removeItem } = useCartStore();
  const [isOpen, setIsOpen] = React.useState(false);

  const totalItems = items.reduce((sum: number, item: CartItem) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum: number, item: CartItem) => sum + (item.price * item.quantity), 0);

  if (items.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Cart Preview Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition-colors relative"
      >
        <ShoppingCart className="w-6 h-6" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-white text-red-500 text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {/* Cart Preview Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white dark:bg-[#1E1E1E] rounded-lg shadow-xl">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Your Cart ({totalItems})
            </h3>
          </div>

          <div className="max-h-[60vh] overflow-y-auto">
            {items.map((item) => (
              <div
                key={`${item.id}-${item.type}`}
                className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {formatPrice(item.price)}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.type, item.quantity - 1)}
                      className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-sm font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.type, item.quantity + 1)}
                      className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4">
            <div className="flex justify-between mb-4">
              <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                {formatPrice(subtotal)}
              </span>
            </div>
            <Link
              to="/cart"
              className="w-full bg-red-500 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-red-600 transition-colors"
            >
              View Cart
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
} 
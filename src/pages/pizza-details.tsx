import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '../stores/cart';
import { useMenuStore } from '../stores/menu';
import { formatPrice } from '../lib/utils';

const SIZES = [
  { size: 'small', price: 9.99, diameter: 26 },
  { size: 'medium', price: 12.99, diameter: 32 },
  { size: 'large', price: 15.99, diameter: 38 },
] as const;

type PizzaSize = typeof SIZES[number]['size'];

export function PizzaDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCartStore();
  const { pizzas } = useMenuStore();
  const [selectedSize, setSelectedSize] = React.useState<PizzaSize>('medium');
  const [quantity, setQuantity] = React.useState(1);

  const pizza = pizzas.find(p => p.id === id);

  // Wenn keine Pizza gefunden wurde, zurück zur Menü-Seite
  if (!pizza) {
    navigate('/menu');
    return null;
  }

  const handleAddToCart = () => {
    addItem({
      id: pizza.id,
      type: 'pizza',
      name: pizza.name,
      price: pizza.prices[selectedSize],
      quantity: quantity,
      image: pizza.image
    });
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bild-Sektion */}
          <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-6">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <img
                src={pizza.image}
                alt={pizza.name}
                className="w-full h-full object-cover"
              />
              {pizza.isPopular && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Beliebt
                </div>
              )}
            </div>
          </div>

          {/* Details-Sektion */}
          <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {pizza.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {pizza.description}
            </p>

            {/* Größenauswahl */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                Größe wählen
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {SIZES.map((size) => (
                  <button
                    key={size.size}
                    onClick={() => setSelectedSize(size.size)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedSize === size.size
                        ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                        : 'border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    <span className="block text-lg font-medium text-gray-900 dark:text-white">
                      {size.diameter} cm
                    </span>
                    <span className="block text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {formatPrice(size.price)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Zutaten */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                Zutaten
              </h3>
              <div className="flex flex-wrap gap-2">
                {pizza.ingredients.map((ingredient) => (
                  <span
                    key={ingredient}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            {/* Menge und Warenkorb */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400"
                >
                  -
                </button>
                <span className="text-xl font-medium text-gray-900 dark:text-white">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>
                  {formatPrice(pizza.prices[selectedSize] * quantity)} | Zum Warenkorb
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
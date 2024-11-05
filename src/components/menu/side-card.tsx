import { useState } from 'react';
import { Flame } from 'lucide-react';
import { formatPrice } from '../../lib/utils';
import { Toast } from '../ui/toast';
import { useCartStore } from '../../store/cart';
import { Side } from '../../types/menu';

interface SideCardProps {
  side: Side;
}

export function SideCard({ side }: SideCardProps) {
  const [showToast, setShowToast] = useState(false);
  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    addItem({
      id: side.id,
      type: 'side',
      name: side.name,
      price: side.price,
      image: side.image
    });
    setShowToast(true);
  };

  return (
    <div className="bg-white dark:bg-[#121212] rounded-lg shadow-md overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={side.image}
          alt={side.name}
          className="w-full h-full object-cover"
        />
        {side.isSpicy && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium flex items-center">
            <Flame className="w-4 h-4 mr-1" />
            Scharf
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {side.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          {side.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            {formatPrice(side.price)}
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
          >
            Zum Warenkorb
          </button>
        </div>
      </div>
      <Toast
        message="Zum Warenkorb hinzugefügt!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}
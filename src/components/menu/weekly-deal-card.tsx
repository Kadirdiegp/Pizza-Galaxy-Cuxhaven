import React, { useState } from 'react';
import { Clock, Tag } from 'lucide-react';
import { formatPrice } from '../../lib/utils';
import { Toast } from '../ui/toast';
import { useCartStore } from '../../store/cart';
import { MondayMadnessSelector } from './monday-madness-selector';
import { TwoForTuesdaySelector } from './two-for-tuesday-selector';
import { FamilySundaySelector } from './family-sunday-selector';

interface WeeklyDeal {
  id: string;
  title: string;
  description: string;
  dayOfWeek: string;
  hours: string;
  image: string;
  originalPrice: number;
  dealPrice: number;
}

interface WeeklyDealCardProps {
  deal: WeeklyDeal;
}

export function WeeklyDealCard({ deal }: WeeklyDealCardProps) {
  const [showToast, setShowToast] = useState(false);
  const [showSelector, setShowSelector] = useState(false);
  const { addItem } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (deal.id === 'monday-madness' || deal.id === 'two-for-tuesday' || deal.id === 'family-sunday') {
      setShowSelector(true);
    } else {
      addItem({
        id: deal.id,
        type: 'combo',
        name: deal.title,
        price: deal.dealPrice,
        image: deal.image,
      });
      setShowToast(true);
    }
  };

  const handleMondayMadnessConfirm = (selections: MondayMadnessSelections) => {
    addItem({
      id: deal.id,
      type: 'combo',
      name: `${deal.title} - Medium Pizza`,
      price: deal.dealPrice,
      image: deal.image,
      selections
    });
    setShowSelector(false);
    setShowToast(true);
  };

  const handleTwoForTuesdayConfirm = (selections: TwoForTuesdaySelections) => {
    addItem({
      id: deal.id,
      type: 'combo',
      name: `${deal.title} - Two Pizzas`,
      price: deal.dealPrice,
      image: deal.image,
      selections
    });
    setShowSelector(false);
    setShowToast(true);
  };

  const handleFamilySundayConfirm = (selections: FamilySundaySelections) => {
    addItem({
      id: deal.id,
      type: 'combo',
      name: `${deal.title} - Pizza & Drink`,
      price: deal.dealPrice,
      image: deal.image,
      selections
    });
    setShowSelector(false);
    setShowToast(true);
  };

  return (
    <div className="bg-white dark:bg-[#121212] rounded-lg shadow-lg overflow-hidden group">
      <div className="relative aspect-[16/9]">
        <img
          src={deal.image}
          alt={deal.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          {deal.dayOfWeek}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {deal.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {deal.description}
        </p>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <Clock className="w-4 h-4 mr-2" />
          Available {deal.hours}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
              {formatPrice(deal.originalPrice)}
            </span>
            <span className="text-lg font-bold text-red-500">
              {formatPrice(deal.dealPrice)}
            </span>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-red-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors"
          >
            {deal.id === 'monday-madness' ? 'Choose Pizza' : 
             deal.id === 'two-for-tuesday' ? 'Choose Pizzas' :
             deal.id === 'family-sunday' ? 'Choose Combo' : 'Add to Cart'}
          </button>
        </div>
      </div>

      {showSelector && (
        <>
          {deal.id === 'monday-madness' && (
            <MondayMadnessSelector
              onClose={() => setShowSelector(false)}
              onConfirm={handleMondayMadnessConfirm}
              dealPrice={deal.dealPrice}
            />
          )}
          {deal.id === 'two-for-tuesday' && (
            <TwoForTuesdaySelector
              onClose={() => setShowSelector(false)}
              onConfirm={handleTwoForTuesdayConfirm}
              dealPrice={deal.dealPrice}
            />
          )}
          {deal.id === 'family-sunday' && (
            <FamilySundaySelector
              onClose={() => setShowSelector(false)}
              onConfirm={handleFamilySundayConfirm}
              dealPrice={deal.dealPrice}
            />
          )}
        </>
      )}

      <Toast
        message="Added to cart!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
} 
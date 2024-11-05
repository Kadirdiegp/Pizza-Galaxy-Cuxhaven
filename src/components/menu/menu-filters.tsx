import React from 'react';
import { PizzaCategory } from '../../types/menu';
import { cn } from '../../lib/utils';

interface MenuFiltersProps {
  selectedCategories: PizzaCategory[];
  onCategoryChange: (category: PizzaCategory) => void;
}

const categories: { value: PizzaCategory; label: string }[] = [
  { value: 'classic', label: 'Classic' },
  { value: 'specialty', label: 'Specialty' },
  { value: 'vegetarian', label: 'Vegetarian' },
  { value: 'vegan', label: 'Vegan' },
];

export function MenuFilters({ selectedCategories, onCategoryChange }: MenuFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onCategoryChange(value)}
          className={cn(
            'px-6 py-2 rounded-lg text-sm font-medium transition-all',
            'bg-white dark:bg-[#121212] border-2',
            selectedCategories.includes(value)
              ? 'border-red-500 text-red-500'
              : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-red-200 dark:hover:border-red-800'
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
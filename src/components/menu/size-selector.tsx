import React from 'react';
import { PizzaSize } from '../../types/menu';
import { cn } from '../../lib/utils';

interface SizeSelectorProps {
  selectedSize: PizzaSize;
  onSizeChange: (size: PizzaSize) => void;
}

const sizes: { value: PizzaSize; label: string }[] = [
  { value: 'small', label: 'Small (25cm)' },
  { value: 'medium', label: 'Medium (30cm)' },
  { value: 'large', label: 'Large (35cm)' },
];

export function SizeSelector({ selectedSize, onSizeChange }: SizeSelectorProps) {
  return (
    <div className="flex gap-4">
      {sizes.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onSizeChange(value)}
          className={cn(
            'flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all',
            selectedSize === value
              ? 'bg-red-500 text-white ring-2 ring-red-500 ring-offset-2'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
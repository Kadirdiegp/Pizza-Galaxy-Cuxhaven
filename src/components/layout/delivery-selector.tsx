import React from 'react';
import { MapPin, Clock } from 'lucide-react';

interface DeliverySelectorProps {
  mode: 'delivery' | 'pickup';
  onModeChange: (mode: 'delivery' | 'pickup') => void;
}

export function DeliverySelector({ mode, onModeChange }: DeliverySelectorProps) {
  return (
    <div className="bg-white dark:bg-[#1E1E1E] shadow-lg rounded-lg p-1 flex">
      <button
        onClick={() => onModeChange('delivery')}
        className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-md transition-all ${
          mode === 'delivery'
            ? 'bg-red-500 text-white'
            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
        }`}
      >
        <MapPin className="w-5 h-5" />
        <span className="font-medium">Delivery</span>
      </button>
      <button
        onClick={() => onModeChange('pickup')}
        className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-md transition-all ${
          mode === 'pickup'
            ? 'bg-red-500 text-white'
            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
        }`}
      >
        <Clock className="w-5 h-5" />
        <span className="font-medium">Pickup</span>
      </button>
    </div>
  );
} 
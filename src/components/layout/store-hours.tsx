import React from 'react';
import { Clock } from 'lucide-react';

interface StoreHoursProps {
  isOpen: boolean;
  openingTime: string;
  closingTime: string;
}

export function StoreHours({ isOpen, openingTime, closingTime }: StoreHoursProps) {
  return (
    <div className="bg-white dark:bg-[#1E1E1E] rounded-lg shadow-sm p-3 flex items-center gap-3">
      <div
        className={`w-3 h-3 rounded-full ${
          isOpen ? 'bg-green-500' : 'bg-red-500'
        }`}
      />
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4 text-gray-400" />
        <span className="text-sm text-gray-600 dark:text-gray-300">
          {isOpen ? (
            <>
              Open until {closingTime}
            </>
          ) : (
            <>
              Closed · Opens at {openingTime}
            </>
          )}
        </span>
      </div>
    </div>
  );
} 
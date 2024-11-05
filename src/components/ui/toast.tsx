import React, { useEffect } from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export function Toast({ message, isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <div
      className={cn(
        'fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 transition-all duration-300 transform',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
      )}
    >
      <div className="bg-white/20 rounded-full p-1">
        <Check className="w-4 h-4" />
      </div>
      {message}
      <ShoppingCart className="w-4 h-4 ml-2" />
    </div>
  );
} 
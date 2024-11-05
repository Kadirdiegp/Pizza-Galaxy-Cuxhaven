import React from 'react';
import { MobileNav } from './mobile-nav';
import { useStoreHours } from '../../hooks/useStoreHours';
import { MapPin, Clock } from 'lucide-react';
import { AddressSelector } from './address-selector';
import { useDeliveryStore } from '../../stores/delivery';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [deliveryMode, setDeliveryMode] = React.useState<'delivery' | 'pickup'>('delivery');
  const { isOpen, closingTime } = useStoreHours();

  const handleAddressSelect = (address: string) => {
    useDeliveryStore.getState().setAddress(address);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] transition-colors flex flex-col">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-white dark:bg-[#121212] shadow-lg dark:shadow-none transition-colors">
        {/* Navigation with Logo */}
        <MobileNav />

        {/* Delivery Controls */}
        <div className="px-4 py-3 space-y-3">
          {/* Delivery/Pickup Toggle */}
          <div className="grid grid-cols-2 gap-2 bg-gray-100 dark:bg-[#1E1E1E] p-1 rounded-lg">
            <button
              onClick={() => setDeliveryMode('delivery')}
              className={`py-3 rounded-md flex items-center justify-center gap-2 transition-colors ${
                deliveryMode === 'delivery'
                  ? 'bg-red-500 text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>Delivery</span>
            </button>
            <button
              onClick={() => setDeliveryMode('pickup')}
              className={`py-3 rounded-md flex items-center justify-center gap-2 transition-colors ${
                deliveryMode === 'pickup'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>Pickup</span>
            </button>
          </div>

          {/* Address Selection */}
          {deliveryMode === 'delivery' && (
            <AddressSelector onAddressSelect={handleAddressSelect} />
          )}

          {/* Store Hours */}
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'}`} />
            <span>
              {isOpen ? `Open until ${closingTime}` : 'Currently Closed'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 pt-[160px] transition-colors">
        {children}
      </main>
    </div>
  );
} 
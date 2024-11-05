import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface DeliveryStore {
  address: string;
  setAddress: (address: string) => void;
  clearAddress: () => void;
}

export const useDeliveryStore = create<DeliveryStore>()(
  persist(
    (set) => ({
      address: '',
      setAddress: (address) => set({ address }),
      clearAddress: () => set({ address: '' }),
    }),
    {
      name: 'delivery-storage',
    }
  )
); 
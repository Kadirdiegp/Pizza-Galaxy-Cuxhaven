import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, CartItemType } from '../types/menu';

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string, type: CartItemType, size?: string, selections?: any) => void;
  updateQuantity: (id: string, type: CartItemType, quantity: number, size?: string, selections?: any) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) => set((state) => {
        const existingItemIndex = state.items.findIndex(
          (i) => 
            i.id === item.id && 
            i.type === item.type && 
            i.size === item.size &&
            JSON.stringify(i.selections) === JSON.stringify(item.selections)
        );

        if (existingItemIndex > -1) {
          const newItems = [...state.items];
          newItems[existingItemIndex].quantity += 1;
          return { items: newItems };
        }

        return {
          items: [...state.items, { ...item, quantity: 1 }],
        };
      }),
      removeItem: (id, type, size, selections) =>
        set((state) => ({
          items: state.items.filter(
            (item) => !(
              item.id === id && 
              item.type === type && 
              item.size === size &&
              JSON.stringify(item.selections) === JSON.stringify(selections)
            )
          ),
        })),
      updateQuantity: (id, type, quantity, size, selections) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id && 
            item.type === type && 
            item.size === size &&
            JSON.stringify(item.selections) === JSON.stringify(selections)
              ? { ...item, quantity }
              : item
          ),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
    }
  )
);
import { create } from 'zustand';
import { CartItem } from '../types/cart';

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeItem: (id: string, type: CartItem['type']) => void;
  updateQuantity: (id: string, type: CartItem['type'], quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (item) => set((state) => {
    const existingItem = state.items.find(
      (i) => i.id === item.id && i.type === item.type && i.size === item.size
    );

    if (existingItem) {
      return {
        items: state.items.map((i) =>
          i.id === item.id && i.type === item.type && i.size === item.size
            ? { ...i, quantity: i.quantity + (item.quantity || 1) }
            : i
        ),
      };
    }

    return {
      items: [...state.items, { ...item, quantity: item.quantity || 1 }],
    };
  }),
  removeItem: (id, type) => set((state) => ({
    items: state.items.filter(item => !(item.id === id && item.type === type)),
  })),
  updateQuantity: (id, type, quantity) => set((state) => {
    if (quantity <= 0) {
      return {
        items: state.items.filter(item => !(item.id === id && item.type === type)),
      };
    }

    return {
      items: state.items.map(item =>
        item.id === id && item.type === type
          ? { ...item, quantity }
          : item
      ),
    };
  }),
  clearCart: () => set({ items: [] }),
})); 
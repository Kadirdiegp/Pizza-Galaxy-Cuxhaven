export type PizzaSize = 'small' | 'medium' | 'large';
export type PizzaCategory = 'classic' | 'specialty' | 'vegetarian' | 'vegan';
export type DrinkSize = 'small' | 'large';
export type AlcoholType = 'beer' | 'wine';
export type CartItemType = 'pizza' | 'drink' | 'dessert' | 'side' | 'combo' | 'fingerfood' | 'kidspack';

export interface Pizza {
  id: string;
  name: string;
  description: string;
  image: string;
  prices: {
    small: number;
    medium: number;
    large: number;
  };
  ingredients: string[];
  isPopular?: boolean;
  spicyLevel?: number;
  categories: string[];
}

export interface Drink {
  id: string;
  name: string;
  description: string;
  image: string;
  prices: {
    small: number;
    large: number;
  };
  isAlcoholic: boolean;
  alcoholType?: AlcoholType;
  alcoholContent?: number;
}

export interface Dessert {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface SideOrder {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
}

export interface Combo {
  id: string;
  name: string;
  description: string;
  items: string[];
  originalPrice: number;
  comboPrice: number;
  image: string;
  availableUntil?: string;
}

export interface FingerFood {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  pieces?: number;
}

export interface KidsPack {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  includes: string[];
  forAge?: string;
}

export interface CartItemSelections {
  pizzas?: { id: string; size: PizzaSize }[];
  side?: string;
  drinks?: string[];
  pizzaId?: string;
  size?: PizzaSize;
}

export interface CartItem {
  id: string;
  type: CartItemType;
  name: string;
  size?: string;
  quantity: number;
  price: number;
  image?: string;
  selections?: CartItemSelections;
}

export interface Side {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  isSpicy?: boolean;
}
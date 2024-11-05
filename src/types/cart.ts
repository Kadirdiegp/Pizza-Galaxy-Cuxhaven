export interface CartItem {
  id: string;
  type: 'pizza' | 'side' | 'drink' | 'dessert';
  name: string;
  price: number;
  quantity: number;
  image: string;
  size?: 'small' | 'medium' | 'large';
} 
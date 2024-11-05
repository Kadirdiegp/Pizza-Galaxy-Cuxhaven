import { Pizza } from '../types/menu';

export const pizzas: Pizza[] = [
  {
    id: 'margherita-supreme',
    name: 'Margherita Supreme',
    description: 'Fresh basil, premium mozzarella, and our signature tomato sauce on a perfectly crispy crust',
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&q=80',
    categories: ['classic', 'vegetarian'],
    prices: {
      small: 9.99,
      medium: 12.99,
      large: 15.99,
    },
    ingredients: ['Tomato Sauce', 'Fresh Mozzarella', 'Basil', 'Extra Virgin Olive Oil'],
    isPopular: true,
  },
  {
    id: 'cosmic-veggie',
    name: 'Cosmic Veggie',
    description: 'A galaxy of fresh vegetables including bell peppers, mushrooms, olives, and onions',
    image: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&q=80',
    categories: ['specialty', 'vegetarian', 'vegan'],
    prices: {
      small: 11.99,
      medium: 14.99,
      large: 17.99,
    },
    ingredients: ['Tomato Sauce', 'Vegan Cheese', 'Bell Peppers', 'Mushrooms', 'Black Olives', 'Red Onions', 'Cherry Tomatoes'],
    isGlutenFree: true,
  },
  {
    id: 'pepperoni-blast',
    name: 'Pepperoni Blast',
    description: 'Double pepperoni and extra cheese for the ultimate pizza experience',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80',
    categories: ['classic'],
    prices: {
      small: 10.99,
      medium: 13.99,
      large: 16.99,
    },
    ingredients: ['Tomato Sauce', 'Mozzarella', 'Double Pepperoni'],
    spicyLevel: 1,
    isPopular: true,
  },
];
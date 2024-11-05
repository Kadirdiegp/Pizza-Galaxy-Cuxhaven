import { create } from 'zustand';

// Interfaces für alle Produkttypen
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

export interface Dessert {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  isPopular?: boolean;
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
  alcoholType?: 'beer' | 'wine';
  alcoholContent?: number;
}

export interface Side {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  isSpicy?: boolean;
}

interface MenuStore {
  pizzas: Pizza[];
  desserts: Dessert[];
  drinks: Drink[];
  sides: Side[];
  selectedPizza: Pizza | null;
  setSelectedPizza: (id: string) => void;
}

// Mock-Daten für alle Kategorien
const PIZZAS: Pizza[] = [
  {
    id: '1',
    name: 'Margherita',
    description: 'Die klassische italienische Pizza mit frischen Tomaten, Mozzarella und Basilikum',
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&q=80',
    prices: { small: 9.99, medium: 12.99, large: 15.99 },
    ingredients: ['Tomatensoße', 'Mozzarella', 'Basilikum', 'Olivenöl'],
    isPopular: true,
    categories: ['Klassisch', 'Vegetarisch'],
  },
  {
    id: '2',
    name: 'Salami',
    description: 'Klassische Pizza mit würziger Salami und Mozzarella',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80',
    prices: { small: 11.99, medium: 14.99, large: 17.99 },
    ingredients: ['Tomatensoße', 'Mozzarella', 'Salami', 'Oregano'],
    isPopular: true,
    categories: ['Klassisch'],
  },
  {
    id: '3',
    name: 'Prosciutto e Funghi',
    description: 'Pizza mit Schinken und frischen Champignons',
    image: 'https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?auto=format&fit=crop&q=80',
    prices: { small: 11.99, medium: 14.99, large: 17.99 },
    ingredients: ['Tomatensoße', 'Mozzarella', 'Schinken', 'Champignons'],
    isPopular: false,
    categories: ['Klassisch'],
  },
  {
    id: '4',
    name: 'Diavola',
    description: 'Scharfe Pizza mit Salami, Peperoni und Chilischoten',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80',
    prices: { small: 12.99, medium: 15.99, large: 18.99 },
    ingredients: ['Tomatensoße', 'Mozzarella', 'Scharfe Salami', 'Peperoni', 'Chilischoten'],
    isPopular: true,
    spicyLevel: 3,
    categories: ['Klassisch'],
  },
  {
    id: '5',
    name: 'Quattro Formaggi',
    description: 'Pizza mit vier verschiedenen Käsesorten',
    image: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&q=80',
    prices: { small: 12.99, medium: 15.99, large: 18.99 },
    ingredients: ['Tomatensoße', 'Mozzarella', 'Gorgonzola', 'Parmesan', 'Pecorino'],
    isPopular: false,
    categories: ['Vegetarisch'],
  },
  {
    id: '6',
    name: 'Vegetariana',
    description: 'Vegetarische Pizza mit frischem Gemüse',
    image: 'https://images.unsplash.com/photo-1576458088443-04a19bb13da6?auto=format&fit=crop&q=80',
    prices: { small: 11.99, medium: 14.99, large: 17.99 },
    ingredients: ['Tomatensoße', 'Mozzarella', 'Paprika', 'Zucchini', 'Auberginen', 'Champignons'],
    isPopular: false,
    categories: ['Vegetarisch'],
  },
  {
    id: '7',
    name: 'Capricciosa',
    description: 'Klassische italienische Pizza mit Schinken, Champignons, Artischocken und Oliven',
    image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80',
    prices: { small: 12.99, medium: 15.99, large: 18.99 },
    ingredients: ['Tomatensoße', 'Mozzarella', 'Schinken', 'Champignons', 'Artischocken', 'Oliven'],
    isPopular: true,
    categories: ['Klassisch'],
  },
  {
    id: '8',
    name: 'Tonno',
    description: 'Pizza mit Thunfisch und roten Zwiebeln',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80',
    prices: { small: 11.99, medium: 14.99, large: 17.99 },
    ingredients: ['Tomatensoße', 'Mozzarella', 'Thunfisch', 'Rote Zwiebeln'],
    isPopular: false,
    categories: ['Klassisch'],
  },
  {
    id: '9',
    name: 'Hawaii',
    description: 'Pizza mit Schinken und Ananas',
    image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&q=80',
    prices: { small: 11.99, medium: 14.99, large: 17.99 },
    ingredients: ['Tomatensoße', 'Mozzarella', 'Schinken', 'Ananas'],
    isPopular: false,
    categories: ['Klassisch'],
  },
  {
    id: '10',
    name: 'BBQ Chicken',
    description: 'Pizza mit gegrilltem Hähnchen und BBQ-Sauce',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80',
    prices: { small: 12.99, medium: 15.99, large: 18.99 },
    ingredients: ['BBQ-Sauce', 'Mozzarella', 'Gegrilltes Hähnchen', 'Rote Zwiebeln', 'Paprika'],
    isPopular: true,
    categories: ['Klassisch'],
  }
];

const DESSERTS: Dessert[] = [
  {
    id: 'd1',
    name: 'Tiramisu',
    description: 'Hausgemachtes italienisches Tiramisu mit Mascarpone und Espresso',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80',
    price: 4.99,
    isPopular: true,
  },
  {
    id: 'd2',
    name: 'Panna Cotta',
    description: 'Cremige Panna Cotta mit Waldbeeren-Sauce',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80',
    price: 4.49,
    isPopular: false,
  },
  {
    id: 'd3',
    name: 'Schokoladen Lava Cake',
    description: 'Warmer Schokoladenkuchen mit flüssigem Kern, serviert mit Vanilleeis',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80',
    price: 5.99,
    isPopular: true,
  }
];

const DRINKS: Drink[] = [
  {
    id: 'dr1',
    name: 'Cola',
    description: 'Eisgekühlte Cola',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80',
    prices: {
      small: 2.99,
      large: 3.99
    },
    isAlcoholic: false,
  },
  {
    id: 'dr2',
    name: 'Hausgemachte Limonade',
    description: 'Erfrischende Limonade mit frischen Zitronen',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80',
    prices: {
      small: 3.49,
      large: 4.49
    },
    isAlcoholic: false,
  },
  {
    id: 'dr3',
    name: 'Italienisches Bier',
    description: 'Peroni Nastro Azzurro',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&q=80',
    prices: {
      small: 3.99,
      large: 5.99
    },
    isAlcoholic: true,
    alcoholType: 'beer',
    alcoholContent: 5.2,
  }
];

const SIDES: Side[] = [
  {
    id: 's1',
    name: 'Pizzabrötchen',
    description: 'Frische Pizzabrötchen mit Knoblauchbutter und Kräutern',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80',
    price: 4.99
  },
  {
    id: 's2',
    name: 'Chicken Wings',
    description: 'Knusprige Chicken Wings mit BBQ-Sauce',
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&q=80',
    price: 6.99,
    isSpicy: true
  },
  {
    id: 's3',
    name: 'Bruschetta',
    description: 'Geröstetes Brot mit frischen Tomaten, Knoblauch und Basilikum',
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&q=80',
    price: 5.49
  },
  {
    id: 's4',
    name: 'Mozzarella Sticks',
    description: 'Knusprig panierte Mozzarella-Stäbchen mit Marinara-Sauce',
    image: 'https://images.unsplash.com/photo-1531749668029-2db88e4276c7?auto=format&fit=crop&q=80',
    price: 5.99
  },
  {
    id: 's5',
    name: 'Caesar Salat',
    description: 'Frischer Römersalat mit Croutons, Parmesan und Caesar-Dressing',
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80',
    price: 7.99
  }
];

export const useMenuStore = create<MenuStore>((set) => ({
  pizzas: PIZZAS,
  desserts: DESSERTS,
  drinks: DRINKS,
  sides: SIDES,
  selectedPizza: null,
  setSelectedPizza: (id) => set((state) => ({
    selectedPizza: state.pizzas.find(pizza => pizza.id === id) || null
  }))
})); 
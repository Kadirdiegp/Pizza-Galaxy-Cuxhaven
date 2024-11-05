import { Pizza, Drink, Dessert, SideOrder, Combo, FingerFood, KidsPack } from '../types/menu';

export const pizzas: Pizza[] = [
  {
    id: 'margherita-supreme',
    name: 'Margherita Supreme',
    description: 'Fresh basil, premium mozzarella, and our signature tomato sauce on a perfectly crispy crust',
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&q=80',
    categories: ['classic', 'vegetarian'],
    prices: { small: 9.99, medium: 12.99, large: 15.99 },
    ingredients: ['Tomato Sauce', 'Fresh Mozzarella', 'Basil', 'Extra Virgin Olive Oil'],
    isPopular: true,
  },
  {
    id: 'pepperoni-feast',
    name: 'Pepperoni Feast',
    description: 'Double pepperoni and extra cheese for the ultimate pizza experience',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80',
    categories: ['classic'],
    prices: { small: 11.99, medium: 14.99, large: 17.99 },
    ingredients: ['Tomato Sauce', 'Mozzarella', 'Double Pepperoni'],
    spicyLevel: 1,
    isPopular: true,
  },
  {
    id: 'quattro-formaggi',
    name: 'Quattro Formaggi',
    description: 'A blend of four premium cheeses: mozzarella, gorgonzola, parmesan, and fontina',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80',
    categories: ['specialty', 'vegetarian'],
    prices: { small: 12.99, medium: 15.99, large: 18.99 },
    ingredients: ['Mozzarella', 'Gorgonzola', 'Parmesan', 'Fontina'],
    isPopular: true,
  },
  {
    id: 'mediterranean-delight',
    name: 'Mediterranean Delight',
    description: 'Kalamata olives, feta cheese, sun-dried tomatoes, and fresh oregano',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80',
    categories: ['specialty', 'vegetarian'],
    prices: { small: 11.99, medium: 14.99, large: 17.99 },
    ingredients: ['Tomato Sauce', 'Feta', 'Kalamata Olives', 'Sun-dried Tomatoes', 'Oregano'],
  },
  {
    id: 'spicy-diavola',
    name: 'Spicy Diavola',
    description: 'Spicy salami, chili peppers, and red onions for heat lovers',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&q=80',
    categories: ['specialty'],
    prices: { small: 12.99, medium: 15.99, large: 18.99 },
    ingredients: ['Tomato Sauce', 'Mozzarella', 'Spicy Salami', 'Chili Peppers', 'Red Onions'],
    spicyLevel: 3,
  },
];

export const drinks: Drink[] = [
  {
    id: 'cola',
    name: 'Coca Cola',
    description: 'Classic refreshing cola',
    image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&q=80',
    prices: { small: 2.49, large: 3.49 },
    isAlcoholic: false
  },
  {
    id: 'fanta',
    name: 'Fanta',
    description: 'Orange-flavored soft drink',
    image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&q=80',
    prices: { small: 2.49, large: 3.49 },
    isAlcoholic: false
  },
  {
    id: 'sprite',
    name: 'Sprite',
    description: 'Lemon-lime refreshment',
    image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&q=80',
    prices: { small: 2.49, large: 3.49 },
    isAlcoholic: false
  },
  {
    id: 'mezzo-mix',
    name: 'Mezzo Mix',
    description: 'Cola with orange flavor',
    image: 'https://images.unsplash.com/photo-1543253687-c931c8e01820?auto=format&fit=crop&q=80',
    prices: { small: 2.49, large: 3.49 },
    isAlcoholic: false
  },
  {
    id: 'water-still',
    name: 'Still Water',
    description: 'Pure natural spring water',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80',
    prices: { small: 1.99, large: 2.99 },
    isAlcoholic: false
  },
  {
    id: 'water-sparkling',
    name: 'Sparkling Water',
    description: 'Refreshing carbonated water',
    image: 'https://images.unsplash.com/photo-1605192554106-d549b1b975cd?auto=format&fit=crop&q=80',
    prices: { small: 1.99, large: 2.99 },
    isAlcoholic: false
  },
  {
    id: 'apple-juice',
    name: 'Apple Juice',
    description: 'Natural apple juice',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&q=80',
    prices: { small: 2.49, large: 3.49 },
    isAlcoholic: false
  },
  {
    id: 'orange-juice',
    name: 'Orange Juice',
    description: 'Fresh orange juice',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&q=80',
    prices: { small: 2.49, large: 3.49 },
    isAlcoholic: false
  },
  {
    id: 'beer',
    name: 'Pilsner',
    description: 'Classic German beer',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&q=80',
    prices: { small: 3.49, large: 4.49 },
    isAlcoholic: true,
    alcoholType: 'beer',
    alcoholContent: 4.9
  },
  {
    id: 'wine-red',
    name: 'House Red Wine',
    description: 'Italian red wine',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80',
    prices: { small: 4.49, large: 5.99 },
    isAlcoholic: true,
    alcoholType: 'wine',
    alcoholContent: 12.5
  },
  {
    id: 'wine-white',
    name: 'House White Wine',
    description: 'Italian white wine',
    image: 'https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?auto=format&fit=crop&q=80',
    prices: { small: 4.49, large: 5.99 },
    isAlcoholic: true,
    alcoholType: 'wine',
    alcoholContent: 11.5
  },
  {
    id: 'lemonade',
    name: 'Fresh Lemonade',
    description: 'Homemade lemonade with fresh lemons',
    image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&q=80',
    prices: { small: 2.99, large: 3.99 },
    isAlcoholic: false
  },
  {
    id: 'iced-tea',
    name: 'Iced Tea',
    description: 'Refreshing peach iced tea',
    image: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&q=80',
    prices: { small: 2.49, large: 3.49 },
    isAlcoholic: false
  },
  {
    id: 'energy-drink',
    name: 'Energy Drink',
    description: 'Energizing beverage',
    image: 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&q=80',
    prices: { small: 2.99, large: 3.99 },
    isAlcoholic: false
  },
  {
    id: 'ginger-ale',
    name: 'Ginger Ale',
    description: 'Classic ginger ale',
    image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&q=80',
    prices: { small: 2.49, large: 3.49 },
    isAlcoholic: false
  }
];

export const desserts: Dessert[] = [
  {
    id: 'tiramisu',
    name: 'Classic Tiramisu',
    description: 'Traditional Italian dessert with coffee-soaked ladyfingers and mascarpone cream',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80',
  },
  {
    id: 'chocolate-lava',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a molten center, served with vanilla ice cream',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&q=80',
  },
  {
    id: 'cannoli',
    name: 'Sicilian Cannoli',
    description: 'Crispy pastry tubes filled with sweet ricotta cream and chocolate chips',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1607920592519-bab2a80f2c74?auto=format&fit=crop&q=80',
  },
  {
    id: 'gelato',
    name: 'Artisanal Gelato',
    description: 'Choice of three scoops: vanilla, chocolate, pistachio, or strawberry',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&q=80',
  },
];

export const sides: SideOrder[] = [
  {
    id: 'garlic-knots',
    name: 'Garlic Knots',
    description: 'Fresh-baked knots brushed with garlic butter and herbs',
    price: 4.99,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1573915997161-5f7b22c5d361?auto=format&fit=crop&q=80',
  },
  {
    id: 'caesar-salad',
    name: 'Caesar Salad',
    description: 'Crisp romaine lettuce, parmesan, croutons, and our house-made Caesar dressing',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80',
  },
  {
    id: 'caprese-salad',
    name: 'Caprese Salad',
    description: 'Fresh mozzarella, tomatoes, and basil with balsamic glaze',
    price: 8.99,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&q=80',
  },
  {
    id: 'buffalo-wings',
    name: 'Buffalo Wings',
    description: 'Crispy chicken wings tossed in spicy buffalo sauce',
    price: 9.99,
    isSpicy: true,
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&q=80',
  },
  {
    id: 'mozzarella-sticks',
    name: 'Mozzarella Sticks',
    description: 'Breaded mozzarella sticks with marinara sauce',
    price: 6.99,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1531749668029-2db88e4276c7?auto=format&fit=crop&q=80',
  },
];

export const combos: Combo[] = [
  {
    id: 'family-feast',
    name: 'Family Feast',
    description: '2 Large Pizzas + 1 Side + 4 Drinks',
    items: ['2 Large Pizzas of Choice', 'Garlic Knots', '4 Large Soft Drinks'],
    originalPrice: 59.99,
    comboPrice: 49.99,
    image: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&q=80',
  },
];

export const fingerFoods: FingerFood[] = [
  {
    id: 'chicken-wings',
    name: 'Spicy Chicken Wings',
    description: '8 crispy chicken wings with BBQ or hot sauce',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1608039858788-667850f129f6?auto=format&fit=crop&q=80',
    isSpicy: true,
    pieces: 8
  },
  {
    id: 'mozzarella-sticks',
    name: 'Mozzarella Sticks',
    description: 'Crispy breaded mozzarella sticks with marinara sauce',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1531749668029-2db88e4276c7?auto=format&fit=crop&q=80',
    isVegetarian: true,
    pieces: 6
  },
  {
    id: 'garlic-bread',
    name: 'Garlic Bread',
    description: 'Fresh baked bread with garlic butter and herbs',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1573140401552-3fab0b24427f?auto=format&fit=crop&q=80',
    isVegetarian: true,
    pieces: 4
  },
  {
    id: 'onion-rings',
    name: 'Crispy Onion Rings',
    description: 'Golden fried onion rings with dipping sauce',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&q=80',
    isVegetarian: true,
    pieces: 10
  },
  {
    id: 'jalapeno-poppers',
    name: 'Jalapeño Poppers',
    description: 'Breaded jalapeños filled with cream cheese',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1631501070033-32b0321a7e0f?auto=format&fit=crop&q=80',
    isVegetarian: true,
    isSpicy: true,
    pieces: 6
  }
];

export const kidsPacks: KidsPack[] = [
  {
    id: 'mini-pizza-pack',
    name: 'Mini Pizza Pack',
    description: 'Kid-sized pizza with choice of 2 toppings',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80',
    includes: [
      'Small Pizza (6")',
      'Small Drink',
      'Cookie',
      'Surprise Toy'
    ],
    forAge: '4-10'
  },
  {
    id: 'chicken-nuggets-pack',
    name: 'Nuggets Pack',
    description: 'Crispy chicken nuggets with fries',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80',
    includes: [
      '6 Chicken Nuggets',
      'Small Fries',
      'Small Drink',
      'Surprise Toy'
    ],
    forAge: '4-10'
  },
  {
    id: 'pasta-pack',
    name: 'Kids Pasta Pack',
    description: 'Spaghetti with tomato sauce or butter',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80',
    includes: [
      'Kids Pasta',
      'Small Garlic Bread',
      'Small Drink',
      'Ice Cream Cup'
    ],
    forAge: '4-10'
  }
];
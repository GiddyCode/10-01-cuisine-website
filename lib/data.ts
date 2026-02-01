import type { Category, Dish, DeliveryArea, ProteinOption, AddOnOption, PortionOption } from './types';

export const categories: Category[] = [
  { id: 'popular', name: 'Top Sellers', icon: '🔥' },
  { id: 'rice', name: 'Rice Dishes', icon: '🍚' },
  { id: 'swallow', name: 'Swallow & Soups', icon: '🥣' },
  { id: 'pasta', name: 'Pasta & Noodles', icon: '🍝' },
  { id: 'proteins', name: 'Proteins', icon: '🍗' },
  { id: 'sides', name: 'Sides & Extras', icon: '🥗' },
  { id: 'drinks', name: 'Drinks', icon: '🥤' },
];

export const standardPortions: PortionOption[] = [
  { id: 'regular', name: 'Regular', priceModifier: 0 },
  { id: '3-litres', name: '3 Litres (3 proteins)', priceModifier: 0 },
  { id: '5-litres', name: '5 Litres (6 proteins)', priceModifier: 5000 },
];

export const standardProteins: ProteinOption[] = [
  { id: 'chicken', name: 'Chicken', price: 1000 },
  { id: 'beef', name: 'Beef', price: 400 },
  { id: 'goatmeat', name: 'Goatmeat', price: 500 },
  { id: 'fish', name: 'Fish (Titus)', price: 800 },
  { id: 'turkey', name: 'Turkey Wings', price: 1500 },
  { id: 'stockfish', name: 'Stockfish', price: 600 },
];

export const standardAddOns: AddOnOption[] = [
  { id: 'moimoi', name: 'Moi-Moi', price: 500 },
  { id: 'plantain', name: 'Fried Plantain', price: 300 },
  { id: 'coleslaw', name: 'Coleslaw', price: 300 },
  { id: 'extra-stew', name: 'Extra Stew', price: 500 },
  { id: 'egg', name: 'Boiled Egg', price: 200 },
];

export const spiceLevels = ['Mild', 'Medium', 'Hot', 'Extra Hot'];

export const dishes: Dish[] = [
  // Rice Dishes
  {
    id: 'signature-rice',
    name: '10:01 Signature Rice',
    description: 'Our special basmati rice with secret flavors, veggies, and your choice of protein strips',
    basePrice: 2000,
    categoryId: 'rice',
    image: '/images/dishes/jollof-rice.jpg',
    options: {
      portions: [
        { id: 'single', name: 'Single Portion', priceModifier: 0 },
        { id: 'double', name: 'Double Portion', priceModifier: 1000 },
      ],
      proteins: standardProteins,
      addOns: standardAddOns,
      spiceLevels,
    },
    popular: true,
  },
  {
    id: 'jollof-rice',
    name: 'Jollof Rice',
    description: 'Classic Nigerian party jollof rice with perfectly seasoned smoky flavor',
    basePrice: 10000,
    categoryId: 'rice',
    image: '/images/dishes/jollof-rice.jpg',
    options: {
      portions: standardPortions,
      proteins: standardProteins,
      addOns: standardAddOns,
      spiceLevels,
    },
    popular: true,
  },
  {
    id: 'coconut-rice',
    name: 'Coconut Rice',
    description: 'Fragrant rice cooked in rich coconut milk with aromatic spices',
    basePrice: 10000,
    categoryId: 'rice',
    image: '/images/dishes/coconut-rice.jpg',
    options: {
      portions: standardPortions,
      proteins: standardProteins,
      addOns: standardAddOns,
      spiceLevels,
    },
  },
  {
    id: 'fried-rice',
    name: 'Chinese Fried Rice',
    description: 'Stir-fried rice with mixed vegetables, eggs, and savory seasonings',
    basePrice: 10000,
    categoryId: 'rice',
    image: '/images/dishes/fried-rice.jpg',
    options: {
      portions: standardPortions,
      proteins: standardProteins,
      addOns: standardAddOns,
      spiceLevels,
    },
  },
  {
    id: 'native-rice',
    name: 'Native Rice',
    description: 'Traditional basmati rice with dry fish and eggs, rich in local flavors',
    basePrice: 1500,
    categoryId: 'rice',
    image: '/images/dishes/native-rice.jpg',
    options: {
      portions: [
        { id: 'single', name: 'Single Portion', priceModifier: 0 },
        { id: 'double', name: 'Double Portion', priceModifier: 800 },
      ],
      proteins: standardProteins,
      addOns: standardAddOns,
      spiceLevels,
    },
  },
  {
    id: 'asun-rice',
    name: 'Asun Rice',
    description: 'Spicy goatmeat with basmati rice and dry fish - a flavor explosion',
    basePrice: 1800,
    categoryId: 'rice',
    image: '/images/dishes/asun-rice.jpg',
    options: {
      portions: [
        { id: 'single', name: 'Single Portion', priceModifier: 0 },
        { id: 'double', name: 'Double Portion', priceModifier: 1000 },
      ],
      addOns: standardAddOns,
      spiceLevels,
    },
    popular: true,
  },
  // Soups & Swallow
  {
    id: 'egusi-soup',
    name: 'Egusi Soup',
    description: 'Rich melon seed soup with assorted meat, stockfish, and leafy vegetables',
    basePrice: 20000,
    categoryId: 'swallow',
    image: '/images/dishes/egusi-soup.jpg',
    options: {
      portions: [
        { id: '3-litres', name: '3 Litres', priceModifier: 0 },
        { id: '5-litres', name: '5 Litres', priceModifier: 5000 },
      ],
      spiceLevels,
    },
    popular: true,
  },
  {
    id: 'ogbono-soup',
    name: 'Ogbono Soup',
    description: 'Draw soup made with ground ogbono seeds, rich in texture and flavor',
    basePrice: 20000,
    categoryId: 'swallow',
    image: '/images/dishes/ogbono-soup.jpg',
    options: {
      portions: [
        { id: '3-litres', name: '3 Litres', priceModifier: 0 },
        { id: '5-litres', name: '5 Litres', priceModifier: 5000 },
      ],
      spiceLevels,
    },
  },
  {
    id: 'afang-soup',
    name: 'Afang Soup',
    description: 'Delicious Cross River soup with waterleaf and afang leaves',
    basePrice: 20000,
    categoryId: 'swallow',
    image: '/images/dishes/afang-soup.jpg',
    options: {
      portions: [
        { id: '3-litres', name: '3 Litres', priceModifier: 0 },
        { id: '5-litres', name: '5 Litres', priceModifier: 5000 },
      ],
      spiceLevels,
    },
  },
  {
    id: 'banga-soup',
    name: 'Banga Soup',
    description: 'Palm fruit soup - a Delta specialty with fresh fish and spices',
    basePrice: 20000,
    categoryId: 'swallow',
    image: '/images/dishes/banga-soup.jpg',
    options: {
      portions: [
        { id: '3-litres', name: '3 Litres', priceModifier: 0 },
        { id: '5-litres', name: '5 Litres', priceModifier: 5000 },
      ],
      spiceLevels,
    },
  },
  {
    id: 'pepper-soup',
    name: 'Pepper Soup',
    description: 'Spicy aromatic soup with catfish, chicken or goatmeat. Served with yam, potatoes or plantain',
    basePrice: 20000,
    categoryId: 'swallow',
    image: '/images/dishes/pepper-soup.jpg',
    options: {
      portions: [
        { id: '3-litres', name: '3 Litres', priceModifier: 0 },
        { id: '5-litres', name: '5 Litres', priceModifier: 5000 },
      ],
      proteins: [
        { id: 'catfish', name: 'Catfish', price: 0 },
        { id: 'chicken', name: 'Chicken', price: 0 },
        { id: 'goatmeat', name: 'Goatmeat', price: 0 },
        { id: 'assorted', name: 'Assorted Beef', price: 0 },
      ],
      spiceLevels,
    },
    popular: true,
  },
  // Pasta & Noodles
  {
    id: 'jollof-pasta',
    name: 'Jollof Pasta',
    description: 'Creamy pasta in our signature jollof sauce with veggies and chicken strips',
    basePrice: 1500,
    categoryId: 'pasta',
    image: '/images/dishes/jollof-pasta.jpg',
    options: {
      portions: [
        { id: 'single', name: 'Single Portion', priceModifier: 0 },
        { id: '3-litres', name: '3 Litres (3 proteins)', priceModifier: 8500 },
        { id: '5-litres', name: '5 Litres (6 proteins)', priceModifier: 13500 },
      ],
      proteins: standardProteins,
      addOns: standardAddOns,
      spiceLevels,
    },
    popular: true,
  },
  {
    id: 'singapore-noodles',
    name: 'Singapore Noodles',
    description: 'Stir-fried noodles with veggies, eggs, and choice of protein',
    basePrice: 1000,
    categoryId: 'pasta',
    image: '/images/dishes/noodles.jpg',
    options: {
      portions: [
        { id: 'single', name: 'Single (2 eggs)', priceModifier: 0 },
        { id: '3-litres', name: '3 Litres (3 proteins)', priceModifier: 9000 },
        { id: '5-litres', name: '5 Litres (6 proteins)', priceModifier: 14000 },
      ],
      proteins: standardProteins,
      addOns: standardAddOns,
      spiceLevels,
    },
  },
  // Proteins
  {
    id: 'peppered-chicken',
    name: 'Peppered Chicken',
    description: '1/4 chicken thigh well-seasoned and tossed in sweet peppered sauce',
    basePrice: 1000,
    categoryId: 'proteins',
    image: '/images/dishes/peppered-chicken.jpg',
    options: {
      portions: [
        { id: '1pc', name: '1 Piece', priceModifier: 0 },
        { id: '2pc', name: '2 Pieces', priceModifier: 800 },
        { id: '4pc', name: '4 Pieces', priceModifier: 2500 },
      ],
      spiceLevels,
    },
    popular: true,
  },
  {
    id: 'peppered-beef',
    name: 'Peppered Beef',
    description: '2 well-seasoned beef pieces tossed in sweet peppered sauce',
    basePrice: 400,
    categoryId: 'proteins',
    image: '/images/dishes/peppered-beef.jpg',
    options: {
      portions: [
        { id: '2pc', name: '2 Pieces', priceModifier: 0 },
        { id: '4pc', name: '4 Pieces', priceModifier: 400 },
        { id: '6pc', name: '6 Pieces', priceModifier: 800 },
      ],
      spiceLevels,
    },
  },
  {
    id: 'peppered-goatmeat',
    name: 'Peppered Goatmeat',
    description: '2 well-seasoned goatmeat pieces tossed in sweet peppered sauce',
    basePrice: 500,
    categoryId: 'proteins',
    image: '/images/dishes/peppered-goatmeat.jpg',
    options: {
      portions: [
        { id: '2pc', name: '2 Pieces', priceModifier: 0 },
        { id: '4pc', name: '4 Pieces', priceModifier: 500 },
        { id: '6pc', name: '6 Pieces', priceModifier: 1000 },
      ],
      spiceLevels,
    },
  },
  {
    id: 'nkwobi',
    name: 'Nkwobi',
    description: 'Spicy cow leg delicacy cooked in palm oil and utazi leaves',
    basePrice: 3500,
    categoryId: 'proteins',
    image: '/images/dishes/nkwobi.jpg',
    options: {
      portions: [
        { id: 'regular', name: 'Regular Portion', priceModifier: 0 },
        { id: 'large', name: 'Large Portion', priceModifier: 2000 },
      ],
      spiceLevels,
    },
  },
  {
    id: 'asun',
    name: 'Asun (Spicy Goat)',
    description: 'Grilled and spiced goat meat - perfect party starter',
    basePrice: 3000,
    categoryId: 'proteins',
    image: '/images/dishes/asun.jpg',
    options: {
      portions: [
        { id: 'regular', name: 'Regular Portion', priceModifier: 0 },
        { id: 'large', name: 'Large Portion', priceModifier: 2000 },
      ],
      spiceLevels,
    },
    popular: true,
  },
  // Sides
  {
    id: 'moimoi',
    name: 'Moi-Moi',
    description: 'Steamed bean pudding with eggs - nutritious and delicious',
    basePrice: 500,
    categoryId: 'sides',
    image: '/images/dishes/moimoi.jpg',
    options: {
      portions: [
        { id: '1pc', name: '1 Wrap', priceModifier: 0 },
        { id: '3pc', name: '3 Wraps', priceModifier: 1000 },
        { id: '6pc', name: '6 Wraps', priceModifier: 2500 },
      ],
    },
  },
  {
    id: 'small-chops',
    name: 'Small Chops',
    description: 'Assorted party snacks - spring rolls, samosa, puff puff, chicken',
    basePrice: 2500,
    categoryId: 'sides',
    image: '/images/dishes/small-chops.jpg',
    options: {
      portions: [
        { id: 'small', name: 'Small Pack (10pcs)', priceModifier: 0 },
        { id: 'medium', name: 'Medium Pack (20pcs)', priceModifier: 2000 },
        { id: 'large', name: 'Large Pack (50pcs)', priceModifier: 5000 },
      ],
    },
  },
  {
    id: 'fried-yam',
    name: 'Fried Yam & Egg',
    description: 'Crispy fried yam served with fried eggs and pepper sauce',
    basePrice: 1000,
    categoryId: 'sides',
    image: '/images/dishes/fried-yam.jpg',
    options: {
      portions: [
        { id: 'regular', name: 'Regular (2 eggs)', priceModifier: 0 },
        { id: 'large', name: 'Large (4 eggs)', priceModifier: 500 },
      ],
      spiceLevels,
    },
  },
  // Drinks
  {
    id: 'zobo',
    name: 'Zobo Drink',
    description: 'Refreshing hibiscus flower juice with ginger and pineapple',
    basePrice: 1000,
    categoryId: 'drinks',
    image: '/images/dishes/zobo.jpg',
    options: {
      portions: [
        { id: '500ml', name: '500ml', priceModifier: 0 },
        { id: '1l', name: '1 Litre', priceModifier: 500 },
        { id: '2l', name: '2 Litres', priceModifier: 1500 },
      ],
    },
  },
  {
    id: 'fresh-juice',
    name: 'Fresh Fruit Juice',
    description: 'Freshly squeezed pineapple, orange, or watermelon juice',
    basePrice: 1000,
    categoryId: 'drinks',
    image: '/images/dishes/fresh-juice.jpg',
    options: {
      portions: [
        { id: '500ml', name: '500ml', priceModifier: 0 },
        { id: '1l', name: '1 Litre', priceModifier: 500 },
      ],
      addOns: [
        { id: 'pineapple', name: 'Pineapple', price: 0 },
        { id: 'orange', name: 'Orange', price: 0 },
        { id: 'watermelon', name: 'Watermelon', price: 0 },
      ],
    },
  },
  {
    id: 'smoothie',
    name: 'Milkshake / Smoothie',
    description: 'Creamy banana, pineapple, or oreo milkshake',
    basePrice: 3000,
    categoryId: 'drinks',
    image: '/images/dishes/smoothie.jpg',
    options: {
      portions: [
        { id: 'regular', name: 'Regular', priceModifier: 0 },
        { id: 'large', name: 'Large', priceModifier: 1000 },
      ],
      addOns: [
        { id: 'banana', name: 'Banana', price: 0 },
        { id: 'pineapple', name: 'Pineapple', price: 0 },
        { id: 'oreo', name: 'Oreo', price: 0 },
      ],
    },
  },
];

export const deliveryAreas: DeliveryArea[] = [
  { id: 'garki', name: 'Garki', fee: 500, eta: '30-45 mins' },
  { id: 'gudu', name: 'Gudu', fee: 500, eta: '30-45 mins' },
  { id: 'apo', name: 'Apo', fee: 500, eta: '25-40 mins' },
  { id: 'guzape', name: 'Guzape', fee: 500, eta: '30-45 mins' },
  { id: 'lokogoma', name: 'Lokogoma', fee: 500, eta: '35-50 mins' },
  { id: 'wuse', name: 'Wuse', fee: 700, eta: '40-55 mins' },
  { id: 'maitama', name: 'Maitama', fee: 700, eta: '45-60 mins' },
  { id: 'asokoro', name: 'Asokoro', fee: 700, eta: '40-55 mins' },
  { id: 'jabi', name: 'Jabi', fee: 700, eta: '45-60 mins' },
  { id: 'wuye', name: 'Wuye', fee: 700, eta: '45-60 mins' },
  { id: 'utako', name: 'Utako', fee: 700, eta: '50-65 mins' },
  { id: 'other', name: 'Other Areas', fee: 1000, eta: '60-90 mins' },
];

export const contactInfo = {
  phone: '+234 811 791 8695',
  email: '10.01cuisineandmore@gmail.com',
  address: 'Plot 2774 Zone E Ext, Apo Resettlement, FCT-Abuja',
  instagram: '@10.01cuisine',
  instagramUrl: 'https://www.instagram.com/10.01cuisine_and_more',
  whatsapp: 'https://wa.me/2348117918695',
};

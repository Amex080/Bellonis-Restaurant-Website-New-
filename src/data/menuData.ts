import { MenuItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // Mains
  {
    id: 'ewa-agoyin',
    name: 'Ewa Agoyin',
    category: 'mains',
    price: 500,
    image: '/Image/Beans.png',
    description: 'Slow-cooked mashed Nigerian beans served with rich, smoky, spicy agoyin sauce prepared with fried dried peppers and seasoned palm oil.',
    isPopular: true,
    spicyLevel: 2,
    available: true,
  },
  {
    id: 'fried-rice',
    name: 'Fried Rice',
    category: 'mains',
    price: 1000,
    image: '/Image/Fried Rice.png',
    description: 'Fragrant Nigerian-style party fried rice loaded with sweet corn, carrots, green beans, liver cuts, and savory aromatic seasonings.',
    isPopular: true,
    spicyLevel: 1,
    available: true,
  },
  {
    id: 'jollof-rice',
    name: 'Jollof Rice',
    category: 'mains',
    price: 1000,
    image: '/Image/Jollof Rice.png',
    description: 'Signature smoky firewood-style Nigerian jollof rice cooked in a seasoned rich blend of tomatoes, bell peppers, bay leaves, and scotch bonnets.',
    isPopular: true,
    spicyLevel: 2,
    available: true,
  },
  {
    id: 'yamarita',
    name: 'Yamarita',
    category: 'mains',
    price: 1000,
    image: encodeURI('/Image/Yamarita (yam chips_fries) with pepper sauce   If….png'),
    description: 'Crispy egg-coated yam chips seasoned to perfection, served piping hot with fiery blended pepper dipping sauce.',
    isPopular: true,
    spicyLevel: 2,
    available: true,
  },
  {
    id: 'spaghetti-g',
    name: 'Spaghetti Special',
    category: 'mains',
    price: 1000,
    image: '/Image/Spagetti G.png',
    description: 'Stir-fried Nigerian party spaghetti infused with peppers, onions, shredded carrots, and savory bouillon seasonings.',
    isPopular: false,
    spicyLevel: 2,
    available: true,
  },
  {
    id: 'sausage-pasta',
    name: 'Sausage & Tomato Pasta',
    category: 'mains',
    price: 1200,
    image: encodeURI('/Image/Sausage and Tomato Pasta.png'),
    description: 'Tender pasta in a rich, herby Italian tomato reduction tossed with sliced savory sausages and sweet peppers.',
    isPopular: false,
    spicyLevel: 1,
    available: true,
  },

  // Proteins
  {
    id: 'chicken',
    name: 'Peppered Chicken',
    category: 'proteins',
    price: 1500,
    image: '/Image/Chicken.png',
    description: 'Succulent fried and peppered chicken portion, deeply seasoned with garlic, ginger, and aromatic local spices.',
    isPopular: true,
    spicyLevel: 2,
    available: true,
  },
  {
    id: 'turkey',
    name: 'Fried Turkey',
    category: 'proteins',
    price: 2500,
    image: '/Image/Turkey.png',
    description: 'Jumbo succulent fried turkey cut, golden brown, crisp on the outside and tender juicy inside.',
    isPopular: true,
    spicyLevel: 1,
    available: true,
  },
  {
    id: 'fish',
    name: 'Fried Fresh Fish',
    category: 'proteins',
    price: 800,
    image: '/Image/Fish.png',
    description: 'Crispy golden fried fresh fish steak tossed in mild pepper sauce and aromatic herbs.',
    isPopular: false,
    spicyLevel: 1,
    available: true,
  },
  {
    id: 'beef',
    name: 'Seasoned Beef Chunks',
    category: 'proteins',
    price: 1000,
    image: '/Image/Meat.png',
    description: 'Tender bite-sized beef chunks braised in rich savory bouillon and finished in peppery reduction.',
    isPopular: false,
    spicyLevel: 2,
    available: true,
  },

  // Drinks
  {
    id: 'coca-cola',
    name: 'Coca Cola',
    category: 'drinks',
    price: 1000,
    image: encodeURI('/Image/Coca Cola.png'),
    description: 'Chilled refreshing classic Coca-Cola (50cl pet bottle).',
    isPopular: true,
    available: true,
  },
  {
    id: 'fanta',
    name: 'Fanta Orange',
    category: 'drinks',
    price: 1000,
    image: '/Image/Fanta.png',
    description: 'Ice-cold bubbly orange Fanta (50cl pet bottle).',
    isPopular: false,
    available: true,
  },
  {
    id: 'hollandia',
    name: 'Hollandia Yoghurt',
    category: 'drinks',
    price: 1500,
    image: '/Image/Hollandia.png',
    description: 'Creamy and sweet Hollandia premium yoghurt drink, served chilled.',
    isPopular: true,
    available: true,
  },
  {
    id: 'bottle-water',
    name: 'Table Bottled Water',
    category: 'drinks',
    price: 500,
    image: encodeURI('/Image/Color Block Fabric Water Bottle Holder Sewing Tutorial.png'),
    description: 'Pure, refreshing chilled bottled table water (75cl).',
    isPopular: false,
    available: true,
  },
];

export const SLIDER_SLIDES = [
  {
    image: '/Image/Beans.png',
    title: 'Authentic Ewa Agoyin',
    subtitle: 'Slow-simmered mashed beans with our legendary dark caramelized agoyin sauce',
    category: 'Mains · Signature Recipe',
  },
  {
    image: '/Image/Jollof Rice.png',
    title: 'Smoky Firewood Jollof',
    subtitle: 'Rich tomato reduction, fragrant bay leaves, and the true party jollof aroma',
    category: 'Mains · Campus Best Seller',
  },
  {
    image: '/Image/Spagetti G.png',
    title: 'Stir-Fried Spaghetti Special',
    subtitle: 'Wok-tossed noodles with bell peppers, sweet carrots, and savory spices',
    category: 'Pasta · Freshly Cooked Daily',
  },
  {
    image: encodeURI('/Image/Yamarita (yam chips_fries) with pepper sauce   If….png'),
    title: 'Crispy Yamarita & Pepper Dip',
    subtitle: 'Golden egg-battered yam fries served sizzling hot with zesty pepper sauce',
    category: 'Specials · Student Favorite',
  },
];

export const TESTIMONIALS = [
  {
    id: '1',
    quote: 'The Ewa Agoyin here is unbeatable across EKSU campus. The sauce is deeply flavored, and they serve generous portions that keep you going through 4-hour lab practicals.',
    name: 'Adebayo Ogunleye',
    role: 'Mechanical Engineering Student, EKSU',
    rating: 5,
  },
  {
    id: '2',
    quote: 'Whenever we have faculty meetings or department lunches, Bellonis Place delivers piping hot Jollof and fried turkey on time. Very professional service and clean preparation.',
    name: 'Dr. (Mrs.) K. A. Fasakin',
    role: 'Faculty Staff Member, EKSU',
    rating: 5,
  },
  {
    id: '3',
    quote: 'Their Yamarita and fried pepper chicken is my go-to dinner order. Easy WhatsApp ordering and they deliver straight to my hostel gate within 20 minutes.',
    name: 'Oluwaseun Balogun',
    role: 'Hall 3 Resident, EKSU',
    rating: 5,
  },
];

export const VALUE_PROPOSITIONS = [
  {
    title: 'Firewood-Inspired Taste',
    description: 'We slow-cook our sauces and rice dishes using time-honored Nigerian seasoning methods that deliver deep, authentic aroma in every bite.',
  },
  {
    title: 'Campus Speed Delivery',
    description: 'Located right at the Faculty of Engineering, we deliver swiftly across EKSU faculties, lecture theatres, and campus student hostels.',
  },
  {
    title: 'Hygienic & Student-Friendly',
    description: 'Pristine food preparation standards and generous portion sizes carefully budgeted for student convenience and faculty comfort.',
  },
];

export const GALLERY_IMAGES = [
  {
    src: '/Image/Beans.png',
    title: 'Ewa Agoyin Dish',
    category: 'Mains',
  },
  {
    src: '/Image/Fried Rice.png',
    title: 'Party Fried Rice',
    category: 'Mains',
  },
  {
    src: '/Image/Spagetti G.png',
    title: 'Spaghetti Special',
    category: 'Pasta',
  },
  {
    src: encodeURI('/Image/Yamarita (yam chips_fries) with pepper sauce   If….png'),
    title: 'Yamarita with Pepper Sauce',
    category: 'Specials',
  },
  {
    src: encodeURI('/Image/Sausage and Tomato Pasta.png'),
    title: 'Sausage & Tomato Pasta',
    category: 'Pasta',
  },
  {
    src: '/Image/Chicken.png',
    title: 'Peppered Chicken Portions',
    category: 'Proteins',
  },
  {
    src: '/Image/Turkey.png',
    title: 'Golden Fried Turkey',
    category: 'Proteins',
  },
  {
    src: encodeURI('/Image/Coca Cola.png'),
    title: 'Chilled Drinks Selection',
    category: 'Beverages',
  },
];

export const RESTAURANT_INFO = {
  name: 'Bellonis Place',
  address: 'EKSU, Faculty of Engineering, Ado-Ekiti, Ekiti State, Nigeria',
  shortAddress: 'EKSU, Faculty of Engineering Ground Floor',
  phone: '+2347069248829',
  cleanPhone: '2347069248829',
  email: 'eaterybellonisplace.com',
  hours: 'Monday – Saturday: 8:00 AM – 9:00 PM | Sunday: 10:00 AM – 8:00 PM',
  tagline: 'Authentic Nigerian Dining & Express Delivery at Ekiti State University',
};

const menuItemsData = [
  {
    id: 1,
    image: "images/trending-1.jpg",
    title: "Samosa",
    description: "A crispy and spicy potato-filled pastry, perfect for snacking.",
    price: "₹40"
  },
  {
    id: 2,
    image: "images/trending-2.jpg",
    title: "Sandwich",
    description: "Grilled paneer cubes marinated in spices, served with mint chutney.",
    price: "₹120"
  },
  {
    id: 3,
    image: "images/trending-3.jpg",
    title: "Veg Fried",
    description: "Crispy fried vegetables served with a tangy dipping sauce.",
    price: "₹150"
  },
  {
    id: 4,
    image: "images/trending-4.jpg",
    title: "Chole Bhature",
    description: "Spicy chickpeas served with deep-fried bread, a North Indian favorite.",
    price: "₹100"
  },
  {
    id: 5,
    image: "images/trending-5.jpg",
    title: "Pav Bhaji",
    description: "A spicy vegetable mash served with buttered bread rolls.",
    price: "₹80"
  },

  {
    id: 6,
    image: "images/trending-7.jpg",
    title: "Paneer Butter Masala",
    description: "Creamy paneer curry cooked in a rich tomato-based gravy.",
    price: "₹180"
  },
  {
    id: 7,
    image: "images/trending-8.jpg",
    title: "Masala Dosa",
    description: "A crispy rice crepe filled with spiced potato filling, served with chutney.",
    price: "₹90"
  },

  // Duplicates with minor changes & rotated images
  {
    id: 8,
    image: "images/panner-tikka.jpg",
    title: "Paneer Tikka",
    description: "Spicy grilled paneer cubes served with onion rings.",
    price: "₹160"
  },
  {
    id: 9,
    image: "images/momos.jpg",
    title: "Momos",
    description: "Steamed dumplings filled with veggies and spices.",
    price: "₹70"
  },
  {
    id: 10,
    image: "images/vada-pav.jpg",
    title: "Vada Pav",
    description: "Spicy potato fritter in a bun, Mumbai’s favorite snack.",
    price: "₹30"
  },
  {
    id: 11,
    image: "images/rajma.jpg",
    title: "Rajma Chawal",
    description: "Kidney beans curry served with steamed rice.",
    price: "₹90"
  },
  {
    id: 12,
    image: "images/spring-rolls.jpg",
    title: "Spring Roll",
    description: "Crispy rolls filled with spicy mixed vegetables.",
    price: "₹110"
  },
  {
    id: 13,
    image: "images/bread-garlic.jpg",
    title: "Garlic Bread",
    description: "Toasted bread with garlic butter and herbs.",
    price: "₹60"
  },

  {
    id: 14,
    image: "images/GULLAB.jpg",
    title: "Gulab Jamun",
    description: "Sweet syrupy dessert balls made from khoya.",
    price: "₹45"
  },
  {
    id: 15,
    image: "images/aloo-tikki.jpg",
    title: "Aloo Tikki",
    description: "Fried potato patties served with chutneys.",
    price: "₹40"
  },
  {
    id: 16,
    image: "images/cheese-sandwich.jpg",
    title: "Cheese Sandwich",
    description: "Grilled sandwich with melted cheese and spices.",
    price: "₹90"
  },
  {
    id: 17,
    image: "images/bhel-chat.jpg",
    title: "Bhel Chat",
    description: "Crispy puffed rice mixed with tangy chutneys and veggies.",
    price: "₹50"
  },
  {
    id: 18,
    image: "images/Dhokla.jpg",
    title: "Dhokla",
    description: "Soft and spongy savory snack from Gujarat.",
    price: "₹60"
  },
  {
    id: 19,
    image: "images/Hakka-nodles.jpg",
    title: "Hakka Noodles",
    description: "Chinese-style noodles tossed with vegetables.",
    price: "₹120"
  },
  {
    id: 20,
    image: "images/kesar-penda.jpg",
    title: "Kesar penda",
    description: "Sweet milk-based dessert flavored with saffron.",
    price: "₹100"
  },
  {
    id: 21,
    image: "images/chai-cokkies.jpg",
    title: "Chai & Biscuits",
    description: "Classic Indian tea with biscuits.",
    price: "₹20"
  },
  {
    id: 22,
    image: "images/Poha.jpg",
    title: "Poha",
    description: "Flattened rice cooked with spices and veggies.",
    price: "₹50"
  },
  {
    id: 23,
    image: "images/Halvah.jpg",
    title:"Halvah",
    description: "Sweet semolina dessert with nuts and ghee.",
    price: "₹40"
  },
  {
    id: 24,
    image: "images/Manchurian.jpg",
    title: "Manchurian",
    description: "Fried veggie balls in spicy Indo-Chinese gravy.",
    price: "₹140"
  },
  {
    id: 25,
    image: "images/Falooda.jpg",
    title: "Falooda",
    description: "Sweet and colorful dessert with ice cream and vermicelli.",
    price: "₹100"
  },{
    id: 26,
    image: "images/Bev-1.jpg",
    title: "Lemon cocktail",
    description: "Refreshing Lemonade with mint leaves.",
    price: "₹50"
  },
  {
    id: 27,
    image: "images/Bev-2.jpg",
    title: "Ice Tea",
    description: "Iced Tea with a hint of lemon. Perfect for summer days.",
    price: "₹60"
    },{
    id: 28,
    image: "images/Bev-3.jpg",
    title: "Mojito-Cocktail",
    description: "Mojito-Cocktail, a refreshing blend of mint and lime.",
    price: "₹199"
    },
    {
    id: 29,
    image: "images/bestseller-1.jpg",
    title: "Pizza ",
    description: "Cheesy pizza topped with fresh vegetables and herbs.",
    price: "₹150"
    }
];

const productTokens = [];

const tokenizeProducts = () => {
  for (let i = 0; i < menuItemsData.length; i++) {
    const title = menuItemsData[i].title.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase();
    const description = menuItemsData[i].description.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase();
    const tokens = title.split(' ').concat(description.split(' '));

    productTokens.push({
      id: menuItemsData[i].id,
      tokens: tokens
    });
  }
};

tokenizeProducts();


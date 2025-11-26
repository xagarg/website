// Mock data for Vegan Junkies Restaurant

export const menuItems = [
  {
    id: 1,
    name: "Rainbow Buddha Bowl",
    description: "Quinoa, roasted vegetables, avocado, chickpeas, tahini dressing",
    price: "$14.99",
    category: "Bowls",
    image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHx2ZWdhbiUyMGZvb2R8ZW58MHx8fHwxNzYzMTMyNjEzfDA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 2,
    name: "Avocado Toast Supreme",
    description: "Sourdough, smashed avocado, cherry tomatoes, hemp seeds",
    price: "$12.99",
    category: "Brunch",
    image: "https://images.unsplash.com/photo-1540914124281-342587941389?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHx2ZWdhbiUyMGZvb2R8ZW58MHx8fHwxNzYzMTMyNjEzfDA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 3,
    name: "Mediterranean Mezze Platter",
    description: "Hummus, baba ganoush, falafel, fresh vegetables, pita",
    price: "$16.99",
    category: "Appetizers",
    image: "https://images.unsplash.com/photo-1604085804781-04a7d1adba36?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHx2ZWdhbiUyMGZvb2R8ZW58MHx8fHwxNzYzMTMyNjEzfDA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 4,
    name: "Green Goddess Salad",
    description: "Mixed greens, cucumber, edamame, green tahini dressing",
    price: "$13.99",
    category: "Salads",
    image: "https://images.unsplash.com/photo-1615366105533-5b8f3255ea5d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHw0fHx2ZWdhbiUyMGZvb2R8ZW58MHx8fHwxNzYzMTMyNjEzfDA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 5,
    name: "Loaded Sweet Potato Fries",
    description: "Crispy sweet potato, cashew cream, jalapeños, green onions",
    price: "$11.99",
    category: "Sides",
    image: "https://images.unsplash.com/photo-1543353071-087092ec393a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxwbGFudCUyMGJhc2VkfGVufDB8fHx8MTc2MzEzMjYxOXww&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 6,
    name: "Plant-Based Power Bowl",
    description: "Brown rice, tofu, kale, roasted chickpeas, miso dressing",
    price: "$15.99",
    category: "Bowls",
    image: "https://images.unsplash.com/photo-1543352632-5a4b24e4d2a6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxwbGFudCUyMGJhc2VkfGVufDB8fHx8MTc2MzEzMjYxOXww&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 7,
    name: "Ultimate Vegan Burger",
    description: "House-made patty, lettuce, tomato, pickles, special sauce",
    price: "$14.99",
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwzfHxwbGFudCUyMGJhc2VkfGVufDB8fHx8MTc2MzEzMjYxOXww&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 8,
    name: "Tropical Smoothie Bowl",
    description: "Mango, banana, coconut, granola, fresh berries",
    price: "$10.99",
    category: "Brunch",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
  }
];

export const reservations = [];

export const addReservation = (reservation) => {
  const newReservation = {
    id: Date.now(),
    ...reservation,
    status: 'pending'
  };
  reservations.push(newReservation);
  return newReservation;
};

export const contactSubmissions = [];

export const addContactSubmission = (submission) => {
  const newSubmission = {
    id: Date.now(),
    ...submission,
    timestamp: new Date().toISOString()
  };
  contactSubmissions.push(newSubmission);
  return newSubmission;
};

export const restaurantInfo = {
  name: "Vegan Junkies",
  tagline: "Plant-Based. Flavor-Packed.",
  description: "Welcome to Vegan Junkies, where we prove that plant-based dining can be delicious, satisfying, and exciting. Our menu features creative vegan dishes made from fresh, locally-sourced ingredients.",
  hours: {
    monday: "12:00 PM - 11:00 PM",
    tuesday: "12:00 PM - 11:00 PM",
    wednesday: "12:00 PM - 11:00 PM",
    thursday: "12:00 PM - 11:00 PM",
    friday: "12:00 PM - 11:00 PM",
    saturday: "12:00 PM - 11:00 PM",
    sunday: "12:00 PM - 11:00 PM"
  },
  location: {
    address: "Rua da vegan junkies",
    city: "Lisbon",
    state: "Lisbon",
    zip: "1111-111",
    phone: "123456789",
    email: "veganjunkies@veganjunkies.com"
  }
};
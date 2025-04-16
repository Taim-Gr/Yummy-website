// Demo meal data for presentation purposes
const DEMO_MEALS = [
  {
    id: "m1",
    title: "Juicy Cheese Burger",
    slug: "juicy-cheese-burger",
    image: "/images/burger.jpg",
    summary:
      "A mouth-watering burger with a juicy beef patty and melted cheese, served in a soft bun.",
    instructions: `
      1. Prepare the patty:
         Mix 200g of ground beef with salt and pepper. Form into a patty.

      2. Cook the patty:
         Heat a pan with a bit of oil. Cook the patty for 2-3 minutes each side, until browned.

      3. Assemble the burger:
         Toast the burger bun halves. Place lettuce and tomato on the bottom half. Add the cooked patty and top with a slice of cheese.

      4. Serve:
         Complete the assembly with the top bun and serve hot.
    `,
    creator: "John Doe",
    creator_email: "johndoe@example.com",
  },
  {
    id: "m2",
    title: "Spicy Curry",
    slug: "spicy-curry",
    image: "/images/curry.jpg",
    summary:
      "A rich and spicy curry, infused with exotic spices and creamy coconut milk.",
    instructions: `
      1. Chop vegetables:
         Cut your choice of vegetables into bite-sized pieces.

      2. Sauté vegetables:
         In a pan with oil, sauté the vegetables until they start to soften.

      3. Add curry paste:
         Stir in 2 tablespoons of curry paste and cook for another minute.

      4. Simmer with coconut milk:
         Pour in 500ml of coconut milk and bring to a simmer. Let it cook for about 15 minutes.

      5. Serve:
         Enjoy this creamy curry with rice or bread.
    `,
    creator: "Max Schwarz",
    creator_email: "max@example.com",
  },
  {
    id: "m3",
    title: "Fresh Tomato Salad",
    slug: "fresh-tomato-salad",
    image: "/images/tomato-salad.jpg",
    summary:
      "A light and refreshing salad with ripe tomatoes, fresh basil, and a tangy vinaigrette.",
    instructions: `
      1. Prepare the tomatoes:
        Slice fresh tomatoes and arrange them on a plate.
    
      2. Add herbs and seasoning:
         Sprinkle chopped basil, salt, and pepper over the tomatoes.
    
      3. Dress the salad:
         Drizzle with olive oil and balsamic vinegar.
    
      4. Serve:
         Enjoy this simple, flavorful salad as a side dish or light meal.
    `,
    creator: "Sophia Green",
    creator_email: "sophiagreen@example.com",
  },
  {
    id: "m4",
    title: "Authentic Dumplings",
    slug: "authentic-dumplings",
    image: "/images/dumplings.jpg",
    summary:
      "Traditional handmade dumplings with a savory filling, steamed to perfection.",
    instructions: `
      1. Prepare the dough:
         Mix 2 cups of flour with warm water until a smooth dough forms. Let it rest for 30 minutes.

      2. Make the filling:
         Combine ground pork, chopped cabbage, green onions, ginger, garlic, soy sauce, and sesame oil.

      3. Assemble the dumplings:
         Roll out small pieces of dough into circles. Add filling to the center and fold to seal the edges.

      4. Cook the dumplings:
         Steam in a bamboo steamer for 10-12 minutes until the dough is cooked through.

      5. Serve:
         Enjoy with a dipping sauce made of soy sauce, vinegar, and chili oil.
    `,
    creator: "Lin Zhang",
    creator_email: "lin.zhang@example.com",
  },
  {
    id: "m5",
    title: "Creamy Mac & Cheese",
    slug: "creamy-mac-cheese",
    image: "/images/macncheese.jpg",
    summary:
      "Ultra-creamy, homemade mac and cheese with a golden, crispy top layer.",
    instructions: `
      1. Cook the pasta:
         Boil elbow macaroni in salted water until al dente, then drain.

      2. Make the cheese sauce:
         Melt butter in a saucepan, add flour to create a roux. Slowly whisk in milk until smooth.

      3. Add the cheese:
         Remove from heat and stir in a mix of sharp cheddar, gruyere, and parmesan until melted.

      4. Combine and bake:
         Mix the sauce with the pasta, transfer to a baking dish, top with more cheese and breadcrumbs.

      5. Bake until golden:
         Place in a 350°F oven for 20-25 minutes until bubbly and golden on top.
    `,
    creator: "Emma Wilson",
    creator_email: "emma.w@example.com",
  },
  {
    id: "m6",
    title: "Classic Margherita Pizza",
    slug: "classic-margherita-pizza",
    image: "/images/pizza.jpg",
    summary:
      "Simple yet delicious pizza with fresh mozzarella, tomatoes, and basil on a perfect thin crust.",
    instructions: `
      1. Prepare the dough:
         Mix flour, water, yeast, salt, and olive oil. Knead until smooth and let rise for 1-2 hours.

      2. Shape and top:
         Stretch the dough into a circle. Spread tomato sauce, add fresh mozzarella slices and a drizzle of olive oil.

      3. Bake to perfection:
         Bake on a pizza stone in a very hot oven (450-500°F) for 8-10 minutes until the crust is golden.

      4. Finish and serve:
         Once out of the oven, add fresh basil leaves, a sprinkle of salt, and a drizzle of good olive oil.
    `,
    creator: "Marco Rossi",
    creator_email: "marco.chef@example.com",
  },
  {
    id: "m7",
    title: "Golden Wiener Schnitzel",
    slug: "golden-wiener-schnitzel",
    image: "/images/schnitzel.jpg",
    summary:
      "Crispy, golden-brown breaded veal cutlet, a classic Austrian dish served with lemon and potatoes.",
    instructions: `
      1. Prepare the meat:
         Pound veal cutlets to about 1/4-inch thickness. Season with salt and pepper.

      2. Set up breading station:
         Place flour, beaten eggs, and breadcrumbs in separate shallow dishes.

      3. Bread the cutlets:
         Dredge each cutlet in flour, then dip in beaten eggs, and finally coat with breadcrumbs.

      4. Fry to golden perfection:
         Heat oil in a large skillet. Fry each schnitzel until golden brown on both sides (2-3 minutes per side).

      5. Serve:
         Drain on paper towels. Serve immediately with lemon wedges, parsley potatoes, and lingonberry jam.
    `,
    creator: "Hans Müller",
    creator_email: "hans.m@example.com",
  },
];

export async function getMeals() {
  const loadingTime = Math.floor(Math.random() * 1000) + 2000;
  await new Promise((resolve) => setTimeout(resolve, loadingTime));

  return DEMO_MEALS;
}

export async function getMeal(slug) {
  const loadingTime = Math.floor(Math.random() * 500) + 800;
  await new Promise((resolve) => setTimeout(resolve, loadingTime));
  return DEMO_MEALS.find((meal) => meal.slug === slug);
}

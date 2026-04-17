
const STORAGE_KEY = "freshsave-foods-v3";
const INGREDIENT_DB = [
  {
    "name": "tomato",
    "category": "Vegetable",
    "aliases": [
      "tomatoes"
    ]
  },
  {
    "name": "onion",
    "category": "Vegetable",
    "aliases": [
      "onions"
    ]
  },
  {
    "name": "garlic",
    "category": "Vegetable",
    "aliases": []
  },
  {
    "name": "potato",
    "category": "Vegetable",
    "aliases": [
      "potatoes"
    ]
  },
  {
    "name": "carrot",
    "category": "Vegetable",
    "aliases": [
      "carrots"
    ]
  },
  {
    "name": "cucumber",
    "category": "Vegetable",
    "aliases": [
      "cucumbers"
    ]
  },
  {
    "name": "eggplant",
    "category": "Vegetable",
    "aliases": [
      "aubergine"
    ]
  },
  {
    "name": "zucchini",
    "category": "Vegetable",
    "aliases": [
      "courgette"
    ]
  },
  {
    "name": "bell pepper",
    "category": "Vegetable",
    "aliases": [
      "capsicum",
      "pepper"
    ]
  },
  {
    "name": "spinach",
    "category": "Vegetable",
    "aliases": []
  },
  {
    "name": "lettuce",
    "category": "Vegetable",
    "aliases": []
  },
  {
    "name": "cabbage",
    "category": "Vegetable",
    "aliases": []
  },
  {
    "name": "cauliflower",
    "category": "Vegetable",
    "aliases": []
  },
  {
    "name": "broccoli",
    "category": "Vegetable",
    "aliases": []
  },
  {
    "name": "peas",
    "category": "Vegetable",
    "aliases": [
      "pea"
    ]
  },
  {
    "name": "corn",
    "category": "Vegetable",
    "aliases": []
  },
  {
    "name": "mushroom",
    "category": "Vegetable",
    "aliases": [
      "mushrooms"
    ]
  },
  {
    "name": "okra",
    "category": "Vegetable",
    "aliases": []
  },
  {
    "name": "molokhia",
    "category": "Vegetable",
    "aliases": [
      "mulukhiyah",
      "mloukhieh"
    ]
  },
  {
    "name": "mint",
    "category": "Vegetable",
    "aliases": []
  },
  {
    "name": "parsley",
    "category": "Vegetable",
    "aliases": []
  },
  {
    "name": "cilantro",
    "category": "Vegetable",
    "aliases": [
      "coriander"
    ]
  },
  {
    "name": "lemon",
    "category": "Fruit",
    "aliases": [
      "lemons"
    ]
  },
  {
    "name": "lime",
    "category": "Fruit",
    "aliases": []
  },
  {
    "name": "apple",
    "category": "Fruit",
    "aliases": [
      "apples"
    ]
  },
  {
    "name": "banana",
    "category": "Fruit",
    "aliases": [
      "bananas"
    ]
  },
  {
    "name": "orange",
    "category": "Fruit",
    "aliases": [
      "oranges"
    ]
  },
  {
    "name": "strawberry",
    "category": "Fruit",
    "aliases": [
      "strawberries"
    ]
  },
  {
    "name": "grape",
    "category": "Fruit",
    "aliases": [
      "grapes"
    ]
  },
  {
    "name": "mango",
    "category": "Fruit",
    "aliases": []
  },
  {
    "name": "dates",
    "category": "Fruit",
    "aliases": [
      "date"
    ]
  },
  {
    "name": "pomegranate",
    "category": "Fruit",
    "aliases": []
  },
  {
    "name": "fig",
    "category": "Fruit",
    "aliases": [
      "figs"
    ]
  },
  {
    "name": "milk",
    "category": "Dairy",
    "aliases": []
  },
  {
    "name": "yogurt",
    "category": "Dairy",
    "aliases": [
      "yoghurt"
    ]
  },
  {
    "name": "cheese",
    "category": "Dairy",
    "aliases": []
  },
  {
    "name": "labneh",
    "category": "Dairy",
    "aliases": [
      "labaneh",
      "labane"
    ]
  },
  {
    "name": "butter",
    "category": "Dairy",
    "aliases": []
  },
  {
    "name": "cream",
    "category": "Dairy",
    "aliases": []
  },
  {
    "name": "egg",
    "category": "Protein",
    "aliases": [
      "eggs"
    ]
  },
  {
    "name": "chicken",
    "category": "Protein",
    "aliases": []
  },
  {
    "name": "beef",
    "category": "Protein",
    "aliases": []
  },
  {
    "name": "lamb",
    "category": "Protein",
    "aliases": []
  },
  {
    "name": "fish",
    "category": "Protein",
    "aliases": []
  },
  {
    "name": "shrimp",
    "category": "Protein",
    "aliases": [
      "prawn",
      "prawns"
    ]
  },
  {
    "name": "tuna",
    "category": "Protein",
    "aliases": []
  },
  {
    "name": "chickpeas",
    "category": "Protein",
    "aliases": [
      "chickpea",
      "garbanzo"
    ]
  },
  {
    "name": "lentils",
    "category": "Protein",
    "aliases": [
      "lentil"
    ]
  },
  {
    "name": "beans",
    "category": "Protein",
    "aliases": [
      "bean",
      "kidney beans",
      "black beans"
    ]
  },
  {
    "name": "rice",
    "category": "Grain",
    "aliases": []
  },
  {
    "name": "pasta",
    "category": "Grain",
    "aliases": []
  },
  {
    "name": "bread",
    "category": "Bakery",
    "aliases": [
      "loaf"
    ]
  },
  {
    "name": "flour",
    "category": "Bakery",
    "aliases": []
  },
  {
    "name": "tortilla",
    "category": "Bakery",
    "aliases": [
      "tortillas"
    ]
  },
  {
    "name": "pita",
    "category": "Bakery",
    "aliases": [
      "pita bread"
    ]
  },
  {
    "name": "noodles",
    "category": "Grain",
    "aliases": [
      "noodle"
    ]
  },
  {
    "name": "soy sauce",
    "category": "Condiment",
    "aliases": []
  },
  {
    "name": "sesame oil",
    "category": "Condiment",
    "aliases": []
  },
  {
    "name": "ginger",
    "category": "Condiment",
    "aliases": []
  },
  {
    "name": "scallion",
    "category": "Vegetable",
    "aliases": [
      "green onion",
      "spring onion"
    ]
  },
  {
    "name": "tofu",
    "category": "Protein",
    "aliases": []
  },
  {
    "name": "bok choy",
    "category": "Vegetable",
    "aliases": []
  },
  {
    "name": "dumpling wrappers",
    "category": "Bakery",
    "aliases": [
      "wonton wrappers"
    ]
  },
  {
    "name": "olive oil",
    "category": "Condiment",
    "aliases": []
  },
  {
    "name": "paprika",
    "category": "Condiment",
    "aliases": []
  },
  {
    "name": "saffron",
    "category": "Condiment",
    "aliases": []
  },
  {
    "name": "cumin",
    "category": "Condiment",
    "aliases": []
  },
  {
    "name": "sumac",
    "category": "Condiment",
    "aliases": []
  },
  {
    "name": "tahini",
    "category": "Condiment",
    "aliases": []
  },
  {
    "name": "fava beans",
    "category": "Protein",
    "aliases": [
      "foul",
      "ful medames"
    ]
  },
  {
    "name": "bulgur",
    "category": "Grain",
    "aliases": []
  },
  {
    "name": "vermicelli",
    "category": "Grain",
    "aliases": []
  },
  {
    "name": "jalapeno",
    "category": "Vegetable",
    "aliases": []
  },
  {
    "name": "avocado",
    "category": "Fruit",
    "aliases": []
  },
  {
    "name": "cilantro lime rice",
    "category": "Grain",
    "aliases": []
  },
  {
    "name": "chorizo",
    "category": "Protein",
    "aliases": []
  },
  {
    "name": "salsa",
    "category": "Condiment",
    "aliases": []
  },
  {
    "name": "black olives",
    "category": "Vegetable",
    "aliases": [
      "olives"
    ]
  },
  {
    "name": "jamon",
    "category": "Protein",
    "aliases": [
      "jamón"
    ]
  },
  {
    "name": "seafood mix",
    "category": "Protein",
    "aliases": []
  },
  {
    "name": "chorizo español",
    "category": "Protein",
    "aliases": [
      "spanish chorizo"
    ]
  },
  {
    "name": "saffron rice",
    "category": "Grain",
    "aliases": []
  }
];
const RECIPE_DATA = [
  {
    "name": "Shakshuka",
    "cuisine": "Arabic / Middle Eastern",
    "ingredients": [
      "egg",
      "tomato",
      "onion",
      "bell pepper"
    ],
    "description": "Eggs simmered in spiced tomato sauce.",
    "emoji": "🍳"
  },
  {
    "name": "Mujadara",
    "cuisine": "Arabic / Levantine",
    "ingredients": [
      "lentils",
      "rice",
      "onion"
    ],
    "description": "A comforting rice and lentil dish with caramelized onions.",
    "emoji": "🍚"
  },
  {
    "name": "Fattoush",
    "cuisine": "Arabic / Levantine",
    "ingredients": [
      "tomato",
      "cucumber",
      "lettuce",
      "pita",
      "sumac",
      "mint"
    ],
    "description": "A crisp salad that uses herbs, vegetables, and toasted bread.",
    "emoji": "🥗"
  },
  {
    "name": "Tabbouleh",
    "cuisine": "Arabic / Levantine",
    "ingredients": [
      "parsley",
      "tomato",
      "bulgur",
      "mint",
      "lemon"
    ],
    "description": "A bright herb salad with lemon and bulgur.",
    "emoji": "🌿"
  },
  {
    "name": "Ful Medames",
    "cuisine": "Arabic",
    "ingredients": [
      "fava beans",
      "olive oil",
      "lemon",
      "garlic"
    ],
    "description": "A hearty bean breakfast and a great waste-saving meal.",
    "emoji": "🫘"
  },
  {
    "name": "Chicken Kabsa",
    "cuisine": "Arabic",
    "ingredients": [
      "chicken",
      "rice",
      "tomato",
      "onion",
      "saffron"
    ],
    "description": "A fragrant rice dish that works well with leftover chicken.",
    "emoji": "🍗"
  },
  {
    "name": "Molokhia Bowl",
    "cuisine": "Arabic",
    "ingredients": [
      "molokhia",
      "chicken",
      "garlic",
      "rice"
    ],
    "description": "A classic leafy green dish served with rice.",
    "emoji": "🥣"
  },
  {
    "name": "Hummus Plate",
    "cuisine": "Arabic",
    "ingredients": [
      "chickpeas",
      "tahini",
      "lemon",
      "garlic"
    ],
    "description": "Turn pantry staples into a creamy spread or dip.",
    "emoji": "🫓"
  },
  {
    "name": "Vegetable Fried Rice",
    "cuisine": "Chinese-inspired",
    "ingredients": [
      "rice",
      "egg",
      "carrot",
      "peas",
      "scallion",
      "soy sauce"
    ],
    "description": "Perfect for leftover rice and mixed vegetables.",
    "emoji": "🥡"
  },
  {
    "name": "Chicken Noodles",
    "cuisine": "Chinese-inspired",
    "ingredients": [
      "noodles",
      "chicken",
      "scallion",
      "soy sauce",
      "ginger"
    ],
    "description": "A quick stir-fry for leftover chicken and noodles.",
    "emoji": "🍜"
  },
  {
    "name": "Mapo Tofu Lite",
    "cuisine": "Chinese-inspired",
    "ingredients": [
      "tofu",
      "scallion",
      "garlic",
      "soy sauce"
    ],
    "description": "A simplified tofu dish great for weeknight cooking.",
    "emoji": "🥢"
  },
  {
    "name": "Bok Choy Stir-Fry",
    "cuisine": "Chinese-inspired",
    "ingredients": [
      "bok choy",
      "garlic",
      "soy sauce",
      "sesame oil"
    ],
    "description": "Fast, savory, and ideal for delicate vegetables.",
    "emoji": "🥬"
  },
  {
    "name": "Dumpling Filling Bowl",
    "cuisine": "Chinese-inspired",
    "ingredients": [
      "dumpling wrappers",
      "chicken",
      "cabbage",
      "scallion",
      "ginger"
    ],
    "description": "Use fillings and wrappers before they dry out.",
    "emoji": "🥟"
  },
  {
    "name": "Tomato Egg Stir-Fry",
    "cuisine": "Chinese-inspired",
    "ingredients": [
      "tomato",
      "egg",
      "scallion"
    ],
    "description": "A simple comfort dish with only a few ingredients.",
    "emoji": "🍅"
  },
  {
    "name": "Spanish Tortilla",
    "cuisine": "Spanish",
    "ingredients": [
      "egg",
      "potato",
      "onion",
      "olive oil"
    ],
    "description": "A classic potato omelette with pantry basics.",
    "emoji": "🥔"
  },
  {
    "name": "Gazpacho",
    "cuisine": "Spanish",
    "ingredients": [
      "tomato",
      "cucumber",
      "bell pepper",
      "olive oil"
    ],
    "description": "A chilled soup that rescues ripe vegetables.",
    "emoji": "🍅"
  },
  {
    "name": "Paella-Style Rice",
    "cuisine": "Spanish",
    "ingredients": [
      "rice",
      "shrimp",
      "peas",
      "bell pepper",
      "saffron"
    ],
    "description": "A colorful rice dish inspired by paella.",
    "emoji": "🍤"
  },
  {
    "name": "Pan con Tomate",
    "cuisine": "Spanish",
    "ingredients": [
      "bread",
      "tomato",
      "olive oil",
      "garlic"
    ],
    "description": "A very simple snack for soft tomatoes and day-old bread.",
    "emoji": "🍞"
  },
  {
    "name": "Patatas Bravas",
    "cuisine": "Spanish",
    "ingredients": [
      "potato",
      "tomato",
      "paprika",
      "olive oil"
    ],
    "description": "Crisp potatoes with a rich tomato sauce.",
    "emoji": "🍟"
  },
  {
    "name": "Empanada Filling",
    "cuisine": "Spanish-inspired",
    "ingredients": [
      "beef",
      "onion",
      "bell pepper",
      "tomato"
    ],
    "description": "A filling that uses leftover meat and vegetables.",
    "emoji": "🥟"
  },
  {
    "name": "Banana Pancakes",
    "cuisine": "Global",
    "ingredients": [
      "banana",
      "milk",
      "egg",
      "flour"
    ],
    "description": "A soft breakfast that uses ripe bananas.",
    "emoji": "🥞"
  },
  {
    "name": "Bread Pizza",
    "cuisine": "Global",
    "ingredients": [
      "bread",
      "cheese",
      "tomato"
    ],
    "description": "Turn old bread into a quick snack.",
    "emoji": "🍕"
  },
  {
    "name": "Vegetable Soup",
    "cuisine": "Global",
    "ingredients": [
      "carrot",
      "potato",
      "onion",
      "tomato"
    ],
    "description": "A warm meal for mixed vegetables.",
    "emoji": "🍲"
  },
  {
    "name": "Fruit Smoothie",
    "cuisine": "Global",
    "ingredients": [
      "banana",
      "apple",
      "milk",
      "strawberry"
    ],
    "description": "A fresh drink for soft fruits.",
    "emoji": "🥤"
  }
];

const INGREDIENT_LOOKUP = new Map();
for (const item of INGREDIENT_DB) {
  INGREDIENT_LOOKUP.set(item.name.toLowerCase(), item);
  for (const alias of item.aliases || []) INGREDIENT_LOOKUP.set(alias.toLowerCase(), item);
}

function getFoods() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}
function saveFoods(foods) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(foods));
}
function normalize(text) {
  return String(text || "").toLowerCase().trim();
}
function resolveIngredient(name) {
  return INGREDIENT_LOOKUP.get(normalize(name));
}
function canonicalName(name) {
  return resolveIngredient(name)?.name || name.trim();
}
function guessCategory(name) {
  return resolveIngredient(name)?.category || "Other";
}
function daysLeft(dateString) {
  const today = new Date();
  today.setHours(0,0,0,0);
  const d = new Date(dateString);
  d.setHours(0,0,0,0);
  return Math.ceil((d - today) / 86400000);
}
function statusInfo(left) {
  if (left < 0) return {text:"Expired", cls:"badge-expired"};
  if (left <= 1) return {text:"Use Now", cls:"badge-urgent"};
  if (left <= 3) return {text:"Soon", cls:"badge-soon"};
  return {text:"Fresh", cls:"badge-fresh"};
}
function prettyDayText(left) {
  if (left < 0) return `${Math.abs(left)} day(s) late`;
  if (left === 0) return "expires today";
  if (left === 1) return "expires tomorrow";
  return `${left} day(s) left`;
}
function heroSuggestionsHTML(foods) {
  if (!foods.length) {
    return `
      <li>🥕 Track Arabic, Chinese, and Spanish ingredients</li>
      <li>🍞 Search a much bigger ingredient database</li>
      <li>🥛 Match recipes from multiple cuisines</li>
      <li>🌍 Watch your impact grow</li>`;
  }
  const sorted = [...foods].sort((a,b)=>daysLeft(a.expiryDate)-daysLeft(b.expiryDate)).slice(0,4);
  return sorted.map(food=>{
    const left = daysLeft(food.expiryDate);
    const text = left < 0 ? "is expired" : left === 0 ? "expires today" : left === 1 ? "expires tomorrow" : `expires in ${left} days`;
    return `<li>🍽️ ${food.name} ${text}</li>`;
  }).join("");
}
function setHeroSuggestions() {
  const el = document.getElementById("heroSuggestions");
  if (el) el.innerHTML = heroSuggestionsHTML(getFoods());
}
function updateStats() {
  const foods = getFoods();
  const tracked = foods.length;
  const waste = (tracked * 0.5).toFixed(1);
  const money = Math.round(tracked * 2.5);
  const meals = Math.floor(tracked * 0.75);
  const cuisines = new Set();
  for (const food of foods) {
    for (const recipe of RECIPE_DATA) {
      if (recipe.ingredients.includes(normalize(food.name))) cuisines.add(recipe.cuisine);
    }
  }
  const setText = (id, value) => { const el = document.getElementById(id); if (el) el.textContent = value; };
  setText("itemsTracked", tracked);
  setText("wastePrevented", `${waste} kg`);
  setText("moneySaved", `$${money}`);
  setText("mealsRescued", meals);
  const summary = document.getElementById("impactSummary");
  if (summary) summary.textContent = tracked ? `You are currently tracking ${tracked} item(s), preventing about ${waste} kg of waste, saving around $${money}, and unlocking recipes across ${Math.max(cuisines.size,1)} cuisine group(s).` : "Start tracking food to see your savings and environmental impact.";
}
function setFilterButtons(filter) {
  document.querySelectorAll(".filter-btn").forEach(btn=>btn.classList.remove("active"));
  const active = document.getElementById(`filter-${filter}`);
  if (active) active.classList.add("active");
}
let currentFilter = "all";
function renderFoods() {
  const list = document.getElementById("foodList");
  if (!list) return;
  const q = normalize(document.getElementById("searchInput")?.value || "");
  let foods = getFoods().filter(food => normalize(food.name).includes(q) || normalize(food.category).includes(q));
  if (currentFilter === "urgent") foods = foods.filter(food => daysLeft(food.expiryDate) <= 3);
  if (currentFilter === "fresh") foods = foods.filter(food => daysLeft(food.expiryDate) > 3);
  if (!foods.length) {
    list.innerHTML = `<div class="empty">No food items found.</div>`;
    return;
  }
  list.innerHTML = foods.map(food => {
    const left = daysLeft(food.expiryDate);
    const s = statusInfo(left);
    const cuisineHints = [...new Set(RECIPE_DATA.filter(r => r.ingredients.includes(normalize(food.name))).map(r => r.cuisine))].slice(0,2);
    return `
      <div class="food-item">
        <div class="food-left">
          <strong>${food.name}</strong>
          <div class="food-meta">${food.category} • Expires: ${food.expiryDate} • ${prettyDayText(left)}${cuisineHints.length ? ` • Good for: ${cuisineHints.join(', ')}` : ''}</div>
        </div>
        <div class="food-right">
          <span class="badge ${s.cls}">${s.text}</span>
          <button class="small-btn" onclick="deleteFood(${food.id})">Delete</button>
        </div>
      </div>`;
  }).join("");
}
function populateFoodSuggestions() {
  const list = document.getElementById('foodSuggestions');
  const count = document.getElementById('dbCount');
  if (count) count.textContent = INGREDIENT_DB.length;
  if (!list) return;
  list.innerHTML = INGREDIENT_DB.map(item => `<option value="${item.name}">${item.category}</option>`).join('');
}
function addFood() {
  const nameEl = document.getElementById("foodName");
  const dateEl = document.getElementById("expiryDate");
  const categoryEl = document.getElementById("category");
  if (!nameEl || !dateEl || !categoryEl) return;
  const rawName = nameEl.value.trim();
  const expiryDate = dateEl.value;
  if (!rawName || !expiryDate) {
    alert("Please enter a food name and expiry date.");
    return;
  }
  const name = canonicalName(rawName);
  const category = categoryEl.value === "Auto" ? guessCategory(name) : categoryEl.value;
  const foods = getFoods();
  foods.unshift({id: Date.now(), name, expiryDate, category});
  saveFoods(foods);
  nameEl.value = "";
  dateEl.value = "";
  categoryEl.value = "Auto";
  renderFoods();
  updateStats();
  setHeroSuggestions();
  matchRecipes();
}
function deleteFood(id) {
  saveFoods(getFoods().filter(item => item.id !== id));
  renderFoods();
  updateStats();
  setHeroSuggestions();
  matchRecipes();
}
function setFilter(filter) {
  currentFilter = filter;
  setFilterButtons(filter);
  renderFoods();
}
function matchRecipes() {
  const box = document.getElementById("recipeMatches");
  if (!box) return;
  const names = getFoods().map(f => normalize(f.name));
  if (!names.length) {
    box.innerHTML = `<div class="empty">Add some food items first to get recipe matches.</div>`;
    return;
  }
  const matched = RECIPE_DATA.map(recipe => {
    const matches = recipe.ingredients.filter(i => names.includes(i));
    return {...recipe, matches, score: matches.length / recipe.ingredients.length};
  }).filter(r => r.matches.length > 0).sort((a,b)=> b.matches.length - a.matches.length || b.score - a.score);
  if (!matched.length) {
    box.innerHTML = `<div class="empty">No direct matches yet. Try Arabic foods like chickpeas or parsley, Chinese staples like soy sauce or noodles, or Spanish basics like olive oil or potato.</div>`;
    return;
  }
  box.innerHTML = matched.slice(0,12).map(recipe => `
    <div class="match-card">
      <h3>${recipe.emoji || '🍽️'} ${recipe.name}</h3>
      <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
      <p>${recipe.description}</p>
      <p><strong>Matched ingredients:</strong> ${recipe.matches.join(', ')}</p>
      <div style="margin-top:10px;">${recipe.ingredients.map(i => `<span class="cuisine-chip">${i}</span>`).join('')}</div>
    </div>
  `).join("");
}
function initTrackerPage() {
  populateFoodSuggestions();
  renderFoods();
  updateStats();
  setHeroSuggestions();
  setFilterButtons(currentFilter);
}
document.addEventListener("DOMContentLoaded", () => {
  populateFoodSuggestions();
  setHeroSuggestions();
  updateStats();
  if (document.getElementById("foodList")) initTrackerPage();
  if (document.getElementById("recipeMatches")) matchRecipes();
});

import dolo650Img from "@/assets/dolo-650.jpg";
import crocinImg from "@/assets/crocin.jpg";
import paracetamolImg from "@/assets/paracetamol.jpg";
import cetirizineImg from "@/assets/cetirizine.jpg";
import levocetirizineImg from "@/assets/levocetirizine.jpg";
import benadrylImg from "@/assets/benadryl.jpg";
import ascorilImg from "@/assets/ascoril.jpg";
import corexImg from "@/assets/corex.jpg";
import vitaminCImg from "@/assets/vitamin-c.jpg";
import zincImg from "@/assets/zinc.jpg";
import multivitaminsImg from "@/assets/multivitamins.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export interface DietPlan {
  benefits: string[];
  diet: string[];
  workout: string[];
}

export const categories = [
  { id: "fever-pain", label: "Fever & Pain Relief" },
  { id: "allergy", label: "Allergy" },
  { id: "cough-cold", label: "Cough & Cold" },
  { id: "vitamins", label: "Vitamins & Supplements" },
];

export const products: Product[] = [
  // Fever & Pain Relief
  {
    id: "dolo-650",
    name: "Dolo 650",
    price: 30,
    description: "Paracetamol 650mg tablets for fast relief from fever, headache, and body pain.",
    image: dolo650Img,
    category: "fever-pain",
  },
  {
    id: "crocin",
    name: "Crocin",
    price: 25,
    description: "Trusted paracetamol tablets for effective fever and mild-to-moderate pain relief.",
    image: crocinImg,
    category: "fever-pain",
  },
  {
    id: "paracetamol",
    name: "Paracetamol",
    price: 12,
    description: "Generic paracetamol 500mg tablets — affordable and effective fever & pain relief.",
    image: paracetamolImg,
    category: "fever-pain",
  },
  // Allergy
  {
    id: "cetirizine",
    name: "Cetirizine",
    price: 30,
    description: "Antihistamine tablet for relief from allergic rhinitis, sneezing, and itchy eyes.",
    image: cetirizineImg,
    category: "allergy",
  },
  {
    id: "levocetirizine",
    name: "Levocetirizine",
    price: 50,
    description: "Advanced antihistamine for effective allergy relief with less drowsiness.",
    image: levocetirizineImg,
    category: "allergy",
  },
  // Cough & Cold
  {
    id: "benadryl",
    name: "Benadryl",
    price: 110,
    description: "Cough syrup for dry & wet cough relief with soothing throat action.",
    image: benadrylImg,
    category: "cough-cold",
  },
  {
    id: "ascoril",
    name: "Ascoril",
    price: 145,
    description: "Expectorant syrup for productive cough, chest congestion, and bronchospasm.",
    image: ascorilImg,
    category: "cough-cold",
  },
  {
    id: "corex",
    name: "Corex",
    price: 125,
    description: "Cough suppressant syrup for dry cough and throat irritation relief.",
    image: corexImg,
    category: "cough-cold",
  },
  // Vitamins & Supplements
  {
    id: "vitamin-c",
    name: "Vitamin C",
    price: 175,
    description: "Ascorbic acid 500mg tablets to boost immunity and promote healthy skin.",
    image: vitaminCImg,
    category: "vitamins",
  },
  {
    id: "zinc",
    name: "Zinc",
    price: 110,
    description: "Zinc supplement tablets for immune support, wound healing, and metabolism.",
    image: zincImg,
    category: "vitamins",
  },
  {
    id: "multivitamin",
    name: "Multivitamin",
    price: 250,
    description: "Complete daily multivitamin with 23 essential vitamins and minerals for overall health.",
    image: multivitaminsImg,
    category: "vitamins",
  },
];

export const dietPlans: Record<string, DietPlan> = {
  "dolo-650": {
    benefits: [
      "Provides fast relief from fever and high temperature",
      "Effective against headaches and body pain",
      "Safe for adults when taken as directed",
      "Works within 30 minutes of consumption",
    ],
    diet: [
      "🥣 Light khichdi or dal rice for easy digestion",
      "🍵 Warm turmeric milk or ginger tea",
      "🍌 Bananas and boiled potatoes for energy",
      "🥒 Plenty of fluids — water, ORS, coconut water",
      "🍲 Warm vegetable soup with pepper",
    ],
    workout: [
      "😴 Day 1-2: Complete rest, avoid strenuous activity",
      "🚶 Day 3: Light 10-minute walk if fever subsides",
      "🧘 Day 4: Gentle stretching & deep breathing",
      "🚶 Day 5: 15-minute slow-paced walk",
      "🏃 Day 6-7: Gradually resume normal activity",
    ],
  },
  crocin: {
    benefits: [
      "Trusted brand for effective fever management",
      "Relieves mild-to-moderate pain quickly",
      "Gentle on the stomach when taken with food",
      "Suitable for adults and children (age-appropriate dose)",
    ],
    diet: [
      "🍚 Soft rice with curd for cooling effect",
      "🥕 Boiled vegetables — carrots, pumpkin, beans",
      "🍎 Apples & pomegranate for hydration",
      "🍵 Herbal tea with tulsi and honey",
      "🥛 Warm milk with turmeric before bed",
    ],
    workout: [
      "😴 Day 1-2: Rest and stay hydrated",
      "🧘 Day 3: Light yoga — child's pose, savasana",
      "🚶 Day 4: Short indoor walk (10 min)",
      "🧘 Day 5: Gentle stretches and breathing",
      "🚶 Day 6-7: Resume light daily activities",
    ],
  },
  paracetamol: {
    benefits: [
      "Most widely used fever and pain reliever globally",
      "Affordable and easily accessible",
      "Effective for headaches, toothaches, and muscle pain",
      "Low risk of side effects at recommended doses",
    ],
    diet: [
      "🍲 Light moong dal soup with ginger",
      "🍞 Toast with honey and warm water",
      "🍌 Bananas for potassium replenishment",
      "🥤 Fresh lime water with salt and sugar",
      "🍚 Plain rice with rasam or clear soup",
    ],
    workout: [
      "😴 Day 1-3: Rest is essential during fever",
      "🚶 Day 4: 5-minute walk around the house",
      "🧘 Day 5: Gentle neck and shoulder stretches",
      "🚶 Day 6: 15-minute outdoor walk",
      "🏃 Day 7: Light activity, listen to your body",
    ],
  },
  cetirizine: {
    benefits: [
      "Relieves sneezing, runny nose, and watery eyes",
      "Effective for seasonal and perennial allergies",
      "Reduces itching from hives and skin allergies",
      "Once-daily dosing for 24-hour relief",
    ],
    diet: [
      "🍯 Honey and warm water to soothe throat",
      "🥦 Anti-inflammatory foods — broccoli, spinach",
      "🫚 Ginger and turmeric in meals",
      "🐟 Omega-3 rich foods — fish, flaxseeds",
      "🍎 Quercetin-rich foods — apples, onions, berries",
    ],
    workout: [
      "🏠 Day 1: Indoor exercises to avoid allergens",
      "🧘 Day 2: Yoga — pranayama breathing exercises",
      "🏊 Day 3: Swimming (indoor pool preferred)",
      "🚶 Day 4: Evening walk when pollen count is low",
      "🧘 Day 5: Meditation and light stretching",
      "🏋️ Day 6-7: Gym workout (filtered air environment)",
    ],
  },
  levocetirizine: {
    benefits: [
      "More potent than cetirizine with less drowsiness",
      "Fast-acting allergy symptom relief",
      "Effective for chronic urticaria (hives)",
      "Reduces nasal congestion and post-nasal drip",
    ],
    diet: [
      "🥗 Fresh salads with anti-allergic herbs",
      "🍵 Green tea with honey for antioxidants",
      "🥑 Avocado and nuts for healthy fats",
      "🧄 Garlic — natural antihistamine properties",
      "🍊 Citrus fruits for vitamin C boost",
    ],
    workout: [
      "🏠 Day 1: Indoor bodyweight exercises",
      "🧘 Day 2: Yoga — focus on breathing techniques",
      "🚴 Day 3: Indoor cycling or treadmill",
      "🏋️ Day 4: Light weight training",
      "🧘 Day 5: Stretching and relaxation",
      "🚶 Day 6-7: Outdoor walk in clean-air areas",
    ],
  },
  benadryl: {
    benefits: [
      "Relieves dry and wet cough effectively",
      "Soothes irritated throat lining",
      "Helps with sleep during illness",
      "Available in pleasant flavors",
    ],
    diet: [
      "🍯 Warm water with honey and lemon",
      "🍵 Ginger-tulsi tea for throat relief",
      "🍲 Hot chicken or vegetable soup",
      "🌶️ Pepper rasam for clearing congestion",
      "🥛 Warm turmeric milk (golden milk)",
    ],
    workout: [
      "😴 Day 1-2: Rest, avoid cold/dry air exposure",
      "🧘 Day 3: Steam inhalation + deep breathing",
      "🚶 Day 4: Short indoor walk (10 min)",
      "🧘 Day 5: Light stretching exercises",
      "🚶 Day 6-7: Gradual return to normal activity",
    ],
  },
  ascoril: {
    benefits: [
      "Clears chest congestion and mucus buildup",
      "Relieves bronchospasm and wheezing",
      "Combines expectorant and bronchodilator action",
      "Effective for productive cough",
    ],
    diet: [
      "🍲 Hot tomato soup with pepper and basil",
      "🫚 Ginger, garlic, and honey mixture",
      "🍋 Warm lemon water multiple times a day",
      "🥘 Light meals — dal, rice, steamed veggies",
      "🍵 Herbal tea with mulethi (licorice root)",
    ],
    workout: [
      "😴 Day 1-3: Complete rest, steam inhalation",
      "🧘 Day 4: Gentle pranayama breathing",
      "🚶 Day 5: 10-minute slow walk",
      "🧘 Day 6: Light yoga — cat-cow, child's pose",
      "🚶 Day 7: Gradual increase in activity",
    ],
  },
  corex: {
    benefits: [
      "Suppresses persistent dry cough",
      "Reduces throat irritation and tickling",
      "Helps achieve restful sleep during illness",
      "Provides soothing relief for sore throat",
    ],
    diet: [
      "🍯 Honey mixed with black pepper",
      "🍵 Chamomile tea for throat soothing",
      "🍲 Warm dal soup with turmeric",
      "🍌 Soft foods — bananas, mashed potatoes",
      "🥤 Warm fluids throughout the day",
    ],
    workout: [
      "😴 Day 1-2: Complete bed rest",
      "🧘 Day 3: Steam inhalation and breathing",
      "🚶 Day 4: Short walk around the house",
      "🧘 Day 5: Gentle upper body stretches",
      "🚶 Day 6-7: Resume light outdoor walks",
    ],
  },
  "vitamin-c": {
    benefits: [
      "Boosts immune system and fights infections",
      "Powerful antioxidant for skin health",
      "Aids in collagen production and wound healing",
      "Improves iron absorption from food",
    ],
    diet: [
      "🍊 Oranges, amla (Indian gooseberry), guava",
      "🫑 Bell peppers, tomatoes, and broccoli",
      "🥗 Fresh salad with lemon dressing",
      "🍓 Strawberries and kiwi as snacks",
      "🥒 Cucumber and mint detox water",
    ],
    workout: [
      "🏃 Day 1: 30-minute brisk walk or jog",
      "🧘 Day 2: Yoga — sun salutations (30 min)",
      "🏋️ Day 3: Bodyweight exercises — push-ups, squats",
      "🚴 Day 4: Cycling or swimming (30 min)",
      "🧘 Day 5: Stretching and flexibility",
      "🏃 Day 6-7: Active sports or hiking",
    ],
  },
  zinc: {
    benefits: [
      "Essential for immune system function",
      "Supports wound healing and cell growth",
      "Helps maintain sense of taste and smell",
      "Important for protein synthesis and metabolism",
    ],
    diet: [
      "🥜 Pumpkin seeds, cashews, and almonds",
      "🍗 Chicken, eggs, and lean meat",
      "🫘 Chickpeas, lentils, and kidney beans",
      "🧀 Dairy products — milk, cheese, yogurt",
      "🌾 Whole grains — wheat, oats, brown rice",
    ],
    workout: [
      "🏋️ Day 1: Strength training — upper body",
      "🏃 Day 2: Cardio — 30 min run or cycling",
      "🏋️ Day 3: Strength training — lower body",
      "🧘 Day 4: Yoga and flexibility",
      "🏃 Day 5: HIIT or interval training (20 min)",
      "🚶 Day 6-7: Active recovery — walk & stretch",
    ],
  },
  multivitamin: {
    benefits: [
      "Fills nutritional gaps in your daily diet",
      "Boosts immune system and energy levels",
      "Supports healthy skin, hair, and nails",
      "Improves mental clarity and focus",
    ],
    diet: [
      "🥗 Breakfast: Fresh fruit smoothie with spinach & yogurt",
      "🥙 Lunch: Whole grain wrap with mixed vegetables & hummus",
      "🍎 Snack: Mixed fruits, nuts, and green tea",
      "🍲 Dinner: Lentil soup with quinoa & roasted vegetables",
      "🥒 Evening: Cucumber salad with lemon dressing",
    ],
    workout: [
      "🧘 Day 1: Yoga — Sun salutations, Warrior poses (45 min)",
      "🚶 Day 2: Brisk walking — 30 minutes outdoor walk",
      "🏊 Day 3: Light cardio — Cycling or swimming (30 min)",
      "🧘 Day 4: Stretching & flexibility exercises",
      "🚴 Day 5: Low-impact aerobics or dance fitness",
      "🌿 Day 6-7: Nature walks & breathing exercises",
    ],
  },
};

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  thumbnail: string;
  mainImage: string;
  images: string[];
  contents: string[];
  size: string;
  buyUrl: string;
}

export const products: Product[] = [
  {
    id: "greenplay",
    name: "GreenPlay: Gradient Instagram Highlight Cover Pack",
    description: "Level up your Instagram profile with GreenPlay, a sleek, football-inspired gradient highlight cover pack! 🍃⚽️ Perfect for adding a fresh, vibrant touch to your story highlights, this collection is designed to make your profile pop with clean, green-themed gradients. Whether you're into football or just love a minimal look, GreenPlay has you covered. 💚\n\nGet your profile game strong with this bold, eye-catching pack! Ideal for sports lovers, minimalists, and trendsetters alike. 💥\n\nDownload now and let your highlights shine! 🌟",
    price: 1,
    thumbnail: "/images/greenplay_main.png",
    mainImage: "https://public-files.gumroad.com/d2t6bah8aseenrur5f7wryu0oq8g",
    images: [
      "https://public-files.gumroad.com/d2t6bah8aseenrur5f7wryu0oq8g",
      "https://public-files.gumroad.com/e3r3wor1qor8vqcmlpafwnzc2y5g",
      "https://public-files.gumroad.com/l5oxcbm1pkzvpxy0h2t7ibqzevgb"
    ],
    contents: [
      "Car",
      "Real Madrid CF",
      "Cristiano Ronaldo",
      "Football",
      "UEFA Euro 2024",
      "UEFA Champions League",
      "Portugal FC",
      "Al Nassr FC"
    ],
    size: "4.07 MB",
    buyUrl: "https://app.gumroad.com/checkout?_gl=1*12d1w8d*_ga*MTc1NjY5MzExMy4xNzM0MTY1NDkx*_ga_6LJN6D94N6*MTczNDE2NTQ5MS4xLjEuMTczNDE2NTUzMC4wLjAuMA..&product=dwnae&quantity=1"
  }
];


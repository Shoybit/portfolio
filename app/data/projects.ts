export type Project = {
  slug: string;
  name: string;
  image: string;
  description: string;
  live: string;
  github: string;
  githubClient?: string; // ✅ optional
  tech: string[];
};

export const projects: Project[] = [
  {
    slug: "cleanliness",
    name: "Cleanliness",
    image: "/cleenkaleidoscopic-alpaca-0f5158-netlify-app-2025-12-05-23_03_48.jpg",
    description:
      "Empowering communities to report, track, and contribute to a cleaner, safer environment.",
    live: "https://kaleidoscopic-alpaca-0f5158.netlify.app/",
    github: "https://github.com/Shoybit/Cleanliness--client",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React",
      "Firebase Auth",
      "TailwindCSS",
    ],
  },
  {
    slug: "foodhub",
    name: "FoodHub",
    image: "/Screenshot 2025-12-05 225958.png",
    description:
      "Modern food ordering app with instant search, product browsing, and secure ordering.",
    live: "https://foodhub-one-neon.vercel.app/",
    github: "https://github.com/Shoybit/FoodHub",
    githubClient: "https://github.com/Shoybit/FoodHub", // ✅ যদি client repo থাকে
    tech: [
      "Next.js",
      "React",
      "Firebase",
      "MongoDB Atlas",
      "TailwindCSS",
    ],
  },
  {
    slug: "green-nest",
    name: "Green-Nest",
    image: "/greennest.png",
    description:
      "Eco-friendly web application promoting sustainable products and green lifestyle awareness.",
    live: "https://remarkable-torte-c4c438.netlify.app/",
    github: "https://github.com/Shoybit/Green-Nest",
    tech: [
      "React",
      "Tailwind",
      "Firebase",
      "DaisyUI",
      "Toastify",
    ],
  },
];

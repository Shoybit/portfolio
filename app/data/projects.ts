export type Project = {
  slug: string;
  name: string;
  image: string;
  description: string;
  live: string;
  github: string;
  githubClient?: string; 
  tech: string[];
};

export const projects: Project[] = [
  {
    slug: "cleanliness",
    name: "Cleanliness",
    image: "/cleenkaleidoscopic-alpaca-0f5158-netlify-app-2025-12-05-23_03_48.jpg",
    description:
      "Empowering communities to report, track, and contribute to a cleaner, safer environment. Fully-featured MERN stack application with responsive design, secure authentication, and contribution tracking..",
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
      "FoodHub – Next.js Food Ordering Platform. Modern food ordering app with instant search, product browsing, and secure ordering, powered by Firebase Auth and MongoDB Atlas with a responsive UI.",
    live: "https://foodhub-one-neon.vercel.app/",
    github: "https://github.com/Shoybit/FoodHub",
    githubClient: "https://github.com/Shoybit/FoodHub", 
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
      "GreenNest – Eco-Friendly Web App. A modern, responsive web application built with React, Tailwind CSS, and Firebase, designed to promote sustainable products and raise green lifestyle awareness.",
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
   {
    slug: "assetVerse",
    name: "AssetVerse",
    image: "/AssetVerse.png", 
    description:
      "AssetVerse is a modern Digital Asset Management (DAM) web application built with React and Vite. The platform allows users to manage, track, and organize digital or physical assets in a structured and user-friendly environment.",
    live: "https://my-assetverse.vercel.app/",
    github: "https://github.com/Shoybit/AssetVerse",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "DaisyUI",
      "Axios",
      "React Router",
      "React Hook Form",
      "Recharts",
      "Framer Motion",
      "SweetAlert2",
      "React Toastify",
    ],
  },
];

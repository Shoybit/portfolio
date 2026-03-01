/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub, FaEye } from 'react-icons/fa';

export default function Projects() {
  const updatedProjects = [
    {
      name: "Cleanliness",
      description: "Empowering communities to report, track, and contribute to a cleaner, safer environment. Features real-time reporting, community engagement, and impact tracking to make our neighborhoods better places to live.",
      tech: ["Node.js", "Router", "MongoDB", "React.js", "Express.js", "JavaScript", "Firebase Auth", "TailwindCSS"],
      live: "https://kaleidoscopic-alpaca-0f5158.netlify.app/",
      details: "/projects/cleanliness",
      github: "https://github.com/Shoybit/Cleanliness--client",
      image: "/cleenkaleidoscopic-alpaca-0f5158-netlify-app-2025-12-05-23_03_48.jpg"
    },
    {
      name: "FoodHub",
      description: "Modern food ordering app with instant search, product browsing, and secure ordering. Built with performance and user experience in mind, featuring real-time updates and seamless checkout.",
      tech: ["Next.js", "JavaScript", "React", "Firebase", "Express", "MongoDB Atlas", "Vercel", "TailwindCSS"],
      live: "https://foodhub-one-neon.vercel.app/",
      details: "/projects/foodhub",
      github: "https://github.com/Shoybit/FoodHub",
      image: "/Screenshot 2025-12-05 225958.png"
    },
    {
      name: "GreenNest",
      description: "Eco-friendly web application promoting sustainable products and green lifestyle awareness. Discover eco-friendly products, track your carbon footprint, and join a community of environmentally conscious individuals.",
      tech: ["React", "Tailwind", "Firebase", "DaisyUI", "ReactJS", "Toastify", "Spinner", "TailwindCSS"],
      live: "https://remarkable-torte-c4c438.netlify.app/",
      details: "/projects/green-nest",
      github: "https://github.com/Shoybit/Green-Nest",
      image: "/greennest.png"
    },
    {
      name: "AssetVerse",
      description: "AssetVerse is a modern Digital Asset Management (DAM) web application built with the MERN ecosystem (Frontend: React + Vite). The platform is designed to efficiently manage, track, and organize digital or physical assets in a structured and user-friendly environment.",
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
  "React Toastify"
],
      live: "https://my-assetverse.vercel.app/",
      details: "/projects/assetVerse",
      github: "https://github.com/Shoybit/AssetVerse",
      image: "/AssetVerse.png"
    },

  ];

  return (
    <section id="projects" className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-900 to-background-dark">
      <div className="container mx-auto">
        {/* Header with improved styling */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white dark:text-white mb-8 md:mb-12">
            My Projects<span className="text-primary">.</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            A selection of my favorite work. I&apos;m passionate about building clean, efficient, and user-friendly applications.
          </p>
        </div>

        {/* Alternating Projects Layout */}
        <div className="space-y-16 md:space-y-24">
          {updatedProjects.map((project, index) => (
            <div 
              key={index}
              className={`
                flex flex-col 
                ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}
                gap-8 lg:gap-12 xl:gap-16
                group
              `}
            >
              {/* Image Section */}
              <div className="lg:w-1/2 relative">
                <div className="
                  relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden
                  shadow-xl hover:shadow-2xl transition-all duration-500
                  border border-gray-700/50 group-hover:border-primary/30
                ">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Live badge */}
                  <div className="absolute top-4 right-4 z-20 bg-green-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-green-500/30">
                    <span className="flex items-center gap-2 text-green-300 text-xs font-medium">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      Live Project
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 flex flex-col justify-center">
                {/* Project Number */}
                <span className="text-primary/60 text-sm font-mono mb-3">
                  {(index + 1).toString().padStart(2, '0')}
                </span>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>

                {/* Description Card */}
                <div className="
                  bg-gradient-to-br from-gray-800/80 to-gray-900/90 
                  rounded-xl p-6 mb-6
                  border border-gray-700/50
                  backdrop-blur-sm
                ">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">TECHNOLOGIES</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="
                          text-sm bg-gray-800/80 text-gray-300 
                          px-4 py-2 rounded-full 
                          border border-gray-700 
                          hover:border-primary/50 hover:text-primary 
                          transition-all duration-300
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  {/* Live Demo */}
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group/btn
                      flex items-center gap-2
                      px-6 py-3
                      bg-primary hover:bg-primary-dark
                      text-white font-medium
                      rounded-lg
                      transition-all duration-300
                      hover:shadow-lg hover:shadow-primary/30
                    "
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Live Demo</span>
                  </Link>

                  {/* View Details */}
                  <Link
                    href={project.details}
                    className="
                      group/btn
                      flex items-center gap-2
                      px-6 py-3
                      bg-gray-800 hover:bg-gray-700
                      text-white font-medium
                      rounded-lg
                      transition-all duration-300
                      border border-gray-700 hover:border-primary/50
                    "
                  >
                    <FaEye className="text-sm" />
                    <span>View Details</span>
                  </Link>

                  {/* GitHub */}
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group/btn
                      flex items-center gap-2
                      px-6 py-3
                      bg-gray-800/50 hover:bg-gray-800
                      text-gray-400 hover:text-white
                      font-medium
                      rounded-lg
                      transition-all duration-300
                      border border-gray-700 hover:border-primary/50
                    "
                  >
                    <FaGithub className="text-base" />
                    <span>Code</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
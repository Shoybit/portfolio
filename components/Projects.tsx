/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub, FaEye } from 'react-icons/fa';

export default function Projects() {
  const updatedProjects = [
    {
      name: "Cleanliness",
      description: "Empowering communities to report, track, and contribute to a cleaner, safer environment....",
      tech: ["Node.js", "Router", "MongoDB", "React.js", "Express.js", "JavaScript", "Firebase Auth", "TailwindCSS"],
      live: "https://kaleidoscopic-alpaca-0f5158.netlify.app/",
      details: "/projects/cleanliness",
      github: "https://github.com/Shoybit/Cleanliness--client",
      image: "/cleenkaleidoscopic-alpaca-0f5158-netlify-app-2025-12-05-23_03_48.jpg"
    },
    {
      name: "FoodHub",
      description: "Modern food ordering app with instant search, product browsing, and secure ordering....",
      tech: ["Next.js", "JavaScript", "React", "Firebase", "Express", "MongoDB Atlas", "Vercel", "TailwindCSS"],
      live: "https://foodhub-one-neon.vercel.app/",
      details: "/projects/foodhub",
      github: "https://github.com/Shoybit/FoodHub",
      image: "/Screenshot 2025-12-05 225958.png"
    },
    {
      name: "Green-Nest",
      description: "Eco-friendly web application promoting sustainable products and green lifestyle awareness....",
      tech: ["React", "Tailwind", "Firebase", "DaisyUI", "ReactJS", "Toastify", "Spinner", "TailwindCSS"],
      live: "https://remarkable-torte-c4c438.netlify.app/",
      details: "/projects/green-nest",
      github: "https://github.com/Shoybit/Green-Nest",
      image: "/greennest.png"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-linear-to-b from-gray-900 to-background-dark">
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

        {/* Projects Grid with updated design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {updatedProjects.map((project, index) => (
            <div 
              key={index}
              className="group bg-linear-to-b from-gray-800/80 to-gray-900/90 rounded-2xl overflow-hidden shadow-xl hover:shadow-primary/20 transition-all duration-500 border border-gray-700/50 hover:border-primary/30"
            >
              {/* Image with overlay */}
              <div className="h-48 md:h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent opacity-70 z-10"></div>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Live badge */}
                <div className="absolute top-4 right-4 z-20 bg-green-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-green-500/30">
                  <span className="flex items-center gap-2 text-green-300 text-xs font-medium">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Live
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-5 text-[16px] leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-800/80 text-gray-300 px-3 py-1.5 rounded-full border border-gray-700 hover:border-primary/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center">
                  {/* Live Demo */}
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/live flex items-center gap-2 text-primary hover:text-primary-light text-sm font-medium transition-colors"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Live Demo</span>
                  </Link>

                  {/* View Details - Centered and prominent */}
                  <Link
                    href={project.details}
                    className="group/details flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all duration-300"
                  >
                    <FaEye className="text-sm" />
                    <span className="font-medium">View Details</span>
                    <span className="group-hover/details:translate-x-1 transition-transform">→</span>
                  </Link>

                  {/* GitHub */}
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/github flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-colors"
                  >
                    <FaGithub className="text-base" />
                    <span>GitHub</span>
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
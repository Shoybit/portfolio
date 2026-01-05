import { projects } from "@/app/data/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaLink } from "react-icons/fa";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProjectDetails({ params }: Props) {
  const { slug } = React.use(params);

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white bg-linear-to-b from-gray-900 to-background-dark px-4">
        <h1 className="text-4xl font-bold mb-4 text-primary">404</h1>
        <p className="text-gray-300 text-lg mb-8">Project not found</p>
        <Link
          href="/#projects"
          className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg transition-all hover:scale-105"
        >
          <FaArrowLeft />
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-linear-to-b from-gray-900 to-background-dark">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16 text-white">
        {/* Back Button */}
        <div className="mb-8 md:mb-12">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                {project.name}
                <span className="text-primary">.</span>
              </h1>
            </div>

            <div className="relative rounded-2xl overflow-hidden mb-8 group">
              <div className="absolute inset-0 bg-linear-to-t from-gray-900/60 to-transparent z-10"></div>
              <Image
                src={project.image}
                alt={project.name}
                width={1200}
                height={600}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">
                Project Overview
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.tech.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg border border-gray-700/50 hover:border-primary/30 transition-colors"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
                  <FaLink className="text-lg" />
                  Technology Stack
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-linear-to-br from-gray-900 to-gray-800 text-gray-300 px-4 py-2 rounded-full border border-gray-700 hover:border-primary/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  Project Links
                </h2>
                <div className="space-y-4">
                  <Link
                    href={project.live}
                    target="_blank"
                    className="group/live flex items-center justify-between p-4 bg-linear-to-r from-primary/20 to-primary/10 rounded-xl border border-primary/30 hover:border-primary/50 transition-all hover:scale-[1.02]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <FaExternalLinkAlt className="text-primary text-lg" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">
                          Live Project
                        </h3>
                        <p className="text-sm text-gray-400">View live demo</p>
                      </div>
                    </div>
                    <FaExternalLinkAlt className="text-gray-400 group-hover/live:text-primary transition-colors" />
                  </Link>

                  <Link
                    href={project.github}
                    target="_blank"
                    className="group/github flex items-center justify-between p-4 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-gray-500 transition-all hover:scale-[1.02]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-800 rounded-lg">
                        <FaGithub className="text-gray-400 text-lg" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">
                          GitHub Repository
                        </h3>
                        <p className="text-sm text-gray-400">
                          View source code
                        </p>
                      </div>
                    </div>
                    <FaGithub className="text-gray-400 group-hover/github:text-white transition-colors" />
                  </Link>

                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  Project Info
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-700/50">
                    <span className="text-gray-400">Status</span>
                    <span className="inline-flex items-center gap-2 text-green-400">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      Live
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-700/50">
                    <span className="text-gray-400">Type</span>
                    <span className="text-white">Web Application</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Stack</span>
                    <span className="text-white">Full Stack</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

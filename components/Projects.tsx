/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function Projects() {
    return (
        <section id="projects" className="py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-background-light dark:bg-background-dark">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
                    My Projects<span className="text-primary">.</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
                    A selection of my favorite work. I&apos;m passionate about building clean, efficient, and user-friendly applications.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

                    {/* Project 2 */}
                    <div className="project-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                        <div className="h-40 md:h-48 overflow-hidden relative group">
                            <img
                                src="/cleenkaleidoscopic-alpaca-0f5158-netlify-app-2025-12-05-23_03_48.jpg"
                                alt="Weather App"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500"></div>
                        </div>
                        <div className="p-4 md:p-6">
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2"> Cleanliness</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-3 md:mb-4 text-sm md:text-base">Empowering communities to report, track, and contribute to a cleaner, safer environment. Fully-featured MERN stack application with responsive design, secure authentication, and contribution tracking.</p>

                            <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                            <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">Node.js</span>
                            <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">Router</span>
                            <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">MongoDB</span>
                            <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">React.js</span>
                            <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">Express.js</span>
                            <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">JavaScript</span>
                            <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">Firebase Auth</span>
                            <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">TailwindCSS</span>
                            </div>


                            <div className="flex justify-between">
                                <Link href="https://kaleidoscopic-alpaca-0f5158.netlify.app/" className="text-primary hover:text-primary-dark font-medium text-xs md:text-sm flex items-center gap-1 group">
                                    <i className="fas fa-external-link-alt group-hover:translate-x-1 transition-transform"></i>
                                    <span>Live Demo</span>
                                </Link>
                                <Link href="https://github.com/Shoybit/Cleanliness--client" className="text-gray-600 dark:text-gray-400 hover:text-primary font-medium text-xs md:text-sm flex items-center gap-1 group">
                                    <i className="fab fa-github group-hover:scale-110 transition-transform"></i>
                                    <span>GitHub</span>
                                </Link>
                            </div>
                        </div>
                    </div>




                                        {/* Project 1 */}
                    <div className="project-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                        <div className="h-40 md:h-48 overflow-hidden relative group">
                            <img
                                src="/Screenshot 2025-12-05 225958.png"
                                alt="E-commerce Platform"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500"></div>
                        </div>
                        <div className="p-4 md:p-6">
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">FoodHub</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-3 md:mb-4 text-sm md:text-base">FoodHub – Next.js Food Ordering Platform
Modern food ordering app with instant search, product browsing, and secure ordering, powered by Firebase Auth and MongoDB Atlas with a responsive UI.</p>

                            <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                            <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">Next.js</span>
                            <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">JavaScript</span>
                            <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">React</span>
                            <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">Firebase</span>
                            <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">Express</span>
                            <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">MongoDB Atlas</span>
                            <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">Vercel</span>
                            <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">TailwindCSS</span>
                            </div>


                            <div className="flex justify-between">
                                <Link href="https://foodhub-one-neon.vercel.app/" className="text-primary hover:text-primary-dark font-medium text-xs md:text-sm flex items-center gap-1 group">
                                    <i className="fas fa-external-link-alt group-hover:translate-x-1 transition-transform"></i>
                                    <span>Live Demo</span>
                                </Link>
                                <Link href="https://github.com/Shoybit/FoodHub" className="text-gray-600 dark:text-gray-400 hover:text-primary font-medium text-xs md:text-sm flex items-center gap-1 group">
                                    <i className="fab fa-github group-hover:scale-110 transition-transform"></i>
                                    <span>GitHub</span>
                                </Link>
                            </div>
                        </div>
                    </div>




                    {/* Project 3 */}
                    <div className="project-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                        <div className="h-40 md:h-48 overflow-hidden relative group">
                            <img
                                src="/greennest.png"
                                alt="Task Manager"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500"></div>
                        </div>
                        <div className="p-4 md:p-6">
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">Green-Nest</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-3 md:mb-4 text-sm md:text-base">GreenNest – Eco-Friendly Web App
A modern, responsive web application built with React, Tailwind CSS, and Firebase, designed to promote sustainable products and raise green lifestyle awareness.</p>

                            <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                            <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">React</span>
                            <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">Tailwind</span>
                            <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">Firebase</span>
                            <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">DaisyUI</span>
                            <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">ReactJS</span>
                            <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">Toastify</span>
                            <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">Spinner</span>
                            <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">TailwindCSS</span>
                            </div>


                            <div className="flex justify-between">
                                <Link href="https://remarkable-torte-c4c438.netlify.app/" className="text-primary hover:text-primary-dark font-medium text-xs md:text-sm flex items-center gap-1 group">
                                    <i className="fas fa-external-link-alt group-hover:translate-x-1 transition-transform"></i>
                                    <span>Live Demo</span>
                                </Link>
                                <Link href="https://github.com/Shoybit/Green-Nest" className="text-gray-600 dark:text-gray-400 hover:text-primary font-medium text-xs md:text-sm flex items-center gap-1 group">
                                    <i className="fab fa-github group-hover:scale-110 transition-transform"></i>
                                    <span>GitHub</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* eslint-disable @next/next/no-img-element */
"use client";


export default function About() {
    return (
        <section id="about" className="py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-900">
            <div className="container mx-auto">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-12">
                    About Me<span className="text-primary">.</span>
                </h1>

                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12 md:mb-16">
                    <div className="shrink-0">
                        <div className="relative">
                            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/50 shadow-lg hover:scale-105 transition-transform duration-500">
                                <img
                                    alt="Portrait of Shoyaib Islam"
                                    className="w-full h-full object-cover"
                                    src="/WhatsApp Image 2025-11-29 at 00.27.29_b32a6fed-depositphotos-bgremover.png"
                                    onError={(e) => {
                                        e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-3 md:mb-4">
                            A Bit About Me
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                            I’m a passionate MERN-stack & Front-End developer building responsive, user-friendly web applications with React.js, JavaScript, Tailwind CSS, Firebase, Node.js, Express, and MongoDB. I thrive on writing clean, scalable code and transforming complex problems into elegant, intuitive UIs. I enjoy exploring new technologies — currently diving deeper into frameworks like Next.js — and contributing to meaningful projects. Outside of coding, I’m always learning, experimenting, and aiming to build software that makes a difference.
                        </p>

                        <div className="mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                            <div className="text-center p-3 md:p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover-lift">
                                <div className="text-2xl md:text-3xl text-primary font-bold">2+</div>
                                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Years Learning</div>
                            </div>
                            <div className="text-center p-3 md:p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover-lift">
                                <div className="text-2xl md:text-3xl text-primary font-bold">10+</div>
                                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                            </div>
                            <div className="text-center p-3 md:p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover-lift">
                                <div className="text-2xl md:text-3xl text-primary font-bold">100%</div>
                                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Dedication</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

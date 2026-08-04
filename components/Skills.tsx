/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const skills = [
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Tailwind CSS", icon: "/images-depositphotos-bgremover.png" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Adobe Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-original.svg" },
    ];

    const loopedSkills = [...skills, ...skills, ...skills];

    return (
        <section 
            id="skills" 
            ref={ref}
            className="relative py-16 md:py-24 bg-gradient-to-br from-[#0D1117] via-[#161B22] to-[#0D1117] overflow-hidden"
        >
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <motion.div
                        className="inline-block"
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : {}}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase">My Arsenal</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2">
                        Skills<span className="text-primary">.</span>
                    </h2>
                    <motion.div
                        className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mt-4 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 80 } : {}}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    />
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
                        Technologies and tools I work with to build amazing digital experiences
                    </p>
                </motion.div>

                {/* Skills Slider */}
                <div className="relative">
                    {/* Gradient Overlays */}
                    <div className="absolute left-0 top-0 w-16 md:w-24 h-full bg-gradient-to-r from-[#0D1117] to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 w-16 md:w-24 h-full bg-gradient-to-l from-[#0D1117] to-transparent z-10 pointer-events-none"></div>

                    <div className="slider overflow-hidden py-4">
                        <div className="slide-track">
                            {loopedSkills.map((skill, index) => (
                                <div className="slide" key={`${skill.name}-${index}`}>
                                    <div className="skill-card">
                                        <div className="skill-icon">
                                            <img 
                                                src={skill.icon} 
                                                alt={skill.name}
                                                className="w-full h-full object-contain mx-auto"
                                            />
                                        </div>
                                        <p className="skill-name text-white">{skill.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            <style jsx>{`
                .slider {
                    width: 100%;
                    overflow: hidden;
                    position: relative;
                }

                .slide-track {
                    display: flex;
                    gap: 1.5rem;
                    animation: scroll 40s linear infinite;
                    width: max-content;
                    padding: 0.5rem 0;
                }

                .slide {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5rem;
                    flex-shrink: 0;
                }

                .skill-card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 0.75rem;
                    padding: 1.25rem 1rem;
                    background: rgba(22, 27, 34, 0.6);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    border-radius: 1rem;
                    width: 120px;
                    height: 130px;
                    transition: all 0.3s ease;
                    cursor: default;
                }

                .skill-card:hover {
                    border-color: rgba(244, 130, 103, 0.3);
                    background: rgba(22, 27, 34, 0.8);
                    transform: translateY(-4px);
                    box-shadow: 0 8px 30px rgba(244, 130, 103, 0.08);
                }

                .skill-icon {
                    width: 48px;
                    height: 48px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    flex-shrink: 0;
                }

                .skill-card:hover .skill-icon {
                    transform: translateY(-8px);
                }

                .skill-name {
                    font-size: 0.75rem;
                    font-weight: 500;
                    color: #9CA3AF;
                    text-align: center;
                    transition: color 0.3s ease;
                    white-space: nowrap;
                    max-width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .skill-card:hover .skill-name {
                    color: #FFFFFF;
                }

                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-33.33%));
                    }
                }

                /* Pause animation on hover */
                .slider:hover .slide-track {
                    animation-play-state: paused;
                }

                @media (max-width: 640px) {
                    .slide-track {
                        gap: 1rem;
                        animation-duration: 30s;
                    }
                    
                    .skill-card {
                        padding: 1rem 0.75rem;
                        width: 90px;
                        height: 100px;
                    }

                    .skill-icon {
                        width: 36px;
                        height: 36px;
                    }

                    .skill-name {
                        font-size: 0.6rem;
                    }
                }

                @media (min-width: 641px) and (max-width: 1024px) {
                    .skill-card {
                        width: 105px;
                        height: 115px;
                        padding: 1.1rem 0.85rem;
                    }

                    .skill-icon {
                        width: 42px;
                        height: 42px;
                    }
                }

                /* Hide scrollbar */
                .slider::-webkit-scrollbar {
                    display: none;
                }
                .slider {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
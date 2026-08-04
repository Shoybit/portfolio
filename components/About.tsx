/* eslint-disable @next/next/no-img-element */
"use client";

// এখানে Variants ইম্পোর্ট করা হয়েছে
import { motion, useInView, Variants } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [counts, setCounts] = useState({ experience: 0, projects: 0, dedication: 0 });

    useEffect(() => {
        if (isInView) {
            const duration = 2000;
            const steps = 60;
            const interval = duration / steps;

            let currentStep = 0;
            const timer = setInterval(() => {
                currentStep++;
                const progress = currentStep / steps;
                
                setCounts({
                    experience: Math.min(Math.floor(2 * progress), 2),
                    projects: Math.min(Math.floor(40 * progress), 40),
                    dedication: Math.min(Math.floor(100 * progress), 100),
                });

                if (currentStep >= steps) {
                    clearInterval(timer);
                }
            }, interval);

            return () => clearInterval(timer);
        }
    }, [isInView]);

    // টাইপস্ক্রিপ্ট এরর দূর করতে : Variants যোগ করা হয়েছে
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const statVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section id="about" className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
            </div>

            <div ref={ref} className="container mx-auto relative z-10">
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
                        <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase">About Me</span>
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2">
                        Know Me<span className="text-primary">.</span>
                    </h1>
                    <motion.div
                        className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mt-4 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 80 } : {}}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    />
                </motion.div>

                {/* Main Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16"
                >
                    {/* Image Section */}
                    <motion.div variants={itemVariants} className="flex-shrink-0">
                        <div className="relative group mt-2">
                            {/* Glowing Ring */}
                            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary via-purple-500 to-primary opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
                            
                            {/* Main Image Container */}
                            <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-4 border-primary/30 shadow-2xl hover:shadow-primary/20 transition-all duration-500 group-hover:scale-105 group-hover:border-primary/60">
                                <img
                                    alt="Portrait of Shoyaib Islam"
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                    src="/Hero Image.png"
                                    onError={(e) => {
                                        e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
                                    }}
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div variants={itemVariants} className="flex-1 text-center lg:text-left w-full">
                        <motion.h2 
                            variants={itemVariants}
                            className="text-2xl md:text-3xl font-semibold text-white mb-4"
                        >
                            A Bit About Me
                        </motion.h2>
                        
                        <motion.p 
                            variants={itemVariants}
                            className="text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg w-full"
                        >
                            I&apos;m a passionate MERN-stack & Front-End developer building responsive, 
                            user-friendly web applications with React.js, JavaScript, Tailwind CSS, Firebase, 
                            Node.js, Express, and MongoDB. I thrive on writing clean, scalable code and 
                            transforming complex problems into elegant, intuitive UIs.
                        </motion.p>

                        <motion.p 
                            variants={itemVariants}
                            className="text-gray-400 leading-relaxed text-sm md:text-base mt-4 w-full"
                        >
                            I enjoy exploring new technologies — currently diving deeper into frameworks 
                            like Next.js — and contributing to meaningful projects. Outside of coding, I&apos;m 
                            always learning, experimenting, and aiming to build software that makes a difference.
                        </motion.p>

                        {/* Stats Grid */}
                        <motion.div 
                            variants={containerVariants}
                            className="grid grid-cols-3 gap-4 md:gap-6 mt-8 w-full"
                        >
                            {[
                                { label: "Years Learning", value: counts.experience, suffix: "+" },
                                { label: "Projects Done", value: counts.projects, suffix: "+" },
                                { label: "Dedication", value: counts.dedication, suffix: "%" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    variants={statVariants}
                                    className="relative group bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-700/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                                    whileHover={{ y: -5 }}
                                >
                                    {/* Background Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    
                                    <div className="relative z-10">
                                        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                                            {stat.value}
                                            <span className="text-white/60">{stat.suffix}</span>
                                        </div>
                                        <div className="text-xs md:text-sm text-gray-400 mt-1">
                                            {stat.label}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div 
                            variants={itemVariants}
                            className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
                        >
                            <motion.a
                                href="#contact"
                                className="group relative inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10">Let's Connect</span>
                                <motion.span
                                    className="relative z-10"
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                >
                                    →
                                </motion.span>
                                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </motion.a>
                            
                            <motion.a
                                href="#projects"
                                className="group inline-flex items-center gap-2 px-8 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Projects
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
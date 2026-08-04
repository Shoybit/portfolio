"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Experience } from "@/components/Experience";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        className="fixed inset-0 z-9999 flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-gray-900"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                    >
                        <div className="flex flex-col items-center justify-center gap-6">
                            {/* Main Name with Animation */}
                            <motion.h1
                                className="text-4xl md:text-6xl lg:text-7xl text-white font-bold tracking-widest"
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                            >
                                Shoyaib Islam
                            </motion.h1>

                            {/* Subtitle with Typewriter Effect */}
                            <motion.div
                                className="flex items-center gap-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                            >
                                <span className="w-8 h-0.5 bg-linear-to-r from-transparent to-primary"></span>
                                <motion.span
                                    className="text-primary text-sm md:text-base lg:text-lg font-medium tracking-widest uppercase"
                                    animate={{
                                        opacity: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    Frontend Developer
                                </motion.span>
                                <span className="w-8 h-0.5 bg-linear-to-l from-transparent to-primary"></span>
                            </motion.div>

                            {/* Loading Progress Bar */}
                            <motion.div
                                className="w-48 md:w-64 h-0.5 bg-gray-700 rounded-full overflow-hidden mt-4"
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: "auto" }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                <motion.div
                                    className="h-full bg-linear-to-r from-primary to-purple-500 rounded-full"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 2.5, ease: "easeInOut" }}
                                />
                            </motion.div>

                            {/* Loading Dots */}
                            <motion.div
                                className="flex gap-2 mt-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                            >
                                {[0, 1, 2].map((i) => (
                                    <motion.span
                                        key={i}
                                        className="w-2 h-2 bg-primary/60 rounded-full"
                                        animate={{
                                            scale: [1, 1.5, 1],
                                            opacity: [0.4, 1, 0.4],
                                        }}
                                        transition={{
                                            duration: 1.2,
                                            repeat: Infinity,
                                            delay: i * 0.2,
                                            ease: "easeInOut",
                                        }}
                                    />
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {!isLoading && (
                <main>
                    <Navbar />
                    <Hero />
                    <About />
                    <Skills />
                    <Education />
                    <Experience />
                    <Projects />
                    <Contact />
                    <Footer />
                </main>
            )}
        </>
    );
}
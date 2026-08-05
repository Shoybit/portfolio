"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

export default function Education() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const educationData = {
        degree: "Diploma in Engineering",
        technology: "Computer Science & Technology",
        institute: "Graphic Arts Institute, Dhaka",
        year: "2023-2027",
        status: "Currently Enrolled",
        courses: [
            { name: "Programming Fundamentals", color: "blue" },
            { name: "Web Development", color: "green" },
            { name: "Database Management", color: "purple" },
            { name: "Software Engineering", color: "yellow" },
            { name: "Data Structures", color: "pink" },
            { name: "Network Security", color: "red" },
        ]
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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
                ease: "easeOut",
            },
        },
    };

    const getColorClass = (color: string): string => {
        const colors: Record<string, string> = {
            blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
            green: "bg-green-500/20 text-green-400 border-green-500/30",
            purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
            yellow: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
            pink: "bg-pink-500/20 text-pink-400 border-pink-500/30",
            red: "bg-red-500/20 text-red-400 border-red-500/30",
        };
        return colors[color] || colors.blue;
    };

    return (
        <section 
            id="education" 
            ref={ref}
            className="relative py-16 md:py-24 bg-gradient-to-br from-[#0D1117] via-[#161B22] to-[#0D1117] overflow-hidden"
        >
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Premium Header Section */}
                <motion.div 
                    className="text-center mb-12 sm:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Subtitle Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs font-medium text-primary tracking-wide uppercase">
                            Education Journey
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                        <span className="text-white">My </span>
                        <span className="bg-gradient-to-r from-primary via-purple-500 to-purple-600 bg-clip-text text-transparent">
                            Education
                        </span>
                    </h2>

                    {/* Animated Gradient Underline */}
                    <motion.div
                        className="h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mt-4 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 80 } : { width: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    />

                    <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-400 leading-relaxed px-4">
                        My educational background and journey in technology.
                    </p>
                </motion.div>

                {/* Education Card */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="max-w-4xl mx-auto"
                >
                    <motion.div 
                        variants={itemVariants}
                        className="relative group"
                    >
                        {/* Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Main Card */}
                        <div className="relative bg-[#161B22] rounded-2xl border border-gray-800/50 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                            {/* Card Header Gradient */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-primary"></div>
                            
                            <div className="p-6 md:p-8 lg:p-10">
                                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                                    {/* Icon */}
                                    <motion.div 
                                        variants={itemVariants}
                                        className="relative"
                                    >
                                        <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl"></div>
                                        <div className="relative bg-gradient-to-br from-primary/20 to-purple-500/20 p-4 md:p-5 rounded-xl border border-primary/20">
                                            <i className="fas fa-graduation-cap text-primary text-3xl md:text-4xl"></i>
                                        </div>
                                    </motion.div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <motion.div variants={itemVariants}>
                                            <div className="flex flex-wrap items-center gap-3 mb-2">
                                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                                                    {educationData.degree}
                                                </h3>
                                                <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full border border-primary/30">
                                                    {educationData.status}
                                                </span>
                                            </div>
                                            
                                            <p className="text-base md:text-lg text-gray-300 mb-1">
                                                <span className="font-semibold text-white">Technology:</span> {educationData.technology}
                                            </p>
                                            <p className="text-gray-400 mb-1">
                                                <span className="font-semibold text-gray-300">Institute:</span> {educationData.institute}
                                            </p>
                                            <p className="text-gray-400">
                                                <span className="font-semibold text-gray-300">Year:</span> {educationData.year}
                                            </p>
                                        </motion.div>

                                        {/* Courses */}
                                        <motion.div 
                                            variants={itemVariants}
                                            className="mt-6 pt-6 border-t border-gray-800"
                                        >
                                            <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                                                <span className="text-primary">📚</span> Key Courses & Skills
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {educationData.courses.map((course, index) => (
                                                    <motion.span
                                                        key={index}
                                                        variants={itemVariants}
                                                        className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-medium border ${getColorClass(course.color)} transition-all duration-300 hover:scale-105 cursor-default`}
                                                        whileHover={{ y: -2 }}
                                                    >
                                                        {course.name}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Timeline Indicator */}
                                <motion.div 
                                    variants={itemVariants}
                                    className="absolute right-6 top-6 hidden md:block"
                                >
                                    <div className="flex flex-col items-center">
                                        <div className="w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50 animate-pulse"></div>
                                        <div className="w-0.5 h-12 bg-gradient-to-b from-primary to-transparent mt-1"></div>
                                        <div className="text-xs text-gray-500 mt-1">Current</div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <style jsx>{`
                /* Smooth hover transitions */
                .group:hover .shadow-primary\/20 {
                    box-shadow: 0 0 40px rgba(244, 130, 103, 0.15);
                }
            `}</style>
        </section>
    );
}
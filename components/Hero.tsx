/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
    const [text, setText] = useState("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const titles = ["Developer", "Designer", "Coder"];
    const [titleIndex, setTitleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentTitle = titles[titleIndex];

        // Type speed
        let timer: NodeJS.Timeout;

        if (isDeleting) {
            timer = setTimeout(() => {
                setText(currentTitle.substring(0, text.length - 1));
            }, 50);
        } else {
            timer = setTimeout(() => {
                setText(currentTitle.substring(0, text.length + 1));
            }, 100);
        }

        // Logic for cycles
        if (!isDeleting && text === currentTitle) {
            clearTimeout(timer);
            timer = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && text === "") {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
        }

        return () => clearTimeout(timer);
    }, [text, isDeleting, titleIndex, titles]);

    return (
        <section id="home" className="relative pt-24 md:pt-32 pb-12 md:pb-16 px-4 md:px-8 lg:px-16 overflow-hidden  flex items-center">
            <div className="absolute inset-0 overflow-hidden -z-10">
                <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-primary/20 animate-pulse-slow hidden md:block"></div>
                <div className="absolute top-1/4 right-20 w-6 h-6 rounded-full bg-primary/10 animate-pulse-slow hidden md:block" style={{ animationDelay: "0.5s" }}></div>
            </div>

            <div aria-hidden="true" className="chevron right hidden lg:block floating-element" style={{ bottom: "35%", right: "45%", animationDelay: "0.4s" }}></div>

            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-6 text-center lg:text-left order-2 lg:order-1">
                        <div className="relative inline-block self-center lg:self-start">
                            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
                                Hello<span className="text-primary">.</span>
                                <div className="typewriter-container inline-block ml-2 w-[11ch] text-left">
                                    <span className="text-primary">{text}</span>
                                </div>
                            </h2>
                            <div className="absolute -bottom-2 nav-link h-0.5 w-16 bg-primary"></div>
                        </div>

                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
                            I&apos;m <span className="text-primary font-semibold">Shoyaib</span>
                        </p>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white transition-all duration-2000">
                            Front-end <span className="shimmer-text">Developer</span>
                        </h1>

                        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0">
                            I build modern full-stack web applications using MongoDB, Express.js, React.js, Next.js, and Node.js — creating clean, scalable solutions with seamless UI/UX and high-performance APIs. I focus on writing maintainable code, optimizing workflows, and delivering user-centric digital experiences.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-4 justify-center lg:justify-start">
                            <Link href="#projects" className="bg-primary text-white font-medium py-2 md:py-3 px-4 md:px-6 rounded hover:bg-primary-dark hover-lift transition-all duration-300 text-center group relative overflow-hidden">
                                <span className="relative z-10">View Projects</span>
                                <div className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                            </Link>
                                <Link
                                href="https://drive.google.com/file/d/10BFnj3DASOlVrd0ifQLgT8cZTeiNNlWv/view"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-primary text-primary font-medium py-2 md:py-3 px-4 md:px-6 rounded hover:bg-primary hover-lift hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                <i className="fas fa-download"></i>
                                Resume
                                </Link>


                        </div>
                    </div>

                    {/* Profile Image */}
                    <div className="w-full lg:w-1/3 flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0">
                        <div className="profile-container relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[400px]">
                            <div className="relative rounded-full overflow-hidden w-full aspect-square border-4 md:border-8 border-white dark:border-gray-800 shadow-xl md:shadow-2xl">
                                <img
                                    alt="Portrait of Shoyaib Islam, a front-end developer."
                                    className="rounded-full object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                                    src="/WhatsApp Image 2025-11-29 at 00.27.29_b32a6fed-depositphotos-bgremover.png"
                                />
                                <div className="absolute inset-0 bg-primary/0 hover:bg-primary/10 transition-all duration-500 rounded-full"></div>
                            </div>

                            {/* Tech icons */}
                            <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg animate-bounce-slow">
                                <i className="fab fa-react text-blue-400 text-xl"></i>
                            </div>
                            <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg animate-bounce-slow" style={{ animationDelay: "0.2s" }}>
                                <i className="fab fa-node-js text-green-500 text-xl"></i>
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg animate-bounce-slow" style={{ animationDelay: "0.4s" }}>
                                <i className="fab fa-js text-yellow-400 text-xl"></i>
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg animate-bounce-slow" style={{ animationDelay: "0.6s" }}>
                                <i className="fas fa-database text-orange-500 text-xl"></i> 
                            </div>   
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

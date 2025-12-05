/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/static-components */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Detect Active Section
            const sections = document.querySelectorAll("section[id]");
            let current = "";
            sections.forEach((section) => {
                const htmlSection = section as HTMLElement;
                const sectionTop = htmlSection.offsetTop;
                if (window.scrollY >= sectionTop - 200) {
                    current = htmlSection.getAttribute("id") || "";
                }
            });
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
        const isActive = activeSection === href.replace("#", "");
        return (
            <Link
                href={href}
                className={`nav-link hover:text-primary dark:hover:text-primary transition-all duration-300 relative group ${
                    isActive ? "active-nav" : ""
                }`}
                onClick={closeMobileMenu}
            >
                <span>{children}</span>
                <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                ></span>
            </Link>
        );
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md py-3 md:py-4 shadow-sm"
                    : "bg-transparent py-4 md:py-6"
            } px-4 md:px-12 lg:px-16 border-b border-gray-200 dark:border-gray-800`}
        >
            <div className="container mx-auto flex justify-between items-center">

   <div className="flex items-center gap-2">
    <Link href={"#home"} >
    <img src="/logo1.png" alt="Logo" className="w-8" />
    
    </Link>
    <Link
        href="#home"
        className="text-lg md:text-xl font-bold text-gray-900 dark:text-white hover:text-primary transition-all duration-300"
    >
        Shoyaib Islam
    </Link>
</div>


                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                    <NavLink href="#home">Home</NavLink>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#education">Education</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#contact">Contact</NavLink>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden text-gray-800 hover:text-primary transition-all duration-300"
                    aria-label="Toggle Menu"
                >
                    <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-4 px-6 transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
            >
                <div className="flex flex-col space-y-4">
                    <NavLink href="#home">Home</NavLink>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#education">Education</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#contact">Contact</NavLink>
                </div>
            </div>
        </nav>
    );
}

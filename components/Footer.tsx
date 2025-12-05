/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="py-6 md:py-8 px-4 md:px-8 lg:px-16 bg-background-dark text-gray-400">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">

                    <div className="mb-4 md:mb-0 ">
                        
                    <Link href={'#home'}>
                                          <div className='flex justify-center items-center gap-2'>
                        <img src="/logo1.png" alt="Logo" className="w-8" />
                        <p className="text-lg md:text-xl font-bold text-white hover:text-primary transition-all duration-300">Shoyaib Islam</p>
                    </div>
                    </Link>
                        <p className="text-xs md:text-sm mt-1">Front-end Developer</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 text-xs md:text-sm">
                        <Link href="#home" className="hover:text-primary transition-all duration-300">Home</Link>
                        <Link href="#about" className="hover:text-primary transition-all duration-300">About</Link>
                        <Link href="#projects" className="hover:text-primary transition-all duration-300">Projects</Link>
                        <Link href="#contact" className="hover:text-primary transition-all duration-300">Contact</Link>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-xs md:text-sm">
                    <p>© 2024 Shoyaib Islam. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

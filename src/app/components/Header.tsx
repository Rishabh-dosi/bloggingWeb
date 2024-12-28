'use client'

import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);


    // Function to toggle the navbar on mobile
    const toggleNavbar = () => setIsOpen(!isOpen);
    return (
        <header className="bg-white py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4">
                <h1 className="text-2xl font-bold text-[rgb(8,12,80)]">Tellme</h1>

                {/* Hamburger Button - Visible only on mobile */}
                <button
                    className={`md:hidden text-white focus:outline-none ${isOpen ? 'hidden' : ''}`}
                    onClick={toggleNavbar}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-[rgb(8,12,80)]"  // Apply the desired color here
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                {/* Navbar Links */}
                <nav className={`md:flex items-center space-x-4 ${isOpen ? 'block' : 'hidden'} md:block `}>
                    {/* Links for desktop */}
                    <div className="md:flex items-center space-x-4 hidden sm:block w-100 bg-[rgb(8,12,80)] w-[30vw] justify-between p-4 relative">
                        <div className="absolute left-[-30px] top-[-23px] w-0 h-0 border-t-[55px] border-b-[50px] border-l-[55px] border-t-transparent border-b-transparent border-l-[rgb(8,12,80)] rotate-[270deg] z-0"></div>
                        <Link href="/" className="mr-4 hover:text-blueGray-300 z-10">Home</Link>
                        <Link href="/auth/login" className="mr-4 hover:text-blueGray-300">Login</Link>
                        <Link href="/auth/register" className="hover:text-blueGray-300">Register</Link>
                    </div>

                    {/* Dropdown for mobile */}
                    <div className="sm:hidden relative">
                        <button
                            className="text-[rgb(8,12,80)] px-4 py-2"
                            onClick={toggleDropdown}
                        >
                            More
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute bg-white text-[rgb(8,12,80)] mt-2 rounded-lg shadow-md left-[-20px]">
                                <Link href="/" className="block px-4 py-2 hover:bg-blue-700">Home</Link>
                                <Link href="/login" className="block px-4 py-2 hover:bg-blue-700">Login</Link>
                                <Link href="/register" className="block px-4 py-2 hover:bg-blue-700">Register</Link>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </header>

    )
}
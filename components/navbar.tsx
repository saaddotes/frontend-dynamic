"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <div>
                            <Link href="/"
                                className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                                <svg
                                    className="h-6 w-6 mr-1 text-indigo-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 12l2-2m0 0l7-7m-7 7h18m-2 2l-2 2m0 0l-7 7m7-7H3m2 2l2-2"
                                    />
                                </svg>
                                <span className="font-bold">EduVanta</span>

                            </Link>
                        </div>
                        <div className="hidden md:flex items-center space-x-1">
                            <Link href="/" className="py-5 px-3 text-gray-700 hover:text-gray-900">Home
                            </Link>
                            <Link href="/about"
                                className="py-5 px-3 text-gray-700 hover:text-gray-900">About
                            </Link>
                            <Link href="/services"
                                className="py-5 px-3 text-gray-700 hover:text-gray-900">Services
                            </Link>
                            <Link href="/contact"
                                className="py-5 px-3 text-gray-700 hover:text-gray-900">Contact
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-1">
                        <Link href="/sign-in"
                            className="py-2 px-3 bg-indigo-500 text-white rounded hover:bg-indigo-600"
                        > Sign In
                        </Link>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="mobile-menu-button" onClick={toggleMenu}>
                            <svg
                                className="w-6 h-6 text-gray-700 hover:text-gray-900"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="mobile-menu md:hidden">
                    <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">Home
                    </Link>
                    <Link href="/about" className="block py-2 px-4 text-sm hover:bg-gray-200">About
                    </Link>
                    <Link href="/services" className="block py-2 px-4 text-sm hover:bg-gray-200">Services
                    </Link>
                    <Link href="/contact" className="block py-2 px-4 text-sm hover:bg-gray-200">Contact
                    </Link>
                    <Link href="/sign-in"
                        className="block py-2 px-4 text-sm hover:bg-gray-200">Sign In
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

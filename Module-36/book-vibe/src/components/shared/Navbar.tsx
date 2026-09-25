'use client'

import Image from "next/image";
import logo from "@/assets/book.ico";
import Link from "next/link";
import { BooksContext } from '@/context/BooksContext';
import { useContext } from "react";

const Navbar = () => {

    const { readBooks, wishlist } = useContext(BooksContext);

    return (
        <nav className="navbar bg-white border-b border-gray-100 shadow-sm">
            <div className="container mx-auto flex w-full items-center px-4">

                {/* Navbar Start */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost rounded-xl lg:hidden"
                        >
                            <svg
                                aria-label="Menu"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
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
                        </div>

                        {/* Mobile Menu */}
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content z-10 mt-3 w-52 rounded-2xl border border-gray-100 bg-white p-2 shadow-xl"
                        >
                            <li>
                                <a className="rounded-xl hover:bg-emerald-50 hover:text-emerald-600">
                                    {/* <Link href= "/books">Books</Link> */}
                                </a>
                            </li>

                            <li>
                                <a className="rounded-xl hover:bg-emerald-50 hover:text-emerald-600">
                                    Parent
                                </a>
                            </li>

                            <li>
                                <a className="rounded-xl hover:bg-emerald-50 hover:text-emerald-600">
                                    Item 3
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <Image
                            src={logo}
                            alt="B-VIBE Logo"
                            width={40}
                            height={40}
                            className="rounded-lg"
                        />

                        <h1 className="text-xl font-extrabold text-gray-800">
                            B<span className="text-emerald-600">-VIBE</span>
                        </h1>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-1 px-1">
                        <li>
                            <a className="rounded-xl px-4 text-gray-600 transition hover:bg-emerald-50 hover:text-emerald-600">
                                <Link href="/books">Books</Link>
                            </a>
                        </li>
                        <li>
                            <a className="rounded-xl px-4 text-gray-600 transition hover:bg-emerald-50 hover:text-emerald-600">
                                <Link href="/listed-books">Listed Books</Link>
                            </a>
                        </li>


                        <li>
                            <a className="rounded-xl px-4 text-gray-600 transition hover:bg-emerald-50 hover:text-emerald-600">
                                Item 3
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Buttons */}
                {/* <div className="navbar-end gap-2">
                    <button className="btn rounded-xl border-gray-200 bg-white text-gray-700 hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-600">
                        Sign In
                    </button>

                    <button className="btn rounded-xl border-0 bg-emerald-600 text-white shadow-md shadow-emerald-200 hover:bg-emerald-700">
                        Sign Up
                    </button>
                </div> */}

                <div className="navbar-end flex items-center gap-2">
                    <span className="rounded-full bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700">
                        Reading: {readBooks.length}
                    </span>

                    <span className="rounded-full bg-purple-50 px-3 py-2 text-sm font-semibold text-purple-700">
                        Wishlist: {wishlist.length}
                    </span>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
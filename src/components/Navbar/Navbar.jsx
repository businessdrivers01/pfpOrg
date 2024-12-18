import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";
import { motion, AnimatePresence } from 'framer-motion';
import { MyButton } from "../../utils"
import logo1 from "../../assets/logos/logo3.png"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navbarItems = [
        { id: 1, title: "IFCE 2025", route: "/" },
        { id: 2, title: "Home", route: "/home" },
        { id: 3, title: "Members", route: "/board-members" },
        { id: 4, title: "Contact", route: "/contact" },
        { id: 5, title: "Book a Stall", route: "/book-stall" },
        { id: 5, title: "Blogs", route: "/blogs" },
    ];

    const toggleMenu = () => setMenuOpen(prev => !prev);

    return (
        <nav className='flex justify-between bg-darkGray text-orange py-6 px-4 items-center md:py-2 md:px-16'>
            {/* Logo */}
            <div className="logo w-[30vw] md:w-[12vw]">
                <NavLink to="/">
                    <img className='w-full' src={logo1} alt="Main Logo" />
                </NavLink>
            </div>

            {/* Desktop Right Section */}
            <ul className='hidden md:flex'>
                {navbarItems.map((navItem) => (
                    <li key={navItem.id} className="mx-8">
                        <NavLink
                            to={navItem.route}
                            className={({ isActive }) =>
                                `text-[1.4rem] roboto-black duration-300 hover:text-orange 
                     ${isActive ? 'text-orange' : 'text-lightGray'
                                }`
                            }
                        >
                            {navItem.title}
                        </NavLink>
                    </li>
                ))}
            </ul>




            {/* Mobile Menu Toggle */}
            <div className='flex md:hidden'>
                <button onClick={toggleMenu} aria-label="Toggle Menu">
                    {menuOpen ? <CiMenuFries size={28} /> : <CiMenuBurger size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="absolute top-[92px] left-0 w-full bg-darkGray text-orange roboto-black z-10"
                    >
                        <ul className='flex flex-col items-center py-4'>
                            {navbarItems.map((navItem) => (
                                <li className='py-2' key={navItem.id}>
                                    <NavLink to={navItem.route} onClick={toggleMenu}>
                                        {navItem.title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;

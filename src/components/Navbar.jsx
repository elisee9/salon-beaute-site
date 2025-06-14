// src/components/Header.jsx

import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
   { name: "Accueil", path: "/" },
   { name: "À propos", path: "/about" },
   { name: "Services", path: "/services" },
   { name: "Galerie", path: "/gallery" },
   { name: "Contact", path: "/contact" },
];

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);
   const menuRef = useRef(null);

   useEffect(() => {
      document.body.style.overflow = isOpen ? "hidden" : "auto";

      const handleClickOutside = (event) => {
         if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
         }
      };

      if (isOpen) {
         document.addEventListener("mousedown", handleClickOutside);
      }

      return () => {
         document.body.style.overflow = "auto";
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [isOpen]);

   return (
      <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-lg shadow-md">
         <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            {/* Logo */}
            <NavLink
               to="/"
               className="text-pink-600 text-2xl font-bold"
               onClick={() => setIsOpen(false)}
            >
               Beauté <span>Élégance</span>
            </NavLink>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
               {navLinks.map((link) => (
                  <NavLink
                     key={link.name}
                     to={link.path}
                     className={({ isActive }) =>
                        `transition ${
                           isActive ? "text-pink-600" : "hover:text-pink-500"
                        }`
                     }
                     onClick={() => setIsOpen(false)}
                  >
                     {link.name}
                  </NavLink>
               ))}
            </nav>

            {/* Mobile Nav Toggle */}
            <button
               className={`md:hidden text-pink-600 text-2xl z-50`}
               onClick={() => setIsOpen(!isOpen)}
               aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
               {isOpen ? <FaTimes /> : <FaBars />}
            </button>
         </div>

         {/* Mobile Nav Menu */}
         <AnimatePresence>
            {isOpen && (
               <>
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     className="fixed inset-0 bg-black/60 z-30"
                  />

                  <motion.div
                     ref={menuRef}
                     initial={{ x: "100%" }}
                     animate={{ x: 0 }}
                     exit={{ x: "100%" }}
                     transition={{ type: "tween", duration: 0.3 }}
                     className="fixed top-0 right-0 h-80 w-60 bg-white z-40 shadow-lg rounded-l-xl pt-8 pb-6 px-3 flex flex-col justify-start items-center"
                  >
                     {navLinks.map((link) => (
                        <NavLink
                           key={link.name}
                           to={link.path}
                           className={({ isActive }) =>
                              `text-lg font-medium text-center w-full py-3 rounded transition ${
                                 isActive
                                    ? "text-pink-600"
                                    : "hover:text-pink-500 text-gray-700"
                              }`
                           }
                           onClick={() => setIsOpen(false)}
                        >
                           {link.name}
                        </NavLink>
                     ))}
                  </motion.div>
               </>
            )}
         </AnimatePresence>
      </header>
   );
};

export default Header;

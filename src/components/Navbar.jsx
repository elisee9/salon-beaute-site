// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
   const menuRef = useRef(null);

   const navLinks = [
      { to: "/", label: "Accueil" },
      { to: "/about", label: "À propos" },
      { to: "/services", label: "Services" },
      { to: "/gallery", label: "Galerie" },
      { to: "/contact", label: "Contact" },
   ];

   // Fermer le menu quand on clique à l'extérieur
   useEffect(() => {
      const handleClickOutside = (event) => {
         if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
         }
      };

      // Ajout seulement sur mobile
      if (isOpen && window.innerWidth < 768) {
         document.addEventListener("mousedown", handleClickOutside);
      }

      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [isOpen]);

   return (
      <header className="fixed w-full top-0 bg-white shadow z-50" ref={menuRef}>
         <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
            <motion.h1
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5 }}
               className="text-2xl font-bold text-pink-600"
            >
               <NavLink to="/" className="hover:text-pink-500 transition">
                  Beauté Élégance
               </NavLink>
            </motion.h1>

            {/* Desktop nav */}
            <ul className="hidden md:flex space-x-6 font-medium">
               {navLinks.map(({ to, label }) => (
                  <li key={to}>
                     <NavLink
                        to={to}
                        className={({ isActive }) =>
                           isActive
                              ? "text-pink-500"
                              : "hover:text-pink-400 transition"
                        }
                     >
                        {label}
                     </NavLink>
                  </li>
               ))}
            </ul>

            {/* Mobile menu icon */}
            <div className="md:hidden">
               <button
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
               >
                  {isOpen ? <X size={28} /> : <Menu size={28} />}
               </button>
            </div>
         </nav>

         {/* Mobile nav menu */}
         <AnimatePresence>
            {isOpen && (
               <motion.ul
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden bg-pink-50 shadow-md py-4 px-6 space-y-4 font-medium -mr-0 text-center"
               >
                  {navLinks.map(({ to, label }) => (
                     <li key={to}>
                        <NavLink
                           to={to}
                           onClick={() => setIsOpen(false)}
                           className={({ isActive }) =>
                              isActive
                                 ? "text-pink-500 block py-2"
                                 : "hover:text-pink-400 transition block py-2"
                           }
                        >
                           {label}
                        </NavLink>
                     </li>
                  ))}
               </motion.ul>
            )}
         </AnimatePresence>
      </header>
   );
}

export default Navbar;

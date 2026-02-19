import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Video } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Portafolio", path: "/portafolio" },
    { name: "Servicios", path: "/servicios" },
    { name: "Nosotros", path: "/sobre-nosotros" },
    { name: "Contacto", path: "/contacto" },
    { name: "Social Feed", path: "/social-feed" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => setIsOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-4"
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* LOGO */}
        <NavLink to="/" className="relative group">
          <img
            src="/logo.png"
            alt="BMC Logo"
            className="h-8 md:h-10 w-auto transition-transform group-hover:scale-105"
          />
        </NavLink>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-[11px] font-black uppercase tracking-[0.2em] italic transition-all hover:text-orange-500 ${
                  isActive ? "text-orange-600" : "text-gray-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* REDES / CTA DESKTOP */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="https://www.instagram.com/_u/bmc_photographycars/"
            target="_blank"
            className="text-white hover:text-orange-500 transition-colors"
          >
            <Instagram size={18} />
          </a>
          <NavLink
            to="/contacto"
            className="bg-white text-black text-[10px] font-black uppercase px-6 py-2 rounded-full hover:bg-orange-600 hover:text-white transition-all italic"
          >
            Agendar
          </NavLink>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE NAV */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black border-b border-white/5 flex flex-col p-8 gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="text-2xl font-black text-white uppercase italic tracking-tighter"
              >
                {link.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;

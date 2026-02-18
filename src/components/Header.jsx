import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Instagram, Camera, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import logo from "../assets/logo.png";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();

  // Detectar scroll para cambiar el estilo del header
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "unset";
  }, [location]);

  const toggleMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    document.body.style.overflow = newState ? "hidden" : "unset";
  };

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Portafolio", path: "/portafolio" },
    { name: "Nosotros", path: "/sobre-nosotros" },
    { name: "Feed", path: "/social-feed" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-black/80 backdrop-blur-2xl border-b border-white/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* LOGO */}
          <NavLink to="/" className="relative z-[120] flex items-center group">
            <div className="flex flex-col items-start">
              <img src={logo} alt="BMC Logo" className="h-12 w-auto" />
              <motion.span
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="text-[7px] text-orange-500 font-bold tracking-[0.2em] mt-1 hidden md:block"
              >
                24.0232° N, 104.6521° W
              </motion.span>
            </div>
          </NavLink>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-5 py-2 text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 rounded-full flex items-center gap-2 ${
                    isActive ? "text-orange-500" : "text-gray-400 hover:text-white hover:bg-white/5"
                  } ${
                    link.name === "Contacto"
                      ? "ml-4 bg-orange-600 !text-white hover:bg-orange-500 shadow-[0_0_20px_rgba(234,88,12,0.3)]"
                      : ""
                  }`
                }
              >
                {link.name}
                {link.name === "Contacto" && <ChevronRight size={12} />}
              </NavLink>
            ))}
          </div>

          {/* BOTÓN MENÚ MÓVIL */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative z-[120] p-2 focus:outline-none"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span
                className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "w-6 rotate-45 translate-y-[9px]" : "w-6"}`}
              />
              <span
                className={`h-0.5 bg-orange-500 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "w-4"}`}
              />
              <span
                className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "w-6 -rotate-45 -translate-y-[9px]" : "w-6"}`}
              />
            </div>
          </button>
        </nav>
      </div>

      {/* BARRA RPM (PROGRESO) */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-orange-600 via-orange-400 to-red-600 z-[120]"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />

      {/* MENÚ MÓVIL FULL SCREEN */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "circOut" }}
            className="fixed inset-0 z-[115] bg-black flex flex-col justify-center px-10 md:hidden h-screen w-full"
          >
            {/* Luces de fondo del menú */}
            <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-orange-600/20 blur-[100px] rounded-full" />

            <div className="relative z-[120] space-y-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-5xl font-black italic uppercase tracking-tighter block transition-all ${
                        isActive ? "text-orange-500 translate-x-4" : "text-white"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* Info inferior menú móvil */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-12 left-10 right-10 flex flex-col gap-6 z-[120]"
            >
              <div className="h-[1px] w-full bg-white/10" />
              <div className="flex justify-between items-center">
                <div className="flex space-x-6">
                  {/* ENLACES REALES SIN VARIABLES EXTERNAS */}
                  <a
                    href="https://www.instagram.com/bmc_photographycars"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    <Instagram size={28} />
                  </a>

                  <a
                    href="https://www.tiktok.com/@bmc_photographycars"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    <Camera size={28} />
                  </a>
                </div>

                <div className="text-right">
                  <p className="text-[8px] text-gray-500 font-bold tracking-[0.2em] uppercase">
                    Ubicación
                  </p>
                  <p className="text-[10px] text-white font-black uppercase italic">
                    Durango, México
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;

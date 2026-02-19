import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Instagram,
  MapPin,
  Phone,
  Video,
  Camera,
  Mail,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/_u/bmc_photographycars/",
      color: "hover:text-pink-500",
    },
    {
      name: "TikTok",
      icon: Video,
      url: "https://tiktok.com/@bmc_photographycars",
      color: "hover:text-cyan-400",
    },
  ];

  return (
    <footer className="bg-[#050505] border-t border-white/5 relative z-10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* SECCIÓN DE MARCA */}
          <div className="space-y-6">
            <img src="/logo.png" alt="BMC Logo" className="h-12 md:h-16 w-auto opacity-80" />
            <p className="text-gray-500 text-[10px] font-bold leading-relaxed uppercase tracking-wider">
              Saliendo de la rutina y la zona de confort a través del arte automotriz.
              <span className="block mt-2 text-orange-600/80 italic font-black text-[10px]">
                EST. 2026 // DURANGO, MX
              </span>
            </p>
          </div>

          {/* NAVEGACIÓN Y LEGAL (Punto 6) */}
          <div className="space-y-4">
            <h3 className="text-white font-black text-[10px] uppercase tracking-[0.3em] italic border-l-2 border-orange-600 pl-3">
              Explorar
            </h3>
            <nav className="flex flex-col space-y-2">
              {["Inicio", "Portafolio", "Sobre Nosotros", "Contacto"].map((item) => (
                <NavLink
                  key={item}
                  to={item === "Inicio" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-500 hover:text-white text-[11px] font-black uppercase italic transition-all flex items-center group"
                >
                  <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 text-orange-600">
                    —
                  </span>
                  {item}
                </NavLink>
              ))}
              {/* Link Legal (Punto 6) */}
              <Link
                to="/servicios"
                className="pt-4 flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors"
              >
                <ShieldCheck size={12} />
                <span className="text-[10px] font-black uppercase italic tracking-widest">
                  Términos y Privacidad
                </span>
              </Link>
            </nav>
          </div>

          {/* BOOKING & UBICACIÓN (Punto 12) */}
          <div className="space-y-4">
            <h3 className="text-white font-black text-[10px] uppercase tracking-[0.3em] italic border-l-2 border-orange-600 pl-3">
              Booking
            </h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/5216183253693?text=%C2%A1Hola%2C%20vi%20tu%20portafolio%20y%20me%20encanto%2C%20quiero%20recibir%20mas%20informacion%C2%A1."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-white/[0.02] border border-white/5 px-4 py-3 rounded-xl hover:border-[#25D366]/40 transition-all duration-500"
              >
                <div className="flex flex-col">
                  <span className="text-[8px] text-[#25D366] font-black uppercase tracking-[0.2em]">
                    WhatsApp
                  </span>
                  <span className="text-white font-bold italic uppercase text-xs">
                    Agendar Sesión
                  </span>
                </div>
                <MessageCircle
                  size={16}
                  className="text-gray-500 group-hover:text-[#25D366] transition-colors"
                />
              </a>

              <a
                href="mailto:bmc.business.info@gmail.com?subject=Consulta%20de%20Sesi%C3%B3n%20Fotogr%C3%A1fica%20-%20BMC"
                className="group flex items-center justify-between bg-white/[0.02] border border-white/5 px-4 py-3 rounded-xl hover:border-orange-500/40 transition-all duration-500"
              >
                <div className="flex flex-col">
                  <span className="text-[8px] text-orange-500 font-black uppercase tracking-[0.2em]">
                    Email
                  </span>
                  <span className="text-white font-bold italic uppercase text-xs">
                    Contacto Directo
                  </span>
                </div>
                <Mail
                  size={16}
                  className="text-gray-500 group-hover:text-orange-500 transition-colors"
                />
              </a>

              {/* Ubicación corregida (Punto 12) */}
              <div className="flex items-start space-x-2 pt-2">
                <MapPin size={14} className="text-blue-500 mt-1 shrink-0" />
                <a
                  href="https://maps.app.goo.gl/7qV5bVTgDdQUvoHf8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-400 text-[10px] font-bold uppercase italic leading-tight transition-colors"
                >
                  Durango, México <br />
                  <span className="text-[8px] opacity-50 tracking-tighter">
                    Click para ver ubicación
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* GEAR & SOCIAL */}
          <div className="space-y-6">
            <h3 className="text-white font-black text-[10px] uppercase tracking-[0.3em] italic border-l-2 border-orange-600 pl-3">
              Gear & Connect
            </h3>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white p-3 bg-white/5 rounded-2xl border border-white/5 transition-all hover:scale-110 ${social.color}`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <Camera size={16} className="text-orange-600" />
              <div>
                <p className="text-white font-black text-[8px] uppercase tracking-widest italic">
                  Main Gear
                </p>
                <p className="text-gray-500 text-[9px] font-bold uppercase">
                  Canon Rebel T7 // Cinematic Glass
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BARRA FINAL */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-[9px] font-black uppercase tracking-[0.4em] italic">
            © {currentYear} BREAK MY COMFORT // ALL RIGHTS RESERVED
          </p>
          <div className="flex gap-6 opacity-30">
            <span className="text-white text-[8px] font-black uppercase tracking-widest italic">
              Designed for High Aesthetics
            </span>
            <span className="text-orange-600 text-[8px] font-black uppercase tracking-widest italic">
              v2.1 Cinematic
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

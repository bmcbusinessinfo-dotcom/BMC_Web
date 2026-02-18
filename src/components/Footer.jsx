import React from "react";
import { NavLink } from "react-router-dom";
import { Instagram, MapPin, Phone, Video, Camera, ArrowUpRight } from "lucide-react";
import { Mail, MessageCircle } from "lucide-react";
import logo from "../assets/logo.png";
function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/bmc_photographycars/",
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
            <img src={logo} alt="BMC Logo" className="h-12 w-auto" />
            <p className="text-gray-500 text-xs font-medium leading-relaxed uppercase tracking-wider">
              Saliendo de la rutina y la zona de confort a través del arte automotriz.
              <span className="block mt-2 text-orange-600/80 italic font-black text-[10px]">
                EST. 2026 // DURANGO, MX
              </span>
            </p>
          </div>

          {/* NAVEGACIÓN - Estilo Menú de Cine */}
          <div className="space-y-4">
            <h3 className="text-white font-black text-[10px] uppercase tracking-[0.3em] italic border-l-2 border-orange-600 pl-3">
              Menú
            </h3>
            <nav className="flex flex-col space-y-2">
              {["Inicio", "Portafolio", "Sobre Nosotros", "Contacto"].map((item) => (
                <NavLink
                  key={item}
                  to={item === "Inicio" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-500 hover:text-white text-xs font-bold uppercase italic transition-all flex items-center group"
                >
                  <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 text-orange-600">
                    —
                  </span>
                  {item}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* CONTACTO DIRECTO */}
          <div className="space-y-4">
            <h3 className="text-white font-black text-[10px] uppercase tracking-[0.3em] italic border-l-2 border-orange-600 pl-3">
              Booking
            </h3>
            <div className="space-y-3">
              {/* BOTÓN WHATSAPP COMPACTO */}
              <a
                href="https://wa.me/5216183253693?text=%C2%A1Hola%2C%20vi%20tu%20portafolio%20y%20me%20encanto%2C%20quiero%20recibir%20mas%20informacion%C2%A1."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 group flex items-center justify-between bg-white/[0.03] border border-white/10 px-4 py-3 rounded-lg hover:border-[#25D366]/50 transition-all duration-300"
              >
                <div className="flex flex-col text-left">
                  <span className="text-[8px] text-[#25D366] font-bold uppercase tracking-[0.2em]">
                    WhatsApp
                  </span>
                  <span className="text-white font-bold italic uppercase text-sm tracking-tighter">
                    Enviar Mensaje
                  </span>
                </div>
                <MessageCircle
                  size={18}
                  className="text-gray-500 group-hover:text-[#25D366] transition-colors"
                />
              </a>

              {/* BOTÓN EMAIL COMPACTO */}
              <a
                href="mailto:tuemail@ejemplo.com?subject=Consulta%20de%20Sesi%C3%B3n%20Fotogr%C3%A1fica%20-%20BMC&body=%C2%A1Hola!%20Vi%20tu%20portafolio%20y%20me%20encant%C3%B3%20tu%20estilo..."
                className="flex-1 group flex items-center justify-between bg-white/[0.03] border border-white/10 px-4 py-3 rounded-lg hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="flex flex-col text-left">
                  <span className="text-[8px] text-orange-500 font-bold uppercase tracking-[0.2em]">
                    Email
                  </span>
                  <span className="text-white font-bold italic uppercase text-sm tracking-tighter">
                    Email Directo
                  </span>
                </div>
                <Mail
                  size={18}
                  className="text-gray-500 group-hover:text-orange-500 transition-colors"
                />
              </a>
              <div className="flex items-center space-x-3 text-gray-500 text-[11px] font-bold uppercase italic">
                <MapPin size={14} className="text-orange-600" />
                <span>24.0232° N, 104.6521° W</span>
              </div>
            </div>
          </div>

          {/* SOCIAL & GEAR */}
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
                  className={`text-white p-3 bg-white/5 rounded-xl border border-white/5 transition-all hover:bg-white/10 ${social.color}`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            {/* Info de la Cámara: Da mucha autoridad */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-orange-600/5 border border-orange-600/10">
              <Camera size={16} className="text-orange-600" />
              <div>
                <p className="text-white font-black text-[8px] uppercase tracking-widest italic">
                  Main Gear
                </p>
                <p className="text-gray-500 text-[10px] font-bold">
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
          <div className="flex gap-6">
            <span className="text-gray-800 text-[9px] font-black uppercase tracking-widest italic">
              Designed for High Aesthetics
            </span>
            <span className="text-orange-600/50 text-[9px] font-black uppercase tracking-widest italic">
              v2.0 Cinematic Edition
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

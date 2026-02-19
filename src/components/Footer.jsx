import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Instagram, MapPin, Video, Camera, Mail, MessageCircle, ShieldCheck } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

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

          {/* NAVEGACIÓN */}
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

          {/* BOOKING */}
          <div className="space-y-4">
            <h3 className="text-white font-black text-[10px] uppercase tracking-[0.3em] italic border-l-2 border-orange-600 pl-3">
              Booking
            </h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/5216183253693"
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

              <div className="flex items-start space-x-2 pt-2">
                <MapPin size={14} className="text-blue-500 mt-1 shrink-0" />
                <span className="text-gray-500 text-[10px] font-bold uppercase italic leading-tight">
                  Durango, México
                </span>
              </div>
            </div>
          </div>

          {/* SOCIAL & GEAR */}
          <div className="space-y-6">
            <h3 className="text-white font-black text-[10px] uppercase tracking-[0.3em] italic border-l-2 border-orange-600 pl-3">
              Gear & Connect
            </h3>
            <div className="flex space-x-3">
              {/* LINK DE INSTAGRAM CON DOBLE PROTOCOLO */}
              <a
                href="https://www.instagram.com/_u/bmc_photographycars"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white p-3 bg-white/5 rounded-2xl border border-white/5 transition-all hover:scale-110 hover:text-pink-500"
                onClick={(e) => {
                  // Pequeño hack: intentamos abrir el esquema de la app si el link normal falla
                  setTimeout(() => {
                    window.location.href = "instagram://user?username=bmc_photographycars";
                  }, 250);
                }}
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://tiktok.com/@bmc_photographycars"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white p-3 bg-white/5 rounded-2xl border border-white/5 transition-all hover:scale-110 hover:text-cyan-400"
              >
                <Video size={18} />
              </a>
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
          <p className="text-gray-600 text-[9px] font-black uppercase tracking-[0.4em] italic text-center md:text-left">
            © {currentYear} BREAK MY COMFORT // ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

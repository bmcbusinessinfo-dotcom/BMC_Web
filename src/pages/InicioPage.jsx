import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ChevronRight, Camera, Instagram, Mail, Info, ChevronDown } from "lucide-react";
import ScrollTriggerAnimation, { AnimatedItem } from "@/components/ScrollTriggerAnimation";

function InicioPage() {
  const cards = [
    {
      title: "PORTAFOLIO",
      icon: <Camera size={24} className="text-orange-500" />,
      description: "Cine automotriz: Moody & Golden Hour.",
      link: "/portafolio",
    },
    {
      title: "NOSOTROS",
      icon: <Info size={24} className="text-orange-500" />,
      description: "Nuestra visión detrás del lente.",
      link: "/sobre-nosotros",
    },
    {
      title: "CONTACTO",
      icon: <Mail size={24} className="text-orange-500" />,
      description: "Agenda tu sesión personalizada.",
      link: "/contacto",
    },
    {
      title: "FEED",
      icon: <Instagram size={24} className="text-orange-500" />,
      description: "Contenido exclusivo diario.",
      link: "/social-feed",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Inicio | Break My Comfort</title>
        <meta name="description" content="Cinematografía automotriz de alto nivel en Durango." />
      </Helmet>

      {/* 1. QUITAMOS min-h-screen Y REDUCIMOS pt (padding top) */}
      <div className="pt-20 md:pt-40 pb-10 flex flex-col items-center relative z-10 px-4 md:px-6 overflow-hidden">
        {/* 2. REDUCIMOS mb (margin bottom) del Hero */}
        <ScrollTriggerAnimation className="text-center mb-8 md:mb-12 max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 md:gap-3 mb-4"
          >
            <span className="text-orange-500 font-bold tracking-[0.2em] uppercase text-[8px] md:text-xs">
              Est. 2026
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span className="text-white font-bold tracking-[0.2em] uppercase text-[8px] md:text-xs">
              Durango, México
            </span>
          </motion.div>

          {/* TÍTULO un poco más compacto en Leading */}
          <h1 className="text-[14vw] sm:text-9xl md:text-8xl lg:text-[9rem] font-black text-white leading-[1] tracking-tighter italic uppercase">
            BREAK MY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-600 to-orange-400">
              COMFORT
            </span>
          </h1>

          {/* MARQUEE con márgenes reducidos */}
          <div className="mt-6 md:mt-8 w-screen border-y border-white/5 py-3 bg-white/[0.02] backdrop-blur-sm relative left-1/2 -translate-x-1/2">
            <div className="flex whitespace-nowrap animate-marquee">
              {[1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="text-gray-500 text-[10px] md:text-sm font-bold tracking-[0.3em] uppercase mx-8 flex items-center gap-4"
                >
                  <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                  Cinematografía Automotriz
                  <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                  Estética Golden y Moody
                </span>
              ))}
            </div>
          </div>
        </ScrollTriggerAnimation>

        {/* 3. INDICADOR DE SCROLL MÁS COMPACTO */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mb-8 flex flex-col items-center gap-1"
        >
          <span className="text-[9px] text-gray-500 font-black uppercase tracking-[0.4em] italic">
            Desliza
          </span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-orange-500"
          >
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>

        {/* 4. GRID: Ahora asomará por naturaleza porque el contenido de arriba es más corto */}
        <ScrollTriggerAnimation
          stagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-7xl w-full"
        >
          {cards.map((card, idx) => (
            <AnimatedItem key={idx} className="flex">
              <Link
                to={card.link}
                className="group block relative w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-orange-500/50 transition-all duration-500"
              >
                <div className="p-5 md:p-8 flex flex-col h-full">
                  <div className="mb-3 text-orange-500 transform group-hover:scale-110 transition-transform duration-500">
                    {card.icon}
                  </div>
                  <h2 className="text-lg md:text-2xl font-black text-white mb-1 tracking-tighter italic uppercase">
                    {card.title}
                  </h2>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 group-hover:text-gray-200 min-h-[3rem]">
                    {card.description}
                  </p>
                </div>
              </Link>
            </AnimatedItem>
          ))}
        </ScrollTriggerAnimation>
      </div>
    </>
  );
}

export default InicioPage;

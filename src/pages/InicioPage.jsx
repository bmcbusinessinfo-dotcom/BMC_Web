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

      {/* CONTENEDOR PRINCIPAL: Ahora con max-width para monitores PRO */}
      <div className="pt-24 md:pt-44 pb-20 flex flex-col items-center relative z-10 px-6 md:px-12 overflow-hidden min-h-screen max-w-[1800px] mx-auto">
        {/* HERO SECTION */}
        <ScrollTriggerAnimation className="text-center mb-12 md:mb-20 w-full relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">
              Est. 2026
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
            <span className="text-white font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">
              Durango, México
            </span>
          </motion.div>

          {/* TÍTULO: Escalado dinámico para pantallas gigantes */}
          <h1 className="text-[15vw] sm:text-9xl md:text-[10rem] lg:text-[12rem] font-black text-white leading-[0.85] tracking-tighter italic uppercase transition-all">
            BREAK MY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-600 to-orange-400">
              COMFORT
            </span>
          </h1>

          {/* MARQUEE: Ocupa todo el ancho visual */}
          <div className="mt-10 md:mt-14 w-screen border-y border-white/5 py-4 bg-white/[0.01] backdrop-blur-sm relative left-1/2 -translate-x-1/2 overflow-hidden">
            <div className="flex whitespace-nowrap animate-marquee">
              {[1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className="text-gray-500 text-xs md:text-base font-bold tracking-[0.4em] uppercase mx-12 flex items-center gap-6"
                >
                  <span className="w-1.5 h-1.5 bg-orange-600 rounded-full"></span>
                  Cinematografía Automotriz
                  <span className="w-1.5 h-1.5 bg-orange-600 rounded-full"></span>
                  Estética Golden y Moody
                </span>
              ))}
            </div>
          </div>
        </ScrollTriggerAnimation>

        {/* INDICADOR DE SCROLL */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mb-16 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-gray-500 font-black uppercase tracking-[0.5em] italic">
            Explora el Caos
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-orange-500"
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>

        {/* GRID DE CARTAS: max-w-[1600px] para que no se vea minúsculo en tu monitor */}
        <ScrollTriggerAnimation
          stagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-[1600px]"
        >
          {cards.map((card, idx) => (
            <AnimatedItem key={idx} className="flex">
              <Link
                to={card.link}
                className="group block relative w-full overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl hover:border-orange-500/40 hover:bg-white/[0.08] transition-all duration-700"
              >
                <div className="p-8 md:p-10 flex flex-col h-full">
                  <div className="mb-6 text-orange-500 transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-500">
                    {React.cloneElement(card.icon, { size: 32 })}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tighter italic uppercase">
                    {card.title}
                  </h2>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 group-hover:text-gray-100 min-h-[4rem]">
                    {card.description}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-orange-500 font-bold text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Ver más <ChevronRight size={14} />
                  </div>
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

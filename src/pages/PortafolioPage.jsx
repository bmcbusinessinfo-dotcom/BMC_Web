import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

import PortfolioGallery from "@/components/PortfolioGallery";
import ScrollTriggerAnimation from "@/components/ScrollTriggerAnimation";

function PortafolioPage() {
  return (
    <>
      <Helmet>
        <title>Portafolio | BMC Archives</title>
      </Helmet>

      {/* 1. Expandimos el contenedor a max-w-[1800px] para monitores Pro */}
      <div className="pb-20 min-h-screen bg-black overflow-x-hidden">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          {/* SECCIÓN INTRO: min-h-screen para que llene tu monitor pro al entrar */}
          <div className="min-h-screen flex flex-col justify-center items-center relative py-20">
            <ScrollTriggerAnimation className="text-center w-full">
              {/* TÍTULO: Escalado dinámico extremo */}
              <h1 className="text-[14vw] sm:text-9xl md:text-[11rem] lg:text-[13rem] font-black text-white mb-8 italic tracking-tighter uppercase leading-[0.8] transition-all duration-700">
                BMC{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  ARCHIVES
                </span>
              </h1>

              <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-16 font-medium tracking-wide px-4">
                Explora nuestra dualidad visual:
                <br className="md:hidden" />
                <span className="text-orange-500 font-black italic ml-2 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                  GOLDEN HOUR
                </span>
                <span className="mx-6 text-white/10 hidden md:inline">|</span>
                <span className="text-blue-400 font-black italic drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]">
                  MOODY
                </span>
              </p>

              {/* --- DIVISOR DE DUALIDAD: Más largo en pantallas grandes --- */}
              <div className="flex items-center justify-center w-full max-w-2xl lg:max-w-4xl mx-auto mb-12 px-4">
                {/* Línea Naranja (Golden) */}
                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-orange-500 to-orange-500 shadow-[0_0_15px_rgba(234,88,12,0.8)]" />

                {/* Rombo Central: Un poco más grande para pro screens */}
                <div className="mx-8 rotate-45 w-5 h-5 border-2 border-white/40 flex-shrink-0 shadow-[0_0_20px_rgba(255,255,255,0.15)] bg-white/5" />

                {/* Línea Azul (Moody) */}
                <div className="h-[2px] w-full bg-gradient-to-l from-transparent via-blue-500 to-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
              </div>
            </ScrollTriggerAnimation>

            {/* --- INDICADOR DESCUBRIR: Más espaciado --- */}
            <div className="absolute bottom-12 left-0 right-0 flex flex-col items-center justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="flex flex-col items-center"
              >
                <span className="text-[12px] font-black uppercase tracking-[0.6em] text-white/40 mb-6 ml-[0.6em]">
                  Explorar Archivos
                </span>

                {/* Indicador de Scroll Estilizado: Más largo para tu resolución */}
                <div className="relative h-24 w-[1px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/20 to-white/0" />
                  <motion.div
                    animate={{
                      y: [-96, 96],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-[1px] h-12 bg-white shadow-[0_0_15px_white]"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Galería: Ya debería ser responsiva internamente, pero el contenedor max-w-[1800px] le dará mucho aire */}
          <div className="mt-10 lg:mt-20">
            <PortfolioGallery />
          </div>
        </div>
      </div>
    </>
  );
}

export default PortafolioPage;

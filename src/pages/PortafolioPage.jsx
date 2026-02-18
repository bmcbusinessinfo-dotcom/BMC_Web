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

      <div className="pb-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          {/* SECCIÓN INTRO */}
          <div className="min-h-[95vh] flex flex-col justify-center items-center relative">
            <ScrollTriggerAnimation className="text-center w-full">
              <h1 className="text-6xl md:text-9xl font-black text-white mb-6 italic tracking-tighter uppercase leading-none">
                BMC{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  ARCHIVES
                </span>
              </h1>

              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-16 font-medium tracking-wide">
                Explora nuestra dualidad visual:
                <br className="md:hidden" />
                <span className="text-orange-500 font-black italic ml-2 drop-shadow-[0_0_10px_rgba(249,115,22,0.4)]">
                  GOLDEN HOUR
                </span>
                <span className="mx-4 text-white/20">|</span>
                <span className="text-blue-400 font-black italic drop-shadow-[0_0_10px_rgba(96,165,250,0.4)]">
                  MOODY
                </span>
              </p>

              {/* --- DIVISOR DE DUALIDAD POTENCIADO --- */}
              <div className="flex items-center justify-center w-full max-w-xl mx-auto mb-12">
                {/* Línea Naranja (Golden) */}
                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-orange-500 to-orange-500 shadow-[0_0_12px_rgba(234,88,12,0.7)]" />

                {/* Rombo Central */}
                <div className="mx-6 rotate-45 w-4 h-4 border-2 border-white/60 flex-shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.2)]" />

                {/* Línea Azul (Moody) */}
                <div className="h-[2px] w-full bg-gradient-to-l from-transparent via-blue-500 to-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.7)]" />
              </div>
            </ScrollTriggerAnimation>

            {/* --- BOTÓN DESCUBRIR CENTRADO --- */}
            <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="flex flex-col items-center"
              >
                <span className="text-[11px] font-black uppercase tracking-[0.5em] text-white/60 mb-4 ml-[0.5em]">
                  Descubrir
                </span>

                {/* Indicador de Scroll Estilizado */}
                <div className="relative h-16 w-[1px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/40 to-white/0" />
                  <motion.div
                    animate={{
                      y: [-64, 64],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-[1px] h-10 bg-white shadow-[0_0_10px_white]"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Espacio de transición */}
          <div className="h-[15vh]" />

          <PortfolioGallery />
        </div>
      </div>
    </>
  );
}

export default PortafolioPage;

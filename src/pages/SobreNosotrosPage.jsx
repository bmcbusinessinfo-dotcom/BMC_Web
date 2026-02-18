import React from "react";
import { Helmet } from "react-helmet";
import { motion, useScroll } from "framer-motion";
import ScrollTriggerAnimation from "@/components/ScrollTriggerAnimation";
import { Camera, Zap, Target, Eye, Flame, Shield, ChevronRight } from "lucide-react";

function SobreNosotrosPage() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Helmet>
        <title>Sobre Nosotros | BMC - Break My Comfort</title>
      </Helmet>

      {/* BARRA DE PROGRESO */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-orange-500 z-[100] origin-[0%]"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="relative min-h-screen bg-black overflow-hidden">
        {/* TEXTURA DE GRANO */}
        <div className="fixed inset-0 z-[5] pointer-events-none opacity-[0.12] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

        {/* --- FONDO DINÁMICO --- */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-[10%] -left-[10%] w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-orange-600/30 blur-[80px] md:blur-[120px] rounded-full"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -bottom-[10%] -right-[10%] w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-blue-600/25 blur-[80px] md:blur-[120px] rounded-full"
          />
        </div>

        {/* --- CONTENIDO --- */}
        <div className="relative z-10 pt-20 md:pt-24">
          {/* HERO */}
          <div className="max-w-7xl mx-auto px-4 md:px-6 mb-16 md:mb-24">
            <ScrollTriggerAnimation
              animationType="scaleUp"
              className="rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden relative h-[450px] md:h-[650px] flex items-center justify-center border border-white/10"
            >
              <motion.div
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
                className="absolute inset-0 bg-[url('@/assets/JC.webp')] bg-cover bg-center opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="relative z-10 text-center w-full px-4">
                <span className="text-orange-500 font-black tracking-[0.3em] md:tracking-[0.5em] uppercase text-[9px] md:text-[11px] mb-4 md:mb-6 block">
                  The Automotive Lifestyle • Est. 2026
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-white mb-6 italic uppercase tracking-tighter leading-[0.9]">
                  MUCHO MÁS QUE <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">
                    FOTOGRAFÍA
                  </span>
                </h1>
              </div>
            </ScrollTriggerAnimation>
          </div>

          {/* FILOSOFÍA */}
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: Eye,
                  title: "La Visión",
                  color: "text-orange-500",
                  glow: "group-hover:shadow-[0_0_30px_rgba(234,88,12,0.2)]",
                  desc: "No buscamos la foto perfecta, buscamos el sentimiento.",
                },
                {
                  icon: Flame,
                  title: "El Alma",
                  color: "text-red-500",
                  glow: "group-hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]",
                  desc: "Muscle Cars, JDM, Exóticos. Capturamos el rugido y la esencia cinemática.",
                },
                {
                  icon: Shield,
                  title: "El Respeto",
                  color: "text-blue-500",
                  glow: "group-hover:shadow-[0_0_30px_rgba(37,99,235,0.2)]",
                  desc: "Desde nuestra Canon Rebel T7 hasta tu feed. Autenticidad pura.",
                },
              ].map((item, i) => (
                <ScrollTriggerAnimation key={i} animationType="slideUp" delay={i * 0.1}>
                  <div
                    className={`bg-white/[0.03] border border-white/10 p-8 md:p-10 rounded-[1.5rem] md:rounded-[2rem] transition-all duration-500 group ${item.glow}`}
                  >
                    <item.icon
                      className={`${item.color} mb-6 group-hover:scale-125 transition-transform duration-500`}
                      size={32}
                    />
                    <h3 className="text-xl md:text-2xl font-black text-white italic uppercase mb-3 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed font-light text-sm md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </ScrollTriggerAnimation>
              ))}
            </div>
          </div>

          {/* ADN */}
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
              <ScrollTriggerAnimation animationType="slideLeft">
                <div className="text-center lg:text-left">
                  <h2 className="text-5xl md:text-7xl font-black text-white mb-6 md:mb-10 uppercase italic tracking-tighter leading-none">
                    NUESTRO <br className="hidden lg:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">
                      {" "}
                      ADN
                    </span>
                  </h2>
                  <div className="space-y-6 text-gray-400 text-lg md:text-xl leading-relaxed font-light italic">
                    <p>
                      En <span className="text-white font-bold">Break My Comfort</span>, el comfort
                      es el enemigo.
                    </p>
                    <div className="p-6 md:p-10 bg-gradient-to-br from-orange-600/10 to-transparent border-l-4 border-orange-500 rounded-r-2xl mx-auto lg:mx-0">
                      <p className="text-gray-100 italic font-semibold text-xl md:text-2xl leading-tight">
                        "La carretera no termina donde acaba el asfalto..."
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollTriggerAnimation>

              {/* TARJETAS INTERACTIVAS CORREGIDAS */}
              <div className="grid grid-cols-2 gap-4 md:gap-6 w-full mt-8 lg:mt-0">
                <ScrollTriggerAnimation animationType="scaleUp" delay={0.2}>
                  <div className="aspect-[4/5] bg-neutral-900/60 border border-white/10 p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] flex flex-col justify-between hover:border-orange-500/50 transition-all group overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                      <Zap className="text-orange-500 w-12 h-12 md:w-20 md:h-20 -mr-4 -mt-4" />
                    </div>
                    <Zap className="text-orange-500" size={28} />
                    <h4 className="text-white font-black text-lg md:text-2xl italic uppercase leading-none">
                      Impacto <br />
                      <span className="text-[10px] md:text-sm text-gray-500 lowercase font-light italic">
                        Visual brutal
                      </span>
                    </h4>
                  </div>
                </ScrollTriggerAnimation>

                <ScrollTriggerAnimation
                  animationType="scaleUp"
                  delay={0.4}
                  className="md:translate-y-8"
                >
                  <div className="aspect-[4/5] bg-neutral-900/60 border border-white/10 p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] flex flex-col justify-between hover:border-blue-500/50 transition-all group overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                      <Target className="text-blue-500 w-12 h-12 md:w-20 md:h-20 -mr-4 -mt-4" />
                    </div>
                    <Target className="text-blue-500" size={28} />
                    <h4 className="text-white font-black text-lg md:text-2xl italic uppercase leading-none">
                      Enfoque <br />
                      <span className="text-[10px] md:text-sm text-gray-500 lowercase font-light italic">
                        POV Cinematic
                      </span>
                    </h4>
                  </div>
                </ScrollTriggerAnimation>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="py-24 md:py-40 text-center px-4">
            <ScrollTriggerAnimation animationType="slideUp">
              <h2 className="text-3xl md:text-8xl font-black text-white mb-10 md:mb-16 uppercase italic tracking-tighter leading-[0.9]">
                ¿LISTO PARA <br />
                <span className="text-orange-500">ROMPER EL COMFORT?</span>
              </h2>
              <button
                onClick={() => (window.location.href = "/contacto")}
                className="group relative inline-flex items-center gap-3 px-8 md:px-14 py-4 md:py-6 overflow-hidden font-black text-white bg-transparent border-2 border-white rounded-full transition-all duration-500 hover:border-orange-500"
              >
                <span className="absolute inset-0 w-0 h-full bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
                <span className="relative z-10 uppercase tracking-[0.2em] text-xs md:text-sm group-hover:text-black">
                  Comienza el Viaje
                </span>
                <ChevronRight
                  className="relative z-10 group-hover:translate-x-1 group-hover:text-black transition-transform"
                  size={18}
                />
              </button>
            </ScrollTriggerAnimation>
          </div>
        </div>
      </div>
    </>
  );
}

export default SobreNosotrosPage;

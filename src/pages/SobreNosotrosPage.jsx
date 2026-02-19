import React from "react";
import { Helmet } from "react-helmet";
import { motion, useScroll } from "framer-motion";
import ScrollTriggerAnimation from "@/components/ScrollTriggerAnimation";
import { Camera, Zap, Target, Eye, Flame, Shield, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function SobreNosotrosPage() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Helmet>
        <title>Sobre Nosotros | BMC - Break My Comfort</title>
      </Helmet>

      {/* BARRA DE PROGRESO RPM */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-600 to-red-600 z-[100] origin-[0%]"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="relative min-h-screen bg-black overflow-hidden">
        {/* TEXTURA DE GRANO CINEMÁTICO */}
        <div className="fixed inset-0 z-[5] pointer-events-none opacity-[0.15] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

        {/* --- FONDO DINÁMICO AMBIENTAL --- */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-[10%] -left-[10%] w-[400px] md:w-[1000px] h-[400px] md:h-[1000px] bg-orange-600/20 blur-[100px] md:blur-[150px] rounded-full"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -bottom-[10%] -right-[10%] w-[400px] md:w-[1000px] h-[400px] md:h-[1000px] bg-blue-600/15 blur-[100px] md:blur-[150px] rounded-full"
          />
        </div>

        {/* --- CONTENIDO PRINCIPAL --- */}
        <div className="relative z-10 pt-24 md:pt-32">
          {/* HERO SECTION: Ahora más amplio para monitores Pro */}
          <div className="max-w-[1800px] mx-auto px-6 md:px-12 mb-20 md:mb-32">
            <ScrollTriggerAnimation
              animationType="scaleUp"
              className="rounded-[2rem] md:rounded-[3.5rem] overflow-hidden relative h-[500px] md:h-[750px] flex items-center justify-center border border-white/5 shadow-2xl"
            >
              <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
                className="absolute inset-0 bg-[url('@/assets/JC.webp')] bg-cover bg-center opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="relative z-10 text-center w-full px-6">
                <span className="text-orange-500 font-black tracking-[0.4em] md:tracking-[0.6em] uppercase text-[10px] md:text-xs mb-6 block">
                  The Automotive Lifestyle • Est. 2026
                </span>
                <h1 className="text-5xl sm:text-6xl md:text-9xl lg:text-[10rem] font-black text-white mb-8 italic uppercase tracking-tighter leading-[0.85]">
                  MUCHO MÁS QUE <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-600 to-orange-400">
                    FOTOGRAFÍA
                  </span>
                </h1>
              </div>
            </ScrollTriggerAnimation>
          </div>

          {/* FILOSOFÍA: Grid optimizado para 1600px */}
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-12 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  icon: Eye,
                  title: "La Visión",
                  color: "text-orange-500",
                  glow: "group-hover:shadow-[0_0_40px_rgba(234,88,12,0.15)]",
                  desc: "No buscamos la foto perfecta, buscamos el sentimiento que genera el metal y la velocidad.",
                },
                {
                  icon: Flame,
                  title: "El Alma",
                  color: "text-red-500",
                  glow: "group-hover:shadow-[0_0_40px_rgba(220,38,38,0.15)]",
                  desc: "Muscle Cars, JDM, Exóticos. Capturamos el rugido y la esencia de la cultura callejera.",
                },
                {
                  icon: Shield,
                  title: "El Respeto",
                  color: "text-blue-500",
                  glow: "group-hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]",
                  desc: "Desde nuestra Canon Rebel T7 hasta tu feed. Autenticidad pura sin filtros genéricos.",
                },
              ].map((item, i) => (
                <ScrollTriggerAnimation key={i} animationType="slideUp" delay={i * 0.1}>
                  <div
                    className={`bg-white/[0.02] border border-white/5 p-10 md:p-14 rounded-[2.5rem] transition-all duration-700 group ${item.glow} hover:bg-white/[0.04]`}
                  >
                    <item.icon
                      className={`${item.color} mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}
                      size={40}
                    />
                    <h3 className="text-2xl md:text-3xl font-black text-white italic uppercase mb-4 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed font-light text-base md:text-lg">
                      {item.desc}
                    </p>
                  </div>
                </ScrollTriggerAnimation>
              ))}
            </div>
          </div>

          {/* ADN SECTION: Impacto en pantalla ancha */}
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-20 md:py-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
              <ScrollTriggerAnimation animationType="slideLeft">
                <div className="text-center lg:text-left">
                  <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 md:mb-12 uppercase italic tracking-tighter leading-[0.8]">
                    NUESTRO <br className="hidden lg:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
                      ADN
                    </span>
                  </h2>
                  <div className="space-y-8 text-gray-400 text-xl md:text-2xl leading-relaxed font-light italic">
                    <p>
                      En <span className="text-white font-bold">Break My Comfort</span>, la rutina
                      es el enemigo. No estamos aquí para seguir tendencias, estamos aquí para
                      crearlas.
                    </p>
                    <div className="p-8 md:p-12 bg-gradient-to-br from-orange-600/10 to-transparent border-l-[6px] border-orange-500 rounded-r-[2rem] mx-auto lg:mx-0">
                      <p className="text-gray-100 italic font-bold text-2xl md:text-4xl leading-tight tracking-tight">
                        "La carretera no termina donde acaba el asfalto, termina donde tú dejas de
                        acelerar."
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollTriggerAnimation>

              {/* TARJETAS INTERACTIVAS: Tamaño Pro */}
              <div className="grid grid-cols-2 gap-6 md:gap-10 w-full mt-12 lg:mt-0">
                <ScrollTriggerAnimation animationType="scaleUp" delay={0.2}>
                  <div className="aspect-[4/5] bg-neutral-950 border border-white/5 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] flex flex-col justify-between hover:border-orange-500/50 transition-all duration-700 group overflow-hidden relative shadow-2xl">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-100 transition-opacity duration-700">
                      <Zap className="text-orange-500 w-24 h-24 md:w-40 md:h-40 -mr-8 -mt-8" />
                    </div>
                    <Zap
                      className="text-orange-500 group-hover:scale-125 transition-transform"
                      size={36}
                    />
                    <h4 className="text-white font-black text-2xl md:text-4xl italic uppercase leading-none">
                      Impacto <br />
                      <span className="text-xs md:text-base text-gray-600 lowercase font-light italic mt-2 block">
                        Visual brutal
                      </span>
                    </h4>
                  </div>
                </ScrollTriggerAnimation>

                <ScrollTriggerAnimation
                  animationType="scaleUp"
                  delay={0.4}
                  className="md:translate-y-16"
                >
                  <div className="aspect-[4/5] bg-neutral-950 border border-white/5 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] flex flex-col justify-between hover:border-blue-500/50 transition-all duration-700 group overflow-hidden relative shadow-2xl">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-100 transition-opacity duration-700">
                      <Target className="text-blue-500 w-24 h-24 md:w-40 md:h-40 -mr-8 -mt-8" />
                    </div>
                    <Target
                      className="text-blue-500 group-hover:scale-125 transition-transform"
                      size={36}
                    />
                    <h4 className="text-white font-black text-2xl md:text-4xl italic uppercase leading-none">
                      Enfoque <br />
                      <span className="text-xs md:text-base text-gray-600 lowercase font-light italic mt-2 block">
                        POV Cinematic
                      </span>
                    </h4>
                  </div>
                </ScrollTriggerAnimation>
              </div>
            </div>
          </div>

          {/* CTA FINAL: Máximo impacto */}
          <div className="py-32 md:py-56 text-center px-6">
            <ScrollTriggerAnimation animationType="slideUp">
              <h2 className="text-5xl md:text-9xl lg:text-[11rem] font-black text-white mb-12 md:mb-20 uppercase italic tracking-tighter leading-[0.8] transition-all">
                ¿LISTO PARA <br />
                <span className="text-orange-500">ROMPER EL COMFORT?</span>
              </h2>
              <Link
                to="/contacto"
                className="group relative inline-flex items-center gap-4 px-10 md:px-20 py-5 md:py-8 overflow-hidden font-black text-white bg-transparent border-[3px] border-white rounded-full transition-all duration-700 hover:border-orange-500 shadow-2xl"
              >
                <span className="absolute inset-0 w-0 h-full bg-orange-500 transition-all duration-700 ease-in-out group-hover:w-full"></span>

                <span className="relative z-10 uppercase tracking-[0.3em] text-sm md:text-lg transition-colors duration-500 group-hover:text-black italic">
                  Agendar Sesión
                </span>

                <ChevronRight
                  className="relative z-10 transition-all duration-500 group-hover:translate-x-2 group-hover:text-black"
                  size={24}
                />
              </Link>
            </ScrollTriggerAnimation>
          </div>
        </div>
      </div>
    </>
  );
}

export default SobreNosotrosPage;

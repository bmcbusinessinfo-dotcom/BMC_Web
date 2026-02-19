import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  ChevronRight,
  Camera,
  Instagram,
  Mail,
  Info,
  ChevronDown,
  Zap,
  Image as ImageIcon,
  Shield,
  Star,
  ArrowUpRight,
} from "lucide-react";
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

  const benefits = [
    {
      icon: <Zap size={28} />,
      title: "Entrega Express",
      desc: "Tus mejores tomas editadas y listas en menos de 48 horas.",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: <ImageIcon size={28} />,
      title: "Máxima Calidad",
      desc: "Galería privada en Pixieset con archivos en 4K para impresión.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: <Star size={28} />,
      title: "Asesoría PRO",
      desc: "Ubicaciones exclusivas y scouting de spots en Durango.",
      color: "from-yellow-400 to-orange-600",
    },
    {
      icon: <Shield size={28} />,
      title: "Lifestyle",
      desc: "No solo fotos; creamos contenido cinemático para tu marca personal.",
      color: "from-neutral-400 to-neutral-600",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Inicio | Break My Comfort</title>
        <meta name="description" content="Cinematografía automotriz de alto nivel en Durango." />
      </Helmet>

      <div className="pt-24 md:pt-32 pb-20 flex flex-col items-center relative z-10 px-6 md:px-12 overflow-hidden min-h-screen max-w-[1800px] mx-auto">
        {/* HERO SECTION - Ajustado el tamaño para que el contenido suba */}
        <ScrollTriggerAnimation className="text-center mb-10 md:mb-16 w-full relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-[10px]">
              Est. 2026
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span className="text-white font-bold tracking-[0.3em] uppercase text-[10px]">
              Durango, México
            </span>
          </motion.div>

          <h1 className="text-[13vw] sm:text-9xl md:text-[9rem] lg:text-[11rem] font-black text-white leading-[0.85] tracking-tighter italic uppercase">
            BREAK MY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-600 to-orange-400">
              COMFORT
            </span>
          </h1>

          <div className="mt-8 md:mt-12 w-screen border-y border-white/5 py-4 bg-white/[0.01] backdrop-blur-sm relative left-1/2 -translate-x-1/2 overflow-hidden">
            <div className="flex whitespace-nowrap animate-marquee">
              {[1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className="text-gray-500 text-[10px] md:text-sm font-bold tracking-[0.4em] uppercase mx-12 flex items-center gap-6"
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
          className="mb-12 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] text-gray-600 font-black uppercase tracking-[0.5em] italic">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-orange-500/50"
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>

        {/* --- SECCIÓN: BENEFICIOS --- */}
        <ScrollTriggerAnimation className="w-full max-w-[1600px] mb-24 md:mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black italic text-white uppercase tracking-tighter">
              EL ESTÁNDAR <span className="text-orange-600">PROFESIONAL</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="relative group p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-orange-500/30 transition-all duration-500 overflow-hidden"
              >
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity`}
                />
                <div className="text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-500">
                  {benefit.icon}
                </div>
                <h3 className="text-white font-bold text-xl mb-3 uppercase italic tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* BOTÓN DE SERVICIOS - Llamativo pero elegante */}
          <div className="flex justify-center">
            <Link
              to="/servicios"
              className="group flex items-center gap-4 bg-white/5 border border-white/10 hover:border-orange-500/50 px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-md"
            >
              <span className="text-white font-black italic uppercase tracking-widest text-[10px]">
                Ver Paquetes y Beneficios
              </span>
              <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowUpRight size={14} className="text-white" />
              </div>
            </Link>
          </div>
        </ScrollTriggerAnimation>

        {/* GRID DE NAVEGACIÓN - Ajustado para que no se pierdan */}
        <ScrollTriggerAnimation
          stagger
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-[1600px]"
        >
          {cards.map((card, idx) => (
            <AnimatedItem key={idx} className="flex">
              <Link
                to={card.link}
                className="group block relative w-full overflow-hidden rounded-3xl border border-white/5 bg-white/[0.03] backdrop-blur-xl hover:border-orange-500/40 hover:bg-white/[0.08] transition-all duration-500"
              >
                <div className="p-6 md:p-10 flex flex-col h-full relative z-10">
                  <div className="mb-4 text-orange-500 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500">
                    {React.cloneElement(card.icon, { size: 28 })}
                  </div>
                  <h2 className="text-xl md:text-3xl font-black text-white mb-2 tracking-tighter italic uppercase group-hover:text-orange-500 transition-colors">
                    {card.title}
                  </h2>
                  <p className="text-gray-500 text-[10px] md:text-sm leading-relaxed mb-6 font-bold uppercase tracking-wide group-hover:text-gray-300">
                    {card.description}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-orange-500 font-black text-[9px] tracking-[0.2em] uppercase opacity-60 group-hover:opacity-100 transition-all">
                    Explorar <ChevronRight size={12} />
                  </div>
                </div>
                {/* Glow sutil en el fondo de la tarjeta */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </AnimatedItem>
          ))}
        </ScrollTriggerAnimation>

        {/* SECCIÓN FINAL DISCRETA */}
        <div className="mt-20 opacity-20 hover:opacity-100 transition-opacity">
          <p className="text-white text-[8px] font-black uppercase tracking-[1em] italic">
            Break My Comfort // Cinematic Experience
          </p>
        </div>
      </div>
    </>
  );
}

export default InicioPage;

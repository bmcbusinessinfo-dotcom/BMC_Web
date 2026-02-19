import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Shield, ChevronRight, ArrowUpRight, Zap, Camera, Star } from "lucide-react";

function ServiciosPage() {
  const planes = [
    {
      name: "Sprint Session",
      price: "Consulta MD",
      desc: "Perfecto para quienes buscan renovar su feed con estética profesional.",
      features: [
        "10 Fotos Editadas (Estilo Moody/Golden a elegir)",
        "1 Locación Urbana o Carretera",
        "Entrega en 72h vía Digital",
        "Calidad 4K para Impresión",
      ],
      icon: <Camera className="text-orange-500" size={24} />,
      popular: false,
    },
    {
      name: "Endurance Cinematic",
      price: "Best Seller",
      desc: "La experiencia completa de BMC. Contenido de alto impacto para destacar.",
      features: [
        "20 Fotos Editadas Premium",
        "2 Locaciones (A elegir se dan sugerencias según el vehículo)",
        "1 Reel Editado",
        "Asesoría de Estilo y Scouting",
      ],
      icon: <Zap className="text-orange-500" size={24} />,
      popular: true,
    },
  ];

  // Variantes para animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-32 pb-20 bg-black min-h-screen px-6 relative z-10"
    >
      <Helmet>
        <title>Servicios | Break My Comfort</title>
      </Helmet>

      <div className="max-w-6xl mx-auto">
        {/* ENCABEZADO ANIMADO */}
        <motion.header variants={itemVariants} className="mb-20 text-center md:text-left">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            className="h-1 bg-orange-600 mb-6 hidden md:block"
          />
          <h1 className="text-5xl md:text-8xl font-black italic text-white uppercase mb-4 tracking-tighter">
            EL ESTÁNDAR <span className="text-orange-600">BMC</span>
          </h1>
          <p className="text-gray-500 font-bold uppercase tracking-[0.4em] text-xs md:text-sm">
            Invirtiendo en el legado visual de tu garage
          </p>
        </motion.header>

        {/* GRID DE PLANES CON ANIMACIÓN */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {planes.map((plan, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`relative p-10 rounded-[2.5rem] border transition-all duration-500 group overflow-hidden ${
                plan.popular
                  ? "bg-gradient-to-b from-orange-600/10 to-transparent border-orange-500/40"
                  : "bg-white/[0.02] border-white/10 hover:border-white/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-6 right-8 bg-orange-600 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest italic animate-pulse">
                  Recomendado
                </div>
              )}

              <div className="mb-6">{plan.icon}</div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-2 italic uppercase group-hover:text-orange-500 transition-colors">
                {plan.name}
              </h2>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed italic font-medium">
                {plan.desc}
              </p>

              <ul className="space-y-4 mb-10">
                {plan.features.map((f, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-gray-300 font-bold text-[11px] uppercase tracking-wide"
                  >
                    <Check size={14} className="text-orange-600 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-white font-black uppercase tracking-widest text-xs py-3 px-6 bg-white/5 rounded-full border border-white/10">
                  {plan.price}
                </span>
                <Link
                  to="/contacto"
                  className="text-orange-500 group-hover:translate-x-2 transition-transform"
                >
                  <ArrowUpRight size={28} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTÓN DE CIERRE (EL "HOOK") */}
        <motion.div variants={itemVariants} className="mb-32 text-center">
          <Link
            to="/contacto"
            className="group relative inline-flex items-center gap-6 bg-orange-600 hover:bg-white text-white hover:text-black font-black italic uppercase px-12 py-6 rounded-2xl transition-all duration-500 tracking-tighter shadow-2xl shadow-orange-600/20"
          >
            <span className="text-xl">Agendar Sesión Ahora</span>
            <ChevronRight
              size={24}
              className="group-hover:rotate-90 transition-transform duration-500"
            />
          </Link>
          <motion.p
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mt-8 text-gray-600 text-[10px] font-black uppercase tracking-[0.5em]"
          >
            Cupos limitados por mes en Durango
          </motion.p>
        </motion.div>

        {/* SECCIÓN LEGAL (DISCRETA) */}
        <motion.div variants={itemVariants} className="pt-20 border-t border-white/5">
          <div className="flex items-center gap-3 mb-10 text-white/40">
            <Shield size={20} />
            <h2 className="text-sm font-black uppercase italic tracking-widest">
              Términos & Privacidad
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 text-gray-600 text-[9px] leading-relaxed uppercase font-black tracking-widest">
            <div className="space-y-8">
              <section>
                <h3 className="text-white/60 mb-2 font-black italic">Depósito y Reserva</h3>
                <p>
                  Las fechas solo se apartan con confirmación previa. Cambios de fecha sujetos a
                  disponibilidad climática (Golden Hour).
                </p>
              </section>
              <section>
                <h3 className="text-white/60 mb-2 font-black italic">Uso de Imagen</h3>
                <p>
                  BMC se reserva el uso de material para portafolio. El cliente recibe derechos de
                  uso ilimitado en plataformas digitales.
                </p>
              </section>
            </div>
            <div className="space-y-8">
              <section>
                <h3 className="text-white/60 mb-2 font-black italic">Responsabilidad</h3>
                <p>
                  El manejo del vehículo en locación es responsabilidad exclusiva del propietario.
                  BMC no cubre multas ni daños mecánicos.
                </p>
              </section>
              <section>
                <h3 className="text-white/60 mb-2 font-black italic">Entrega</h3>
                <p>
                  Los tiempos de edición pueden variar según la complejidad del proyecto (Máximo 5
                  días hábiles para video).
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ServiciosPage;

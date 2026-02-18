import React, { useState } from "react";
import { Helmet } from "react-helmet";
import ContactForm from "@/components/ContactForm";
import BookingWidget from "@/components/BookingWidget";
import { MapPin, Mail, Phone, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import ScrollTriggerAnimation, { AnimatedItem } from "@/components/ScrollTriggerAnimation";

function ContactoPage() {
  const [selectedSlot, setSelectedSlot] = useState("");

  const lights = [
    {
      color: "bg-blue-600",
      size: "w-[600px] md:w-[900px] h-[600px] md:h-[900px]",
      duration: 15,
      delay: 0,
    },
    {
      color: "bg-indigo-900",
      size: "w-[800px] md:w-[1200px] h-[800px] md:h-[1200px]",
      duration: 20,
      delay: 2,
    },
    {
      color: "bg-orange-600",
      size: "w-[300px] md:w-[500px] h-[300px] md:h-[500px]",
      duration: 12,
      delay: 5,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contacto | Break My Comfort</title>
      </Helmet>

      {/* --- ESCENA MOODY HIGH-IMPACT --- */}
      <div className="pt-28 md:pt-40 pb-20 md:pb-32 min-h-screen relative overflow-hidden bg-[#020202]">
        {/* 1. TEXTURA CINEMÁTICA (Grano de película) */}
        <div className="absolute inset-0 z-[5] opacity-[0.2] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

        {/* 2. LUCES DINÁMICAS PRO AMBIENT */}
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          {lights.map((light, i) => (
            <motion.div
              key={i}
              animate={{
                x: ["-10%", "50%", "10%", "40%", "-10%"],
                y: ["-10%", "20%", "40%", "10%", "-10%"],
                opacity: [0.1, 0.3, 0.2, 0.4, 0.1],
                scale: [1, 1.2, 0.9, 1.1, 1],
              }}
              transition={{
                duration: light.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: light.delay,
              }}
              className={`absolute ${light.size} ${light.color} blur-[120px] md:blur-[180px] rounded-full mix-blend-screen`}
            />
          ))}
        </div>

        {/* --- CONTENIDO --- */}
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-[10]">
          <ScrollTriggerAnimation className="text-center mb-16 md:mb-24">
            <motion.div
              initial={{ filter: "blur(15px)", opacity: 0, y: 20 }}
              animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <h1 className="text-6xl sm:text-7xl md:text-9xl lg:text-[11rem] font-black text-white mb-6 uppercase italic tracking-[ -0.05em] leading-[0.8] drop-shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                CONTÁCTANOS
              </h1>
            </motion.div>
            <p className="text-blue-400 text-[10px] md:text-xs font-black tracking-[0.6em] uppercase italic bg-blue-500/5 backdrop-blur-xl inline-block px-8 py-2 rounded-full border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
              Break Your Comfort Zone // Session Booking 2026
            </p>
          </ScrollTriggerAnimation>

          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 md:gap-16 items-start">
            {/* LADO IZQUIERDO: CALENDARIO Y CARDS (Col 5) */}
            <div className="w-full lg:col-span-5 space-y-8 order-1">
              <div className="relative group">
                {/* Glow perimetral dinámico */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                <div className="relative bg-neutral-950/50 backdrop-blur-3xl rounded-[2rem] border border-white/5 overflow-hidden shadow-2xl">
                  <div className="p-1 bg-gradient-to-b from-white/10 to-transparent">
                    <BookingWidget onSlotSelect={(slot) => setSelectedSlot(slot)} />
                  </div>
                </div>
              </div>

              {/* CARDS DE CONTACTO: Grid 2x2 elegante */}
              <ScrollTriggerAnimation stagger className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    link: "mailto:tuemail@ejemplo.com?subject=Consulta%20de%20Sesi%C3%B3n%20Fotogr%C3%A1fica%20-%20BMC&body=%C2%A1Hola!%20Vi%20tu%20portafolio%20y%20me%20encant%C3%B3%20tu%20estilo...",
                  },
                  {
                    icon: Phone,
                    label: "WhatsApp",
                    link: "https://wa.me/5216183253693?text=%C2%A1Hola%2C%20vi%20tu%20portafolio%20y%20me%20encanto%2C%20quiero%20recibir%20mas%20informacion%C2%A1.",
                  },
                  {
                    icon: MapPin,
                    label: "Durango, MX",
                    link: "/src/pages/SobreNosotrosPage.jsx",
                  },
                  {
                    icon: Instagram,
                    label: "@bmc_photographycars",
                    link: "https://instagram.com/bmc_photographycars",
                  },
                ].map((item, idx) => (
                  <AnimatedItem key={idx}>
                    <a
                      href={item.link}
                      target="_blank"
                      className="flex flex-col items-center justify-center h-32 rounded-[1.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-md transition-all duration-500 group hover:bg-blue-600 hover:border-blue-400 hover:-translate-y-1"
                    >
                      <item.icon
                        className="text-blue-500 group-hover:text-white transition-all duration-500 group-hover:scale-110"
                        size={24}
                      />
                      <h3 className="text-white/40 group-hover:text-white font-black text-[9px] uppercase tracking-[0.2em] mt-4 transition-colors">
                        {item.label}
                      </h3>
                    </a>
                  </AnimatedItem>
                ))}
              </ScrollTriggerAnimation>
            </div>

            {/* LADO DERECHO: FORMULARIO (Col 7) */}
            <ScrollTriggerAnimation
              animationType="slideUp"
              className="w-full lg:col-span-7 order-2"
            >
              <div className="relative">
                {/* Resplandor ambiental para el formulario */}
                <div className="absolute -inset-10 bg-blue-600/5 rounded-full blur-[100px] opacity-50"></div>

                <div className="relative bg-neutral-950/80 backdrop-blur-[50px] rounded-[2.5rem] border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden">
                  {/* Barra de estado superior estilo "Scanner" */}
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="h-[1px] w-1/3 bg-gradient-to-r from-transparent via-blue-500 to-transparent absolute top-0"
                  />

                  <div className="p-2 md:p-4">
                    <ContactForm appointmentSlot={selectedSlot} />
                  </div>
                </div>
              </div>

              {/* Nota al pie del formulario */}
              <p className="mt-8 text-center lg:text-right text-gray-500 text-[10px] uppercase tracking-[0.3em] italic">
                * Las sesiones Moody requieren reserva con 48h de antelación.
              </p>
            </ScrollTriggerAnimation>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactoPage;

import React, { useState } from "react";
import { Helmet } from "react-helmet";
import ContactForm from "@/components/ContactForm";
import BookingWidget from "@/components/BookingWidget";
import { MapPin, Mail, Phone, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import ScrollTriggerAnimation, { AnimatedItem } from "@/components/ScrollTriggerAnimation";

function ContactoPage() {
  const [selectedSlot, setSelectedSlot] = useState("");

  // Configuramos las luces para que sean más grandes y brillantes
  const lights = [
    { color: "bg-blue-500", size: "w-[600px] h-[600px]", duration: 15, delay: 0 },
    { color: "bg-indigo-600", size: "w-[800px] h-[800px]", duration: 20, delay: 2 },
    { color: "bg-orange-500", size: "w-[400px] h-[400px]", duration: 12, delay: 5 }, // Un toque de Golden filtrado
  ];

  return (
    <>
      <Helmet>
        <title>Contacto | Break My Comfort</title>
      </Helmet>

      {/* --- ESCENA MOODY HIGH-IMPACT --- */}
      <div className="pt-24 md:pt-32 pb-12 md:pb-24 min-h-screen relative overflow-hidden bg-[#020202]">
        {/* 1. TEXTURA CINEMÁTICA REFORZADA */}
        <div className="absolute inset-0 z-[5] opacity-[0.25] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

        {/* 2. LUCES DINÁMICAS (Z-1) */}
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          {lights.map((light, i) => (
            <motion.div
              key={i}
              initial={{ x: "-20%", y: "-20%", opacity: 0 }}
              animate={{
                x: ["0%", "80%", "20%", "60%", "0%"],
                y: ["0%", "30%", "70%", "20%", "0%"],
                opacity: [0.2, 0.5, 0.3, 0.6, 0.2],
                scale: [1, 1.3, 0.9, 1.2, 1],
              }}
              transition={{
                duration: light.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: light.delay,
              }}
              className={`absolute ${light.size} ${light.color} blur-[120px] rounded-full mix-blend-screen opacity-40`}
            />
          ))}

          {/* Destello Central Pulsante (Simula un faro lejano) */}
          <motion.div
            animate={{ opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-blue-500/10 to-transparent"
          />
        </div>

        {/* --- CONTENIDO --- */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-[10]">
          <ScrollTriggerAnimation className="text-center mb-10 md:mb-16">
            <motion.div
              initial={{ filter: "blur(10px)", opacity: 0 }}
              animate={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl sm:text-7xl md:text-9xl font-black text-white mb-4 uppercase italic tracking-tighter leading-none drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                CONTÁCTANOS
              </h1>
            </motion.div>
            <p className="text-blue-400 text-[10px] md:text-sm font-bold tracking-[0.4em] uppercase italic bg-black/40 backdrop-blur-md inline-block px-4 py-1 rounded-full border border-blue-500/20">
              Break Your Comfort Zone // Session Booking
            </p>
          </ScrollTriggerAnimation>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* LADO IZQUIERDO: CALENDARIO Y CONTACTO (ORDER 1 en móvil) */}
            <div className="w-full space-y-6 order-1 lg:order-1">
              <div className="relative group">
                {/* Glow perimetral del widget */}
                <div className="absolute -inset-1 bg-blue-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>

                <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
                  <BookingWidget onSlotSelect={(slot) => setSelectedSlot(slot)} />
                </div>
              </div>

              {/* CARDS DE CONTACTO */}
              <ScrollTriggerAnimation stagger className="grid grid-cols-2 gap-3">
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
                  { icon: MapPin, label: "Lugar", link: "/src/pages/SobreNosotrosPage.jsx" },
                  {
                    icon: Instagram,
                    label: "Social",
                    link: "https://instagram.com/bmc_photographycars",
                  },
                ].map((item, idx) => (
                  <AnimatedItem key={idx}>
                    <a
                      href={item.link}
                      target="_blank"
                      className="flex flex-col items-center justify-center h-24 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md active:scale-95 transition-all group hover:bg-blue-500/10 hover:border-blue-500/40"
                    >
                      <item.icon
                        className="text-blue-500 group-hover:text-white transition-colors"
                        size={20}
                      />
                      <h3 className="text-white font-black text-[9px] uppercase tracking-widest mt-2">
                        {item.label}
                      </h3>
                    </a>
                  </AnimatedItem>
                ))}
              </ScrollTriggerAnimation>
            </div>

            {/* LADO DERECHO: FORMULARIO (ORDER 2 en móvil) */}
            <ScrollTriggerAnimation animationType="slideUp" className="w-full order-2 lg:order-2">
              <div className="relative">
                {/* Resplandor detrás del formulario para que no se pierda en el fondo */}
                <div className="absolute inset-0 bg-blue-600/10 rounded-[2rem] blur-3xl opacity-30"></div>

                <div className="relative bg-black/70 backdrop-blur-[40px] rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden">
                  {/* Línea de energía superior */}
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                  />
                  <ContactForm appointmentSlot={selectedSlot} />
                </div>
              </div>
            </ScrollTriggerAnimation>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactoPage;

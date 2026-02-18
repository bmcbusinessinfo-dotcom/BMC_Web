import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import AnimatedSection from "./AnimatedSection";

function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Correo",
      info: "bmc.business.info@gmail.com",
      action: "mailto:bmc.business.info@gmail.com",
      color: "bg-orange-500",
    },
    {
      icon: Phone,
      title: "Teléfono",
      info: "618 325 3693",
      action:
        "https://wa.me/5216183253693?text=%C2%A1Hola%2C%20vi%20tu%20portafolio%20y%20me%20encanto%2C%20quiero%20recibir%20mas%20informacion%C2%A1.%F0%9F%A4%A9%E2%9D%A4%EF%B8%8F",
      color: "bg-green-600",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      info: "Durango, Dgo.",
      action: "#",
      color: "bg-orange-600",
    },
    {
      icon: Instagram,
      title: "Instagram",
      info: "@BMC_PhotographyCars",
      action: "https://instagram.com/BMC_PhotographyCars",
      color: "bg-pink-600",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter">
            ¿LISTO PARA TU <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-600 to-orange-400">
              OBRA MAESTRA?
            </span>
          </h2>
          <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-xs mt-6">
            Proyectos Cinematográficos // Durango, MX
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.action}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-orange-500/40 transition-all group"
              >
                <div className={`p-3 rounded-xl ${item.color} text-white shadow-lg`}>
                  <item.icon size={20} />
                </div>
                <div className="ml-4">
                  <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">
                    {item.title}
                  </p>
                  <p className="text-white font-bold text-sm tracking-tight group-hover:text-orange-500 transition-colors">
                    {item.info}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

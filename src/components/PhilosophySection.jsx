import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Camera, Award } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

function PhilosophySection() {
  const pillars = [
    {
      icon: Flame,
      title: 'Rompe la Rutina',
      description: 'Tu auto es más que transporte. Es tu escape, tu pasión, tu libertad. Capturamos esa energía cruda y espíritu desenfrenado que te hace salir a la carretera.',
      gradient: 'from-orange-500 to-red-600',
    },
    {
      icon: Camera,
      title: 'Trátalo como Arte',
      description: 'Cada curva, cada reflejo, cada detalle es una obra maestra esperando ser inmortalizada. No solo tomamos fotos—creamos experiencias cinematográficas que honran tu máquina.',
      gradient: 'from-yellow-500 to-orange-600',
    },
    {
      icon: Award,
      title: 'Experiencia Exclusiva',
      description: 'Servicio premium y personalizado adaptado a ti y a tu vehículo. Sin paquetes genéricos. Sin sesiones apresuradas. Solo tiempo dedicado a crear contenido que cuente tu historia.',
      gradient: 'from-red-500 to-pink-600',
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="philosophy" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Visual Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Background Accent */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-500 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-red-500 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            NO ES CONTENIDO GENÉRICO.
            <span className="block mt-2 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              ES UNA EXPERIENCIA.
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            No nos conformamos con lo ordinario. Tú tampoco deberías. Esto es lo que nos distingue.
          </p>
        </AnimatedSection>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <AnimatedSection 
                key={pillar.title} 
                animationType="slideUp" 
                delay={index * 0.2}
                className="h-full"
              >
                <motion.div
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group relative h-full"
                >
                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-white/10 group-hover:border-orange-500/30 transition-all duration-500 h-full overflow-hidden shadow-2xl">
                    {/* Hover Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${pillar.gradient} mb-6 relative z-10 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className={`text-3xl font-black mb-4 bg-gradient-to-r ${pillar.gradient} bg-clip-text text-transparent`}>
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed text-lg relative z-10">
                      {pillar.description}
                    </p>

                    {/* Bottom Accent Line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.6} className="text-center mt-20">
          <p className="text-gray-300 text-xl mb-8 font-light">
            ¿Listo para elevar tu contenido automotriz?
          </p>
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-lg rounded-full hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-xl shadow-orange-500/40"
          >
            Creemos Algo Juntos
          </motion.button>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default PhilosophySection;
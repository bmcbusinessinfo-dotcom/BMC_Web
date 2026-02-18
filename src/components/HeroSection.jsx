import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-purple-900/20 to-black/90"></div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,0,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,50,0,0.1),transparent_50%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <AnimatedSection animationType="staggerContainer">
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}>
            {/* Logo Integration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
              className="flex justify-center mb-10"
            >
              <img
                src="https://horizons-cdn.hostinger.com/911866ec-7eaa-43df-808f-84ffd957412a/8752ecb4410d533080753518721fbb26.png"
                alt="Break My Comfort"
                className="h-24 md:h-32 w-auto drop-shadow-[0_0_15px_rgba(255,100,0,0.3)]"
              />
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white leading-[0.9] tracking-tight mb-6">
              BREAK MY
              <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent transform hover:scale-[1.02] transition-transform duration-500 cursor-default">
                COMFORT
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10">
              Donde la pasión automotriz se encuentra con el arte cinematográfico.
              <span className="block mt-2 text-orange-400 font-medium">
                Tu máquina merece más que contenido genérico.
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,100,0,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-lg rounded-full transition-all duration-300 shadow-2xl shadow-orange-500/30 relative overflow-hidden"
              >
                <span className="relative z-10">Agenda Tu Sesión</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </motion.button>

              <motion.button
                onClick={scrollToPortfolio}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 border border-white/30 text-white font-bold text-lg rounded-full hover:border-orange-500 transition-all duration-300 backdrop-blur-sm"
              >
                Ver Portafolio
              </motion.button>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.5,
          delay: 1,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: "easeInOut"
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer p-2 hover:text-orange-500 transition-colors"
        onClick={scrollToPortfolio}
      >
        <ChevronDown className="text-white/70 w-10 h-10" />
      </motion.div>
    </section>
  );
}

export default HeroSection;
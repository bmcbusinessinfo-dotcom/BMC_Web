import React from 'react';
import { motion } from 'framer-motion';
import { User, Users, FileText, ArrowRight } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import AnimatedSection from './AnimatedSection';

function ServicesSection() {
  const services = [
    {
      icon: User,
      title: 'Sesiones Privadas',
      description: 'Sesiones fotográficas personalizadas uno a uno, diseñadas exclusivamente para ti y tu vehículo. Nos tomamos el tiempo para entender tu visión, el carácter único de tu auto y la historia que quieres contar. Cada ángulo, cada toma es elaborada con precisión y pasión.',
      features: [
        'Sesión dedicada de 2-4 horas',
        'Búsqueda de locaciones incluida',
        '50+ imágenes editadas profesionalmente',
        'Estilos Moody y Golden Hour disponibles',
      ],
      gradient: 'from-orange-500 to-red-600',
      accentColor: 'orange',
    },
    {
      icon: Users,
      title: 'Creación de Contenido',
      description: 'Paquetes de medios profesionales para clubes automotrices, eventos y sesiones grupales. Perfecto para car meets, días de pista o reuniones de clubes. Entregamos contenido de alta calidad que muestra a toda la comunidad y máquinas individuales con igual excelencia.',
      features: [
        'Cobertura de múltiples vehículos',
        'Videos destacados del evento',
        '100+ imágenes por evento',
        'Formatos listos para redes sociales',
      ],
      gradient: 'from-yellow-500 to-orange-600',
      accentColor: 'yellow',
    },
    {
      icon: FileText,
      title: 'Creación de Media Kit',
      description: 'Kits de medios completos para entusiastas serios, coleccionistas y vendedores. Documentación profesional que captura cada detalle, ángulo y característica. Perfecto para mostrar el potencial completo de tu vehículo en formatos impresos o digitales.',
      features: [
        '100+ tomas detalladas',
        'Cobertura interior y exterior',
        'Tomas de motor y detalles',
        'Archivos de alta resolución para impresión',
      ],
      gradient: 'from-red-500 to-pink-600',
      accentColor: 'red',
    },
  ];

  const handleLearnMore = (serviceName) => {
    toast({
      title: '🚧 Detalles próximamente',
      description: `La información detallada sobre ${serviceName} estará disponible pronto. ¡Contáctanos para consultas inmediatas!`,
      duration: 5000,
    });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black via-gray-950 to-black relative">
      {/* Visual Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 relative inline-block">
            NUESTROS <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">SERVICIOS</span>
             <motion.span 
              className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto mt-8">
            Elige la experiencia que se ajuste a tu visión. Cada paquete es personalizable a tus necesidades.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedSection 
                key={service.title} 
                animationType="slideUp" 
                delay={index * 0.15}
                className="h-full"
              >
                <motion.div 
                  whileHover={{ y: -8, boxShadow: "0 20px 40px -20px rgba(0,0,0,0.7)" }}
                  className="group relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 h-full flex flex-col"
                >
                  {/* Hover Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500 pointer-events-none`}></div>

                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} mb-6 self-start relative z-10 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className={`text-3xl font-black mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start text-gray-300">
                        <ArrowRight className={`w-5 h-5 text-${service.accentColor}-500 mr-3 flex-shrink-0 mt-0.5`} />
                        <span className="text-sm font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Pricing */}
                  <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Inversión</p>
                    <p className="text-white font-bold text-lg">Contactar para Cotización</p>
                    <p className="text-gray-500 text-xs mt-1">Paquetes personalizados disponibles</p>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    onClick={() => handleLearnMore(service.title)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full px-6 py-4 bg-gradient-to-r ${service.gradient} text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group/btn`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Ver Detalles <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                  </motion.button>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.5} className="text-center mt-20 p-12 bg-gradient-to-r from-gray-900 to-black rounded-3xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          
          <h3 className="text-3xl font-black text-white mb-4 relative z-10">
            ¿No estás seguro de qué servicio necesitas?
          </h3>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto relative z-10">
            Hablemos sobre tu visión y creemos un paquete personalizado que capture perfectamente tu obra maestra automotriz.
          </p>
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-lg rounded-full hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-2xl shadow-orange-500/30 relative z-10"
          >
            Ponerse en Contacto
          </motion.button>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default ServicesSection;
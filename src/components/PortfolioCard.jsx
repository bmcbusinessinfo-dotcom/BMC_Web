import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';

function PortfolioCard({ image, onClick }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3 }}
      className="relative group cursor-pointer overflow-hidden rounded-xl bg-gray-900 shadow-lg hover:shadow-2xl hover:shadow-orange-500/10"
      onClick={onClick}
      style={{ aspectRatio: '4/5' }} // slightly taller aspect ratio for modern feel
    >
      <img
        src={image.url}
        alt={image.title || "Portfolio Image"}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-white font-bold text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {image.title}
        </h3>
        {image.description && (
          <p className="text-gray-300 text-sm mt-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
            {image.description}
          </p>
        )}
      </div>

      {/* Icon */}
      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        <Maximize2 className="text-white w-5 h-5" />
      </div>
    </motion.div>
  );
}

export default PortfolioCard;
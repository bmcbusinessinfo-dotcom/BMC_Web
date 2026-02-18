import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const ImageModal = ({ isOpen, image, onClose, onNext, onPrev, hasNext, hasPrev }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !image) return null;

  const isMoody =
    image.section === "moody" ||
    image.description?.toLowerCase().includes("noche") ||
    image.description?.toLowerCase().includes("moody");

  const theme = isMoody
    ? { text: "from-blue-400 via-cyan-500 to-indigo-500", btn: "hover:bg-blue-600" }
    : { text: "from-orange-400 via-yellow-500 to-red-500", btn: "hover:bg-orange-600" };

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
        onClick={onClose}
      >
        {/* Botón Cerrar */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className={`fixed top-6 right-6 p-3 bg-white/10 ${theme.btn} text-white rounded-full transition-all z-[10010] backdrop-blur-md border border-white/10 group`}
        >
          <X size={24} className="group-hover:rotate-90 transition-transform" />
        </button>

        {/* Flechas Navegación - Posición absoluta respecto a la pantalla */}
        {hasPrev && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className={`fixed left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 bg-black/40 ${theme.btn} text-white rounded-full transition-all z-[10005] backdrop-blur-md border border-white/5`}
          >
            <ChevronLeft size={30} />
          </button>
        )}
        {hasNext && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className={`fixed right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 bg-black/40 ${theme.btn} text-white rounded-full transition-all z-[10005] backdrop-blur-md border border-white/5 ml-auto`}
          >
            <ChevronRight size={30} />
          </button>
        )}

        {/* CONTENEDOR CENTRAL */}
        <div
          className="relative flex flex-col items-center justify-center max-w-4xl w-full h-full pointer-events-none"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            key={image.url}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="relative pointer-events-auto flex flex-col items-center"
          >
            {/* Imagen con tamaño máximo controlado para que no empuje el texto fuera */}
            <img
              src={image.url}
              alt={image.title}
              className="max-h-[65vh] md:max-h-[70vh] w-auto object-contain rounded-xl shadow-2xl border border-white/10"
            />

            {/* Bloque de Texto centrado debajo de la imagen */}
            <div className="mt-6 text-center">
              <h3
                className={`text-3xl md:text-5xl font-black bg-gradient-to-r ${theme.text} bg-clip-text text-transparent italic tracking-tighter uppercase leading-tight`}
              >
                {image.title}
              </h3>
              <p className="text-gray-300 mt-1 text-base md:text-lg font-light tracking-widest uppercase opacity-80">
                {image.description}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export default ImageModal;

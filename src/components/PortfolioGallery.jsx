import React, { useState, useCallback, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2 } from "lucide-react";
import ImageModal from "./ImageModal";
import ScrollTriggerAnimation from "./ScrollTriggerAnimation";

// Importación de assets
import PorsheCarretera from "../assets/PorsheCarretera.webp";
import ChallengerCed from "../assets/ChallengerCed.webp";
import El from "../assets/El.webp";
import Juntos from "../assets/Juntos.webp";
import JC from "../assets/JC.webp";
import MustangCed from "../assets/MustangCed.webp";
import CamaroMoto from "../assets/CamaroMoto.webp";
import HellcatBlanco from "../assets/HellcatBlanco.webp";
import BMWAzul from "../assets/BMWAzul.webp";
import Mclaren from "../assets/Mclaren.webp";
import DarkhorseAzul from "../assets/DarkhorseAzul.webp";
import Super from "../assets/Super.webp";

// --- COMPONENTE DE TARJETA MEMOIZADO ---
const ImageCard = React.memo(({ image, index, section, style, openModal }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="relative group cursor-pointer overflow-hidden rounded-2xl bg-black border border-white/5"
    onClick={() => openModal(section, index)}
    style={{ aspectRatio: "4/5" }}
    whileHover={{ y: -10, transition: { duration: 0.3 } }}
  >
    <img
      src={image.url}
      alt={image.title}
      loading="lazy"
      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:opacity-60"
    />
    <div
      className={`absolute inset-0 bg-gradient-to-t ${style.gradient} opacity-0 group-hover:opacity-95 transition-opacity duration-500`}
    />
    <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
      <h3 className="text-white font-black text-2xl mb-2 italic uppercase tracking-tighter">
        {image.title}
      </h3>
      <p className="text-gray-200 text-sm mb-6 font-light leading-relaxed">{image.description}</p>
      <div className="flex items-center text-[10px] font-black text-white uppercase tracking-[0.2em] opacity-60">
        <Maximize2 className="w-4 h-4 mr-2" /> Expandir Captura
      </div>
    </div>
  </motion.div>
));

function PortfolioGallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [theme, setTheme] = useState("neutral");

  // --- LISTAS DE IMÁGENES ---
  const goldenHourImages = useMemo(
    () => [
      {
        url: PorsheCarretera,
        title: "German Precision",
        description: "La silueta icónica del 911 devorando kilómetros bajo un cielo de fuego.",
        section: "golden",
      },
      {
        url: ChallengerCed,
        title: "Dust & Power",
        description: "Músculo americano abriéndose paso entre la neblina dorada del campo.",
        section: "golden",
      },
      {
        url: El,
        title: "The Pilot's Break",
        description: "Un momento de calma. La conexión perfecta entre el piloto y su Corvette C7.",
        section: "golden",
      },
      {
        url: Juntos,
        title: "The Pack",
        description:
          "Caravana de exóticos liderada por el C8.R, conquistando la carretera abierta.",
        section: "golden",
      },
      {
        url: JC,
        title: "Stingray Crimson",
        description: "El Corvette C8 brillando con intensidad bajo la luz lateral perfecta.",
        section: "golden",
      },
      {
        url: MustangCed,
        title: "Sunset Stallion",
        description: "La mirada agresiva del Mustang GT bañada en tonos ámbar profundos.",
        section: "golden",
      },
    ],
    []
  );

  const moodyImages = useMemo(
    () => [
      {
        url: CamaroMoto,
        title: "Two Worlds",
        description:
          "Duelo de ingeniería: el músculo del Camaro vs. la agilidad de la Suzuki GSX-R.",
        section: "moody",
      },
      {
        url: HellcatBlanco,
        title: "Cold Predator",
        description: "El SRT Hellcat en blanco polar, destacando entre sombras y arquitectura.",
        section: "moody",
      },
      {
        url: BMWAzul,
        title: "Storm Chaser",
        description: "BMW Serie 4 bajo un cielo tormentoso, resaltando su color profundo.",
        section: "moody",
      },
      {
        url: Mclaren,
        title: "Woking's Finest",
        description: "Diseño de otro planeta. Ingeniería británica en su estado más elegante.",
        section: "moody",
      },
      {
        url: DarkhorseAzul,
        title: "Cyan Shadow",
        description: "Primer plano al Dark Horse, donde la iluminación resalta sus faros LED.",
        section: "moody",
      },
      {
        url: Super,
        title: "Urban Legend",
        description: "Reflejos de ciudad y sombras que definen a las máquinas que nunca duermen.",
        section: "moody",
      },
    ],
    []
  );

  const allImages = useMemo(
    () => [...goldenHourImages, ...moodyImages],
    [goldenHourImages, moodyImages]
  );

  // --- LÓGICA DE CONTROL ---
  useEffect(() => {
    const event = new CustomEvent("changeMood", { detail: theme });
    window.dispatchEvent(event);
  }, [theme]);

  const openModal = useCallback(
    (section, index) => {
      const trueIndex = section === "moody" ? index + goldenHourImages.length : index;
      setCurrentImageIndex(trueIndex);
      setModalOpen(true);
    },
    [goldenHourImages.length]
  );

  const handleNext = useCallback(() => {
    setCurrentImageIndex((prev) => (prev < allImages.length - 1 ? prev + 1 : prev));
  }, [allImages.length]);

  const handlePrev = useCallback(() => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  return (
    <section id="portfolio" className="relative pt-10">
      {/* CAPAS DE COLOR */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundColor: "rgba(234, 88, 12, 0.12)",
          opacity: theme === "golden" ? 1 : 0,
          transition: "opacity 1000ms ease-in-out",
          mixBlendMode: "screen",
          willChange: "opacity",
        }}
      />

      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundColor: "rgba(30, 58, 138, 0.18)",
          opacity: theme === "moody" ? 1 : 0,
          transition: "opacity 1000ms ease-in-out",
          mixBlendMode: "screen",
          willChange: "opacity",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* SECCIÓN GOLDEN HOUR */}
        <motion.div
          className="mb-20 md:mb-32"
          onViewportEnter={() => setTheme("golden")}
          onViewportLeave={() => {
            // Si el scroll está muy arriba (título), vuelve a negro
            if (window.scrollY < 200) setTheme("neutral");
          }}
          // Eliminamos el margin negativo y dejamos un amount mínimo
          viewport={{ amount: 0.1 }}
        >
          <ScrollTriggerAnimation className="mb-12 flex items-end justify-between border-b border-white/10 pb-6">
            <div>
              <h3 className="text-5xl font-black text-transparent bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text mb-2 italic uppercase tracking-tighter">
                GOLDEN HOUR
              </h3>
              <p className="text-gray-500 text-sm font-bold tracking-[0.3em] uppercase">
                Tonos Cálidos • Esencia de Atardecer
              </p>
            </div>
          </ScrollTriggerAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {goldenHourImages.map((image, index) => (
              <ImageCard
                key={image.url}
                image={image}
                index={index}
                section="golden"
                openModal={openModal}
                style={{ gradient: "from-orange-950 via-orange-900/40 to-transparent" }}
              />
            ))}
          </div>
        </motion.div>

        {/* SECCIÓN MOODY */}
        <motion.div
          className="pb-40 md:pb-64"
          onViewportEnter={() => setTheme("moody")}
          // Si regresas hacia arriba, Moody vuelve a entregarle el mando a Golden
          onViewportLeave={() => {
            if (window.scrollY > 500 && window.scrollY < 1200) setTheme("golden");
          }}
          viewport={{ amount: 0.1 }}
        >
          <ScrollTriggerAnimation className="mb-12 flex items-end justify-between border-b border-white/10 pb-6">
            <div>
              <h3 className="text-5xl font-black text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600 bg-clip-text mb-2 italic uppercase tracking-tighter">
                MOODY
              </h3>
              <p className="text-gray-500 text-sm font-bold tracking-[0.3em] uppercase">
                Tonos Fríos • Atmósfera Nocturna
              </p>
            </div>
          </ScrollTriggerAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {moodyImages.map((image, index) => (
              <ImageCard
                key={image.url}
                image={image}
                index={index}
                section="moody"
                openModal={openModal}
                style={{ gradient: "from-blue-950 via-blue-900/40 to-transparent" }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <ImageModal
        isOpen={modalOpen}
        image={allImages[currentImageIndex]}
        onClose={() => setModalOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={currentImageIndex < allImages.length - 1}
        hasPrev={currentImageIndex > 0}
      />
    </section>
  );
}

export default PortfolioGallery;

import React, { useState, useCallback, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
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

// --- TARJETA CON CARGA PROGRESIVA ---
const ImageCard = React.memo(({ image, index, section, style, openModal }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group cursor-pointer overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/5"
      onClick={() => openModal(section, index)}
      style={{ aspectRatio: "4/5" }}
    >
      {/* 1. Placeholder borroso */}
      <img
        src={image.url}
        alt="loading"
        className={`absolute inset-0 w-full h-full object-cover blur-2xl scale-110 transition-opacity duration-1000 ${isLoaded ? "opacity-0" : "opacity-30"}`}
      />

      {/* 2. Imagen HD */}
      <img
        src={image.url}
        alt={image.title}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${isLoaded ? "opacity-100" : "opacity-0"} group-hover:opacity-40`}
      />

      <div
        className={`absolute inset-0 bg-gradient-to-t ${style.gradient} opacity-0 group-hover:opacity-95 transition-opacity duration-500`}
      />

      <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
        <h3 className="text-white font-black text-2xl mb-2 italic uppercase tracking-tighter">
          {image.title}
        </h3>
        <p className="text-gray-200 text-sm mb-6 font-light">{image.description}</p>
        <div className="flex items-center text-[10px] font-black text-white uppercase tracking-[0.2em] opacity-60">
          <Maximize2 className="w-4 h-4 mr-2" /> Expandir Captura
        </div>
      </div>
    </motion.div>
  );
});

function PortfolioGallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [theme, setTheme] = useState("neutral");

  const goldenHourImages = useMemo(
    () => [
      {
        url: PorsheCarretera,
        title: "German Precision",
        description: "La silueta icónica del 911.",
        section: "golden",
      },
      {
        url: ChallengerCed,
        title: "Dust & Power",
        description: "Músculo americano en neblina dorada.",
        section: "golden",
      },
      {
        url: El,
        title: "The Pilot's Break",
        description: "Conexión piloto y Corvette C7.",
        section: "golden",
      },
      {
        url: Juntos,
        title: "The Pack",
        description: "Caravana de exóticos en carretera.",
        section: "golden",
      },
      {
        url: JC,
        title: "Stingray Crimson",
        description: "Corvette C8 bajo luz lateral.",
        section: "golden",
      },
      {
        url: MustangCed,
        title: "Sunset Stallion",
        description: "Mustang GT en tonos ámbar.",
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
        description: "Camaro vs. Suzuki GSX-R.",
        section: "moody",
      },
      {
        url: HellcatBlanco,
        title: "Cold Predator",
        description: "SRT Hellcat blanco polar.",
        section: "moody",
      },
      {
        url: BMWAzul,
        title: "Storm Chaser",
        description: "BMW Serie 4 bajo tormenta.",
        section: "moody",
      },
      {
        url: Mclaren,
        title: "Woking's Finest",
        description: "Ingeniería británica elegante.",
        section: "moody",
      },
      {
        url: DarkhorseAzul,
        title: "Cyan Shadow",
        description: "Faros LED del Dark Horse.",
        section: "moody",
      },
      {
        url: Super,
        title: "Urban Legend",
        description: "Reflejos de ciudad nocturna.",
        section: "moody",
      },
    ],
    []
  );

  const allImages = useMemo(
    () => [...goldenHourImages, ...moodyImages],
    [goldenHourImages, moodyImages]
  );

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
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000"
        style={{
          backgroundColor: "rgba(234, 88, 12, 0.12)",
          opacity: theme === "golden" ? 1 : 0,
          mixBlendMode: "screen",
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000"
        style={{
          backgroundColor: "rgba(30, 58, 138, 0.18)",
          opacity: theme === "moody" ? 1 : 0,
          mixBlendMode: "screen",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="mb-32"
          onViewportEnter={() => setTheme("golden")}
          viewport={{ amount: 0.1 }}
        >
          <ScrollTriggerAnimation className="mb-12 border-b border-white/10 pb-6">
            <h3 className="text-5xl font-black text-transparent bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text italic uppercase">
              GOLDEN HOUR
            </h3>
          </ScrollTriggerAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {goldenHourImages.map((img, i) => (
              <ImageCard
                key={i}
                image={img}
                index={i}
                section="golden"
                openModal={openModal}
                style={{ gradient: "from-orange-950 via-orange-900/40 to-transparent" }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="pb-40"
          onViewportEnter={() => setTheme("moody")}
          viewport={{ amount: 0.1 }}
        >
          <ScrollTriggerAnimation className="mb-12 border-b border-white/10 pb-6">
            <h3 className="text-5xl font-black text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600 bg-clip-text italic uppercase">
              MOODY
            </h3>
          </ScrollTriggerAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {moodyImages.map((img, i) => (
              <ImageCard
                key={i}
                image={img}
                index={i}
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

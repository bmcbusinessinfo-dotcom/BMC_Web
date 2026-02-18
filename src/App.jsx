import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalaxyBackground from "@/components/GalaxyBackground";
import EnhancedCursorTracker from "@/components/EnhancedCursorTracker";
import { Analytics } from "@vercel/analytics/react";
import InicioPage from "@/pages/InicioPage";
import PortafolioPage from "@/pages/PortafolioPage";
import SobreNosotrosPage from "@/pages/SobreNosotrosPage";
import ContactoPage from "@/pages/ContactoPage";
import SocialFeedPage from "@/pages/SocialFeedPage";

function AppContent() {
  const location = useLocation();
  // Estado para el color de la galaxia (naranja por defecto)
  const [currentMood, setCurrentMood] = useState("golden");

  // Escuchamos el evento que mandará PortfolioGallery
  useEffect(() => {
    const handleMoodChange = (e) => {
      if (e.detail) {
        setCurrentMood(e.detail);
      }
    };
    window.addEventListener("changeMood", handleMoodChange);
    return () => window.removeEventListener("changeMood", handleMoodChange);
  }, []);

  return (
    <>
      {/* 1. Fondo (Z-INDEX -50) */}
      <GalaxyBackground page={location.pathname} mood={currentMood} />

      {/* 2. Efectos visuales */}
      <EnhancedCursorTracker />
      <ScrollToTop />

      {/* 3. Estructura de la página (Z-INDEX 10) */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<InicioPage />} />
            <Route path="/portafolio" element={<PortafolioPage />} />
            <Route path="/sobre-nosotros" element={<SobreNosotrosPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="/social-feed" element={<SocialFeedPage />} />
          </Routes>
        </main>

        <Footer />
      </div>

      <Toaster />
      <Analytics />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;

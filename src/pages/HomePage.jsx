import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PortfolioGallery from '@/components/PortfolioGallery';
import PhilosophySection from '@/components/PhilosophySection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Break My Comfort - Automotive Cinematography & Photography</title>
        <meta
          name="description"
          content="Professional automotive cinematography and photography services. We transform your passion into art with moody and golden hour photoshoots. Not generic content. An experience."
        />
      </Helmet>

      <div className="bg-black">
        <Header />
        <HeroSection />
        <PortfolioGallery />
        <PhilosophySection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
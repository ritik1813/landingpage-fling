import React from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import VisionSection from './components/VisionSection.jsx';
import FeaturesSection from './components/FeaturesSection.jsx';
import CTASection from './components/CTASection.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton';
import JoinForm from './components/JoinForm';
// Rest of the file remains the same
function App() {
  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <VisionSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
       
      <WhatsAppButton />
    </div>
  );
}

export default App;
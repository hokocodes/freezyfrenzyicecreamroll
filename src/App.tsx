import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import WishingWall from './components/WishingWall';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HotBeveragePopup from './components/HotBeveragePopup';
import NutritionalFacts from './components/NutritionalFacts';

function App() {
  const [isNutritionalFactsOpen, setIsNutritionalFactsOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <HotBeveragePopup />
      <NutritionalFacts 
        isOpen={isNutritionalFactsOpen} 
        onClose={() => setIsNutritionalFactsOpen(false)} 
      />
      <Header />
      <Hero />
      <Menu />
      <About />
      <WishingWall />
      <Gallery />
      <Contact />
      <Footer onShowNutritionalFacts={() => setIsNutritionalFactsOpen(true)} />
    </div>
  );
}

export default App;
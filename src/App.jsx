import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import ScrollWrapper from './components/common/ScrollWrapper';
import BackgroundBlobs from './components/common/BackgroundBlobs';
import ThemeToggle from './components/common/ThemeToggle';
import Preloader from './components/sections/Preloader';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import Navigation from './components/common/Navigation';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ScrollWrapper>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className="min-h-screen relative overflow-hidden transition-colors duration-300">
        <BackgroundBlobs />

        {!isLoading && <Navigation />}

        <main className="max-w-7xl mx-auto space-y-20 pb-20">
          <div id="hero"><Hero /></div>
          <div id="about"><About /></div>
          <div id="skills"><Skills /></div>
          <div id="projects"><Projects /></div>
          <div id="experience"><Experience /></div>
          <div id="contact"><Contact /></div>
        </main>

        {!isLoading && <Footer />}
      </div>
    </ScrollWrapper>
  );
}

export default App;

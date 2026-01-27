import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/common/Loader';
import Navigation from './components/common/Navigation';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Footer from './components/common/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loader onLoaded={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-gray-900 dark:text-white font-sans transition-colors duration-300">
          <Navigation />
          <main>
            <Hero />
            <Skills />
            <Education />
            <Experience />
            <Projects />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;

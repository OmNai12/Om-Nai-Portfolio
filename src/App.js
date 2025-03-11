import Layout from './components/Layout';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';

function App() {
  return (
    <Layout>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Footer />
      <ScrollToTop />
    </Layout>
  );
}

export default App;


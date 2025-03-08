import Layout from './components/Layout';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <Layout>
      <Hero />
      <Skills />
      <Education />
      <Experience />
      <Projects />
    </Layout>
  );
}

export default App;


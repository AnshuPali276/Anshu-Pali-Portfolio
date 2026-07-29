import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Services from "./sections/Services";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Education />
      <Certifications/>
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
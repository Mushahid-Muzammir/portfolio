import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import Navbar from "./components/navbar";
import Gallery from './components/homepage/project-gallery'
import 'react-image-lightbox/style.css';

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <Navbar />
      <HeroSection />
      <Education />
      <Experience />
      <Projects />
      <Gallery />
      <Skills />
      <ContactSection />
    </div>
  );
}

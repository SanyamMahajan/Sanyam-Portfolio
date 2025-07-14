import About from "./sections/About";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import Volunteer from "./sections/Volunteer";
import Education from "./sections/Education";

import Navbar from "./components/NavBar";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />               {/* Home */}
      <About />              {/* About */}
      <TechStack />          {/* Skills */}
      <ShowcaseSection />    {/* Projects */}
      <Experience />
      <Education />
      <Volunteer />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

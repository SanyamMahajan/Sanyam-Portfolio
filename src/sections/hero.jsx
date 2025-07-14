import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

import AnimatedCounter from "../components/AnimatedCounter";
import { words } from "../constants";

// Define a new component for the new GLB model (temporary inline definition)
const NewHeroExperience = ({ scale, position }) => {
  // Load the new GLB model
  const { scene } = useGLTF("/models/study_room.glb");

  return (
    <primitive
      object={scene}
      scale={scale} // Dynamically passed scale based on screen size
      position={position} // Dynamically passed position based on screen size
      rotation={[0, 0, 0]} // Keep rotation neutral; adjust if orientation is off
    />
  );
};

// Optionally preload the model for better performance
useGLTF.preload("/models/study_room.glb");

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [modelScale, setModelScale] = useState([0.5, 0.5, 0.5]);
  const [modelPosition, setModelPosition] = useState([0, -1, 0]);

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  // Adjust model size and position based on screen width for responsiveness
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        // Mobile: Smaller scale and adjusted position to prevent overlap
        setModelScale([0.3, 0.3, 0.3]);
        setModelPosition([0, -0.5, 0]);
      } else if (width < 1024) {
        // Tablet: Medium scale
        setModelScale([0.4, 0.4, 0.4]);
        setModelPosition([0, -0.8, 0]);
      } else {
        // Desktop: Default scale
        setModelScale([0.5, 0.5, 0.5]);
        setModelPosition([0, -1, 0]);
      }
    };

    // Initial adjustment on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("mahajansanyam07@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Shows "Copied!" for 2 seconds
  };

  return (
    <section id="home" className="relative overflow-hidden">

      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-5 md:gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl text-base relative z-10 pointer-events-none">
              Hi, I’m Sanyam Mahajan, a developer based in Punjab, India with a passion for creating impactful solutions.
            </p>

            {/* Social Links inspired by Deepak Modi's layout */}
            <div className="flex flex-wrap gap-2 md:gap-4 mt-4 justify-center md:justify-start">
              <a
                href="https://github.com/SanyamMahajan"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black-50 bg-black-100 p-2 rounded-xl transition-all duration-500 hover:bg-black-50 cursor-pointer"
                aria-label="GitHub Profile"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                  alt="GitHub"
                  className="w-6 h-6 filter invert"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/sanyammahajan07/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black-50 bg-black-100 p-2 rounded-xl transition-all duration-500 hover:bg-black-50 cursor-pointer"
                aria-label="LinkedIn Profile"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://www.instagram.com/sanyammahajan_07/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black-50 bg-black-100 p-2 rounded-xl transition-all duration-500 hover:bg-black-50 cursor-pointer"
                aria-label="Instagram Profile"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://wa.me/917888720267"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black-50 bg-black-100 p-2 rounded-xl transition-all duration-500 hover:bg-black-50 cursor-pointer"
                aria-label="WhatsApp Contact"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="w-6 h-6"
                />
              </a>
              <div
                onClick={handleEmailCopy}
                className="border border-black-50 bg-black-100 p-2 rounded-xl transition-all duration-500 hover:bg-black-50 cursor-pointer relative"
                aria-label="Copy Email Address"
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gmail.svg"
                  alt="Email"
                  className="w-6 h-6 filter invert"
                />
                {copied && (
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black-200 text-white text-sm px-2 py-1 rounded-lg">
                    Copied!
                  </span>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual - Responsive Model Size and Position */}
        <figure className="flex-1 w-full" style={{ zIndex: 5 }}>

          <div className="hero-3d-layout" style={{ maxHeight: '100vh', overflow: 'hidden' }}>
            <Canvas style={{ width: '100%', height: '100%' }}>
              <ambientLight intensity={0.8} />
              <directionalLight position={[0, 10, 5]} intensity={1.5} />
              <NewHeroExperience scale={modelScale} position={modelPosition} />
              {/* Enabled zooming and rotation for interactive experience */}
              <OrbitControls 
                enableZoom={true} 
                enablePan={false} 
                enableRotate={true} 
                maxDistance={5} // Limits how far you can zoom out
                minDistance={1} // Limits how close you can zoom in
              />
            </Canvas>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
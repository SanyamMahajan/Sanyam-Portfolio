import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const visionaryHubRef = useRef(null);
  const disasterManagementRef = useRef(null);
  const trainingBlogRef = useRef(null);
  const ticketGeneratorRef = useRef(null);
  const recipeRandomizerRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each project showcase card
    const cards = [
      visionaryHubRef.current,
      disasterManagementRef.current,
      trainingBlogRef.current,
      ticketGeneratorRef.current,
      recipeRandomizerRef.current,
    ];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="app-showcase text-white">
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">My Projects</h2>
        <div className="grid-3-cols gap-6 md:gap-6">
          {/* VisionaryHub */}
          <div
            ref={visionaryHubRef}
            className="bg-black-100 border border-black-50 rounded-xl overflow-hidden card transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="image-wrapper h-48 md:h-48 lg:h-56 relative rounded-t-xl py-0 overflow-hidden">
              <img
                src="/images/logos/visionaryhub.jpeg"
                alt="VisionaryHub"
                className="w-full h-full object-cover rounded-t-xl transition-all duration-500"
              />
            </div>
            <div className="p-5 md:p-5 lg:p-6">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg md:text-xl lg:text-xl font-semibold">VisionaryHub</h2>
                <a
                  href="https://github.com/SanyamMahajan/VisionaryHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white-50 hover:text-white transition-colors duration-300"
                  aria-label="View VisionaryHub on GitHub"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                    alt="GitHub"
                    className="w-5 h-5 filter invert"
                  />
                </a>
              </div>
              <p className="text-gray-300 mb-3 text-sm md:text-base lg:text-base">
                A full-stack startup guidance platform with an AI-powered chatbot for user support using OpenAI API.
              </p>
              <div className="badges flex flex-wrap gap-1 mb-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-4 h-4" title="JavaScript" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-4 h-4" title="HTML5" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-4 h-4" title="React" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-4 h-4" title="Node.js" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" className="w-4 h-4 filter invert" title="Express.js" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-4 h-4" title="MongoDB" />
                <img src="/images/logos/tailwind.png" alt="Tailwind CSS" className="w-4 h-4" title="Tailwind CSS" />
              </div>
            </div>
          </div>

          {/* Disaster Management */}
          <div
            ref={disasterManagementRef}
            className="bg-black-100 border border-black-50 rounded-xl overflow-hidden card transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="image-wrapper h-48 md:h-48 lg:h-56 relative rounded-t-xl py-0 overflow-hidden">
              <img
                src="/images/logos/disaster.jpg"
                alt="Disaster Management"
                className="w-full h-full object-cover rounded-t-xl transition-all duration-500"
              />
            </div>
            <div className="p-5 md:p-5 lg:p-6">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg md:text-xl lg:text-xl font-semibold">Disaster Management</h2>
                <a
                  href="https://github.com/SanyamMahajan/Disaster-Management"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white-50 hover:text-white transition-colors duration-300"
                  aria-label="View Disaster Management on GitHub"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                    alt="GitHub"
                    className="w-5 h-5 filter invert"
                  />
                </a>
              </div>
              <p className="text-gray-300 mb-3 text-sm md:text-base lg:text-base">
                A web app for real-time disaster tracking and response, ensuring quick access to critical information.
              </p>
              <div className="badges flex flex-wrap gap-1 mb-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-4 h-4" title="JavaScript" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-4 h-4" title="HTML5" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-4 h-4" title="CSS3" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-4 h-4" title="React" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-4 h-4" title="Python" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-4 h-4" title="MongoDB" />
              </div>
            </div>
          </div>

          {/* Training Blog */}
          <div
            ref={trainingBlogRef}
            className="bg-black-100 border border-black-50 rounded-xl overflow-hidden card transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="image-wrapper h-48 md:h-48 lg:h-56 relative rounded-t-xl py-0 overflow-hidden">
              <img
                src="/images/logos/training%20.jpg"
                alt="Training Blog"
                className="w-full h-full object-cover rounded-t-xl transition-all duration-500"
              />
            </div>
            <div className="p-5 md:p-5 lg:p-6">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg md:text-xl lg:text-xl font-semibold">Training Blog</h2>
                <a
                  href="https://github.com/SanyamMahajan/TRAINING-BLOG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white-50 hover:text-white transition-colors duration-300"
                  aria-label="View Training Blog on GitHub"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                    alt="GitHub"
                    className="w-5 h-5 filter invert"
                  />
                </a>
              </div>
              <p className="text-gray-300 mb-3 text-sm md:text-base lg:text-base">
                A dynamic blogging platform designed to share training resources, insights, and updates.
              </p>
              <div className="badges flex flex-wrap gap-1 mb-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-4 h-4" title="JavaScript" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-4 h-4" title="HTML5" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-4 h-4" title="CSS3" />
              </div>
            </div>
          </div>

          {/* Ticket Generator */}
          <div
            ref={ticketGeneratorRef}
            className="bg-black-100 border border-black-50 rounded-xl overflow-hidden card transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="image-wrapper h-48 md:h-48 lg:h-56 relative rounded-t-xl py-0 overflow-hidden">
              <img
                src="/images/logos/ticketgenrator.webp"
                alt="Ticket Generator"
                className="w-full h-full object-cover rounded-t-xl transition-all duration-500"
              />
            </div>
            <div className="p-5 md:p-5 lg:p-6">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg md:text-xl lg:text-xl font-semibold">Ticket Generator</h2>
                <a
                  href="https://github.com/SanyamMahajan/Ticket-Generator-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white-50 hover:text-white transition-colors duration-300"
                  aria-label="View Ticket Generator on GitHub"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                    alt="GitHub"
                    className="w-5 h-5 filter invert"
                  />
                </a>
              </div>
              <p className="text-gray-300 mb-3 text-sm md:text-base lg:text-base">
                A simple web application to generate tickets dynamically for events or systems.
              </p>
              <div className="badges flex flex-wrap gap-1 mb-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-4 h-4" title="JavaScript" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-4 h-4" title="HTML5" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-4 h-4" title="CSS3" />
              </div>
            </div>
          </div>

          {/* Recipe Randomizer */}
          <div
            ref={recipeRandomizerRef}
            className="bg-black-100 border border-black-50 rounded-xl overflow-hidden card transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="image-wrapper h-48 md:h-48 lg:h-56 relative rounded-t-xl py-0 overflow-hidden">
              <img
                src="/images/logos/recepie.jpeg"
                alt="Recipe Randomizer"
                className="w-full h-full object-cover rounded-t-xl transition-all duration-500"
              />
            </div>
            <div className="p-5 md:p-5 lg:p-6">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg md:text-xl lg:text-xl font-semibold">Recipe Randomizer</h2>
                <a
                  href="https://github.com/SanyamMahajan/Recipe-Randomizer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white-50 hover:text-white transition-colors duration-300"
                  aria-label="View Recipe Randomizer on GitHub"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                    alt="GitHub"
                    className="w-5 h-5 filter invert"
                  />
                </a>
              </div>
              <p className="text-gray-300 mb-3 text-sm md:text-base lg:text-base">
                A fun web app that suggests random meal ideas with a clean, interactive UI.
              </p>
              <div className="badges flex flex-wrap gap-1 mb-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-4 h-4" title="JavaScript" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-4 h-4" title="HTML5" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-4 h-4" title="CSS3" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-4 h-4" title="React" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
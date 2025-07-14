import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const techStackData = [
  { name: "C", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", docLink: "https://developer.mozilla.org/en-US/docs/Web/C" },
  { name: "C++", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", docLink: "https://developer.mozilla.org/en-US/docs/Web/C++" },
  { name: "Python", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", docLink: "https://developer.mozilla.org/en-US/docs/Glossary/Python" },
  { name: "JavaScript", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", docLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "TypeScript", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", docLink: "https://developer.mozilla.org/en-US/docs/Glossary/TypeScript" },
  { name: "HTML5", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", docLink: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS3", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", docLink: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "LaTeX", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg", docLink: "https://www.overleaf.com/learn" },
  { name: "React", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", docLink: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_overview" },
  { name: "Node.js", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", docLink: "https://developer.mozilla.org/en-US/docs/Glossary/Node.js" },
  { name: "Express.js", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", docLink: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs" },
  { name: "Flask", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", docLink: "https://flask.palletsprojects.com/en/stable/" },
  { name: "Bootstrap", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", docLink: "https://getbootstrap.com/docs/5.3/getting-started/introduction/" },
  { name: "Tailwind CSS", imgPath: "/images/logos/tailwind.png", docLink: "https://tailwindcss.com/docs" },
  { name: "MongoDB", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", docLink: "https://www.mongodb.com/docs/" },
  { name: "Windows Terminal", imgPath: "/images/logos/windowsterminal.jpeg", docLink: "https://learn.microsoft.com/en-us/windows/terminal/" },
  { name: "Vercel", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", docLink: "https://vercel.com/docs" },
  { name: "Netlify", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg", docLink: "https://docs.netlify.com/" },
  { name: "Figma", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", docLink: "https://help.figma.com/hc/en-us" },
  { name: "Canva", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg", docLink: "https://www.canva.com/help/" },
];

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#skills",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  return (
    <section 
      id="skills" 
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 Technologies & Tools I Use"
        />
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {techStackData.map((tech, index) => (
            <a
              key={index}
              href={tech.docLink}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-card relative overflow-hidden rounded-2xl transition-all duration-300 group"
              aria-label={`Learn more about ${tech.name}`}
              style={{
                background: 'rgba(139, 92, 246, 0.1)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
              }}
            >
              {/* Gradient background on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)',
                }}
              />
              
              {/* Animated border gradient */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
                  padding: '2px',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  borderRadius: '1rem',
                }}
              />
              
              {/* Card content */}
              <div className="relative z-10 flex flex-col items-center justify-center p-6 h-40 md:h-48">
                {/* Tech icon */}
                <div className="w-16 h-16 md:w-20 md:h-20 mb-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={tech.imgPath}
                    alt={tech.name}
                    className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-110"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/80x80?text=" + tech.name.charAt(0);
                    }}
                  />
                </div>
                {/* Tech name */}
                <p className="text-base md:text-lg font-semibold text-center text-white-50 group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </p>
              </div>
              
              {/* Glow effect */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const educationCards = [
  {
    logoPath: "/images/logos/gndec_new_0.png",
    degree: "B.Tech in Computer Science Engineering",
    institution: "Guru Nanak Dev Engineering College",
    location: "Ludhiana, Punjab",
    date: "2023 - 2027",
    score: "CGPA: 8.32",
    achievements: [
      "Pursuing Bachelor's degree with focus on software development and computer systems.",
      "Maintaining strong academic performance with consistent CGPA above 8.0.",
      "Active participation in technical clubs and coding competitions.",
    ],
  },
  {
    logoPath: "/images/logos/govt.jpeg",
    degree: "Senior Secondary (XII)",
    institution: "Government Senior Secondary School",
    location: "Dinanagar, Punjab",
    date: "2022 - 2023",
    score: "Score: 89%",
    achievements: [
      "Completed higher secondary education with Science stream (PCM).",
      "Achieved 89% in board examinations.",
      "Participated in various academic and co-curricular activities.",
    ],
  },
  {
    logoPath: "/images/logos/dav.jpeg",
    degree: "Secondary (X)",
    institution: "S.S.DAV Senior Secondary School",
    location: "Dinanagar, Punjab",
    date: "2020 - 2021",
    score: "Score: 100%",
    achievements: [
      "Achieved perfect score of 100% in board examinations.",
      "Received academic excellence award for outstanding performance.",
      "Actively participated in school competitions and events.",
    ],
  },
];

const Education = () => {
  useGSAP(() => {
    // Text fade-in animation
    gsap.utils.toArray(".edu-text").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    // Line reveal animation
    gsap.utils.toArray(".edu-timeline-animated").forEach((timeline) => {
      gsap.set(timeline, { scaleY: 1, transformOrigin: "top center" });
      gsap.to(timeline, {
        scaleY: 0,
        ease: "none",
        scrollTrigger: {
          trigger: timeline,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });
    });
  }, { scope: "#education" });

  return (
    <section
      id="education"
      className="flex-center md:mt-40 mt-10 section-padding w-full"
    >
      <div className="w-full h-full px-4 sm:px-6">
        <TitleHeader
          title="Education"
          sub="📚 My Academic Journey"
        />
        <div className="mt-12 md:mt-20 relative">
          {educationCards.map((card, index) => {
            const isLastCard = index === educationCards.length - 1;
            const isReversed = index % 2 !== 0;

            return (
              <div key={card.degree} className="flex flex-col items-center mb-12 md:mb-20">
                {/* Main Container for Card Content (Handles Zigzag) */}
                <div className="flex flex-col lg:flex-row lg:justify-between w-full max-w-5xl lg:items-center">
                  {/* --- Text Content --- */}
                  <div
                    className={`edu-text w-full lg:w-5/12 p-4 flex flex-col items-center text-center ${
                      isReversed ? "lg:order-3 lg:items-start lg:text-left" : "lg:order-1 lg:items-end lg:text-right"
                    }`}
                  >
                    <div className="max-w-md">
                      <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">{card.degree}</h3>
                      <p className="text-sm md:text-base text-white-50">{card.institution}</p>
                      <p className="text-xs md:text-sm text-white-50">{card.location}</p>
                      <p className="my-2 text-xs md:text-sm text-white-50">🗓️ {card.date}</p>
                      <p className="text-lg md:text-xl font-semibold text-[#4ADE80]">{card.score}</p>
                      <p className="text-[#839CB5] italic mt-2 md:mt-5 text-xs md:text-sm">Key Highlights</p>
                      <ul className="list-disc ms-5 mt-2 md:mt-5 flex flex-col gap-3 md:gap-5 text-white-50 text-xs md:text-sm">
                        {card.achievements.map((a, i) => (
                          <li key={i}>{a}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* --- Desktop: Middle Logo & Spacer --- */}
                  <div className="hidden lg:flex w-2/12 order-2 justify-center">
                    <img
                      src={card.logoPath}
                      alt="logo"
                      className="w-12 h-12 md:w-16 md:h-16 object-contain border-2 border-white bg-white rounded-full shadow-md"
                    />
                  </div>
                  <div className={`hidden lg:block w-5/12 ${isReversed ? 'lg:order-1' : 'lg:order-3'}`}></div>
                </div>

                {/* --- Mobile Logo & Timeline Connector --- */}
                {!isLastCard && (
                  <div className="flex flex-col items-center w-full -my-4">
                    {/* Mobile Logo: Always visible on mobile, hidden on desktop */}
                    <div className="lg:hidden z-10 mt-4">
                      <img
                        src={card.logoPath}
                        alt="logo"
                        className="w-12 h-12 md:w-16 md:h-16 object-contain border-2 border-white bg-white rounded-full shadow-md"
                      />
                    </div>
                    {/* Line Connector */}
                    <div className="relative h-40 w-[2px] -my-8">
                      <div className="gradient-line w-full h-full"></div>
                      <div className="edu-timeline-animated bg-black w-full h-full absolute top-0"></div>
                    </div>
                  </div>
                )}

                {/* --- RENDER LAST LOGO ON MOBILE --- */}
                {isLastCard && (
                  <div className="lg:hidden mt-4 z-10">
                    <img
                      src={card.logoPath}
                      alt="logo"
                      className="w-12 h-12 md:w-16 md:h-16 object-contain border-2 border-white bg-white rounded-full shadow-md"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
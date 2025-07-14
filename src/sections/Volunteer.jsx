import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const volunteerCards = [
  {
    logoPath: "/images/logos/causmic.jpeg",
    title: "Core Team Member: Causmic Club",
    organization: "Guru Nanak Dev Engineering College, Ludhiana",
    date: "June 2024 - Present",
    responsibilities: [
      "Actively involved in organizing technical events and workshops for students.",
      "Coordinating with team members to ensure smooth execution of club activities.",
    ],
  },
  {
    logoPath: "/images/logos/ambit.jpeg",
    title: "Core Team Member: Ambit Youth Parliament",
    organization: "Guru Nanak Dev Engineering College, Ludhiana",
    date: "January 2025 - Present",
    responsibilities: [
      "Participating in organizing debates and youth parliament sessions.",
      "Contributing to promoting leadership and public speaking skills among students.",
    ],
  },
  {
    logoPath: "/images/logos/trainingp.jpeg",
    title: "Executive Member: Training and Placement Cell",
    organization: "Guru Nanak Dev Engineering College, Ludhiana",
    date: "May 2025 - Present",
    responsibilities: [
      "Assisting in coordinating campus recruitment drives and placement activities.",
      "Helping students with interview preparation and career guidance.",
    ],
  },
];

const Volunteer = () => {
  useGSAP(() => {
    // Text fade-in animation
    gsap.utils.toArray(".vol-text").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 80%", // Changed from 85% to 80%
          toggleActions: "play none none none",
        },
      });
    });

    // Line reveal animation
    gsap.utils.toArray(".vol-timeline-animated").forEach((timeline) => {
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
  }, { scope: "#volunteer" });

  return (
    <section
      id="volunteer"
      className="flex-center md:mt-40 mt-10 section-padding w-full"
    >
      <div className="w-full h-full px-4 sm:px-6">
        <TitleHeader
          title="Volunteer Experience"
          sub="🤝 My Leadership & Community Involvement"
        />
        <div className="mt-12 md:mt-20 relative">
          {volunteerCards.map((card, index) => {
            const isLastCard = index === volunteerCards.length - 1;
            const isReversed = index % 2 !== 0;

            return (
              <div key={card.title} className="flex flex-col items-center mb-12 md:mb-20">
                {/* Main Container for Card Content (Handles Zigzag) */}
                <div className="flex flex-col lg:flex-row lg:justify-between w-full max-w-5xl lg:items-center">
                  {/* --- Text Content --- */}
                  <div
                    className={`vol-text w-full lg:w-5/12 p-4 flex flex-col items-center text-center ${
                      isReversed ? "lg:order-3 lg:items-start lg:text-left" : "lg:order-1 lg:items-end lg:text-right"
                    }`}
                  >
                    <div className="max-w-md">
                      <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">{card.title}</h3>
                      <p className="text-sm md:text-base text-white-50">{card.organization}</p>
                      <p className="my-2 text-xs md:text-sm text-white-50">🗓️ {card.date}</p>
                      <p className="text-[#839CB5] italic text-xs md:text-sm">Responsibilities</p>
                      <ul className="list-disc mt-2 flex flex-col gap-3 text-white-50 text-xs md:text-sm marker:text-[#839CB5] text-left self-center lg:self-auto w-fit">
                        {card.responsibilities.map((r, i) => (
                          <li key={i} className="ml-5">{r}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* --- Desktop: Middle Logo & Spacer --- */}
                  <div className="hidden lg:flex w-2/12 order-2 justify-center">
                    <img
                      src={card.logoPath}
                      alt={`${card.title} logo`}
                      className="w-16 h-16 md:w-20 md:h-20 object-contain border-2 border-white bg-white rounded-full shadow-md"
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
                        alt={`${card.title} logo`}
                        className="w-12 h-12 md:w-16 md:h-16 object-contain border-2 border-white bg-white rounded-full shadow-md"
                      />
                    </div>
                    {/* Line Connector */}
                    <div className="relative h-40 w-[2px] -my-8">
                      <div className="gradient-line w-full h-full"></div>
                      <div className="vol-timeline-animated bg-black w-full h-full absolute top-0"></div>
                    </div>
                  </div>
                )}

                {/* --- RENDER LAST LOGO ON MOBILE --- */}
                {isLastCard && (
                  <div className="lg:hidden mt-4 z-10">
                    <img
                      src={card.logoPath}
                      alt={`${card.title} logo`}
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

export default Volunteer;
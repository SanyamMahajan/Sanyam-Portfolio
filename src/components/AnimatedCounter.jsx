import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

// Temporary counterItems data based on your portfolio (replace with your constants)
const counterItems = [
  { value: 4, suffix: "", label: "Projects Completed" },
  { value: 8, suffix: "+", label: "Technologies Mastered" },
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 400, suffix: "+", label: "Students Impacted" },
];

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(() => {
    countersRef.current.forEach((counter, index) => {
      const numberElement = counter.querySelector(".counter-number");
      const item = counterItems[index];

      // Set initial value to 0
      gsap.set(numberElement, { innerText: "0" });

      // Create the counting animation
      gsap.to(numberElement, {
        innerText: item.value,
        duration: 2.5,
        ease: "power2.out",
        snap: { innerText: 1 }, // Ensures whole numbers
        scrollTrigger: {
          trigger: "#counter",
          start: "top 70%", // Trigger slightly before center for better visibility
          toggleActions: "play none none reset", // Reset on leave for repeat viewing
        },
        // Add the suffix after counting is complete
        onComplete: () => {
          numberElement.textContent = `${item.value}${item.suffix}`;
        },
      });
    });
  }, []);

  return (
    <section id="counter" ref={counterRef} className="padding-x-lg mt-responsive">
      <div className="mx-auto grid-4-cols gap-4 xl:gap-7">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => el && (countersRef.current[index] = el)}
            className="card-border rounded-xl p-6 md:p-8 xl:p-10 flex flex-col justify-center items-center text-center"
          >
            <div className="counter-number text-3xl md:text-4xl xl:text-5xl font-bold mb-2 text-[var(--color-white-50)]">
              0{item.suffix}
            </div>
            <div className="text-base md:text-lg text-[var(--color-white-50)]">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedCounter;
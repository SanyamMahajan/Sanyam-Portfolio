import React from "react";

const About = () => {
  // Rotate image on mouse movement for a 3D tilt effect
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Limit rotation angles for a subtle effect (adjust divisor for more/less tilt)
    const rotateX = (-y / 25).toFixed(2); // Reduced from 20 to 25 for subtler tilt
    const rotateY = (x / 25).toFixed(2);

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e) => {
    // Reset transform when mouse leaves
    e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <section
      id="about"
      className="py-20 bg-gray-950 text-gray-200 px-4 md:px-12"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        About Me
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Profile Image with Rotation */}
        <div
          className="transition-transform duration-300 ease-out transform-gpu mx-auto w-72 h-72 md:w-[20rem] md:h-[20rem] rounded-xl overflow-hidden shadow-lg"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)" }} // Initial transform for 3D effect
        >
          <img
            src="/images/logos/sanyam3.jpg" // Updated to your provided path
            alt="Sanyam Mahajan"
            className="object-cover w-full h-full"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/images/default-profile.jpg"; // Fallback image if path fails
            }}
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6 text-lg md:text-xl leading-relaxed">
          <p>
            Hello! I’m <strong className="text-white">Sanyam Mahajan</strong>, a
            passionate Full Stack Developer and second-year B.Tech CSE student
            at Guru Nanak Dev Engineering College, Ludhiana, with a CGPA of 8.28.
          </p>
          <p>
            I specialize in building user-centric applications using the{" "}
            <strong>MERN stack</strong> (MongoDB, Express.js, React, Node.js)
            and tools like Python, JavaScript, Tailwind CSS, and more.
          </p>
          <p>
            I'm an <strong>Executive Member</strong> of our college’s{" "}
            <strong>Training and Placement Cell</strong>, where I assist in
            streamlining placements and industry interactions. I also contribute
            as a core member of tech and youth parliament clubs, organizing
            impactful events like GNE APEX 2024.
          </p>
          <p>
            One of my key projects is{" "}
            <strong>VisionaryHub</strong>, a startup guidance platform with AI
            integration to connect founders with mentors.
          </p>
          <p>
            I love solving real-world problems through code and continuously
            push myself to learn, lead, and innovate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
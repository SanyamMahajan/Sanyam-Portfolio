import { useState, useEffect } from "react";

// Updated navigation links with Volunteer included
const navLinks = [
  { link: "#home", name: "Home" },
  { link: "#about", name: "About" },
  { link: "#skills", name: "Skills" },
  { link: "#projects", name: "Projects" },
  { link: "#experience", name: "Experience" },
  { link: "#education", name: "Education" },
  { link: "#volunteer", name: "Volunteer" }, // ✅ ADDED
  { link: "#contact", name: "Contact Me" },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner container mx-auto">
        <a href="#home" className="logo">
          Sanyam Mahajan
        </a>

        {/* Desktop nav */}
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden focus:outline-none text-white"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile nav list */}
      <nav
        className={`mobile md:hidden ${
          mobileMenuOpen ? "block" : "hidden"
        } bg-black px-5 py-3 transition-all duration-300`}
      >
        <ul className="flex flex-col space-y-3">
          {navLinks.map(({ link, name }) => (
            <li key={name}>
              <a
                href={link}
                className="text-base font-medium text-[var(--color-white-50)] hover:text-white transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;

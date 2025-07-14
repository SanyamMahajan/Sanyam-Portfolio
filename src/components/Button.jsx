/**
 * A reusable CTA button component.
 * When clicked, it scrolls smoothly to a specified section ID with an offset for better visual placement.
 * Can also function as a regular button or link if no target ID is provided.
 */
const Button = ({ text, className, targetId, onClick }) => {
  // Handle click for smooth scrolling if targetId is provided
  const handleScroll = (e) => {
    e.preventDefault(); // Prevent default anchor jump behavior

    if (targetId) {
      const target = document.getElementById(targetId); // Find the target section by ID
      if (target) {
        const offset = window.innerHeight * 0.15; // Leave space at the top (15% of viewport height)
        const top =
          target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" }); // Scroll smoothly to position
      }
    }

    // Call additional onClick handler if provided
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a
      href={targetId ? `#${targetId}` : "#"} // Add href for accessibility and fallback
      onClick={handleScroll}
      className={`${className || ""} cta-wrapper`} // Apply base class + optional custom class
      role="button" // Improve accessibility by indicating this is a button
      aria-label={text} // Add label for screen readers
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="Arrow icon" />
        </div>
      </div>
    </a>
  );
};

export default Button;
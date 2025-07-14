const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container grid md:grid-cols-3 grid-cols-1 gap-4 p-4 text-center md:text-left">
        {/* Terms */}
        <div className="flex flex-col justify-center">
          <p className="text-sm">Terms & Conditions</p>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-4">
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
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-center">
          <p className="text-sm text-center md:text-end">
            © {new Date().getFullYear()} Sanyam Mahajan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2026 Santosh Gupta. All rights reserved.</p>

        <div className="footer-links">
          <a
            href="https://github.com/Santoshgupta1619"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/santosh-gupta-8285a738b"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://x.com/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>

          <a href="#home" className="back-to-top">
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


import profileImage from "../assets/profile.jpeg"


function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="availability">
          <span className="availability-dot"></span>
          Available for opportunities
        </div>

        <p className="hero-greeting">Hello, I'm</p>

        <h1>Santosh Gupta</h1>

        <h2>
          MCA Student & <span>Full Stack Developer</span>
        </h2>

        <p className="hero-description">
          I build modern, responsive and user-friendly web applications
          using Java, JavaScript, React, Node.js and MongoDB.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View My Work
          </a>

          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>

          <a
  href="/Santosh-Gupta-Resume.pdf"
  className="btn resume-btn"
  target="_blank"
  rel="noreferrer"
>
  Download Resume
</a>
        </div>
        <div className="hero-socials">
  <a
    href="https://github.com/Santoshgupta1619"
    target="_blank"
    rel="noreferrer"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/santosh-gupta-8285a738b"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn
  </a>

  <a
    href="https://leetcode.com/u/SantoshGupta007/"
    target="_blank"
    rel="noreferrer"
  >
    LeetCode
  </a>
</div>
      </div>

      <div className="hero-image">
  <img
    src={profileImage}
    alt="Santosh Gupta"
    className="profile-image"
  />
</div>
    </section>
  );
}

export default Hero;
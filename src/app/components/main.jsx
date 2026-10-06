import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";

const heroSkills = ["React", "TypeScript", "Go", "Node.js", "PostgreSQL"];

export default function Main() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid-glow" />
      <div className="shell hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">FULL-STACK SOFTWARE DEVELOPER</p>
          <h1>Vini Berger</h1>
          <p className="hero-lead">
            I build production-ready web applications, APIs, integrations, and business systems with a focus on clean architecture, reliability, and maintainability.
          </p>

          <div className="hero-tags" aria-label="Primary technologies">
            {heroSkills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View my work <FiArrowDownRight aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="https://github.com/ViniciusBerger" target="_blank" rel="noreferrer">
              GitHub <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/ViniciusBerger" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/vini-berger/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="mailto:viniciuscla2015@gmail.com">viniciuscla2015@gmail.com</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Preview of FIXD project dashboard">
          <div className="browser-window browser-window--hero">
            <div className="browser-topbar">
              <span /><span /><span />
              <div>fixdbike.com</div>
            </div>
            <div className="browser-image-wrap">
              <Image src="/images/fixd.png" alt="FIXD dashboard interface" fill priority sizes="(max-width: 960px) 92vw, 48vw" />
            </div>
          </div>
          <div className="floating-card floating-card--top">
            <span className="status-dot" />
            <div>
              <strong>Production</strong>
              <small>Live system</small>
            </div>
          </div>
          <div className="floating-card floating-card--bottom">
            <strong>~95%</strong>
            <small>backend coverage</small>
          </div>
        </div>
      </div>
    </section>
  );
}

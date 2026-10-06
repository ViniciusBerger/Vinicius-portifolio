import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiCode,
  FiDatabase,
  FiGitBranch,
  FiLayers,
} from "react-icons/fi";
import { heroProfile } from "../data/portfolio";

const systemIcons = {
  frontend: FiCode,
  services: FiLayers,
  data: FiDatabase,
  delivery: FiGitBranch,
};

export default function Main() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid-glow" />
      <div className="shell hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">{heroProfile.eyebrow}</p>
          <h1>{heroProfile.name}</h1>
          <p className="hero-lead">{heroProfile.lead}</p>

          <div className="hero-tags" aria-label="Primary technologies">
            {heroProfile.technologies.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Enter portfolio <FiArrowDownRight aria-hidden="true" />
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/ViniciusBerger"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/ViniciusBerger" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/vini-berger/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="mailto:viniciuscla2015@gmail.com">viniciuscla2015@gmail.com</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Animated software engineering system overview">
          <div className="browser-window browser-window--hero system-preview">
            <div className="browser-topbar">
              <span />
              <span />
              <span />
              <div>portfolio://system-overview</div>
            </div>

            <div className="system-preview-body">
              <div className="system-orbit system-orbit--one" aria-hidden="true" />
              <div className="system-orbit system-orbit--two" aria-hidden="true" />

              <div className="system-preview-copy">
                <span>{heroProfile.overview.eyebrow}</span>
                <strong>{heroProfile.overview.title}</strong>
                <p>{heroProfile.overview.description}</p>
              </div>

              <div className="system-layer-grid">
                {heroProfile.overview.layers.map((layer, index) => {
                  const Icon = systemIcons[layer.icon];
                  return (
                    <div className={`system-layer-card system-layer-card--${index + 1}`} key={layer.label}>
                      <div className="system-layer-icon"><Icon aria-hidden="true" /></div>
                      <div>
                        <small>{layer.label}</small>
                        <strong>{layer.value}</strong>
                      </div>
                      <i className="system-pulse" aria-hidden="true" />
                    </div>
                  );
                })}
              </div>

              <div className="build-stream" aria-label="Example delivery pipeline">
                <span className="build-stream-prompt">$</span>
                <span className="build-stream-line build-stream-line--1">npm run ci</span>
                <span className="build-stream-line build-stream-line--2">✓ lint  ✓ tests  ✓ build</span>
                <span className="build-stream-line build-stream-line--3">ready to ship_</span>
              </div>

              <div className="system-preview-status" aria-label="Engineering priorities">
                {heroProfile.overview.signals.map((signal, index) => (
                  <span key={signal}>
                    {index === 0 && <i className="status-dot" aria-hidden="true" />}
                    {signal}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="floating-card floating-card--top">
            <span className="status-dot" />
            <div>
              <strong>Build passing</strong>
              <small>Delivery pipeline</small>
            </div>
          </div>

          <div className="floating-card floating-card--bottom">
            <strong>FULL-STACK</strong>
            <small>Interface → infrastructure</small>
          </div>
        </div>
      </div>
    </section>
  );
}

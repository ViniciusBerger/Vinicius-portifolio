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
              View my work <FiArrowDownRight aria-hidden="true" />
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
            <a
              href="https://github.com/ViniciusBerger"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/vini-berger/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a href="mailto:viniciuscla2015@gmail.com">viniciuscla2015@gmail.com</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Software engineering system overview">
          <div className="browser-window browser-window--hero system-preview">
            <div className="browser-topbar">
              <span />
              <span />
              <span />
              <div>portfolio://system-overview</div>
            </div>

            <div className="system-preview-body">
              <div className="system-preview-copy">
                <span>{heroProfile.overview.eyebrow}</span>
                <strong>{heroProfile.overview.title}</strong>
                <p>{heroProfile.overview.description}</p>
              </div>

              <div className="system-layer-grid">
                {heroProfile.overview.layers.map((layer) => {
                  const Icon = systemIcons[layer.icon];

                  return (
                    <div className="system-layer-card" key={layer.label}>
                      <div className="system-layer-icon">
                        <Icon aria-hidden="true" />
                      </div>
                      <div>
                        <small>{layer.label}</small>
                        <strong>{layer.value}</strong>
                      </div>
                    </div>
                  );
                })}
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
              <strong>Full-stack</strong>
              <small>Product engineering</small>
            </div>
          </div>

          <div className="floating-card floating-card--bottom">
            <strong>CI/CD</strong>
            <small>Automated checks</small>
          </div>
        </div>
      </div>
    </section>
  );
}

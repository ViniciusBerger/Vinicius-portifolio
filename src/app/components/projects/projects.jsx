"use client";

import Image from "next/image";
import { FiArrowUpRight, FiPlay } from "react-icons/fi";
import { featuredProjects, otherProjects } from "../../data/portfolio";

function MotionPreview({ project, index }) {
  return (
    <div className={`project-reel project-reel--${project.motion}`}>
      <div className="project-reel-topbar">
        <span /><span /><span />
        <small>{project.sceneLabel}</small>
      </div>
      <div className="project-reel-stage">
        {project.video ? (
          <video
            className="project-reel-video"
            src={project.video}
            poster={project.image}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <Image
            className="project-reel-image"
            src={project.image}
            alt={`${project.title} interface preview`}
            fill
            sizes="(max-width: 920px) 94vw, 58vw"
            priority={index === 0}
          />
        )}
        <div className="project-reel-scan" aria-hidden="true" />
        <div className="project-reel-cursor" aria-hidden="true" />
        <div className="project-reel-live"><FiPlay aria-hidden="true" /> live preview</div>
      </div>
      <div className="project-reel-progress"><span /></div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section section-projects">
      <div className="shell">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">SELECTED BUILDS</p>
            <h2>Projects that feel<br />alive.</h2>
          </div>
          <p>
            Product work is easier to understand when you can see it in motion. These previews animate the interfaces now and are ready to use real screen recordings when they are added later.
          </p>
        </div>

        <div className="project-reel-list">
          {featuredProjects.map((project, index) => (
            <article className={`project-showcase ${index % 2 ? "project-showcase--reverse" : ""}`} key={project.title}>
              <div className="project-showcase-copy">
                <div className="project-kicker">
                  <span>{project.number}</span>
                  <span>{project.sceneLabel}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>

                <div className="technology-list">
                  {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                </div>

                {project.metrics && (
                  <div className="project-signal-grid">
                    {project.metrics.map((metric) => (
                      <div className="project-signal" key={metric.label}>
                        <strong>{metric.value}</strong>
                        <span>{metric.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {project.href && (
                  <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
                    Explore project <FiArrowUpRight />
                  </a>
                )}
              </div>
              <MotionPreview project={project} index={index} />
            </article>
          ))}
        </div>

        <div className="more-work-heading">
          <div>
            <p className="eyebrow">SIDE QUESTS</p>
            <h2>More things I&apos;ve built.</h2>
          </div>
          <a className="text-link" href="https://github.com/ViniciusBerger" target="_blank" rel="noreferrer">
            View GitHub <FiArrowUpRight />
          </a>
        </div>

        <div className="other-project-grid">
          {otherProjects.map((project) => (
            <a className="other-project-card" key={project.title} href={project.href} target="_blank" rel="noreferrer">
              <div className="other-project-thumb">
                <Image src={project.image} alt="" fill sizes="(max-width: 760px) 80px, 96px" />
              </div>
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <FiArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

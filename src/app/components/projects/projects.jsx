"use client";

import Image from "next/image";
import { FiArrowUpRight, FiBarChart2 } from "react-icons/fi";
import ProjectReel from "./project-reel";
import { featuredProjects, otherProjects } from "../../data/portfolio";

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
            Product work is easier to understand when you can see it in motion. Watch real product workflows from FIXD and RentalFlow, plus a clearly labeled Next Stop UI concept recreation.
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
                {project.period && <p className="project-period">{project.period}</p>}
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
              <ProjectReel project={project} />
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
          {otherProjects.map((project) => project.kind === "analysis" ? (
            <article className="other-project-card other-project-card--analysis" key={project.title}>
              <div className="other-project-thumb other-project-thumb--analysis">
                <FiBarChart2 aria-hidden="true" />
              </div>
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="other-project-metric">
                  <strong>{project.metric}</strong>
                  <span>{project.metricLabel}</span>
                </p>
              </div>
            </article>
          ) : (
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

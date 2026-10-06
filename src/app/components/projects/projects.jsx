import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { featuredProjects, otherProjects } from "../../data/portfolio";

function ProjectImage({ project, featured = false }) {
  return (
    <div className={featured ? "featured-project-image" : "compact-project-image"}>
      <Image
        src={project.image}
        alt={`${project.title} interface`}
        fill
        sizes={featured ? "(max-width: 900px) 92vw, 52vw" : "(max-width: 900px) 92vw, 38vw"}
      />
    </div>
  );
}

export default function Projects() {
  const [fixd, ...secondary] = featuredProjects;

  return (
    <section id="projects" className="section section-projects">
      <div className="shell">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">FEATURED WORK</p>
            <h2>Building real products<br />for real users.</h2>
          </div>
          <p>
            A selection of production systems and larger applications where I worked across architecture, APIs, interfaces, integrations, testing, and deployment.
          </p>
        </div>

        <article className="featured-project">
          <div className="featured-project-copy">
            <div className="project-index">{fixd.number}</div>
            <h3>{fixd.title}</h3>
            <p className="project-subtitle">{fixd.subtitle}</p>
            <p className="project-description">{fixd.description}</p>

            <div className="technology-list">
              {fixd.technologies.map((technology) => <span key={technology}>{technology}</span>)}
            </div>

            <div className="metric-grid">
              {fixd.metrics.map((metric) => (
                <div className="metric" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>

            <div className="project-actions">
              <a className="button button-primary" href={fixd.href} target="_blank" rel="noreferrer">
                View live site <FiArrowUpRight />
              </a>
              <a className="text-link" href={fixd.secondaryHref} target="_blank" rel="noreferrer">
                View GitHub <FiArrowUpRight />
              </a>
            </div>
          </div>

          <ProjectImage project={fixd} featured />
        </article>

        <div className="secondary-project-grid">
          {secondary.map((project) => (
            <article className="secondary-project" key={project.title}>
              <ProjectImage project={project} />
              <div className="secondary-project-copy">
                <span className="project-index">{project.number}</span>
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>
                <div className="technology-list technology-list--small">
                  {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
                <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
                  View project <FiArrowUpRight />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="more-work-heading">
          <div>
            <p className="eyebrow">OTHER PROJECTS</p>
            <h2>More projects and experiments.</h2>
          </div>
          <a className="text-link" href="https://github.com/ViniciusBerger" target="_blank" rel="noreferrer">
            View GitHub <FiArrowUpRight />
          </a>
        </div>

        <div className="other-project-grid">
          {otherProjects.map((project) => (
            <a className="other-project-card" key={project.title} href={project.href} target="_blank" rel="noreferrer">
              <div className="other-project-thumb">
                <Image src={project.image} alt="" fill sizes="(max-width: 760px) 92vw, 30vw" />
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

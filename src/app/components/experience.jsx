import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section section-experience">
      <div className="shell">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">EXPERIENCE</p>
            <h2>Software that solves<br />real operational problems.</h2>
          </div>
          <p>
            My strongest work combines software engineering fundamentals with practical delivery: understanding a workflow, designing the system, shipping it, and maintaining it.
          </p>
        </div>

        <div className="timeline">
          {experience.map((item, index) => (
            <article className="timeline-item" key={`${item.role}-${item.place}`}>
              <div className="timeline-number">0{index + 1}</div>
              <div className="timeline-rule" />
              <div className="timeline-copy">
                <p className="timeline-date">{item.date}</p>
                <h3>{item.role}</h3>
                <p className="timeline-place">{item.place}</p>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

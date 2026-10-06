import { skillGroups } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section section-skills">
      <div className="shell skills-layout">
        <div className="skills-heading">
          <p className="eyebrow">TECHNICAL SKILLS</p>
          <h2>Technologies<br />I work with.</h2>
          <p>
            Tools change. I focus on understanding systems, choosing sensible architecture, and shipping maintainable software.
          </p>
        </div>

        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

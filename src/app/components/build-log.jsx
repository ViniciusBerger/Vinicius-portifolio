import { buildLog } from "../data/portfolio";

export default function BuildLog() {
  return (
    <section className="section build-log-section" aria-labelledby="build-log-title">
      <div className="shell">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">BUILD LOG</p>
            <h2 id="build-log-title">The path so far.</h2>
          </div>
          <p>
            Not a fake contribution graph. Just the real progression from client web work to backend depth and production systems.
          </p>
        </div>

        <div className="build-log-rail">
          {buildLog.map((entry, index) => (
            <article className="build-log-entry" key={entry.year}>
              <div className="build-log-marker"><span>{index + 1}</span></div>
              <div className="build-log-year">{entry.year}</div>
              <div className="build-log-card">
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>
                <div className="build-log-tags">
                  {entry.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

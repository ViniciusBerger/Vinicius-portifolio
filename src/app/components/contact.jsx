import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUpRight, FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="shell contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">FINAL CHECKPOINT</p>
          <h2>Let&apos;s build something useful.</h2>
          <p>
            I&apos;m open to software developer opportunities where I can contribute across backend, full-stack development, APIs, integrations, and product delivery.
          </p>
        </div>

        <div className="terminal-card" aria-label="Contact links">
          <div className="terminal-topbar"><span /><span /><span /><small>contact.sh</small></div>
          <div className="terminal-body">
            <p><span>$</span> select contact_channel</p>
            <a href="mailto:viniciuscla2015@gmail.com">
              <FiMail /> <span>email</span><small>viniciuscla2015@gmail.com</small><FiArrowUpRight />
            </a>
            <a href="https://www.linkedin.com/in/vini-berger/" target="_blank" rel="noreferrer">
              <FaLinkedinIn /> <span>linkedin</span><small>/in/vini-berger</small><FiArrowUpRight />
            </a>
            <a href="https://github.com/ViniciusBerger" target="_blank" rel="noreferrer">
              <FaGithub /> <span>github</span><small>/ViniciusBerger</small><FiArrowUpRight />
            </a>
            <p className="terminal-ready"><span>✓</span> ready for next mission_</p>
          </div>
        </div>
      </div>
    </section>
  );
}

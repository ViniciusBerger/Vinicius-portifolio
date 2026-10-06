import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUpRight, FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="shell contact-card">
        <div>
          <p className="eyebrow">CONTACT</p>
          <h2>Let&apos;s build something useful.</h2>
          <p>
            I&apos;m open to software developer opportunities where I can contribute across backend, full-stack development, APIs, integrations, and product delivery.
          </p>
        </div>

        <div className="contact-links">
          <a href="mailto:viniciuscla2015@gmail.com">
            <FiMail />
            <span><small>Email</small>viniciuscla2015@gmail.com</span>
            <FiArrowUpRight />
          </a>
          <a href="https://www.linkedin.com/in/vini-berger/" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
            <span><small>LinkedIn</small>linkedin.com/in/vini-berger</span>
            <FiArrowUpRight />
          </a>
          <a href="https://github.com/ViniciusBerger" target="_blank" rel="noreferrer">
            <FaGithub />
            <span><small>GitHub</small>github.com/ViniciusBerger</span>
            <FiArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}

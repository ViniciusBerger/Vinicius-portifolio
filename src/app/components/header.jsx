"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Profile", href: "#profile", id: "profile" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Skills", href: "#skills", id: "skills" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="shell nav-shell">
        <a className="brand" href="#home" aria-label="Vini Berger home" onClick={() => setMobileOpen(false)}>
          <span className="brand-mark">VB</span>
          <span>Vini Berger</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => <a key={item.id} href={item.href}>{item.label}</a>)}
          <a className="nav-contact" href="#contact">Contact</a>
        </nav>

        <button
          className="mobile-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span /><span />
        </button>
      </div>

      <nav className={`mobile-nav ${mobileOpen ? "mobile-nav--open" : ""}`} aria-label="Mobile navigation">
        {navItems.map((item) => (
          <a key={item.id} href={item.href} onClick={() => setMobileOpen(false)}>{item.label}</a>
        ))}
        <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
      </nav>
    </header>
  );
}

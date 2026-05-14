"use client";

import { useEffect, useState } from "react";

const navItems = [
  {
    label: "Home",
    href: "#home",
    id: "home",
  },
  {
    label: "Projects",
    href: "#projects",
    id: "projects",
  },
  {
    label: "Contact",
    href: "#contact",
    id: "contact",
  },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const currentSection = navItems.find((item) => {
        const section = document.getElementById(item.id);

        if (!section) return false;

        const rect = section.getBoundingClientRect();

        return rect.top <= 140 && rect.bottom >= 140;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`
        fixed left-0 top-0 z-50 w-full transition-all duration-300
        ${
          scrolled
            ? "border-b border-white/10 bg-[#141414]/85 shadow-2xl backdrop-blur-xl"
            : "bg-[#141414]/70 backdrop-blur-md"
        }
      `}
    >
      <div
        className="
          mx-auto flex max-w-7xl items-center justify-between
          px-6 py-4 sm:px-10 lg:px-16
        "
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={handleNavClick}
          className="
            group flex items-center gap-4 text-white
            transition hover:text-emerald-400
          "
        >
          <img
            src="/images/vb128.png"
            alt="Vinicius Berger developer logo"
            className="
              h-10 w-10 object-contain transition duration-300
              group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(52,211,153,0.45)]
              lg:h-12 lg:w-12
            "
          />

          <code className="text-sm font-bold tracking-widest sm:text-base">
            VIN BERGER
          </code>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`
                      group relative text-sm transition
                      ${isActive ? "text-white" : "text-gray-300 hover:text-white"}
                    `}
                  >
                    <code>{item.label}</code>

                    <span
                      className={`
                        absolute -bottom-2 left-0 h-[2px] rounded-full bg-emerald-400
                        shadow-[0_0_12px_rgba(52,211,153,0.8)]
                        transition-all duration-300
                        ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                      `}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="https://www.linkedin.com/in/marcos-vinicius-berger-gilles/"
            target="_blank"
            rel="noreferrer"
            className="
              rounded-full border border-emerald-400/30 bg-emerald-400/10
              px-5 py-2 text-sm font-semibold text-emerald-300
              shadow-[0_0_20px_rgba(52,211,153,0.12)]
              transition hover:border-emerald-400/60 hover:bg-emerald-400 hover:text-black
            "
          >
            <code>Let's talk</code>
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((current) => !current)}
          className="
            flex h-10 w-10 items-center justify-center rounded-xl
            border border-white/10 bg-white/[0.04] text-white
            transition hover:border-emerald-400/40 hover:bg-emerald-400/10
            lg:hidden
          "
          aria-label="Toggle navigation menu"
        >
          <span className="text-xl">
            {mobileOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          overflow-hidden border-t border-white/10 bg-[#141414]/95
          backdrop-blur-xl transition-all duration-300 lg:hidden
          ${mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav className="mx-auto max-w-7xl px-6 py-5 sm:px-10">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={handleNavClick}
                    className={`
                      flex items-center justify-between rounded-2xl px-4 py-3
                      transition
                      ${
                        isActive
                          ? "bg-emerald-400/10 text-emerald-300"
                          : "text-gray-300 hover:bg-white/[0.04] hover:text-white"
                      }
                    `}
                  >
                    <code>{item.label}</code>

                    {isActive && (
                      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                    )}
                  </a>
                </li>
              );
            })}

            <li>
              <a
                href="https://www.linkedin.com/in/marcos-vinicius-berger-gilles/"
                target="_blank"
                rel="noreferrer"
                onClick={handleNavClick}
                className="
                  mt-2 flex items-center justify-center rounded-full
                  bg-emerald-400 px-5 py-3 font-bold text-black
                  shadow-[0_0_25px_rgba(52,211,153,0.3)]
                  transition hover:bg-emerald-300
                "
              >
                <code>Let's talk</code>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
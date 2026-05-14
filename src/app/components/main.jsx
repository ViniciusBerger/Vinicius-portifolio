"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const techStack = [
  {
    name: "React",
    icon: "⚛",
    description: "Component-based UI development",
  },
  {
    name: "Next.js",
    icon: "N",
    description: "Fullstack React framework",
  },
  {
    name: "TypeScript",
    icon: "TS",
    description: "Type-safe JavaScript",
  },
  {
    name: "Node.js",
    icon: "⬢",
    description: "Backend APIs and services",
  },
  {
    name: "Tailwind CSS",
    icon: "〰",
    description: "Fast, clean UI styling",
  },
];

const stats = [
  {
    value: "10+",
    label: "Projects",
    sub: "Built and deployed",
    icon: "▣",
  },
  {
    value: "12+",
    label: "Tech Stack",
    sub: "Tools and frameworks",
    icon: "</>",
  },
  {
    value: "3+",
    label: "Years Experience",
    sub: "Building since 2023",
    icon: "▤",
  },
];

const phrases = [
  "I build scalable web apps and delightful user experiences.",
  "I turn complex ideas into clean, usable software.",
  "I design fullstack systems with structure and intent.",
];

const commands = [
  {
    label: "Go to Projects",
    shortcut: "P",
    action: () => {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    label: "Go to Contact",
    shortcut: "C",
    action: () => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    label: "Open LinkedIn",
    shortcut: "L",
    action: () => {
      window.open(
        "https://www.linkedin.com/in/marcos-vinicius-berger-gilles/",
        "_blank"
      );
    },
  },
];

const Main = () => {
  const [hoveredAvatar, setHoveredAvatar] = useState(false);
  const [hoveredChip, setHoveredChip] = useState(null);
  const [commandOpen, setCommandOpen] = useState(false);
  const [commandSearch, setCommandSearch] = useState("");
  const [typedText, setTypedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [ctaOffset, setCtaOffset] = useState({ x: 0, y: 0 });

  const ctaRef = useRef(null);

  const filteredCommands = useMemo(() => {
    return commands.filter((command) =>
      command.label.toLowerCase().includes(commandSearch.toLowerCase())
    );
  }, [commandSearch]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const fullHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = fullHeight > 0 ? (scrollTop / fullHeight) * 100 : 0;

      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const isCommandK =
        (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";

      if (isCommandK) {
        event.preventDefault();
        setCommandOpen((current) => !current);
      }

      if (event.key === "Escape") {
        setCommandOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const isComplete = typedText === currentPhrase;

    const timeout = setTimeout(
      () => {
        if (!isComplete) {
          setTypedText(currentPhrase.slice(0, typedText.length + 1));
          return;
        }

        setTypedText("");
        setPhraseIndex((current) => (current + 1) % phrases.length);
      },
      isComplete ? 1600 : 38
    );

    return () => {
      clearTimeout(timeout);
    };
  }, [typedText, phraseIndex]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setMouse({
      x: (event.clientX - rect.left - rect.width / 2) / rect.width,
      y: (event.clientY - rect.top - rect.height / 2) / rect.height,
    });
  };

  const handleCtaMouseMove = (event) => {
    const button = ctaRef.current;

    if (!button) return;

    const rect = button.getBoundingClientRect();

    const x = (event.clientX - rect.left - rect.width / 2) * 0.18;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.18;

    setCtaOffset({ x, y });
  };

  const handleCtaClick = () => {
    window.location.href =
      "https://www.linkedin.com/in/marcos-vinicius-berger-gilles/";
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="
        relative min-h-screen overflow-hidden bg-[#141414] text-white
        px-6 pb-16 pt-32 sm:px-10 lg:px-16
      "
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.045),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_70%,rgba(16,185,129,0.08),transparent_25%)]" />

      {/* Floating shapes */}
      <div
        className="pointer-events-none absolute left-0 top-[42%] hidden h-9 w-9 rounded-sm bg-emerald-500 shadow-[0_0_35px_rgba(16,185,129,0.55)] lg:block"
        style={{
          transform: `translate(${mouse.x * 18}px, ${mouse.y * 18}px)`,
        }}
      />

      <div
        className="pointer-events-none absolute left-[55%] top-[36%] hidden h-10 w-10 rounded bg-yellow-600 shadow-[0_0_35px_rgba(202,138,4,0.45)] lg:block"
        style={{
          transform: `translate(${mouse.x * -22}px, ${mouse.y * -18}px)`,
        }}
      />

      <div
        className="pointer-events-none absolute bottom-[20%] right-[27%] hidden h-12 w-12 rounded-full bg-pink-700 shadow-[0_0_40px_rgba(190,24,93,0.45)] lg:block"
        style={{
          transform: `translate(${mouse.x * 26}px, ${mouse.y * -20}px)`,
        }}
      />

      <div
        className="pointer-events-none absolute right-[4%] top-[42%] hidden h-8 w-8 rounded bg-green-500 shadow-[0_0_30px_rgba(34,197,94,0.5)] lg:block"
        style={{
          transform: `translate(${mouse.x * -16}px, ${mouse.y * 16}px)`,
        }}
      />

      {/* Scroll progress */}
      <div className="pointer-events-none fixed left-6 top-1/2 z-20 hidden -translate-y-1/2 lg:block">
        <p className="mb-4 text-xs text-white/50">
          <code>01</code>
        </p>

        <div className="relative h-48 w-px bg-white/20">
          <div
            className="absolute left-0 top-0 w-px bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.8)]"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>

        <p className="mt-4 text-xs text-white/50">
          <code>05</code>
        </p>
      </div>

      {/* Command palette trigger */}
      <button
        type="button"
        onClick={() => setCommandOpen(true)}
        className="
          absolute left-1/2 top-[19%] z-20 hidden -translate-x-1/2 items-center gap-4
          rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4
          text-white/80 shadow-2xl backdrop-blur-md transition
          hover:border-emerald-400/40 hover:bg-white/[0.07] lg:flex
        "
      >
        <span className="text-xl">⌘</span>
        <span className="text-xl font-semibold">K</span>
      </button>

      {/* Main layout */}
      <div
        className="
          relative z-10 mx-auto flex min-h-[calc(100vh-18rem)] max-w-7xl
          flex-col items-center justify-center gap-14
          lg:flex-row lg:items-center lg:justify-between
        "
      >
        {/* Left content */}
        <div className="w-full max-w-2xl text-center lg:text-left">
          <p className="text-sm tracking-widest text-white">
            <code>HI THERE 👋 I'M</code>
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <code>Vin Berger</code>
          </h1>

          <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-cyan-400 sm:text-base">
            <code>FULLSTACK DEVELOPER</code> <span>👨🏽‍💻</span>
          </p>

          <p className="mt-5 min-h-[28px] text-sm text-white sm:text-base">
            <code>
              {typedText}
              <span className="ml-1 inline-block h-5 w-[2px] translate-y-1 bg-emerald-400 animate-pulse" />
            </code>
          </p>

          {/* Tech chips */}
          <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
            {techStack.map((tech) => (
              <div key={tech.name} className="relative">
                <button
                  type="button"
                  onMouseEnter={() => setHoveredChip(tech.name)}
                  onMouseLeave={() => setHoveredChip(null)}
                  className="
                    rounded-full border border-white/10 bg-white/[0.04] px-4 py-2
                    text-sm text-white/85 shadow-lg backdrop-blur-sm transition
                    hover:-translate-y-1 hover:border-emerald-400/50 hover:bg-emerald-400/10
                  "
                >
                  <span className="mr-2 text-emerald-400">{tech.icon}</span>
                  <code>{tech.name}</code>
                </button>

                {hoveredChip === tech.name && (
                  <div
                    className="
                      absolute left-1/2 top-12 z-30 w-56 -translate-x-1/2 rounded-xl
                      border border-emerald-400/30 bg-[#101010] px-4 py-3
                      text-center text-xs text-white/75 shadow-2xl lg:text-left
                    "
                  >
                    <code>{tech.description}</code>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            ref={ctaRef}
            type="button"
            onClick={handleCtaClick}
            onMouseMove={handleCtaMouseMove}
            onMouseLeave={() => setCtaOffset({ x: 0, y: 0 })}
            style={{
              transform: `translate(${ctaOffset.x}px, ${ctaOffset.y}px)`,
            }}
            className="
              mt-8 rounded-full bg-emerald-400 px-8 py-3 font-bold text-black
              shadow-[0_0_35px_rgba(52,211,153,0.45)]
              transition duration-200 hover:bg-emerald-300
            "
          >
            Talk to me
          </button>
        </div>

        {/* Right avatar */}
        <div className="relative flex w-full max-w-sm items-center justify-center lg:max-w-md">
          <div
            className="
              pointer-events-none absolute h-72 w-72 rounded-full
              bg-emerald-400/10 blur-3xl
              sm:h-80 sm:w-80 lg:h-96 lg:w-96
            "
          />

          <img
            src={hoveredAvatar ? "/images/avatar_hover.png" : "/images/avatar.png"}
            alt="3D avatar of Vin Berger working behind a laptop."
            onMouseEnter={() => setHoveredAvatar(true)}
            onMouseLeave={() => setHoveredAvatar(false)}
            className="
              relative z-10 w-64 cursor-pointer object-contain
              transition duration-300 hover:scale-105
              sm:w-72 lg:w-[360px]
            "
            style={{
              WebkitMaskImage:
                "radial-gradient(circle at center, black 58%, transparent 82%)",
              maskImage:
                "radial-gradient(circle at center, black 58%, transparent 82%)",
            }}
          />
        </div>
      </div>

      {/* Stats strip */}
      <div
        className="
          relative z-10 mx-auto mt-10 grid max-w-5xl grid-cols-1 overflow-hidden
          rounded-3xl border border-white/10 bg-white/[0.03]
          shadow-2xl backdrop-blur-md sm:grid-cols-3
        "
      >
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`
              flex items-center gap-5 px-8 py-6
              ${
                index !== stats.length - 1
                  ? "border-b border-white/10 sm:border-b-0 sm:border-r"
                  : ""
              }
            `}
          >
            <div
              className="
                flex h-14 w-14 items-center justify-center rounded-2xl
                border border-white/10 bg-black/20 text-emerald-400
                shadow-[0_0_20px_rgba(52,211,153,0.12)]
              "
            >
              <code>{stat.icon}</code>
            </div>

            <div>
              <p className="text-3xl font-black text-white">
                <code>{stat.value}</code>
              </p>

              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-white">
                <code>{stat.label}</code>
              </p>

              <p className="mt-1 text-xs text-white/55">
                <code>{stat.sub}</code>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="relative z-10 mt-10 hidden text-center text-white/45 lg:block">
        <p className="text-sm uppercase tracking-[0.35em]">
          <code>Scroll to explore</code>
        </p>

        <p className="mt-2 text-2xl text-emerald-400">⌄</p>
      </div>

      {/* Command palette modal */}
      {commandOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 pt-28 backdrop-blur-sm">
          <div className="w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-[#111111] shadow-2xl">
            <div className="border-b border-white/10 p-4">
              <input
                autoFocus
                value={commandSearch}
                onChange={(event) => setCommandSearch(event.target.value)}
                placeholder="Search commands..."
                className="
                  w-full bg-transparent px-2 py-2 text-white outline-none
                  placeholder:text-white/35
                "
              />
            </div>

            <div className="max-h-80 overflow-y-auto p-3">
              {filteredCommands.length > 0 ? (
                filteredCommands.map((command) => (
                  <button
                    key={command.label}
                    type="button"
                    onClick={() => {
                      command.action();
                      setCommandOpen(false);
                      setCommandSearch("");
                    }}
                    className="
                      flex w-full items-center justify-between rounded-2xl px-4 py-3
                      text-left text-white/85 transition hover:bg-emerald-400/10
                    "
                  >
                    <code>{command.label}</code>

                    <span className="rounded-lg border border-white/10 px-2 py-1 text-xs text-white/45">
                      {command.shortcut}
                    </span>
                  </button>
                ))
              ) : (
                <p className="px-4 py-6 text-center text-sm text-white/45">
                  <code>No commands found.</code>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Main;
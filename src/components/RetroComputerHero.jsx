import { useState, useEffect, useRef } from "react";
import "./RetroComputerHero.css";

// ── Section data for the CRT mini-OS ────────────────────────────────────────
const SECTIONS = {
  about: {
    label: "About",
    anchor: "#about",
    lines: [
      "> CS @ Ohio State University",
      "> GPA: 3.6  Honors",
      "> Focus: AI · Full-Stack · Cloud",
      "> Quantum Club — Founder & Pres.",
      "> Published ML researcher",
      ">   citations: 22",
    ],
  },
  experience: {
    label: "Exp.",
    anchor: "#experience",
    lines: [
      "> NMT Security (2025)",
      ">  AI chatbot, AWS Bedrock",
      ">  -40% query resolution time",
      "> Deloitte (2021)",
      ">  Cloud migration & AWS auto.",
      ">  -30% deployment delays",
      "> Verzeo Edutech (2021)",
      ">  CV/ML projects — 90%+ acc.",
    ],
  },
  skills: {
    label: "Skills",
    anchor: "#skills",
    lines: [
      "> Lang:  Python Go Java JS TS",
      "> Web:   React Next.js Node Rails",
      "> DB:    Postgres Dynamo SQLite",
      "> Cloud: AWS Lambda S3 Bedrock",
      "> Tools: Docker Kafka TensorFlow",
    ],
  },
  projects: {
    label: "Projects",
    anchor: "#projects",
    lines: [
      "> RecipeShare",
      ">  Next.js + Go + PostgreSQL",
      "> E-commerce Platform",
      ">  Lambda + DynamoDB",
      "> Sentiment Engine",
      ">  Kafka + FAISS + React",
      "> Meal Planner",
      ">  Rails + AWS · 500+ users",
    ],
  },
  contact: {
    label: "Contact",
    anchor: "#contact",
    lines: [
      "> anshpachauri2005@gmail.com",
      "> +1 (614) 493-9393",
      "> linkedin: ansh-pachauri",
      "> Columbus, OH, USA",
      ">",
      "> Open to US & India roles",
    ],
  },
};

// ── Keyboard layout ──────────────────────────────────────────────────────────
const KEYS = [
  // row 1: 12 regular
  ...Array(12).fill({}),
  // row 2: wide, 8 regular, wide
  { wide: true }, ...Array(8).fill({}), { wide: true },
  // row 3: key, key, space, key, key, key
  {}, {}, { space: true }, {}, {}, {},
];

// ── CRT mini-OS component ────────────────────────────────────────────────────
const CrtOS = ({ activeSection, onSectionClick }) => {
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    const lines = SECTIONS[activeSection].lines;
    setVisibleLines([]);
    let i = 0;
    const id = setInterval(() => {
      if (i < lines.length) {
        setVisibleLines((prev) => [...prev, lines[i]]);
        i++;
      } else {
        clearInterval(id);
      }
    }, 170);
    return () => clearInterval(id);
  }, [activeSection]);

  const content = visibleLines.join("\n");
  const isTyping = visibleLines.length < SECTIONS[activeSection].lines.length;

  return (
    <div className="rch-os">
      <div className="rch-os-sidebar">
        {Object.entries(SECTIONS).map(([key, { label, anchor }]) => (
          <button
            key={key}
            className={`rch-os-tab${activeSection === key ? " active" : ""}`}
            onClick={() => {
              onSectionClick(key);
              document.querySelector(anchor)?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="rch-os-tab-dot" />
            {label}
          </button>
        ))}
      </div>

      <div className="rch-os-main">
        <div className="rch-os-title">AnshOS v1.0</div>
        <div className="rch-os-window">
          <pre className="rch-os-content">
            {content}
            {isTyping ? "█" : ""}
          </pre>
        </div>
      </div>
    </div>
  );
};

// ── Main component ───────────────────────────────────────────────────────────
export const RetroComputerHero = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const resumeRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (resumeRef.current && !resumeRef.current.contains(e.target)) {
        setIsResumeOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <section id="hero" className="rch-wrap">
      <div className="rch-container">

        {/* ── Left: content ─────────────────────────────────────────────── */}
        <div className="rch-content">
          <p className="rch-label opacity-0 animate-fade-in">
            Full-Stack Engineer & AI Developer
          </p>

          <h1 className="rch-h1 opacity-0 animate-fade-in-delay-1">
            <span style={{ display: "block" }}>Ansh</span>
            <span className="rch-italic" style={{ display: "block" }}>Pachauri.</span>
          </h1>

          <p className="rch-lead opacity-0 animate-fade-in-delay-2">
            CS student at The Ohio State University building scalable web apps,
            cloud-backed AI systems, and full-stack products — from AWS Lambda
            services to React frontends.
          </p>

          <div className="rch-cta opacity-0 animate-fade-in-delay-3">
            <a href="#projects" className="rch-btn-primary">
              View Projects
            </a>

            <div className="rch-resume-wrap" ref={resumeRef}>
              <button
                className="rch-btn-outline"
                onClick={() => setIsResumeOpen((o) => !o)}
              >
                Download Résumé ▾
              </button>
              {isResumeOpen && (
                <div className="rch-dropdown">
                  <a href="/Ansh_Pachauri_resume_US.pdf" download>
                    🇺🇸 US Résumé (PDF)
                  </a>
                  <a href="/Ansh_Pachauri_resume_IND.pdf" download>
                    🇮🇳 India Résumé (PDF)
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="rch-stats opacity-0 animate-fade-in-delay-4">
            {[
              { label: "GPA", value: "3.6 / 4.0" },
              { label: "Internships", value: "3 roles" },
              { label: "Citations", value: "22" },
            ].map(({ label, value }) => (
              <div key={label}>
                <div className="rch-stat-label">{label}</div>
                <div className="rch-stat-value">{value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: 3D computer ────────────────────────────────────────── */}
        <div className="rch-product-col">
          <div className="rch-scene">
            <div className="rch-computer-unit">

              {/* Front face */}
              <div className="rch-face rch-front">
                <div className="rch-screen-inset">
                  <div className="rch-crt">
                    <div className="rch-crt-inner">
                      <CrtOS
                        activeSection={activeSection}
                        onSectionClick={setActiveSection}
                      />
                    </div>
                  </div>
                </div>

                <div className="rch-logo-badge" />
                <div className="rch-floppy-slot" />

                <div className="rch-sticker rch-sticker-ball" />
                <div className="rch-sticker rch-sticker-star">★</div>
                <div className="rch-sticker rch-sticker-text">
                  FULL<br />STACK
                </div>

                <div className="rch-grill">
                  {Array(8).fill(null).map((_, i) => (
                    <div key={i} className="rch-vent" />
                  ))}
                </div>
              </div>

              {/* Other faces */}
              <div className="rch-face rch-back" />
              <div className="rch-face rch-left" />
              <div className="rch-face rch-right" />
              <div className="rch-face rch-top" />
              <div className="rch-face rch-bottom" />

              {/* Keyboard */}
              <div className="rch-keyboard-assembly">
                <div className="rch-kb-base">
                  <div className="rch-keys-grid">
                    {KEYS.map((k, i) => (
                      <div
                        key={i}
                        className={[
                          "rch-key",
                          k.wide ? "wide" : "",
                          k.space ? "space" : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                      />
                    ))}
                  </div>
                </div>
                <div className="rch-kb-front" />
                <div className="rch-kb-back" />
                <div className="rch-kb-left" />
                <div className="rch-kb-right" />
                <div className="rch-kb-shadow" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

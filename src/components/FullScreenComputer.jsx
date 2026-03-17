import { useState, useRef, useEffect } from "react";
import "./FullScreenComputer.css";

/* ── Nav sections ─────────────────────────────────────────────── */
const NAV = [
  { id: "about",      label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills",     label: "Skills" },
  { id: "projects",   label: "Projects" },
  { id: "contact",    label: "Contact" },
];

/* ── Keyboard layout ──────────────────────────────────────────── */
const KB_ROWS = [
  ["w15","","","","","","","","","","","","","w2"],
  ["w15","","","","","","","","","","","","","w15"],
  ["w2","","","","","","","","","","","","w2"],
  ["w15","","","","","","","","","","","w15"],
  ["w15","","","spc","","","","w15"],
];

function KbRow({ pattern }) {
  return (
    <div className="fsc-kb-row">
      {pattern.map((cls, i) => (
        <div key={i} className={`fsc-key${cls ? " " + cls : ""}`} />
      ))}
    </div>
  );
}

/* ── About content ────────────────────────────────────────────── */
function AboutContent() {
  return (
    <div>
      <h2 className="fsc-heading">Ansh Pachauri</h2>
      <span className="fsc-sub-heading">Computer Science &amp; Engineering · The Ohio State University</span>

      <p className="fsc-body-text">
        Software engineer specializing in full-stack development, distributed systems, and AI integration.
        Graduating May 2026 from OSU with a 3.6 GPA, Dean's List 5 semesters, and a focus on Software Engineering.
      </p>
      <p className="fsc-body-text">
        I've shipped production AI, backend microservices, and data pipelines — and recently founded OSU's first
        Quantum Computing Club. Always building something.
      </p>

      <div className="fsc-stats-row">
        {[
          { label: "GPA", value: "3.6" },
          { label: "Dean's List", value: "5×" },
          { label: "Projects", value: "7+" },
          { label: "Grad", value: "2026" },
        ].map(({ label, value }) => (
          <div key={label}>
            <div className="fsc-stat-value">{value}</div>
            <div className="fsc-stat-label">{label}</div>
          </div>
        ))}
      </div>

      <hr className="fsc-divider" />

      <div className="fsc-card">
        <div className="fsc-card-title">🏆 IBM SkillsBuild AI Hackathon — 2nd Place</div>
        <div className="fsc-card-text">Awarded $750 for building an AI-powered meal budgeting platform solo in the Fintech track at OSU, March 2026.</div>
      </div>
      {[
        { title: "Full-Stack &amp; Cloud", text: "React / Next.js / Go backends deployed on AWS (Lambda, Bedrock, S3, RDS, DynamoDB, EC2)." },
        { title: "AI &amp; Data Engineering", text: "Prompt engineering, RAG pipelines, FAISS vector search, AWS Bedrock NLU, and ML with TensorFlow / OpenCV." },
        { title: "Research", text: '"Fake News Detection using Machine Learning and NLP" — 2021 ICTAI, Tashkent. 22 citations.' },
      ].map(({ title, text }) => (
        <div key={title} className="fsc-card">
          <div className="fsc-card-title" dangerouslySetInnerHTML={{ __html: title }} />
          <div className="fsc-card-text">{text}</div>
        </div>
      ))}
    </div>
  );
}

/* ── Experience content ───────────────────────────────────────── */
function ExperienceContent() {
  const jobs = [
    {
      company: "NMT Security",
      role: "Product Development & AI Integration Intern",
      meta: "May 2025 – August 2025 · Tinton Falls, NJ",
      bullets: [
        "Architected and deployed a full-stack AI chatbot on AWS (Python / Lambda) integrating AWS Bedrock for NLU — reduced customer query resolution time by 40% with 95% accuracy across 1,000+ daily queries.",
        "Automated cybersecurity threat analysis with Python scripts integrated with VirusTotal and OTX APIs, cutting manual analysis time by 15 hours/week and improving threat detection accuracy by 30%.",
      ],
      tags: ["Python", "AWS Lambda", "AWS Bedrock", "VirusTotal API", "OTX API"],
    },
    {
      company: "Deloitte",
      role: "Technology Consulting Virtual Intern",
      meta: "June 2021 – September 2021 · Remote",
      bullets: [
        "Expedited team document search by 10 hours/month by migrating 100+ reports to a centralised cloud repository.",
        "Reduced client deployment delays by 30% and saved $5K+ annually by diagnosing integration bottlenecks and implementing AWS automation tools.",
      ],
      tags: ["AWS", "Cloud Migration", "Process Automation"],
    },
    {
      company: "Verzeo Edutech",
      role: "Student Intern",
      meta: "April 2021 – May 2021 · Remote",
      bullets: [
        "Delivered 4 AI projects (facial recognition, traffic sign detection) with 90%+ accuracy using Python and CNNs — adopted by 5+ peers.",
        "Led a team of 20 to complete projects 2 weeks ahead of schedule using Agile task delegation.",
      ],
      tags: ["Python", "CNNs", "TensorFlow", "OpenCV", "Agile"],
    },
  ];

  const leadership = [
    {
      org: "The Quantum Computing Club at Ohio State",
      role: "Founder & President",
      meta: "March 2025 – present",
      desc: "Launched OSU's first quantum computing organization — recruited an executive board, built faculty relationships, and grew membership through targeted initiatives.",
    },
    {
      org: "The Ohio State University — Student Life",
      role: "Resident Advisor",
      meta: "August 2024 – present",
      desc: "Boosted resident participation by 40% through 15+ events; maintained a 95% satisfaction rate and resolved 10+ policy conflicts with empathetic outreach.",
    },
  ];

  return (
    <div>
      <h2 className="fsc-heading">Experience</h2>
      <span className="fsc-sub-heading">Work history</span>

      {jobs.map((job) => (
        <div key={job.company} className="fsc-exp-card">
          <div className="fsc-exp-company">{job.company}</div>
          <div className="fsc-exp-role">{job.role}</div>
          <div className="fsc-exp-meta">{job.meta}</div>
          <ul style={{ paddingLeft: "1.1em", margin: "0 0 8px" }}>
            {job.bullets.map((b, i) => (
              <li key={i} className="fsc-exp-desc" style={{ marginBottom: "4px" }}>{b}</li>
            ))}
          </ul>
          <div className="fsc-tags">
            {job.tags.map((t) => <span key={t} className="fsc-tag">{t}</span>)}
          </div>
        </div>
      ))}

      <span className="fsc-sub-heading" style={{ marginTop: "18px", display: "block" }}>Leadership &amp; Involvement</span>

      {leadership.map((l) => (
        <div key={l.org} className="fsc-exp-card">
          <div className="fsc-exp-company">{l.org}</div>
          <div className="fsc-exp-role">{l.role}</div>
          <div className="fsc-exp-meta">{l.meta}</div>
          <div className="fsc-exp-desc">{l.desc}</div>
        </div>
      ))}
    </div>
  );
}

/* ── Skills content ───────────────────────────────────────────── */
function SkillsContent() {
  const groups = [
    {
      label: "AI-Assisted Development",
      chips: ["Prompt Engineering", "Workflow Automation", "Code Review & Auditing", "RAG Implementation"],
    },
    {
      label: "Programming Languages",
      chips: ["Java", "Python", "JavaScript", "TypeScript", "Go", "Ruby", "SQL", "HTML", "C"],
    },
    {
      label: "Frameworks & Libraries",
      chips: ["React", "Next.js", "Node.js", "Ruby on Rails", "Tailwind CSS", "TensorFlow", "OpenCV", "NumPy"],
    },
    {
      label: "Cloud & Tools",
      chips: ["AWS Lambda", "AWS Bedrock", "AWS S3", "AWS RDS", "AWS EC2", "DynamoDB", "API Gateway", "Docker", "Kafka", "PostgreSQL", "MySQL", "SQLite3", "GitHub"],
    },
    {
      label: "Certifications",
      chips: ["AWS Certified AI Practitioner", "AWS Certified Cloud Practitioner"],
    },
  ];

  return (
    <div>
      <h2 className="fsc-heading">Skills</h2>
      <span className="fsc-sub-heading">Technologies &amp; tools</span>
      {groups.map((g) => (
        <div key={g.label} className="fsc-skill-group">
          <span className="fsc-skill-group-label">{g.label}</span>
          <div className="fsc-skill-chips">
            {g.chips.map((chip) => (
              <span key={chip} className="fsc-skill-chip">{chip}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Projects content ─────────────────────────────────────────── */
function ProjectsContent() {
  const projects = [
    {
      title: "BuckeyeMeal Planner",
      period: "March 2026",
      desc: "2nd Place ($750) at the IBM SkillsBuild AI Hackathon. AI-powered platform integrating 7 OSU meal plans with real-time Nutrislice API data across 34 campus dining locations — serverless on IBM Cloud Code Engine with 200+ test cases.",
      tags: ["Flask", "Gemini 2.5 Flash", "IBM Cloud", "Docker"],
      image: "/projects/project5.png",
      demo: "https://buckeyemealplanner.com/",
      github: "https://github.com/anshpachauri23",
    },
    {
      title: "RecipeShare — Social Recipe Network",
      period: "October 2025",
      desc: "Full-stack social platform with 15+ features (auth, real-time notifications, follow system, liking). Go + PostgreSQL REST APIs with JWT auth, AWS S3 media storage, and Next.js / Tailwind CSS frontend for 100+ concurrent users.",
      tags: ["Next.js", "TypeScript", "Go", "PostgreSQL", "AWS S3", "AWS RDS", "Tailwind CSS"],
      image: "/projects/project1.png",
      demo: "https://recipe-social-media-personal.vercel.app/auth/login",
      github: "https://github.com/anshpachauri23",
    },
    {
      title: "E-commerce Platform",
      period: "Aug – Nov 2025",
      desc: "Serverless microservices backend handling 500+ concurrent users with sub-200ms response times. Decoupled checkout, payment, and inventory services via AWS Lambda and API Gateway — reduced cart abandonment by 25%.",
      tags: ["React.js", "Node.js", "AWS Lambda", "DynamoDB", "API Gateway"],
      image: "/projects/project2.png",
      demo: "https://jear-ecommerce-cse-5234.vercel.app/",
      github: "https://github.com/anshpachauri23",
    },
    {
      title: "Real-Time Market Sentiment Engine",
      period: "November 2025",
      desc: "Distributed streaming architecture ingesting financial news via Kafka and Docker. Sentiment analysis with Vector Search (RAG) and FAISS correlates live events with historical market context, delivering sub-second trend indicators to a React dashboard.",
      tags: ["Python", "Docker", "Kafka", "FAISS", "React", "RAG"],
      image: "/projects/project4.png",
      demo: null,
      github: "https://github.com/anshpachauri23",
    },
    {
      title: "Core Language Interpreter",
      period: "Jan – Apr 2025",
      desc: "Production-grade interpreter with lexical analysis, parsing, and recursive-descent execution processing 1,000+ lines/sec. Reference-counting garbage collection and syntax checks ensure 99.9% parsing accuracy.",
      tags: ["Java", "Compiler Design", "Memory Management"],
      image: null,
      demo: null,
      github: "https://github.com/anshpachauri23",
    },
    {
      title: "PeerEval — Academic Assessment Platform",
      period: "Aug – Dec 2024",
      desc: "Full-stack CRUD platform for 200+ students. Reduced submission errors by 35%, improved SQL query speeds by 2s/request, and presented technical progress to peers and instructors throughout the development cycle.",
      tags: ["Ruby on Rails 7.2", "SQLite3", "Bootstrap 5"],
      image: "/projects/project3.png",
      demo: null,
      github: "https://github.com/anshpachauri23",
    },
  ];

  return (
    <div>
      <h2 className="fsc-heading">Projects</h2>
      <span className="fsc-sub-heading">Selected work</span>
      {projects.map((p) => (
        <div key={p.title} className="fsc-proj-card">
          {p.image && (
            <img src={p.image} alt={p.title} className="fsc-proj-img" />
          )}
          <div className="fsc-proj-body">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "8px", flexWrap: "wrap" }}>
              <div className="fsc-proj-title">{p.title}</div>
              <span style={{ fontFamily: "'VT323', monospace", fontSize: "11px", color: "rgba(255,255,255,0.22)", whiteSpace: "nowrap" }}>{p.period}</span>
            </div>
            <div className="fsc-proj-desc">{p.desc}</div>
            <div className="fsc-tags" style={{ marginBottom: "6px" }}>
              {p.tags.map((t) => <span key={t} className="fsc-tag">{t}</span>)}
            </div>
            <div className="fsc-proj-links">
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer" className="fsc-proj-link">
                  Live Demo
                </a>
              )}
              <a href={p.github} target="_blank" rel="noreferrer" className="fsc-proj-link">
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Contact content ──────────────────────────────────────────── */
function ContactContent() {
  return (
    <div>
      <h2 className="fsc-heading">Contact</h2>
      <span className="fsc-sub-heading">Get in touch</span>

      <p className="fsc-body-text">
        Open to full-time roles starting May 2026 and interesting collaborations.
        The fastest way to reach me is email.
      </p>

      <div style={{ marginTop: "8px" }}>
        {[
          { icon: "✉", label: "Email", value: "Anshpachauri2005@gmail.com", href: "mailto:Anshpachauri2005@gmail.com" },
          { icon: "📞", label: "Phone", value: "+1 614-493-9393", href: "tel:+16144939393" },
          { icon: "💼", label: "LinkedIn", value: "ansh-pachauri", href: "https://linkedin.com/in/ansh-pachauri" },
          { icon: "🐙", label: "GitHub", value: "anshpachauri23", href: "https://github.com/anshpachauri23" },
          { icon: "📍", label: "Location", value: "Columbus, OH", href: null },
        ].map(({ icon, label, value, href }) => (
          <div key={label} className="fsc-contact-item">
            <div className="fsc-contact-icon">{icon}</div>
            <div>
              <div className="fsc-contact-label">{label}</div>
              {href ? (
                <a href={href} target={href.startsWith("mailto") || href.startsWith("tel") ? undefined : "_blank"} rel="noreferrer" className="fsc-contact-value fsc-contact-link">
                  {value}
                </a>
              ) : (
                <div className="fsc-contact-value">{value}</div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "22px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <a href="/Ansh_Pachauri_resume_US.pdf" download className="fsc-btn">
          🇺🇸 US Résumé
        </a>
        <a href="/Ansh_Pachauri_resume_IND.pdf" download className="fsc-btn">
          🇮🇳 India Résumé
        </a>
      </div>
    </div>
  );
}

/* ── Section router ───────────────────────────────────────────── */
function SectionContent({ id }) {
  switch (id) {
    case "about":      return <AboutContent />;
    case "experience": return <ExperienceContent />;
    case "skills":     return <SkillsContent />;
    case "projects":   return <ProjectsContent />;
    case "contact":    return <ContactContent />;
    default:           return <AboutContent />;
  }
}

/* ═══════════════════════════════════════════════════════════════
   Main component
   ═══════════════════════════════════════════════════════════════ */
export const FullScreenComputer = () => {
  const [active, setActive] = useState("about");
  const [mouseMode, setMouseMode] = useState(false);
  const [cursorPos,   setCursorPos]   = useState({ x: 0, y: 0 });
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const crtRef    = useRef(null);
  const mouseRef  = useRef(null);
  const dragState = useRef(null); // null = not dragging

  // Max travel of the decorative mouse on the pad (px)
  const PAD_MAX_X = 44;
  const PAD_MAX_Y = 12;

  /* One-time global listener — uses dragState ref to avoid re-registering */
  useEffect(() => {
    const onMove = (e) => {
      if (!dragState.current) return;
      const { startX, startY, startOX, startOY, startCX, startCY, crtW, crtH } = dragState.current;

      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      // Decorative mouse: clamp to pad bounds
      const newOX = Math.max(-PAD_MAX_X, Math.min(PAD_MAX_X, startOX + dx));
      const newOY = Math.max(-PAD_MAX_Y, Math.min(PAD_MAX_Y, startOY + dy));
      setMouseOffset({ x: newOX, y: newOY });

      // Virtual cursor: scaled so full pad travel = full CRT coverage
      const sensX = (crtW - 22) / (2 * PAD_MAX_X);
      const sensY = (crtH - 26) / (2 * PAD_MAX_Y);
      setCursorPos({
        x: Math.max(0, Math.min(crtW - 22, startCX + dx * sensX)),
        y: Math.max(0, Math.min(crtH - 26, startCY + dy * sensY)),
      });
    };

    const onUp = () => { dragState.current = null; };

    const onDown = (e) => {
      if (mouseRef.current && !mouseRef.current.contains(e.target)) {
        dragState.current = null;
        setMouseMode(false);
        setMouseOffset({ x: 0, y: 0 });
      }
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup",   onUp);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup",   onUp);
      document.removeEventListener("mousedown", onDown);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleMouseDown = (e) => {
    e.preventDefault();
    const rect = crtRef.current?.getBoundingClientRect();
    const crtW = rect?.width  ?? 800;
    const crtH = rect?.height ?? 400;

    if (!mouseMode) {
      // First interaction: activate and centre everything
      setMouseMode(true);
      setMouseOffset({ x: 0, y: 0 });
      const initCX = (crtW - 22) / 2;
      const initCY = (crtH - 26) / 2;
      setCursorPos({ x: initCX, y: initCY });
      dragState.current = { startX: e.clientX, startY: e.clientY,
        startOX: 0, startOY: 0, startCX: initCX, startCY: initCY, crtW, crtH };
    } else {
      dragState.current = { startX: e.clientX, startY: e.clientY,
        startOX: mouseOffset.x, startOY: mouseOffset.y,
        startCX: cursorPos.x,   startCY: cursorPos.y, crtW, crtH };
    }
  };

  return (
    <div className="fsc-root">
      {/* ── Computer body ─────────────────────────────────────── */}
      <div className="fsc-body">
        {/* Side cables alongside the monitor */}
        <div className="fsc-side-cable fsc-side-cable-left" />
        <div className="fsc-side-cable fsc-side-cable-right" />
        <div className="fsc-bezel">
          {/* Screen inset */}
          <div className="fsc-screen-frame">
            <div
              ref={crtRef}
              className={`fsc-crt${mouseMode ? " mouse-mode" : ""}`}
            >
              {/* Virtual cursor overlay */}
              {mouseMode && (
                <div className="fsc-virtual-cursor" style={{ left: cursorPos.x, top: cursorPos.y }}>
                  <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
                    <polygon
                      points="3,2 3,20 7,15 10.5,23 13.5,21.5 10,14 17,14"
                      fill="white"
                      stroke="rgba(0,0,0,0.55)"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
              {/* OS */}
              <div className="fsc-os">
                {/* Title bar */}
                <div className="fsc-titlebar">
                  <div className="fsc-titlebar-dots">
                    <div className="fsc-dot red" />
                    <div className="fsc-dot amber" />
                    <div className="fsc-dot green" />
                  </div>
                  <div className="fsc-titlebar-title">ansh-os v1.0</div>
                  <div className="fsc-titlebar-right">
                    {new Date().toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
                  </div>
                </div>

                {/* Mobile tabs */}
                <div className="fsc-mobile-tabs">
                  <div className="fsc-mobile-tabs-inner">
                    {NAV.map((n) => (
                      <button
                        key={n.id}
                        className={`fsc-mobile-tab${active === n.id ? " active" : ""}`}
                        onClick={() => setActive(n.id)}
                      >
                        {n.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* OS body */}
                <div className="fsc-os-body">
                  {/* Sidebar */}
                  <div className="fsc-sidebar">
                    <div className="fsc-sidebar-label">Navigation</div>
                    {NAV.map((n) => (
                      <button
                        key={n.id}
                        className={`fsc-nav-item${active === n.id ? " active" : ""}`}
                        onClick={() => setActive(n.id)}
                      >
                        <div className="fsc-nav-dot" />
                        {n.label}
                      </button>
                    ))}

                    <div className="fsc-sidebar-footer">
                      <div className="fsc-sidebar-name">Ansh Pachauri</div>
                      <div className="fsc-sidebar-name" style={{ opacity: 0.6 }}>CS&amp;E · OSU · 2026</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="fsc-content-area">
                    <SectionContent id={active} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls bar */}
          <div className="fsc-controls-bar">
            <div className="fsc-floppy-slot" />
            <div className="fsc-logo-badge" />
            <span className="fsc-model-text">ANSH-PC 128K</span>
            <div className="fsc-resume-btns">
              <a href="/Ansh_Pachauri_resume_US.pdf" download className="fsc-resume-btn">
                🇺🇸 US Résumé
              </a>
              <a href="/Ansh_Pachauri_resume_IND.pdf" download className="fsc-resume-btn">
                🇮🇳 India Résumé
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Desk row: keyboard (left) + mouse (right) ─────────── */}
      <div className="fsc-desk-row">

        {/* Keyboard section */}
        <div className="fsc-kb-side">
          {/* Coiled cable going up to monitor */}
          <div className="fsc-kb-cable">
            <div className="fsc-cable-straight" />
            <svg width="24" height="120" viewBox="0 0 24 120" fill="none" style={{ display: "block" }}>
              <path
                d="M12 0 Q21 15,12 30 Q3 45,12 60 Q21 75,12 90 Q3 105,12 120"
                stroke="#8a7f6f" strokeWidth="5" strokeLinecap="round" fill="none"
              />
            </svg>
          </div>
          {/* Keyboard */}
          <div className="fsc-keyboard-wrap">
            {KB_ROWS.map((row, i) => (
              <KbRow key={i} pattern={row} />
            ))}
          </div>
        </div>

        {/* Mouse section */}
        <div className="fsc-mouse-side">
          <div className="fsc-mouse-assembly">
            {/* Coiled cable going up to monitor */}
            <div className="fsc-mouse-cable">
              <div className="fsc-mouse-cable-straight" />
              <svg width="24" height="120" viewBox="0 0 24 120" fill="none" style={{ display: "block" }}>
                <path
                  d="M12 0 Q21 15,12 30 Q3 45,12 60 Q21 75,12 90 Q3 105,12 120"
                  stroke="#8a7f6f" strokeWidth="5" strokeLinecap="round" fill="none"
                />
              </svg>
            </div>
            {/* Mouse pad + mouse */}
            <div className="fsc-mousepad">
              <div
                ref={mouseRef}
                className={`fsc-mouse${mouseMode ? " fsc-mouse-active" : ""}`}
                onMouseDown={handleMouseDown}
                style={{ transform: `translate(${mouseOffset.x}px, ${mouseOffset.y}px)` }}
                title="Click and drag to control on-screen cursor"
              >
                <div className="fsc-mouse-seam" />
                <div className="fsc-mouse-scroll" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

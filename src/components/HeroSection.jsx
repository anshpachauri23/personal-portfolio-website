import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

const TERMINAL_LINES = [
  '> initializing profile...',
  '> name: "Ansh Pachauri"',
  '> school: "The Ohio State University"',
  '> major: "Computer Science & Eng."',
  '> gpa: 3.6 / 4.0',
  '> focus: ["AI", "Full-Stack", "AWS"]',
  '> published: "Fake News Detection w/ ML"',
  '> citations: 22',
  '> status: open to opportunities',
  '>',
  '> ready.',
];

const RetroTerminal = () => {
  const outputRef = useRef(null);

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let timeoutId;
    const el = outputRef.current;
    if (!el) return;

    const typeLine = () => {
      if (!outputRef.current) return;
      if (lineIndex >= TERMINAL_LINES.length) return;
      const line = TERMINAL_LINES[lineIndex];
      if (charIndex < line.length) {
        el.textContent = el.textContent.slice(0, -1);
        el.textContent += line[charIndex] + '█';
        charIndex++;
        timeoutId = setTimeout(typeLine, 25 + Math.random() * 30);
      } else {
        el.textContent = el.textContent.slice(0, -1) + '\n█';
        lineIndex++;
        charIndex = 0;
        timeoutId = setTimeout(typeLine, 200);
      }
    };

    el.textContent = '█';
    typeLine();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div style={{
      background: '#1a1d21',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 12px 48px rgba(0,0,0,0.20)',
      maxWidth: '480px',
      width: '100%',
      position: 'relative',
    }}>
      {/* Title bar */}
      <div style={{
        background: '#2d3139',
        padding: '10px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e', display: 'inline-block' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
        <span style={{
          marginLeft: 'auto',
          fontFamily: "'VT323', monospace",
          fontSize: '14px',
          color: 'rgba(255,255,255,0.3)',
          letterSpacing: '1px',
        }}>
          profile.sh
        </span>
      </div>

      {/* CRT scanlines */}
      <div style={{
        position: 'absolute',
        top: 40, left: 0, right: 0, bottom: 0,
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* Output */}
      <pre ref={outputRef} style={{
        fontFamily: "'VT323', 'Courier New', monospace",
        fontSize: '16px',
        lineHeight: '1.75',
        color: '#c8d0d8',
        padding: '20px 24px 28px',
        margin: 0,
        minHeight: '260px',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
        position: 'relative',
        zIndex: 2,
      }} />
    </div>
  );
};

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center px-4 pt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div className="text-left">
            <p
              className="opacity-0 animate-fade-in mb-3 tracking-widest uppercase text-muted-foreground"
              style={{ fontFamily: "'VT323', monospace", fontSize: '0.95rem', letterSpacing: '0.2em' }}
            >
              Computer Science & Engineering
            </p>

            <h1
              className="opacity-0 animate-fade-in-delay-1 leading-none mb-6"
              style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', letterSpacing: '-2px', fontWeight: 500 }}
            >
              <span style={{ display: 'block' }}>Hi, I'm</span>
              <span style={{ display: 'block', fontStyle: 'italic' }}>Ansh Pachauri.</span>
            </h1>

            <p
              className="opacity-0 animate-fade-in-delay-2 text-muted-foreground mb-8 max-w-md"
              style={{ fontSize: '1.2rem', lineHeight: 1.55 }}
            >
              CS student at The Ohio State University building AI systems,
              full-stack applications, and cloud-native tools. Passionate about
              turning hard problems into elegant software.
            </p>

            <div className="opacity-0 animate-fade-in-delay-3 flex flex-wrap gap-4 items-center">
              <a href="#projects" className="cosmic-button">View My Work</a>
              <a
                href="#contact"
                style={{
                  fontFamily: "'EB Garamond', serif",
                  fontSize: '1.1rem',
                  color: 'hsl(var(--muted-foreground))',
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px',
                }}
              >
                Get in touch
              </a>
            </div>

            {/* Stats row */}
            <div
              className="opacity-0 animate-fade-in-delay-4 mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8"
              style={{ maxWidth: '400px' }}
            >
              {[
                { label: 'GPA', value: '3.6 / 4.0' },
                { label: 'Roles', value: '3 internships' },
                { label: 'Citations', value: '22' },
              ].map(({ label, value }) => (
                <div key={label} className="text-left">
                  <div style={{ fontFamily: "'VT323', monospace", fontSize: '0.75rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'hsl(var(--muted-foreground))' }}>
                    {label}
                  </div>
                  <div style={{ fontFamily: "'VT323', monospace", fontSize: '1.35rem', color: 'hsl(var(--foreground))' }}>
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — terminal */}
          <div className="flex justify-center lg:justify-end opacity-0 animate-fade-in-delay-2">
            <RetroTerminal />
          </div>

        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <span style={{ fontFamily: "'VT323', monospace", fontSize: '0.8rem', letterSpacing: '3px', color: 'hsl(var(--muted-foreground))', textTransform: 'uppercase' }}>
          scroll
        </span>
        <ArrowDown className="h-4 w-4 text-muted-foreground" />
      </div>
    </section>
  );
};

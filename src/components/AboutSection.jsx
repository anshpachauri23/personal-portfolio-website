import { Briefcase, Code, User } from "lucide-react";

const SectionLabel = ({ number, title }) => (
  <div className="flex items-baseline gap-4 mb-12 justify-center">
    <span style={{ fontFamily: "'VT323', monospace", fontSize: '1rem', letterSpacing: '2px', color: 'hsl(var(--muted-foreground))', textTransform: 'uppercase' }}>
      {number}
    </span>
    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, letterSpacing: '-1px', lineHeight: 1 }}>
      {title}
    </h2>
  </div>
);

export const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-4 relative border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <SectionLabel number="01 —" title="About Me" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start text-left">
          <div className="space-y-5">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 500, fontStyle: 'italic' }}>
              Computer Science Student & AI Enthusiast
            </h3>
            <p className="text-muted-foreground" style={{ lineHeight: 1.65 }}>
              I'm a Computer Science and Engineering student at The Ohio State University
              with a 3.6 GPA, specializing in Software Engineering. Passionate about AI,
              Machine Learning, and cloud technologies, with hands-on experience in AWS
              services and full-stack development. Interned at NMT Security and Deloitte.
            </p>
            <p className="text-muted-foreground" style={{ lineHeight: 1.65 }}>
              I've published research on "Fake News Detection using Machine Learning and
              Natural Language Processing" with 22 citations. Founder and president of
              The Quantum Computing Club at Ohio State, and Resident Advisor with a 95%
              satisfaction rate.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#contact" className="cosmic-button">Get In Touch</a>
              <a
                href="/resume.pdf"
                download="Ansh_Pachauri_Resume.pdf"
                style={{
                  fontFamily: "'EB Garamond', serif",
                  fontSize: '1.1rem',
                  color: 'hsl(var(--muted-foreground))',
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px',
                  alignSelf: 'center',
                }}
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: Code,
                title: "AI & Machine Learning",
                desc: "Building intelligent systems with Python, TensorFlow, and AWS services for real-world applications.",
              },
              {
                icon: User,
                title: "Full-Stack Development",
                desc: "Building end-to-end applications with React, Node.js, Ruby on Rails, and cloud technologies.",
              },
              {
                icon: Briefcase,
                title: "Leadership & Research",
                desc: "Leading quantum computing initiatives and conducting research with published papers and conference presentations.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="gradient-border p-5 card-hover text-left" style={{ borderRadius: '6px' }}>
                <div className="flex items-start gap-4">
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: 'hsl(var(--secondary))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={18} style={{ color: 'hsl(var(--primary))' }} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.2rem' }}>{title}</h4>
                    <p className="text-muted-foreground" style={{ fontSize: '1rem', lineHeight: 1.5 }}>{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

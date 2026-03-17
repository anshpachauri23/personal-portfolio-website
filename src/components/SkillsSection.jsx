import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "Python",        level: 95, category: "languages" },
  { name: "Java",          level: 90, category: "languages" },
  { name: "JavaScript",    level: 90, category: "languages" },
  { name: "TypeScript",    level: 85, category: "languages" },
  { name: "Go",            level: 80, category: "languages" },
  { name: "Ruby",          level: 85, category: "languages" },
  { name: "SQL",           level: 85, category: "languages" },
  { name: "HTML/CSS",      level: 90, category: "languages" },
  { name: "C",             level: 80, category: "languages" },
  { name: "React",         level: 90, category: "frameworks" },
  { name: "Next.js",       level: 85, category: "frameworks" },
  { name: "Node.js",       level: 85, category: "frameworks" },
  { name: "Ruby on Rails", level: 85, category: "frameworks" },
  { name: "Tailwind CSS",  level: 90, category: "frameworks" },
  { name: "TensorFlow",    level: 85, category: "frameworks" },
  { name: "OpenCV",        level: 80, category: "frameworks" },
  { name: "NumPy",         level: 90, category: "frameworks" },
  { name: "Bootstrap",     level: 80, category: "frameworks" },
  { name: "AWS",           level: 90, category: "cloud" },
  { name: "AWS Lambda",    level: 85, category: "cloud" },
  { name: "AWS Bedrock",   level: 80, category: "cloud" },
  { name: "AWS S3",        level: 85, category: "cloud" },
  { name: "AWS RDS",       level: 80, category: "cloud" },
  { name: "PostgreSQL",    level: 85, category: "cloud" },
  { name: "DynamoDB",      level: 80, category: "cloud" },
  { name: "Machine Learning", level: 90, category: "cloud" },
  { name: "Git/GitHub",    level: 95, category: "cloud" },
  { name: "Docker",        level: 75, category: "cloud" },
];

const categories = ["all", "languages", "frameworks", "cloud"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = skills.filter(
    (s) => activeCategory === "all" || s.category === activeCategory
  );

  return (
    <section id="skills" className="py-28 px-4 relative border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-baseline gap-4 mb-12 justify-center">
          <span style={{ fontFamily: "'VT323', monospace", fontSize: '1rem', letterSpacing: '2px', color: 'hsl(var(--muted-foreground))', textTransform: 'uppercase' }}>
            03 —
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, letterSpacing: '-1px', lineHeight: 1 }}>
            Skills
          </h2>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: "'VT323', monospace",
                fontSize: '1.05rem',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                padding: '4px 18px',
                border: '1px solid hsl(var(--border))',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                background: activeCategory === cat ? 'hsl(var(--foreground))' : 'hsl(var(--background))',
                color: activeCategory === cat ? 'hsl(var(--background))' : 'hsl(var(--foreground))',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((skill) => (
            <div
              key={skill.name}
              className="gradient-border card-hover text-left"
              style={{ padding: '1.1rem 1.25rem', borderRadius: '6px' }}
            >
              <div className="flex justify-between items-baseline mb-3">
                <h3 style={{ fontSize: '1.1rem', fontWeight: 500 }}>{skill.name}</h3>
                <span style={{ fontFamily: "'VT323', monospace", fontSize: '0.95rem', color: 'hsl(var(--muted-foreground))' }}>
                  {skill.level}%
                </span>
              </div>
              <div style={{ width: '100%', height: '3px', background: 'hsl(var(--border))', borderRadius: '2px', overflow: 'hidden' }}>
                <div
                  style={{
                    width: skill.level + '%',
                    height: '100%',
                    background: 'hsl(var(--primary))',
                    borderRadius: '2px',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

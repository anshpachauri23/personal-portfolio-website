import { Building, Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "NMT Security",
    position: "Product Development and AI Integration Intern",
    location: "Tinton Falls, NJ",
    duration: "May 2025 – Aug 2025",
    description: "Architected and deployed a full-stack AI chatbot on AWS using Python and Lambda, integrating AWS Bedrock for advanced NLU — reducing customer query resolution time by 40% and handling 1,000+ queries/day at 95% accuracy. Automated cybersecurity threat analysis with Python scripts integrated with VirusTotal/OTX APIs, reducing manual analysis by 15 hrs/week and improving threat detection accuracy by 30%.",
    technologies: ["Python", "AWS Lambda", "AWS Bedrock", "AWS", "Cybersecurity", "VirusTotal", "OTX"],
  },
  {
    id: 2,
    company: "Deloitte",
    position: "Technology Consulting Virtual Intern",
    location: "Remote",
    duration: "Jun 2021 – Sep 2021",
    description: "Expedited team document search by 10 hours/month by migrating 100+ reports to a centralized cloud repository. Reduced client deployment delays by 30% and saved $5K+ annually by diagnosing integration bottlenecks and implementing AWS automation tools.",
    technologies: ["AWS", "Cloud Migration", "Automation", "Consulting"],
  },
  {
    id: 3,
    company: "Verzeo Edutech",
    position: "Student Intern",
    location: "Remote",
    duration: "Apr 2021 – May 2021",
    description: "Delivered 4 AI projects (facial recognition, traffic sign detection) with 90%+ accuracy using Python/CNNs, adopted by 5+ peers. Led 20 peers to complete projects 2 weeks early using Agile task delegation.",
    technologies: ["Python", "CNNs", "Computer Vision", "Agile"],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-28 px-4 relative border-t border-border" style={{ background: 'hsl(var(--secondary) / 0.3)' }}>
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-baseline gap-4 mb-12 justify-center">
          <span style={{ fontFamily: "'VT323', monospace", fontSize: '1rem', letterSpacing: '2px', color: 'hsl(var(--muted-foreground))', textTransform: 'uppercase' }}>
            02 —
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, letterSpacing: '-1px', lineHeight: 1 }}>
            Work Experience
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div key={exp.id} className="gradient-border card-hover text-left" style={{ borderRadius: '6px', padding: '1.75rem' }}>
              <div className="flex flex-col md:flex-row md:items-start gap-5">
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: 'hsl(var(--background))',
                  border: '1px solid hsl(var(--border))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Building size={18} style={{ color: 'hsl(var(--primary))' }} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'hsl(var(--primary))', lineHeight: 1.2 }}>
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-2 mt-0.5" style={{ fontSize: '1.05rem', fontWeight: 500 }}>
                        <Briefcase size={14} />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-1 mt-1 md:mt-0">
                      <div className="flex items-center gap-1 text-muted-foreground" style={{ fontFamily: "'VT323', monospace", fontSize: '1rem' }}>
                        <Calendar size={13} />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground" style={{ fontFamily: "'VT323', monospace", fontSize: '1rem' }}>
                        <MapPin size={13} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontFamily: "'VT323', monospace",
                          fontSize: '0.95rem',
                          padding: '1px 8px',
                          border: '1px solid hsl(var(--border))',
                          background: 'hsl(var(--background))',
                          color: 'hsl(var(--foreground))',
                          lineHeight: 1.6,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-muted-foreground" style={{ lineHeight: 1.6, fontSize: '1rem' }}>
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

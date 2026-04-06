import { useState, useEffect } from "react";
import { ArrowRight, ExternalLink, Github, X } from "lucide-react";

const projects = [
  {
    id: 7,
    title: "Tech Asset & Service Management Portal",
    description: "Internal business application for managing company technology assets and service requests. Features role-based approvals, full Docker compose setup, and deployment to GCP Cloud Run.",
    image: "/projects/project6.png",
    tags: ["Angular 17", "Java 21", "Spring Boot", "PostgreSQL", "Docker", "GCP"],
    demoUrl: "https://tech-asset-portal-frontend-387813478263.us-central1.run.app/",
    githubUrl: "https://github.com/anshpachauri23/Portfolio",
  },
  {
    id: 1,
    title: "RecipeShare — Social Recipe Network",
    description: "Full-stack social media platform for recipe sharing with 15+ features: authentication, follow system, real-time notifications, commenting, and liking. Built with Go + PostgreSQL backend, JWT auth, AWS S3 for media, and Next.js frontend supporting 100+ concurrent users.",
    image: "/projects/project1.png",
    tags: ["Next.js", "TypeScript", "Go", "PostgreSQL", "AWS S3", "AWS RDS", "Tailwind CSS"],
    demoUrl: "https://recipe-social-media-personal.vercel.app/auth/login",
    githubUrl: "https://github.com/anshpachauri23/Portfolio",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Scalable serverless backend (Node.js, AWS Lambda) handling 500+ concurrent users with sub-200ms response times. Complete buying workflow: checkout, payment, confirmation — reduced cart abandonment by 25%.",
    image: "/projects/project2.png",
    tags: ["React.js", "Node.js", "AWS Lambda", "DynamoDB", "API Gateway"],
    demoUrl: "https://jear-ecommerce-cse-5234.vercel.app/",
    githubUrl: "https://github.com/anshpachauri23/Portfolio",
  },
  {
    id: 3,
    title: "Real-Time Market Sentiment Engine",
    description: "Distributed streaming architecture ingesting financial news via Apache Kafka and Docker. Sentiment analysis with Vector Search (RAG) and FAISS correlates live events with historical market context, delivering sub-second trend indicators to a React dashboard.",
    image: "/projects/project4.png",
    tags: ["Python", "Docker", "Kafka", "FAISS", "React", "RAG"],
    demoUrl: "#",
    githubUrl: "https://github.com/anshpachauri23/Portfolio",
  },
  {
    id: 4,
    title: "Core Language Interpreter",
    description: "Production-grade interpreter with lexical analysis, parsing, and recursive-descent execution processing 1,000+ lines/sec. Includes robust reference-counting garbage collection with 99.9% parsing accuracy.",
    image: null,
    tags: ["Java", "Compiler Design", "Memory Management", "Garbage Collection"],
    demoUrl: "#",
    githubUrl: "https://github.com/anshpachauri23/Portfolio",
  },
  {
    id: 5,
    title: "PeerEval — Academic Assessment Platform",
    description: "Full-stack CRUD platform for 200+ students — reduced submission errors by 35%, improved SQL query speeds by 2s/request, and delivered technical progress presentations throughout the development cycle.",
    image: "/projects/project3.png",
    tags: ["Ruby on Rails 7.2", "SQLite3", "Bootstrap 5"],
    demoUrl: "#",
    githubUrl: "https://github.com/anshpachauri23/Portfolio",
  },
  {
    id: 6,
    title: "Buckeye Meal Planner",
    description: "Full-stack meal planning web app for Ohio State students with dining hall menu integration, weekly plan builder, and nutritional tracking. Supports 500+ concurrent users with optimized query performance.",
    image: "/projects/project5.png",
    tags: ["Full-Stack", "React", "Node.js", "PostgreSQL", "AWS"],
    demoUrl: "https://buckeyemealplanner.com/",
    githubUrl: "https://github.com/anshpachauri23/Portfolio",
  },
];

export const ProjectsSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleEscape = (e) => { if (e.key === "Escape") setSelectedImage(null); };
    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <section id="projects" className="py-28 px-4 relative border-t border-border" style={{ background: 'hsl(var(--secondary) / 0.3)' }}>
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-baseline gap-4 mb-4 justify-center">
          <span style={{ fontFamily: "'VT323', monospace", fontSize: '1rem', letterSpacing: '2px', color: 'hsl(var(--muted-foreground))', textTransform: 'uppercase' }}>
            04 —
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, letterSpacing: '-1px', lineHeight: 1 }}>
            Projects
          </h2>
        </div>

        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto" style={{ fontSize: '1.05rem' }}>
          A selection of recent work — each built with care for performance and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="retro-project-card text-left flex flex-col"
              style={{ borderRadius: '6px', overflow: 'hidden', background: 'hsl(var(--card))' }}
            >
              {project.image && (
                <div
                  className="h-44 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage({ src: project.image, alt: project.title })}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}

              <div className="p-5 flex flex-col flex-1">
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', lineHeight: 1.3 }}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-1" style={{ fontSize: '0.95rem', lineHeight: 1.55 }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "'VT323', monospace",
                        fontSize: '0.9rem',
                        padding: '1px 7px',
                        border: '1px solid hsl(var(--border))',
                        background: 'hsl(var(--background))',
                        lineHeight: 1.6,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.demoUrl !== "#" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/anshpachauri23/Portfolio"
            target="_blank"
            rel="noreferrer"
            className="cosmic-button inline-flex items-center gap-2"
          >
            View all on GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain rounded"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

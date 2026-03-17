import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t border-border">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p style={{ fontFamily: "'EB Garamond', serif", fontSize: '1rem', color: 'hsl(var(--muted-foreground))' }}>
          © {new Date().getFullYear()} Ansh Pachauri. All rights reserved.
        </p>
        <a
          href="#hero"
          style={{
            width: 36,
            height: 36,
            border: '1px solid hsl(var(--border))',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'hsl(var(--muted-foreground))',
            transition: 'all 0.2s',
          }}
          className="hover:border-foreground hover:text-foreground"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
};

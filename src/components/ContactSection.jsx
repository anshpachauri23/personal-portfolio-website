import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const inputStyle = {
  width: '100%',
  padding: '10px 14px',
  border: '1px solid hsl(var(--border))',
  background: 'hsl(var(--background))',
  color: 'hsl(var(--foreground))',
  fontFamily: "'EB Garamond', serif",
  fontSize: '1rem',
  borderRadius: '4px',
  outline: 'none',
};

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    window.location.href = `mailto:anshpachauri2005@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setIsSubmitting(true);
    setTimeout(() => {
      toast({ title: "Email client opened!", description: "Your message is pre-filled and ready to send." });
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section id="contact" className="py-28 px-4 relative border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-baseline gap-4 mb-4 justify-center">
          <span style={{ fontFamily: "'VT323', monospace", fontSize: '1rem', letterSpacing: '2px', color: 'hsl(var(--muted-foreground))', textTransform: 'uppercase' }}>
            05 —
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, letterSpacing: '-1px', lineHeight: 1 }}>
            Get In Touch
          </h2>
        </div>

        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto" style={{ fontSize: '1.05rem' }}>
          Have a project in mind or want to collaborate? I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          {/* Contact info */}
          <div className="space-y-8">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 500, fontStyle: 'italic' }}>Contact Information</h3>

            <div className="space-y-5">
              {[
                { icon: Mail, label: "Email", value: "Anshpachauri2005@gmail.com", href: "mailto:Anshpachauri2005@gmail.com" },
                { icon: Phone, label: "Phone", value: "+1 (614) 493-9393", href: "tel:+16144939393" },
                { icon: MapPin, label: "Location", value: "Columbus, OH, USA", href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: 'hsl(var(--secondary))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={16} style={{ color: 'hsl(var(--primary))' }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 500, fontSize: '1rem' }}>{label}</div>
                    {href ? (
                      <a href={href} className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: '1rem' }}>
                        {value}
                      </a>
                    ) : (
                      <div className="text-muted-foreground" style={{ fontSize: '1rem' }}>{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <div style={{ fontWeight: 500, marginBottom: '1rem' }}>Connect</div>
              <div className="flex gap-5">
                <a href="https://www.linkedin.com/in/ansh-pachauri" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin size={22} />
                </a>
                <a href="https://github.com/anshpachauri23/Portfolio" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Github size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="gradient-border" style={{ padding: '2rem', borderRadius: '6px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 500, fontStyle: 'italic', marginBottom: '1.5rem' }}>
              Send a Message
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label style={{ display: 'block', fontFamily: "'VT323', monospace", fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'hsl(var(--muted-foreground))', marginBottom: '6px' }}>
                  Your Name
                </label>
                <input type="text" name="name" required placeholder="John Smith" style={inputStyle} />
              </div>
              <div>
                <label style={{ display: 'block', fontFamily: "'VT323', monospace", fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'hsl(var(--muted-foreground))', marginBottom: '6px' }}>
                  Email
                </label>
                <input type="email" name="email" required placeholder="john@example.com" style={inputStyle} />
              </div>
              <div>
                <label style={{ display: 'block', fontFamily: "'VT323', monospace", fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'hsl(var(--muted-foreground))', marginBottom: '6px' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Hello, I'd like to talk about..."
                  style={{ ...inputStyle, resize: 'none' }}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="cosmic-button w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Opening email client..." : "Send Message"}
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

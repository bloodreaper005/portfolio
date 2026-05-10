import { Mail } from "lucide-react";
import { socials } from "../data";

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Mail: ({ size = 15 }) => <Mail size={size} />,
};

const NAV_SECTIONS = ["About", "Experience", "Projects", "Skills", "Education"];

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--bg-border)", padding: "64px 0 40px" }}>
      <div style={{ maxWidth: "1024px", margin: "0 auto", padding: "0 24px" }}>

        {/* 3-column grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px", marginBottom: "48px" }}
          className="md:!grid-cols-[2fr_1fr_1fr]"
        >
          {/* Col 1: Bio */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #c8b89a, #7a7570)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#0f0f0f",
                  fontFamily: "Inter, system-ui, sans-serif",
                  letterSpacing: "0.05em",
                  flexShrink: 0,
                }}
              >
                SP
              </div>
              <span style={{
                fontFamily: "Lora, Georgia, serif",
                fontSize: "16px",
                fontWeight: 600,
                color: "var(--text)",
              }}>
                Sanat Pednekar
              </span>
            </div>
            <p style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "14px",
              lineHeight: 1.7,
              color: "var(--text-muted)",
              margin: "0 0 20px",
              maxWidth: "300px",
            }}>
              M.S. Mechanical Engineering candidate at UC San Diego. Building autonomous flight systems, intelligent machines, and embedded hardware.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              {socials.map(({ label, href, icon }) => {
                const Icon = iconMap[icon];
                return (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "34px",
                      height: "34px",
                      borderRadius: "8px",
                      background: "var(--bg-raised)",
                      border: "1px solid var(--bg-border)",
                      color: "var(--text-muted)",
                      transition: "color 0.2s ease, border-color 0.2s ease",
                      textDecoration: "none",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--bg-border)";
                    }}
                  >
                    {Icon && <Icon size={15} />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <p className="label" style={{ marginBottom: "16px" }}>Navigation</p>
            <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {NAV_SECTIONS.map(section => (
                <a
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontSize: "14px",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  {section}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 3: Contact */}
          <div>
            <p className="label" style={{ marginBottom: "16px" }}>Contact</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontSize: "14px",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  {label}
                </a>
              ))}
              <span style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: "13px",
                color: "#3a3a3a",
                marginTop: "4px",
              }}>
                sanatmphjs@gmail.com
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid var(--bg-border)",
          paddingTop: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "8px",
        }}>
          <p style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "12px",
            color: "var(--text-muted)",
            margin: 0,
          }}>
            © {new Date().getFullYear()} Sanat Pednekar
          </p>
          <p style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "12px",
            color: "#2a2a2a",
            margin: 0,
          }}>
            La Jolla, CA
          </p>
        </div>
      </div>
    </footer>
  );
}

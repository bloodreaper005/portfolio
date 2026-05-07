import { FadeUp, ScaleIn } from "../components/Animated";

const contactLinks = [
  {
    label: "Email",
    value: "spednekar@ucsd.edu",
    href: "mailto:spednekar@ucsd.edu",
    icon: "✉",
    accent: "#228B22",
    bg: "rgba(34,139,34,0.07)",
    border: "rgba(34,139,34,0.25)",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sanat-pednekar",
    href: "https://www.linkedin.com/in/sanat-pednekar",
    icon: "in",
    accent: "#164A41",
    bg: "rgba(22,74,65,0.07)",
    border: "rgba(22,74,65,0.25)",
  },
  {
    label: "Phone",
    value: "858-319-8463",
    href: "tel:8583198463",
    icon: "☎",
    accent: "#9A7D3A",
    bg: "rgba(209,178,132,0.15)",
    border: "rgba(209,178,132,0.5)",
  },
];

export default function ContactPage() {
  return (
    <section className="py-24 px-6 min-h-[calc(100vh-64px)] flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <FadeUp>
          <p className="text-sm uppercase tracking-[0.3em] mb-3" style={{ color: "#D1B284" }}>
            Let's Connect
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: "#164A41" }}>
            Ready to build
            <br />
            <span className="bg-gradient-to-r from-[#228B22] via-[#3aad3a] to-[#164A41] bg-clip-text text-transparent">
              something great?
            </span>
          </h1>
          <p className="text-lg max-w-xl mb-16" style={{ color: "#4a6741" }}>
            I'm seeking full-time roles in aerospace, robotics, and embedded systems.
            Available from <span style={{ color: "#164A41", fontWeight: 600 }}>June 2026</span>.
          </p>
        </FadeUp>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {contactLinks.map((c, i) => (
            <FadeUp key={c.label} delay={i * 0.1}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex flex-col gap-3 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: c.bg,
                  border: `1px solid ${c.border}`,
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow = `0 8px 32px ${c.accent}20`)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow = "none")
                }
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold"
                  style={{ background: `${c.accent}18`, color: c.accent }}
                >
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#7a886e" }}>
                    {c.label}
                  </p>
                  <p
                    className="text-sm font-medium break-all transition-colors duration-200 group-hover:underline"
                    style={{ color: c.accent }}
                  >
                    {c.value}
                  </p>
                </div>
              </a>
            </FadeUp>
          ))}
        </div>

        {/* Availability badge */}
        <ScaleIn delay={0.35}>
          <div
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full"
            style={{
              background: "rgba(34,139,34,0.08)",
              border: "1px solid rgba(34,139,34,0.2)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#228B22" }}
            />
            <span className="text-sm font-medium" style={{ color: "#228B22" }}>
              Open to opportunities · Available June 2026
            </span>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}

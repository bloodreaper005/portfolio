import { FadeUp, ScaleIn } from "../components/Animated";

const contactLinks = [
  {
    label: "Email",
    value: "spednekar@ucsd.edu",
    href: "mailto:spednekar@ucsd.edu",
    icon: "✉",
    accent: "#3b82f6",
    bg: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.2)",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sanat-pednekar",
    href: "https://www.linkedin.com/in/sanat-pednekar",
    icon: "in",
    accent: "#0ea5e9",
    bg: "rgba(14,165,233,0.08)",
    border: "rgba(14,165,233,0.2)",
  },
  {
    label: "Phone",
    value: "858-319-8463",
    href: "tel:8583198463",
    icon: "☎",
    accent: "#34d399",
    bg: "rgba(52,211,153,0.08)",
    border: "rgba(52,211,153,0.2)",
  },
];

export default function ContactPage() {
  return (
    <section className="py-24 px-6 min-h-[calc(100vh-64px)] flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <FadeUp>
          <p className="text-sm uppercase tracking-[0.3em] mb-3" style={{ color: "#34d399" }}>
            Let's Connect
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: "#fafafa" }}
          >
            Ready to build
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              something great?
            </span>
          </h1>
          <p className="text-lg max-w-xl mb-16" style={{ color: "#a1a1aa" }}>
            I'm seeking full-time roles in aerospace, robotics, and embedded systems.
            Available from <span style={{ color: "#fafafa" }}>June 2026</span>.
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
                className="group flex flex-col gap-3 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  background: c.bg,
                  border: `1px solid ${c.border}`,
                  textDecoration: "none",
                  boxShadow: "0 0 0 transparent",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow = `0 8px 32px ${c.accent}20`)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow = "0 0 0 transparent")
                }
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold"
                  style={{ background: `${c.accent}20`, color: c.accent }}
                >
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#71717a" }}>
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
          <div className="flex items-center gap-3">
            <div
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full"
              style={{
                background: "rgba(52,211,153,0.08)",
                border: "1px solid rgba(52,211,153,0.15)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#34d399" }}
              />
              <span className="text-sm" style={{ color: "#6ee7b7" }}>
                Open to opportunities · Available June 2026
              </span>
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}

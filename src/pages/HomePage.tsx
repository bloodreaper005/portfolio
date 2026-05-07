import { Link } from "react-router-dom";
import { FadeUp, ScaleIn } from "../components/Animated";
import { stats, skillCategories, education } from "../data";

// ─── Hero ──────────────────────────────────────────────────────
const HeroSection = () => (
  <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
    <div className="relative z-10 text-center px-6 max-w-5xl">
      <div
        className="inline-block mb-6 px-4 py-2 rounded-full text-sm font-medium tracking-widest uppercase"
        style={{
          background: "rgba(59, 130, 246, 0.1)",
          border: "1px solid rgba(59, 130, 246, 0.2)",
          color: "#60a5fa",
          animation: "fadeInUp 0.8s ease-out",
        }}
      >
        Mechanical Engineer
      </div>

      <h1
        className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        style={{ color: "#fafafa", animation: "fadeInUp 0.8s ease-out 0.1s both" }}
      >
        Sanat
        <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Pednekar
        </span>
      </h1>

      <p
        className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        style={{ color: "#a1a1aa", animation: "fadeInUp 0.8s ease-out 0.2s both" }}
      >
        M.S. candidate at UC San Diego specializing in aerospace systems,
        embedded engineering, and robotics. Building the future of autonomous
        flight and intelligent machines.
      </p>

      <div
        className="flex flex-wrap justify-center gap-4"
        style={{ animation: "fadeInUp 0.8s ease-out 0.3s both" }}
      >
        <Link
          to="/contact"
          className="px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25"
          style={{ background: "#3b82f6", color: "#fff", textDecoration: "none" }}
        >
          Get in Touch
        </Link>
        <a
          href="/Sanat_Pednekar_Resume.pdf"
          download
          className="px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#e4e4e7",
            textDecoration: "none",
          }}
        >
          Download Resume
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        style={{ animation: "bounce 2s infinite" }}
      >
        <div
          className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
          style={{ border: "2px solid rgba(255,255,255,0.15)" }}
        >
          <div
            className="w-1.5 h-3 rounded-full bg-blue-400"
            style={{ animation: "scrollDown 2s infinite" }}
          />
        </div>
      </div>
    </div>
  </section>
);

// ─── Stats ─────────────────────────────────────────────────────
const StatsSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <ScaleIn key={stat.label} delay={i * 0.1}>
            <div
              className="text-center p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p className="text-5xl lg:text-6xl font-bold" style={{ color: "#fafafa" }}>
                {stat.value}
                <span className="text-3xl" style={{ color: "#71717a" }}>{stat.suffix}</span>
              </p>
              <p className="mt-2 text-sm uppercase tracking-widest" style={{ color: "#71717a" }}>
                {stat.label}
              </p>
            </div>
          </ScaleIn>
        ))}
      </div>
    </div>
  </section>
);

// ─── Skills ────────────────────────────────────────────────────
const SkillsSection = () => (
  <section className="py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <FadeUp>
        <p className="text-sm uppercase tracking-[0.3em] mb-3 text-center" style={{ color: "#a78bfa" }}>
          Expertise
        </p>
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-16 text-center"
          style={{ color: "#fafafa" }}
        >
          Skills &amp; Tools
        </h2>
      </FadeUp>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((cat, i) => (
          <FadeUp key={cat.title} delay={i * 0.1}>
            <div
              className="group p-6 rounded-2xl h-full transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="text-2xl mb-4" style={{ color: "#a78bfa" }}>
                {cat.icon}
              </div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: "#fafafa" }}>
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-sm"
                    style={{ background: "rgba(255,255,255,0.04)", color: "#a1a1aa" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

// ─── Education ─────────────────────────────────────────────────
const EducationSection = () => (
  <section className="py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <FadeUp>
        <p className="text-sm uppercase tracking-[0.3em] mb-3" style={{ color: "#f472b6" }}>
          Academic
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-16" style={{ color: "#fafafa" }}>
          Education
        </h2>
      </FadeUp>

      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu, i) => (
          <FadeUp key={edu.school} delay={i * 0.1}>
            <div
              className="group p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p className="text-sm uppercase tracking-widest mb-2" style={{ color: "#71717a" }}>
                {edu.period}
              </p>
              <h3 className="text-2xl font-bold mb-2" style={{ color: "#fafafa" }}>
                {edu.school}
              </h3>
              <p style={{ color: "#a1a1aa" }}>{edu.degree}</p>
              <p className="mt-3 text-sm" style={{ color: "#71717a" }}>
                📍 {edu.location}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

// ─── Page ──────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <SkillsSection />
      <EducationSection />
    </>
  );
}

import { Link } from "react-router-dom";
import { FadeUp, ScaleIn } from "../components/Animated";
import { stats, skillCategories, education } from "../data";

// ─── Card style helpers ────────────────────────────────────────
const cardStyle = {
  background: "rgba(22,74,65,0.04)",
  border: "1px solid rgba(209,178,132,0.4)",
};

// ─── Hero ──────────────────────────────────────────────────────
const HeroSection = () => (
  <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
    <div className="relative z-10 text-center px-6 max-w-5xl">
      <div
        className="inline-block mb-6 px-4 py-2 rounded-full text-sm font-medium tracking-widest uppercase"
        style={{
          background: "rgba(34,139,34,0.1)",
          border: "1px solid rgba(34,139,34,0.25)",
          color: "#228B22",
          animation: "fadeInUp 0.8s ease-out",
        }}
      >
        Mechanical Engineer
      </div>

      <h1
        className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        style={{ color: "#164A41", animation: "fadeInUp 0.8s ease-out 0.1s both" }}
      >
        Sanat
        <span className="block bg-gradient-to-r from-[#228B22] via-[#3aad3a] to-[#164A41] bg-clip-text text-transparent">
          Pednekar
        </span>
      </h1>

      <p
        className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        style={{ color: "#4a6741", animation: "fadeInUp 0.8s ease-out 0.2s both" }}
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
          className="px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          style={{
            background: "#228B22",
            color: "#F4F1E8",
            textDecoration: "none",
            boxShadow: "0 4px 16px rgba(34,139,34,0.3)",
          }}
        >
          Get in Touch
        </Link>
        <a
          href="/Sanat_Pednekar_Resume.pdf"
          download
          className="px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5"
          style={{
            background: "rgba(22,74,65,0.06)",
            border: "1px solid rgba(209,178,132,0.5)",
            color: "#164A41",
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
          style={{ border: "2px solid rgba(22,74,65,0.25)" }}
        >
          <div
            className="w-1.5 h-3 rounded-full"
            style={{ background: "#228B22", animation: "scrollDown 2s infinite" }}
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
              style={cardStyle}
            >
              <p className="text-5xl lg:text-6xl font-bold" style={{ color: "#164A41" }}>
                {stat.value}
                <span className="text-3xl" style={{ color: "#D1B284" }}>{stat.suffix}</span>
              </p>
              <p className="mt-2 text-sm uppercase tracking-widest" style={{ color: "#7a886e" }}>
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
        <p className="text-sm uppercase tracking-[0.3em] mb-3 text-center" style={{ color: "#D1B284" }}>
          Expertise
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-16 text-center" style={{ color: "#164A41" }}>
          Skills &amp; Tools
        </h2>
      </FadeUp>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((cat, i) => (
          <FadeUp key={cat.title} delay={i * 0.1}>
            <div
              className="group p-6 rounded-2xl h-full transition-all duration-300 hover:-translate-y-1"
              style={cardStyle}
            >
              <div className="text-2xl mb-4" style={{ color: "#D1B284" }}>{cat.icon}</div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: "#164A41" }}>{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-sm"
                    style={{ background: "rgba(209,178,132,0.2)", color: "#4a6741" }}
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
        <p className="text-sm uppercase tracking-[0.3em] mb-3" style={{ color: "#D1B284" }}>
          Academic
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-16" style={{ color: "#164A41" }}>
          Education
        </h2>
      </FadeUp>

      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu, i) => (
          <FadeUp key={edu.school} delay={i * 0.1}>
            <div
              className="group p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={cardStyle}
            >
              <p className="text-sm uppercase tracking-widest mb-2" style={{ color: "#7a886e" }}>
                {edu.period}
              </p>
              <h3 className="text-2xl font-bold mb-2" style={{ color: "#164A41" }}>{edu.school}</h3>
              <p style={{ color: "#4a6741" }}>{edu.degree}</p>
              <p className="mt-3 text-sm" style={{ color: "#7a886e" }}>📍 {edu.location}</p>
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

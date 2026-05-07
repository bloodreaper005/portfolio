import { FadeUp } from "../components/Animated";
import { projects } from "../data";

export default function ProjectsPage() {
  return (
    <section className="py-24 px-6 min-h-[calc(100vh-64px)]">
      <div className="max-w-6xl mx-auto">
        {/* Page header */}
        <FadeUp>
          <p className="text-sm uppercase tracking-[0.3em] mb-3" style={{ color: "#22d3ee" }}>
            Portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4" style={{ color: "#fafafa" }}>
            Projects
          </h1>
          <p className="text-lg mb-20 max-w-xl" style={{ color: "#71717a" }}>
            Hardware, software, and everything in between — a showcase of systems I've designed and built.
          </p>
        </FadeUp>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <FadeUp key={project.title} delay={i * 0.1}>
              <div
                className="group relative h-full p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Color accent bar on top (always visible, brightens on hover) */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl transition-all duration-300 opacity-40 group-hover:opacity-100 group-hover:h-px"
                  style={{ background: project.accent }}
                />

                {/* Accent glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at top, ${project.accent}0d 0%, transparent 60%)`,
                  }}
                />

                {/* Year badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs uppercase tracking-widest font-medium px-3 py-1 rounded-full"
                    style={{
                      background: `${project.accent}18`,
                      color: project.accent,
                      border: `1px solid ${project.accent}30`,
                    }}
                  >
                    {project.year}
                  </span>
                </div>

                <h2 className="text-2xl font-bold mb-4 relative z-10" style={{ color: "#fafafa" }}>
                  {project.title}
                </h2>
                <p className="leading-relaxed mb-6 relative z-10" style={{ color: "#a1a1aa" }}>
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 relative z-10">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ background: "rgba(255,255,255,0.05)", color: "#d4d4d8" }}
                    >
                      {tag}
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
}

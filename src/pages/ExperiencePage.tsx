import { FadeUp, SlideIn } from "../components/Animated";
import { experiences } from "../data";

export default function ExperiencePage() {
  return (
    <section className="py-24 px-6 min-h-[calc(100vh-64px)]">
      <div className="max-w-6xl mx-auto">
        {/* Page header */}
        <FadeUp>
          <p className="text-sm uppercase tracking-[0.3em] mb-3" style={{ color: "#60a5fa" }}>
            Career
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4" style={{ color: "#fafafa" }}>
            Experience
          </h1>
          <p className="text-lg mb-20 max-w-xl" style={{ color: "#71717a" }}>
            A timeline of roles where I've engineered real-world solutions — from avionics to embedded systems.
          </p>
        </FadeUp>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px lg:-translate-x-1/2"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />

          {experiences.map((exp, i) => (
            <div
              key={exp.title}
              className={`relative flex flex-col lg:flex-row gap-8 mb-16 last:mb-0 ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 lg:left-1/2 w-3 h-3 rounded-full lg:-translate-x-1/2 -translate-x-1.5 mt-10 border-2 border-blue-400 bg-[#0a0a0b]" />

              {/* Card */}
              <SlideIn
                direction={i % 2 === 0 ? "left" : "right"}
                delay={i * 0.15}
                className={`lg:w-1/2 pl-8 lg:pl-0 ${
                  i % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"
                }`}
              >
                <div
                  className="relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 group"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {/* Hover glow top */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"
                    style={{ background: "linear-gradient(90deg, transparent, #3b82f6, transparent)" }}
                  />

                  <p className="text-sm uppercase tracking-widest mb-2" style={{ color: "#a1a1aa" }}>
                    {exp.year}
                  </p>
                  <h2 className="text-2xl font-bold mb-1" style={{ color: "#fafafa" }}>
                    {exp.title}
                  </h2>
                  <p className="text-sm font-medium mb-4" style={{ color: "#60a5fa" }}>
                    {exp.role}
                  </p>
                  <p className="leading-relaxed mb-5" style={{ color: "#a1a1aa" }}>
                    {exp.summary}
                  </p>

                  <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "lg:justify-end" : ""}`}>
                    {exp.tags.map((tag) => (
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
              </SlideIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { FadeUp } from "../components/Animated";
import { skillCategories } from "../data";

export function Skills() {
  return (
    <section id="skills" style={{ padding: "128px 24px" }}>
      <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
        <FadeUp>
          <p className="label" style={{ marginBottom: "12px" }}>Expertise</p>
          <h2
            style={{
              fontFamily: "Lora, Georgia, serif",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 700,
              color: "#e8e4d9",
              margin: "0 0 64px",
              letterSpacing: "-0.02em",
            }}
          >
            Skills
          </h2>
        </FadeUp>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {skillCategories.map((cat, i) => (
            <FadeUp key={cat.title} delay={i * 0.08}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "16px",
                  padding: "28px 0",
                  borderTop: "1px solid #1c1c1c",
                  alignItems: "start",
                }}
                className="md:!grid-cols-[200px_1fr]"
              >
                <p
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "var(--text-muted)",
                    margin: 0,
                    paddingTop: "2px",
                  }}
                >
                  {cat.title}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {cat.skills.map((skill) => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
          {/* bottom border */}
          <div style={{ borderTop: "1px solid #1c1c1c" }} />
        </div>
      </div>
    </section>
  );
}

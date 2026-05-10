import { FadeUp } from "../components/Animated";
import { education } from "../data";

export function Education() {
  return (
    <section id="education" style={{ padding: "128px 24px" }}>
      <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
        <FadeUp>
          <p className="label" style={{ marginBottom: "12px" }}>Academic</p>
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
            Education
          </h2>
        </FadeUp>

        <div
          style={{ display: "grid", gap: "20px" }}
          className="md:!grid-cols-2"
        >
          {education.map((edu, i) => (
            <FadeUp key={edu.school} delay={i * 0.1}>
              <div
                style={{
                  padding: "28px",
                  borderRadius: "12px",
                  background: "#161616",
                  border: "1px solid #222",
                  transition: "transform 0.2s ease, border-color 0.25s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "var(--accent)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#222";
                }}
              >
                <p
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#4a4a4a",
                    marginBottom: "10px",
                  }}
                >
                  {edu.period}
                </p>
                <h3
                  style={{
                    fontFamily: "Lora, Georgia, serif",
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#e8e4d9",
                    margin: "0 0 6px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {edu.school}
                </h3>
                <p
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontSize: "14px",
                    color: "#7a7570",
                    margin: "0 0 12px",
                  }}
                >
                  {edu.degree}
                </p>
                <p
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontSize: "12px",
                    color: "#4a4a4a",
                    margin: 0,
                  }}
                >
                  {edu.location}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

import { FadeUp } from "../components/Animated";
import { about } from "../data";

export function About() {
  return (
    <section
      id="about"
      style={{ padding: "128px 24px", maxWidth: "1024px", margin: "0 auto" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "48px",
          alignItems: "start",
        }}
        className="lg:!grid-cols-[240px_1fr]"
      >
        {/* Left: label + heading */}
        <FadeUp>
          <p className="label" style={{ marginBottom: "16px" }}>About</p>
          <h2
            style={{
              fontFamily: "Lora, Georgia, serif",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700,
              color: "#e8e4d9",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Who I am
          </h2>
        </FadeUp>

        {/* Right: paragraphs */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {about.map((para, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <p
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "16px",
                  lineHeight: 1.8,
                  color: i === 0 ? "#c8c4ba" : "#7a7570",
                  margin: 0,
                }}
              >
                {para}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

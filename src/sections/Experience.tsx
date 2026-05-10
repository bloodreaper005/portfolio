import { useState } from "react";
import { FadeUp } from "../components/Animated";
import { experiences } from "../data";

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeUp delay={index * 0.08}>
      <div style={{ position: "relative", paddingLeft: "32px" }}>
        {/* Timeline dot */}
        <div
          style={{
            position: "absolute",
            left: "-5px",
            top: "28px",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: hovered ? "#c8b89a" : "#2a2a2a",
            border: "2px solid #0f0f0f",
            outline: `2px solid ${hovered ? "#c8b89a" : "#2a2a2a"}`,
            transition: "background 0.25s ease, outline-color 0.25s ease",
            zIndex: 1,
          }}
        />

        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            padding: "24px 28px",
            borderRadius: "12px",
            background: "#161616",
            border: `1px solid ${hovered ? "#2e2e2e" : "#222"}`,
            borderLeft: `2px solid ${hovered ? "#c8b89a" : "#222"}`,
            transition: "border-color 0.25s ease, border-left-color 0.25s ease",
            cursor: "default",
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
              marginBottom: "8px",
            }}
          >
            {exp.year}
          </p>
          <h3
            style={{
              fontFamily: "Lora, Georgia, serif",
              fontSize: "20px",
              fontWeight: 700,
              color: "#e8e4d9",
              margin: "0 0 4px",
              letterSpacing: "-0.01em",
            }}
          >
            {exp.title}
          </h3>
          <p
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              color: "#c8b89a",
              marginBottom: "14px",
            }}
          >
            {exp.role}
          </p>
          <p
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "14px",
              lineHeight: 1.75,
              color: "#6a6560",
              marginBottom: "18px",
            }}
          >
            {exp.summary}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {exp.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

export function Experience() {
  const [showAll, setShowAll] = useState(false);
  const INITIAL = 3;
  const displayed = showAll ? experiences : experiences.slice(0, INITIAL);

  return (
    <section id="experience" style={{ padding: "128px 24px" }}>
      <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
        <FadeUp>
          <p className="label" style={{ marginBottom: "12px" }}>Career</p>
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
            Experience
          </h2>
        </FadeUp>

        {/* Timeline container */}
        <div
          style={{
            position: "relative",
            paddingLeft: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "1px",
              background: "linear-gradient(to bottom, #222, #222 90%, transparent)",
            }}
          />

          {displayed.map((exp, i) => (
            <ExperienceCard key={exp.title} exp={exp} index={i} />
          ))}
        </div>

        {experiences.length > INITIAL && (
          <FadeUp delay={0.1}>
            <button
              onClick={() => setShowAll(v => !v)}
              style={{
                marginTop: "32px",
                padding: "10px 20px",
                borderRadius: "6px",
                background: "none",
                border: "1px solid var(--bg-border)",
                color: "var(--text-muted)",
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                cursor: "pointer",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.color = "var(--text)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--accent)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.color = "var(--text-muted)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--bg-border)";
              }}
            >
              {showAll ? "Show fewer" : `Show ${experiences.length - INITIAL} more`}
            </button>
          </FadeUp>
        )}
      </div>
    </section>
  );
}

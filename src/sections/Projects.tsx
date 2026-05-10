import { useState } from "react";
import { FadeUp } from "../components/Animated";
import { projects } from "../data";

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const num = String(index + 1).padStart(2, "0");

  return (
    <FadeUp delay={index * 0.07}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          padding: "28px",
          borderRadius: "12px",
          background: "#161616",
          border: `1px solid ${hovered ? "#2e2e2e" : "#222"}`,
          borderTop: `2px solid ${hovered ? "#c8b89a" : "#222"}`,
          transition: "border-color 0.25s ease, border-top-color 0.25s ease",
          cursor: "default",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <span
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.14em",
              color: "#3a3a3a",
            }}
          >
            {num}
          </span>
          <span
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#4a4a4a",
            }}
          >
            {project.year}
          </span>
        </div>

        <h3
          style={{
            fontFamily: "Lora, Georgia, serif",
            fontSize: "22px",
            fontWeight: 700,
            color: hovered ? "#e8e4d9" : "#c8c4ba",
            margin: "0 0 12px",
            letterSpacing: "-0.01em",
            transition: "color 0.25s ease",
            lineHeight: 1.25,
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "14px",
            lineHeight: 1.75,
            color: "#6a6560",
            marginBottom: "20px",
            flex: 1,
          }}
        >
          {project.summary}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </FadeUp>
  );
}

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const INITIAL = 3;
  const displayed = showAll ? projects : projects.slice(0, INITIAL);
  const featured = displayed[0];
  const rest = displayed.slice(1);

  return (
    <section id="projects" style={{ padding: "128px 24px" }}>
      <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
        <FadeUp>
          <p className="label" style={{ marginBottom: "12px" }}>Portfolio</p>
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
            Projects
          </h2>
        </FadeUp>

        {/* Featured card — full width */}
        <FadeUp>
          <div
            style={{
              padding: "32px",
              borderRadius: "12px",
              background: "var(--bg-raised)",
              border: "1px solid var(--bg-border)",
              marginBottom: "20px",
              transition: "transform 0.2s ease, border-color 0.25s ease",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLDivElement).style.borderColor = "var(--accent)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLDivElement).style.borderColor = "var(--bg-border)";
            }}
          >
            <p className="label" style={{ marginBottom: "16px" }}>Featured</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px", gap: "16px" }}>
              <h3 style={{
                fontFamily: "Lora, Georgia, serif",
                fontSize: "26px",
                fontWeight: 700,
                color: "var(--text)",
                margin: 0,
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
              }}>
                {featured.title}
              </h3>
              <span style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: "11px",
                color: "#4a4a4a",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                paddingTop: "4px",
              }}>
                {featured.year}
              </span>
            </div>
            <p style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "15px",
              lineHeight: 1.75,
              color: "var(--text-muted)",
              marginBottom: "20px",
            }}>
              {featured.summary}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {featured.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
          </div>
        </FadeUp>

        {/* Remaining cards — 2-col grid */}
        <div style={{ display: "grid", gap: "20px" }} className="md:!grid-cols-2">
          {rest.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i + 1} />
          ))}
        </div>

        {projects.length > INITIAL && (
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
              {showAll ? "Show fewer" : `Show ${projects.length - INITIAL} more`}
            </button>
          </FadeUp>
        )}
      </div>
    </section>
  );
}

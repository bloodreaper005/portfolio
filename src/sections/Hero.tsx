import { motion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";
import { socials, stats } from "../data";

const EASE = [0.22, 1, 0.36, 1] as const;

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Mail: ({ size = 16 }) => <Mail size={size} />,
};

export function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
        padding: "80px 24px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1024px", margin: "0 auto", width: "100%" }}>

        {/* Location eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="label"
          style={{ marginBottom: "28px" }}
        >
          La Jolla, CA · Available June 2026
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.04 }}
          style={{
            width: "48px",
            height: "1px",
            background: "linear-gradient(to right, var(--accent), transparent)",
            marginBottom: "24px",
            transformOrigin: "left",
          }}
        />

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
          style={{
            fontFamily: "Lora, Georgia, serif",
            fontSize: "clamp(64px, 12vw, 140px)",
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.03em",
            color: "#e8e4d9",
            margin: 0,
            marginBottom: "8px",
          }}
        >
          Sanat
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.14 }}
          style={{
            fontFamily: "Lora, Georgia, serif",
            fontSize: "clamp(64px, 12vw, 140px)",
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.03em",
            color: "#c8b89a",
            margin: 0,
            marginBottom: "40px",
          }}
        >
          Pednekar.
        </motion.h1>

        {/* Role line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.24 }}
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "#7a7570",
            maxWidth: "480px",
            lineHeight: 1.6,
            marginBottom: "48px",
          }}
        >
          M.S. Mechanical Engineering · UC San Diego
          <br />
          Building autonomous flight systems and intelligent machines.
        </motion.p>

        {/* Social icons + Resume */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.36 }}
          style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}
        >
          {socials.map(({ label, href, icon }) => {
            const Icon = iconMap[icon];
            return (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  background: "#161616",
                  border: "1px solid #2a2a2a",
                  color: "#7a7570",
                  transition: "color 0.2s ease, border-color 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#e8e4d9";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#3a3a3a";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#7a7570";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#2a2a2a";
                }}
              >
                {Icon && <Icon size={16} />}
              </a>
            );
          })}

          <div style={{ width: "1px", height: "24px", background: "#222" }} />

          <a
            href="/Sanat_Pednekar_Resume.pdf"
            download
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "10px 18px",
              borderRadius: "8px",
              background: "#161616",
              border: "1px solid #2a2a2a",
              color: "#e8e4d9",
              textDecoration: "none",
              fontSize: "13px",
              fontFamily: "Inter, system-ui, sans-serif",
              fontWeight: 500,
              transition: "border-color 0.2s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#3a3a3a"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#2a2a2a"; }}
          >
            <ArrowDown size={14} strokeWidth={1.5} />
            Resume
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.48 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            marginTop: "48px",
            borderTop: "1px solid var(--bg-border)",
            paddingTop: "32px",
          }}
          className="md:!grid-cols-4"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                paddingRight: "24px",
                borderRight: i < stats.length - 1 ? "1px solid var(--bg-border)" : "none",
                paddingLeft: i > 0 ? "24px" : "0",
                paddingBottom: i < 2 ? "24px" : "0",
              }}
            >
              <div style={{
                fontFamily: "Lora, Georgia, serif",
                fontSize: "28px",
                fontWeight: 600,
                color: "var(--text)",
                lineHeight: 1,
              }}>
                {stat.value}
                <span style={{ fontSize: "16px", color: "var(--accent)" }}>{stat.suffix}</span>
              </div>
              <div style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: "11px",
                color: "var(--text-muted)",
                marginTop: "6px",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{
          position: "absolute",
          bottom: "40px",
          left: "24px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div
          style={{
            width: "1px",
            height: "48px",
            background: "linear-gradient(to bottom, transparent, #3a3a3a)",
          }}
        />
        <span
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "10px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#3a3a3a",
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}

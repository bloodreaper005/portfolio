import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { useActiveSection } from "../hooks";

const NAV_LINKS = [
  { label: "About",      href: "#about"      },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects"   },
  { label: "Skills",     href: "#skills"     },
  { label: "Education",  href: "#education"  },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "background 0.4s ease, border-color 0.4s ease",
          background: scrolled ? "rgba(15,15,15,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #222" : "1px solid transparent",
        }}
      >
        {/* Scroll progress bar */}
        <motion.div
          style={{
            scaleX: scrollYProgress,
            transformOrigin: "left",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: "var(--accent)",
            zIndex: 51,
          }}
        />
        <div
          style={{
            maxWidth: "1024px",
            margin: "0 auto",
            padding: "0 24px",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo("hero")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: 0,
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #c8b89a, #7a7570)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                fontWeight: 700,
                color: "#0f0f0f",
                fontFamily: "Inter, system-ui, sans-serif",
                letterSpacing: "0.05em",
              }}
            >
              SP
            </div>
            <span
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                color: "#e8e4d9",
                display: "none",
              }}
              className="sm:!inline"
            >
              Sanat Pednekar
            </span>
          </button>

          {/* Desktop links */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }} className="hidden md:flex">
            {NAV_LINKS.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(id)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "8px 14px",
                    borderRadius: "6px",
                    fontSize: "13px",
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontWeight: 500,
                    color: isActive ? "#e8e4d9" : "#7a7570",
                    transition: "color 0.2s ease",
                  }}
                >
                  {link.label}
                </button>
              );
            })}

            <a
              href="/Sanat_Pednekar_Resume.pdf"
              download
              style={{
                marginLeft: "12px",
                padding: "8px 16px",
                borderRadius: "6px",
                fontSize: "13px",
                fontFamily: "Inter, system-ui, sans-serif",
                fontWeight: 500,
                background: "#1c1c1c",
                border: "1px solid #2a2a2a",
                color: "#e8e4d9",
                textDecoration: "none",
                transition: "border-color 0.2s ease",
              }}
            >
              Resume ↓
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="md:hidden"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: i === 1 && menuOpen ? "60%" : "22px",
                  height: "1.5px",
                  background: "#e8e4d9",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                  transform:
                    menuOpen && i === 0 ? "translateY(6.5px) rotate(45deg)"
                    : menuOpen && i === 2 ? "translateY(-6.5px) rotate(-45deg)"
                    : menuOpen && i === 1 ? "scaleX(0)" : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          style={{
            maxHeight: menuOpen ? "400px" : "0px",
            overflow: "hidden",
            transition: "max-height 0.35s ease",
            background: "rgba(15,15,15,0.97)",
            borderTop: menuOpen ? "1px solid #222" : "none",
          }}
          className="md:hidden"
        >
          <div style={{ padding: "16px 24px 24px", display: "flex", flexDirection: "column", gap: "4px" }}>
            {NAV_LINKS.map((link) => {
              const id = link.href.slice(1);
              return (
                <button
                  key={link.href}
                  onClick={() => { scrollTo(id); setMenuOpen(false); }}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    fontSize: "15px",
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontWeight: 500,
                    color: "#e8e4d9",
                    textAlign: "left",
                    transition: "background 0.2s ease",
                  }}
                >
                  {link.label}
                </button>
              );
            })}
            <a
              href="/Sanat_Pednekar_Resume.pdf"
              download
              onClick={() => setMenuOpen(false)}
              style={{
                marginTop: "8px",
                padding: "12px 16px",
                borderRadius: "8px",
                fontSize: "15px",
                fontFamily: "Inter, system-ui, sans-serif",
                fontWeight: 500,
                background: "#1c1c1c",
                border: "1px solid #2a2a2a",
                color: "#e8e4d9",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Download Resume ↓
            </a>
          </div>
        </div>
      </nav>
      <div style={{ height: "64px" }} />
    </>
  );
}

import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Detect scroll for blur/border transition
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(10, 10, 11, 0.85)"
            : "rgba(10, 10, 11, 0.0)",
          backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo / Name */}
          <NavLink
            to="/"
            className="flex items-center gap-2 group"
            style={{ textDecoration: "none" }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-300 group-hover:scale-110"
              style={{
                background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                color: "#fff",
              }}
            >
              SP
            </div>
            <span
              className="font-semibold tracking-tight hidden sm:block"
              style={{ color: "#fafafa" }}
            >
              Sanat Pednekar
            </span>
          </NavLink>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group"
                style={({ isActive }) => ({
                  color: isActive ? "#60a5fa" : "#a1a1aa",
                  background: isActive
                    ? "rgba(59,130,246,0.08)"
                    : "transparent",
                  textDecoration: "none",
                })}
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                        style={{ background: "#3b82f6" }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            {/* Resume button */}
            <a
              href="/Sanat_Pednekar_Resume.pdf"
              download
              className="ml-3 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20"
              style={{
                background: "rgba(59,130,246,0.15)",
                border: "1px solid rgba(59,130,246,0.3)",
                color: "#60a5fa",
                textDecoration: "none",
              }}
            >
              Resume ↓
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg transition-colors duration-200"
            style={{
              background: menuOpen ? "rgba(255,255,255,0.06)" : "transparent",
              border: "none",
              cursor: "pointer",
            }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block rounded-full transition-all duration-300"
                style={{
                  width: i === 1 && menuOpen ? "60%" : "100%",
                  height: "2px",
                  background: "#a1a1aa",
                  transform:
                    menuOpen && i === 0
                      ? "translateY(7px) rotate(45deg)"
                      : menuOpen && i === 2
                      ? "translateY(-7px) rotate(-45deg)"
                      : menuOpen && i === 1
                      ? "scaleX(0)"
                      : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{
            maxHeight: menuOpen ? "300px" : "0px",
            background: "rgba(10,10,11,0.95)",
            borderTop: menuOpen ? "1px solid rgba(255,255,255,0.06)" : "none",
          }}
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className="px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200"
                style={({ isActive }) => ({
                  color: isActive ? "#60a5fa" : "#a1a1aa",
                  background: isActive
                    ? "rgba(59,130,246,0.08)"
                    : "transparent",
                  textDecoration: "none",
                })}
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="/Sanat_Pednekar_Resume.pdf"
              download
              className="mt-2 px-4 py-3 rounded-lg text-sm font-semibold text-center"
              style={{
                background: "rgba(59,130,246,0.12)",
                border: "1px solid rgba(59,130,246,0.25)",
                color: "#60a5fa",
                textDecoration: "none",
              }}
            >
              Download Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Spacer so content doesn't hide behind navbar */}
      <div style={{ height: "64px" }} />
    </>
  );
};

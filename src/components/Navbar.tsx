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

  useEffect(() => { setMenuOpen(false); }, [location]);

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
          background: scrolled ? "rgba(244,241,232,0.92)" : "rgba(244,241,232,0.0)",
          backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
          borderBottom: scrolled ? "1px solid rgba(209,178,132,0.4)" : "1px solid transparent",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group" style={{ textDecoration: "none" }}>
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-300 group-hover:scale-110"
              style={{ background: "linear-gradient(135deg, #228B22, #164A41)", color: "#F4F1E8" }}
            >
              SP
            </div>
            <span className="font-semibold tracking-tight hidden sm:block" style={{ color: "#164A41" }}>
              Sanat Pednekar
            </span>
          </NavLink>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={({ isActive }) => ({
                  color: isActive ? "#228B22" : "#4a6741",
                  background: isActive ? "rgba(34,139,34,0.08)" : "transparent",
                  textDecoration: "none",
                })}
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                        style={{ background: "#228B22" }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            <a
              href="/Sanat_Pednekar_Resume.pdf"
              download
              className="ml-3 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                background: "#228B22",
                color: "#F4F1E8",
                textDecoration: "none",
                boxShadow: "0 2px 8px rgba(34,139,34,0.25)",
              }}
            >
              Resume ↓
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg transition-colors duration-200"
            style={{ background: menuOpen ? "rgba(22,74,65,0.08)" : "transparent", border: "none", cursor: "pointer" }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block rounded-full transition-all duration-300"
                style={{
                  width: i === 1 && menuOpen ? "60%" : "100%",
                  height: "2px",
                  background: "#164A41",
                  transform:
                    menuOpen && i === 0 ? "translateY(7px) rotate(45deg)"
                    : menuOpen && i === 2 ? "translateY(-7px) rotate(-45deg)"
                    : menuOpen && i === 1 ? "scaleX(0)" : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{
            maxHeight: menuOpen ? "300px" : "0px",
            background: "rgba(244,241,232,0.97)",
            borderTop: menuOpen ? "1px solid rgba(209,178,132,0.4)" : "none",
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
                  color: isActive ? "#228B22" : "#4a6741",
                  background: isActive ? "rgba(34,139,34,0.08)" : "transparent",
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
              style={{ background: "#228B22", color: "#F4F1E8", textDecoration: "none" }}
            >
              Download Resume
            </a>
          </div>
        </div>
      </nav>

      <div style={{ height: "64px" }} />
    </>
  );
};

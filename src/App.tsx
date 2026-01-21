import { useEffect, useRef, useState, ReactNode } from "react";

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────

const experiences = [
  {
    title: "Racing Upshots",
    role: "Embedded Systems Engineer",
    year: "2024",
    summary:
      "Developed embedded systems for medical devices with real-time cloud data transfer over Bluetooth using ESP32 microcontrollers and Embedded C. Ensured compliance with healthcare data standards.",
    tags: ["Embedded C", "ESP32", "Bluetooth", "IoT"],
  },
  {
    title: "Air India",
    role: "Aviation Engineering Intern",
    year: "2023",
    summary:
      "Specialized in GE90, GEnx, and CFM-56 aircraft engines. Reduced turnaround time by 15% through early fault detection. Ensured 100% DGCA compliance.",
    tags: ["Aircraft Engines", "NDT", "Maintenance", "DGCA"],
  },
  {
    title: "Team Vaayushastra",
    role: "Technical Lead",
    year: "2021-24",
    summary:
      "Led 30 engineers in RC aircraft design and fabrication. Achieved 5th place globally at SAE AeroDesign International 2022. Implemented Just-in-Time inventory management.",
    tags: ["Leadership", "SAE AeroDesign", "SolidWorks", "Ansys"],
  },
];

const projects = [
  {
    title: "VTOL Tilt Rotor Tricopter",
    year: "2023-24",
    summary:
      "Designed and manufactured a VTOL Tilt Rotor Tricopter using carbon fiber with optimized rotor geometry. Led aerodynamic design, conducted wind tunnel tests, and refined PID control algorithms.",
    tags: ["VTOL", "Carbon Fiber", "PID Control", "Aerodynamics"],
    accent: "#3b82f6",
  },
  {
    title: "Powered Glider with Autonomous Control",
    year: "2022-24",
    summary:
      "Designed a 16-oz powered glider using CFD simulations with Ansys Fluent and XFLR5. Implemented YOLO-v4 vision processing for autonomous landing achieving 90% accuracy.",
    tags: ["CFD", "YOLO-v4", "Raspberry Pi", "Autonomous"],
    accent: "#06b6d4",
  },
  {
    title: "Phishing Detection via Federated Learning",
    year: "2023-24",
    summary:
      "Developed a federated learning model for detecting phishing attacks with over 96% accuracy. Reduced training latency by 25% through adaptive client sampling while preserving user privacy.",
    tags: ["TensorFlow", "Federated Learning", "Python", "Security"],
    accent: "#8b5cf6",
  },
  {
    title: "Fingerprint Image Classification",
    year: "2022-23",
    summary:
      "Built CNN-based classifier for fingerprint patterns using federated learning. Achieved 98% accuracy with Adam optimizer and data augmentation.",
    tags: ["CNN", "Deep Learning", "OpenCV", "Federated"],
    accent: "#f59e0b",
  },
];

const stats = [
  { value: "4+", label: "Years Engineering", suffix: "" },
  { value: "5", label: "Global Rank SAE", suffix: "th" },
  { value: "12+", label: "Projects Shipped", suffix: "" },
  { value: "30+", label: "Engineers Led", suffix: "" },
];

const skillCategories = [
  {
    title: "Design & Simulation",
    skills: ["SolidWorks", "CATIA", "Ansys", "XFLR5", "NX Nastran", "MATLAB"],
    icon: "◈",
  },
  {
    title: "Programming",
    skills: ["Python", "Embedded C", "ROS", "R", "TensorFlow", "OpenCV"],
    icon: "⟨/⟩",
  },
  {
    title: "Hardware",
    skills: ["ESP32", "Raspberry Pi", "Arduino", "3D Printing"],
    icon: "⚡",
  },
  {
    title: "Domains",
    skills: ["Aerodynamics", "CFD", "FEA", "SLAM", "Robotics", "HVAC"],
    icon: "∞",
  },
];

const education = [
  {
    school: "UC San Diego",
    degree: "M.S. Mechanical Engineering",
    period: "2024 - 2026",
    location: "La Jolla, CA",
  },
  {
    school: "University of Mumbai",
    degree: "B.E. Mechanical Engineering, Honors in Robotics",
    period: "2020 - 2024",
    location: "Mumbai, India",
  },
];

// ─────────────────────────────────────────────────────────────
// SCROLL ANIMATION HOOK
// ─────────────────────────────────────────────────────────────

function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

// ─────────────────────────────────────────────────────────────
// ANIMATED COMPONENTS
// ─────────────────────────────────────────────────────────────

const FadeUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(60px)",
        transition: `all 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

const SlideIn = ({
  children,
  direction = "left",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  direction?: "left" | "right";
  delay?: number;
  className?: string;
}) => {
  const { ref, isVisible } = useScrollReveal();
  const x = direction === "left" ? -100 : 100;
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : `translateX(${x}px)`,
        transition: `all 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

const ScaleIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1)" : "scale(0.8)",
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// SIMPLE BACKGROUND
// ─────────────────────────────────────────────────────────────

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "#0a0a0b",
        }}
      />

      {/* Subtle top-left glow */}
      <div
        className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Subtle bottom-right glow */}
      <div
        className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// SECTION COMPONENTS
// ─────────────────────────────────────────────────────────────

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div
          className="inline-block mb-6 px-4 py-2 rounded-full text-sm font-medium tracking-widest uppercase"
          style={{
            background: "rgba(59, 130, 246, 0.1)",
            border: "1px solid rgba(59, 130, 246, 0.2)",
            color: "#60a5fa",
            animation: "fadeInUp 0.8s ease-out",
          }}
        >
          Mechanical Engineer
        </div>

        <h1
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          style={{
            color: "#fafafa",
            animation: "fadeInUp 0.8s ease-out 0.1s both",
          }}
        >
          Sanat
          <span
            className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Pednekar
          </span>
        </h1>

        <p
          className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{
            color: "#a1a1aa",
            animation: "fadeInUp 0.8s ease-out 0.2s both",
          }}
        >
          M.S. candidate at UC San Diego specializing in aerospace systems,
          embedded engineering, and robotics. Building the future of autonomous
          flight and intelligent machines.
        </p>

        <div
          className="flex flex-wrap justify-center gap-4"
          style={{ animation: "fadeInUp 0.8s ease-out 0.3s both" }}
        >
          <a
            href="mailto:spednekar@ucsd.edu"
            className="px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25"
            style={{
              background: "#3b82f6",
              color: "#fff",
            }}
          >
            Get in Touch
          </a>
          <a
            href="/Sanat_Pednekar_Resume.pdf"
            download
            className="px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#e4e4e7",
            }}
          >
            Download Resume
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          style={{ animation: "bounce 2s infinite" }}
        >
          <div
            className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
            style={{ border: "2px solid rgba(255,255,255,0.15)" }}
          >
            <div
              className="w-1.5 h-3 rounded-full bg-blue-400"
              style={{ animation: "scrollDown 2s infinite" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <ScaleIn key={stat.label} delay={i * 0.1}>
              <div
                className="text-center p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <p
                  className="text-5xl lg:text-6xl font-bold"
                  style={{ color: "#fafafa" }}
                >
                  {stat.value}
                  <span className="text-3xl" style={{ color: "#71717a" }}>{stat.suffix}</span>
                </p>
                <p
                  className="mt-2 text-sm uppercase tracking-widest"
                  style={{ color: "#71717a" }}
                >
                  {stat.label}
                </p>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto relative">
        <FadeUp>
          <p
            className="text-sm uppercase tracking-[0.3em] mb-3"
            style={{ color: "#60a5fa" }}
          >
            Career
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-16"
            style={{ color: "#fafafa" }}
          >
            Experience
          </h2>
        </FadeUp>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px lg:-translate-x-1/2"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />

          {experiences.map((exp, i) => (
            <div
              key={exp.title}
              className={`relative flex flex-col lg:flex-row gap-8 mb-16 last:mb-0 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-0 lg:left-1/2 w-3 h-3 rounded-full lg:-translate-x-1/2 -translate-x-1/2 border-2 border-blue-400 bg-[#0a0a0b]"
              />

              {/* Content */}
              <SlideIn
                direction={i % 2 === 0 ? "left" : "right"}
                delay={i * 0.15}
                className={`lg:w-1/2 pl-8 lg:pl-0 ${i % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"
                  }`}
              >
                <div
                  className="relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 group"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <p
                    className="text-sm uppercase tracking-widest mb-2"
                    style={{ color: "#a1a1aa" }}
                  >
                    {exp.year}
                  </p>
                  <h3
                    className="text-2xl font-bold mb-1"
                    style={{ color: "#fafafa" }}
                  >
                    {exp.title}
                  </h3>
                  <p
                    className="text-sm font-medium mb-4"
                    style={{ color: "#60a5fa" }}
                  >
                    {exp.role}
                  </p>
                  <p
                    className="leading-relaxed mb-5"
                    style={{ color: "#a1a1aa" }}
                  >
                    {exp.summary}
                  </p>

                  <div
                    className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "lg:justify-end" : ""
                      }`}
                  >
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          color: "#d4d4d8",
                        }}
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
};

const ProjectsSection = () => {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto relative">
        <FadeUp>
          <p
            className="text-sm uppercase tracking-[0.3em] mb-3"
            style={{ color: "#22d3ee" }}
          >
            Portfolio
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-16"
            style={{ color: "#fafafa" }}
          >
            Projects
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <FadeUp key={project.title} delay={i * 0.1}>
              <div
                className="group relative h-full p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Subtle top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: project.accent }}
                />

                <p
                  className="text-sm uppercase tracking-widest mb-3"
                  style={{ color: "#71717a" }}
                >
                  {project.year}
                </p>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#fafafa" }}
                >
                  {project.title}
                </h3>
                <p
                  className="leading-relaxed mb-6"
                  style={{ color: "#a1a1aa" }}
                >
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        color: "#d4d4d8",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <p
            className="text-sm uppercase tracking-[0.3em] mb-3 text-center"
            style={{ color: "#a78bfa" }}
          >
            Expertise
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-16 text-center"
            style={{ color: "#fafafa" }}
          >
            Skills & Tools
          </h2>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <FadeUp key={cat.title} delay={i * 0.1}>
              <div
                className="group p-6 rounded-2xl h-full transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  className="text-2xl mb-4"
                  style={{ color: "#a78bfa" }}
                >
                  {cat.icon}
                </div>
                <h3
                  className="text-lg font-semibold mb-4"
                  style={{ color: "#fafafa" }}
                >
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-sm"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        color: "#a1a1aa",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <p
            className="text-sm uppercase tracking-[0.3em] mb-3"
            style={{ color: "#f472b6" }}
          >
            Academic
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-16"
            style={{ color: "#fafafa" }}
          >
            Education
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <SlideIn key={edu.school} direction={i === 0 ? "left" : "right"} delay={i * 0.1}>
              <div
                className="group p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <p
                  className="text-sm uppercase tracking-widest mb-2"
                  style={{ color: "#71717a" }}
                >
                  {edu.period}
                </p>
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: "#fafafa" }}
                >
                  {edu.school}
                </h3>
                <p style={{ color: "#a1a1aa" }}>{edu.degree}</p>
                <p
                  className="mt-3 text-sm"
                  style={{ color: "#71717a" }}
                >
                  📍 {edu.location}
                </p>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <FadeUp>
          <p
            className="text-sm uppercase tracking-[0.3em] mb-3"
            style={{ color: "#34d399" }}
          >
            Let's Connect
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: "#fafafa" }}
          >
            Ready to build
            <br />
            something great?
          </h2>
          <p
            className="text-lg max-w-xl mx-auto mb-10"
            style={{ color: "#a1a1aa" }}
          >
            I'm seeking full-time roles in aerospace, robotics, and embedded systems.
            Available from June 2026.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a
              href="mailto:spednekar@ucsd.edu"
              className="px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20"
              style={{
                background: "#3b82f6",
                color: "#fff",
              }}
            >
              spednekar@ucsd.edu
            </a>
            <a
              href="https://www.linkedin.com/in/sanat-pednekar"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#e4e4e7",
              }}
            >
              LinkedIn
            </a>
          </div>
        </FadeUp>

        <ScaleIn delay={0.3}>
          <div
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full"
            style={{
              background: "rgba(52,211,153,0.08)",
              border: "1px solid rgba(52,211,153,0.15)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#34d399" }}
            />
            <span className="text-sm" style={{ color: "#6ee7b7" }}>Open to opportunities</span>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer
      className="py-8 px-6 text-center text-sm"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.04)",
        color: "#52525b",
      }}
    >
      <p>La Jolla, CA • 858-319-8463</p>
      <p className="mt-1">© 2025 Sanat Pednekar</p>
    </footer>
  );
};

// ─────────────────────────────────────────────────────────────
// MAIN APP
// ─────────────────────────────────────────────────────────────

function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0b]">
      <Background />

      <HeroSection />
      <StatsSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />

      {/* Global animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(10px); }
        }
        
        @keyframes scrollDown {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(8px); }
        }
        
        * {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        
        *::-webkit-scrollbar {
          display: none;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}

export default App;
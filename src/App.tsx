import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Background } from "./components/Background";
import HomePage from "./pages/HomePage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

// ─── Footer ────────────────────────────────────────────────────
const Footer = () => (
  <footer
    className="py-10 px-6 text-center text-sm"
    style={{ background: "#164A41", color: "rgba(244,241,232,0.6)" }}
  >
    <div
      className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold mx-auto mb-4"
      style={{ background: "rgba(244,241,232,0.12)", color: "#F4F1E8" }}
    >
      SP
    </div>
    <p style={{ color: "rgba(244,241,232,0.5)" }}>La Jolla, CA • 858-319-8463</p>
    <p className="mt-1" style={{ color: "rgba(244,241,232,0.35)" }}>© 2025 Sanat Pednekar</p>
  </footer>
);

// ─── App ───────────────────────────────────────────────────────
function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen" style={{ background: "#F4F1E8" }}>
        <Background />
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(10px); }
        }
        @keyframes scrollDown {
          0%   { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(8px); }
        }
        * { scrollbar-width: none; -ms-overflow-style: none; }
        *::-webkit-scrollbar { display: none; }
        html { scroll-behavior: smooth; }
      `}</style>
    </BrowserRouter>
  );
}

export default App;
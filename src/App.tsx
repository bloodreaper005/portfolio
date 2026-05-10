import { Grain } from "./components/Grain";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Education } from "./sections/Education";
import { Footer } from "./sections/Footer";

function App() {
  return (
    <div style={{ position: "relative", background: "#0f0f0f", minHeight: "100vh" }}>
      <Grain />
      <div style={{ position: "relative", zIndex: 2 }}>
        <Navbar />
        <main>
          <div style={{ background: "var(--bg)" }}><Hero /></div>
          <div style={{ background: "var(--bg-subtle)" }}><About /></div>
          <div style={{ background: "var(--bg)" }}><Experience /></div>
          <div style={{ background: "var(--bg-subtle)" }}><Projects /></div>
          <div style={{ background: "var(--bg)" }}><Skills /></div>
          <div style={{ background: "var(--bg-subtle)" }}><Education /></div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

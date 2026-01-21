import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

type WorkItem = {
  title: string;
  year: string;
  summary: string;
  tags: string[];
  link?: string;
};

const works: WorkItem[] = [
  {
    title: "Neon Threads",
    year: "2025",
    summary: "Immersive fashion boutique with AR try-on and volumetric lighting.",
    tags: ["React", "Three.js", "GLSL"],
    link: "#neon",
  },
  {
    title: "Atlas Finance",
    year: "2024",
    summary: "Realtime analytics cockpit with live order depth and micro charts.",
    tags: ["Vite", "D3", "Tailwind"],
    link: "#atlas",
  },
  {
    title: "Lumen Lab",
    year: "2025",
    summary: "3D learning journeys for climate science with guided narration.",
    tags: ["Three.js", "WebAudio", "TypeScript"],
    link: "#lumen",
  },
  {
    title: "Pulse Studio",
    year: "2023",
    summary: "Portfolio for a music producer with reactive shaders to BPM.",
    tags: ["Next.js", "R3F", "Framer"],
    link: "#pulse",
  },
  {
    title: "Kinship",
    year: "2024",
    summary: "Social gifting flows with live presence and collaborative lists.",
    tags: ["React", "Supabase", "Motion"],
    link: "#kinship",
  },
];

const statCards = [
  { label: "Years crafting", value: "08+" },
  { label: "Launches", value: "34" },
  { label: "Avg. uplift", value: "19%" },
];

const badges = ["Product design", "Creative coding", "WebGL", "Design systems"];

const ThreeBackground: React.FC<{ drive: number }> = ({ drive }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const driveRef = useRef(drive);

  useEffect(() => {
    driveRef.current = drive;
  }, [drive]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const torus = new THREE.Mesh(
      new THREE.TorusKnotGeometry(1.1, 0.28, 180, 32),
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#7c3aed"),
        metalness: 0.35,
        roughness: 0.4,
        emissive: new THREE.Color("#0f172a"),
        emissiveIntensity: 0.55,
      })
    );

    const inner = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.7, 1),
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#22d3ee"),
        metalness: 0.25,
        roughness: 0.35,
        transparent: true,
        opacity: 0.92,
      })
    );

    const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    const key = new THREE.PointLight(0x9f7aea, 12, 12);
    key.position.set(3, 3, 2);
    const fill = new THREE.PointLight(0x22d3ee, 10, 10);
    fill.position.set(-3, -2, 3);

    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(4.5, 32, 32),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color("#111827"),
        transparent: true,
        opacity: 0.1,
        side: THREE.BackSide,
      })
    );

    scene.add(torus, inner, ambient, key, fill, glow);

    const clock = new THREE.Clock();
    let frameId = 0;

    const animate = () => {
      const t = clock.getElapsedTime();
      const factor = driveRef.current;
      torus.rotation.x = 0.5 + t * 0.25 + factor * 0.05;
      torus.rotation.y = t * 0.35;
      inner.rotation.x = t * 0.4;
      inner.rotation.y = 0.3 + t * 0.3 + factor * 0.02;
      camera.position.z = 5 + Math.sin(t * 0.4) * 0.2;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      torus.geometry.dispose();
      (torus.material as THREE.Material).dispose();
      inner.geometry.dispose();
      (inner.material as THREE.Material).dispose();
      glow.geometry.dispose();
      (glow.material as THREE.Material).dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="pointer-events-none fixed inset-0 -z-10 opacity-80"
    />
  );
};

function App() {
  const repeatedWorks = useMemo(
    () => [...works, ...works, ...works],
    []
  );

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const baseHeight = useRef(0);
  const [scrollPulse, setScrollPulse] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const init = () => {
      const single = el.scrollHeight / 3 || el.clientHeight;
      baseHeight.current = single;
      el.scrollTop = single + el.clientHeight * 0.2;
    };

    const frame = requestAnimationFrame(init);
    let ticking = false;

    const handle = () => {
      const single = baseHeight.current;
      if (!single) return;

      const min = single * 0.35;
      const max = single * 2.65;
      if (el.scrollTop <= min) el.scrollTop += single;
      else if (el.scrollTop >= max) el.scrollTop -= single;

      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          setScrollPulse((el.scrollTop - single) / single);
          ticking = false;
        });
      }
    };

    el.addEventListener("scroll", handle, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", handle);
    };
  }, [repeatedWorks]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="gradient-ring" />
      <div className="noise" />
      <ThreeBackground drive={scrollPulse} />

      <main className="relative z-10 mx-auto max-w-6xl px-6 py-12 space-y-10">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-sky-200/70">
              Portfolio — 2026
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
              Sanat Pednekar
            </h1>
            <p className="mt-2 max-w-2xl text-slate-200/80">
              Product engineer crafting cinematic, high-performance web stories
              with WebGL, motion, and clear UX systems.
            </p>
          </div>
          <button className="glass rounded-full px-5 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-white/25">
            Book a project call
          </button>
        </header>

        <section className="grid gap-6 lg:grid-cols-[2fr,1fr]">
          <div className="glass relative overflow-hidden rounded-3xl border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/0 pointer-events-none" />
            <div className="flex items-center justify-between px-6 pt-6 pb-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-200/60">
                  Infinite reel
                </p>
                <h2 className="text-2xl font-semibold text-white">
                  Featured builds
                </h2>
              </div>
              <div className="flex items-center gap-3">
                {statCards.map((stat) => (
                  <div
                    key={stat.label}
                    className="glass rounded-xl px-4 py-2 text-center border border-white/10"
                  >
                    <p className="text-lg font-semibold text-white">
                      {stat.value}
                    </p>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-200/70">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              ref={scrollRef}
              className="no-scrollbar relative h-[70vh] overflow-y-scroll px-6 pb-8 space-y-4"
            >
              {repeatedWorks.map((item, idx) => (
                <article
                  key={`${item.title}-${idx}`}
                  className="glass relative rounded-2xl border border-white/10 px-5 py-4 transition hover:-translate-y-0.5 hover:border-white/25 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-400 to-sky-300 opacity-80 blur-[10px]" />
                      <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-slate-300/70">
                          {item.year}
                        </p>
                        <h3 className="text-xl font-semibold text-white">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <button className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/90 transition hover:-translate-y-0.5 hover:border-white/40">
                      View
                    </button>
                  </div>
                  <p className="mt-3 text-sm text-slate-200/80">{item.summary}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={`${item.title}-${tag}-${idx}`}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-100/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="glass relative flex flex-col gap-6 rounded-3xl border border-white/5 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-200/70">
                  Availability
                </p>
                <p className="text-lg font-semibold text-white">Feb 2026</p>
              </div>
              <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                Open
              </span>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-white/80">
                Capabilities
              </p>
              <div className="flex flex-wrap gap-2">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-slate-100/80"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-white/80">Services</p>
              <ul className="space-y-2 text-sm text-slate-200/80">
                <li>→ Product vision sprints</li>
                <li>→ WebGL creative coding</li>
                <li>→ Design systems & tokens</li>
                <li>→ Performance engineering</li>
              </ul>
            </div>

            <div className="mt-auto flex items-center gap-3">
              <button className="flex-1 rounded-full bg-gradient-to-r from-indigo-500 to-sky-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5">
                Download CV
              </button>
              <button className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/90 transition hover:-translate-y-0.5 hover:border-white/35">
                Email
              </button>
            </div>
          </aside>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-300/70">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for select collaborations.
          </div>
          <div className="flex gap-4">
            <a className="hover:text-white transition" href="mailto:sanat@example.com">
              Email
            </a>
            <a className="hover:text-white transition" href="https://www.linkedin.com">
              LinkedIn
            </a>
            <a className="hover:text-white transition" href="https://github.com">
              GitHub
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;

// Shared background component used across all pages
export const Background = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0" style={{ background: "#0a0a0b" }} />
    <div
      className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
        filter: "blur(60px)",
      }}
    />
    <div
      className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
        filter: "blur(60px)",
      }}
    />
  </div>
);

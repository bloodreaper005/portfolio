// Shared background component
export const Background = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    {/* Cream base */}
    <div className="absolute inset-0" style={{ background: "#F4F1E8" }} />
    {/* Subtle top-left green glow */}
    <div
      className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(34,139,34,0.07) 0%, transparent 70%)",
        filter: "blur(80px)",
      }}
    />
    {/* Subtle bottom-right moss glow */}
    <div
      className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(22,74,65,0.06) 0%, transparent 70%)",
        filter: "blur(80px)",
      }}
    />
    {/* Center warm glow */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 rounded-full"
      style={{
        background: "radial-gradient(ellipse, rgba(209,178,132,0.08) 0%, transparent 70%)",
        filter: "blur(60px)",
      }}
    />
  </div>
);

// grid background, geometry vibe
export default function BackgroundGrid() {
  return (
    <div
      className="absolute inset-0 opacity-30 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  );
}

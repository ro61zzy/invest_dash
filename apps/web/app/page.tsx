import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full relative bg-black">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6, 182, 212, 0.25), transparent 70%), #000000",
        }}
      />
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-extrabold text-cyan-400 sm:text-5xl">
          Investment Dashboard Demo
        </h1>
        <p className="mt-4 max-w-xl text-lg text-cyan-200">
          A lightweight portfolio visualization built with Next.js, TypeScript, and TailwindCSS.
        </p>
        <Link
          href="/dashboard"
          className="mt-8 rounded-xl bg-cyan-500 px-6 py-3 text-white shadow-lg transition hover:bg-cyan-600"
        >
          View Dashboard
        </Link>
      </main>
    </div>
  );
}

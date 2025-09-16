import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 px-4 text-center">
      <h1 className="text-4xl font-extrabold text-indigo-700 sm:text-5xl">
        Investment Dashboard Demo
      </h1>
      <p className="mt-4 max-w-xl text-lg text-indigo-800">
        A lightweight portfolio visualization built with Next.js, TypeScript, and TailwindCSS.
      </p>
      <Link
        href="/dashboard"
        className="mt-8 rounded-xl bg-indigo-600 px-6 py-3 text-white shadow-lg transition hover:bg-indigo-700"
      >
        View Dashboard
      </Link>
    </main>
  );
}

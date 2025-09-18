"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full relative bg-[#020617]">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `radial-gradient(circle 500px at 50% 100px, rgba(6,182,212,0.4), transparent)`,
        }}
      />
      <div className="relative z-10 text-white font-sans">
        <section className="relative min-h-screen flex items-center px-6 md:px-12 py-20 overflow-hidden">
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6,182,212,0.25), transparent 70%), #000000",
            }}
          />
          <div
            className="absolute inset-0 -z-20 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
              backgroundSize: `20px 20px`,
            }}
          />
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-6 text-center md:text-left"
            >
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-extrabold tracking-tight text-cyan-400"
              >
                Your Financial Dashboard. <br />
                Simplified.
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-300 max-w-xl mx-auto md:mx-0"
              >
                Take control of your financial future. Track investments,
                monitor trends, and visualize your portfolio in real time.
              </motion.p>
              <motion.div variants={itemVariants}>
                <Link
                  href="/dashboard"
                  className="mt-6 inline-block rounded-full bg-cyan-500 px-8 py-4 text-white text-sm font-semibold shadow-lg hover:bg-cyan-600 transition-colors"
                >
                  Explore Dashboard
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex justify-center md:justify-end"
            >
              <div className="relative w-full max-w-lg aspect-video rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/dashboard-hero.png"
                  alt="Investment Dashboard Preview"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-6 bg-gray-900/50">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-cyan-400 text-center mb-16"
          >
            Explore the Interface
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto items-center"
          >
            <motion.div
              variants={itemVariants}
              className="relative aspect-video rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/insights.png"
                alt="Portfolio Page Preview"
                fill
                style={{ objectFit: "cover" }}
              />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-4 text-gray-300 text-lg"
            >
              <p>
                Take control of your financial future with a dashboard designed
                to simplify how you track and understand your investments.
                Experience real-time insights and interactive charts that bring
                your portfolio to life, making market trends easy to follow and
                decisions clearer than ever.
              </p>
              <p>
                See all your investments at a glance, with straightforward
                performance summaries that keep you informed and confident every
                step of the way. Build personalized watchlists, monitor analyst
                recommendations, and stay on top of market sentiment, all in one
                intuitive interface.
              </p>
            </motion.div>
          </motion.div>
        </section>

        <section className="py-20 px-6 bg-black">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-cyan-400 text-center mb-12"
          >
            What You Can Expect
          </motion.h2>
          <div className="flex justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-4xl"
            >
              <Image
                src="/screenshot-dashboard.png"
                alt="Dashboard preview"
                width={1200}
                height={700}
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-6 bg-black">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-cyan-400 text-center mb-16"
          >
            Key Features
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
          >
            {[
              {
                title: "Portfolio Overview",
                desc: "See all your investments in one place with clear charts and performance summaries.",
              },
              {
                title: "Real-time Data",
                desc: "Access live stock prices, market news, and trends that update every 5 seconds.",
              },
              {
                title: "Advanced Insights",
                desc: "Dive deeper with analyst recommendations, sentiment analysis, and key financial metrics.",
              },
              {
                title: "Interactive Charts",
                desc: "Visualize stock performance with interactive charts, including D3.js candlestick charts.",
              },
              {
                title: "Personalized Watchlists",
                desc: "Create and manage your own watchlists, save them, and track your favorite stocks.",
              },
              {
                title: "Seamless Experience",
                desc: "Enjoy a fully responsive and intuitive interface on any device.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700"
              >
                <h3 className="text-2xl font-bold text-cyan-300 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="py-20 px-6 bg-black text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-6"
          >
            Ready to Take Control of Your Investments?
          </motion.h2>
          <Link
            href="/dashboard"
            className="mt-6 inline-block rounded-full bg-cyan-500 px-8 py-4 text-white text-sm font-semibold shadow-lg hover:bg-cyan-600 transition-colors"
          >
            Go to Dashboard
          </Link>
        </section>

        <footer className="py-10 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Investment Dashboard Demo
        </footer>
      </div>
    </div>
  );
}

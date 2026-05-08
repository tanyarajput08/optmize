import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">

      <nav className="flex items-center justify-between px-8 py-6">
        <h1 className="text-3xl font-bold gradient-text">
          Optmize
        </h1>

        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-5 py-2 rounded-xl border border-orange-400 hover:bg-orange-400 hover:text-black transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-xl bg-orange-400 text-black font-semibold hover-glow"
          >
            Get Started
          </Link>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center text-center mt-28 px-6">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-black leading-tight"
        >
          Optimize teamwork.
          <br />
          <span className="gradient-text">
            Accelerate productivity.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-zinc-400 text-lg max-w-2xl"
        >
          A modern project management platform with analytics,
          Kanban boards, productivity tracking, and team collaboration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex gap-5 mt-10"
        >
          <Link
            to="/register"
            className="px-8 py-4 rounded-2xl bg-orange-400 text-black font-bold text-lg hover-glow"
          >
            Start Managing
          </Link>

          <button className="px-8 py-4 rounded-2xl border border-zinc-700 hover:border-orange-400 transition">
            Live Demo
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default LandingPage;
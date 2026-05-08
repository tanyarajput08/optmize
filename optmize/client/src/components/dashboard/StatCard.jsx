import { motion } from "framer-motion";

function StatCard({ title, value, icon, color }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-card hover-glow rounded-3xl p-6 flex justify-between items-center"
    >
      <div>
        <p className="text-zinc-400 text-sm">
          {title}
        </p>

        <h2 className="text-4xl font-black mt-2">
          {value}
        </h2>
      </div>

      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center text-black"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
    </motion.div>
  );
}

export default StatCard;
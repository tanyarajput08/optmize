import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-card rounded-3xl p-6 hover-glow"
    >

      <h2 className="text-2xl font-bold">
        {project.title}
      </h2>

      <p className="text-zinc-400 mt-3">
        {project.description}
      </p>

      <div className="mt-6 flex justify-between">

        <span className="text-orange-400 text-sm">
          {project.status}
        </span>

        <span className="text-zinc-500 text-sm">
          {new Date(project.deadline).toLocaleDateString()}
        </span>

      </div>

    </motion.div>
  );
}

export default ProjectCard;
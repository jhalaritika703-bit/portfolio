import { motion } from "framer-motion";

export default function ProjectCard({ title, tech, live, github }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative bg-[#232324] p-6 rounded-3xl border border-[#383839] 
                 overflow-hidden group min-h-[220px]"
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-yellow-400/10 opacity-0 
                      group-hover:opacity-100 transition-all duration-300" />

      <h3 className="text-xl font-bold text-white relative z-10">
        {title}
      </h3>

      <p className="text-gray-400 text-sm mt-2 relative z-10">
        {tech}
      </p>

      <div className="flex gap-6 mt-6 relative z-10">
        <a
          href={live}
          target="_blank"
          className="text-yellow-400 font-semibold hover:underline"
        >
          Live →
        </a>
        <a
          href={github}
          target="_blank"
          className="text-yellow-400 font-semibold hover:underline"
        >
          Code →
        </a>
      </div>
    </motion.div>
  );
}

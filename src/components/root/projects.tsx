"use client"

import { motion } from "framer-motion";
import ProjectGallery from "../project-gallery";

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.1 }}
    >
      <div id="projects" className="flex flex-col min-h-screen w-screen justify-center items-center">
        <h1 className="text-6xl font-bold text-blue-800 mb-5">Projects</h1>
        <ProjectGallery />
      </div>
    </motion.div>
  )
}
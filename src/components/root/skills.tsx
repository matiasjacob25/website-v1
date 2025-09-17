"use client";

import { motion } from "framer-motion";
import SkillsDisplay from "../skills-display";

export default function Skills() {
  return (
    <motion.div 
    id="skills"
    className="flex flex-col min-h-screen w-full justify-center items-center"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.1 }}
    >
      <h1 className="text-6xl font-bold text-blue-800 mb-5">Skills</h1>
      <SkillsDisplay />
    </motion.div>
  )
}
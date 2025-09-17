"use client";

import { motion } from "framer-motion";
import Timeline from "../timeline";

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.1 }}
    >
      <div id="experience" className="flex flex-col min-h-screen justify-center items-center mb-30">
        <h1 className="text-6xl font-bold text-blue-800 mb-5">Experience</h1>
        <div className="w-3/5">
          <Timeline />
        </div>
      </div>
    </motion.div>
  )
}
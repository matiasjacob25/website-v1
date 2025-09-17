"use client";

import { motion } from "framer-motion";
import TypingHeader from "../typing-header";
import AnimatedSocials from "../reusable/animated-socials";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div id="home" className="flex flex-wrap w-screen justify-center items-center min-h-[90vh]">
        <div className="flex flex-col basis-150 justify-center">
          <h2 className="text-4xl">Hello &#128075;</h2>
          <h2 className="text-4xl">My name is <b>Jacob Matias</b></h2>
          <TypingHeader />
          <p className="text-xl w-4/5">passionate about solving complex problems, exploring ways to leverage AI and data, and collaborating with others to turn ideas into solutions with real-world impact.</p>
          <div className="flex flex-row space-x-4 mt-4 mb-2">
            <AnimatedSocials />
          </div>
          <a 
            href="/matiasjacob_resume_2025.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="shadow-md btn mt-4 bg-amber-500 hover:bg-amber-600 text-white rounded-md px-3 py-2 max-w-3xs"
          >
            Download Resume
          </a>
        </div>
        <div className="stack stack-end basis-75">
          <div className="avatar flex justify-center rounded-xl overflow-hidden shadow-xl/30">
            <img src="/profile.jpg" alt="profile picture" />
          </div>
          <div className="avatar flex justify-center rounded-xl overflow-hidden shadow-xl/30 translate-y-[10px] translate-x-[10px]">
            <img className="opacity-70" src="/profile.jpg" alt="profile picture" />
          </div>
          <div className="avatar flex justify-center rounded-xl overflow-hidden shadow-xl/30 translate-y-[20px] translate-x-[20px]">
            <img className="opacity-50" src="/profile.jpg" alt="profile picture" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
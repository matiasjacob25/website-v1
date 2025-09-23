"use client";

import { easeInOut, motion } from "framer-motion";
import TypingHeader from "../typing-header";
import AnimatedSocials from "../reusable/animated-socials";
import { FaArrowDown } from "react-icons/fa";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div id="home" className="flex flex-wrap w-screen justify-center items-center min-h-[80vh] pt-30 pb-15 md:pb-0 lg:py-5">
        <div className="flex flex-col basis-150 justify-center text-center items-center md:text-start md:items-start">
          <h2 className="text-4xl">Hello &#128075;</h2>
          <h2 className="text-4xl">My name is <b>Jacob Matias</b></h2>
          <TypingHeader />
          <p className="text-xl md:w-4/5">passionate about solving complex problems, exploring ways to leverage AI and data, and collaborating with others to turn ideas into solutions with real-world impact.</p>
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
        <div className="stack stack-end basis-75 py-10">
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
      <div className="flex justify-center my-10 hidden md:block">
        <a
          href={"#about"}
        >
          <motion.div
            className="flex justify-center items-center"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: easeInOut }}
          >
            <div className="w-auto flex flex-col items-center hover:scale-110 transition-transform">
              <span className="font-bold text-[#1DA1F2]">Learn More</span>
              <FaArrowDown className="mt-1 ml-1 text-[#1DA1F2]" />
            </div>
          </motion.div>
        </a>
      </div>
    </motion.div>
  )
}
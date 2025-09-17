"use client";

import { motion } from "framer-motion";
import Carousel from "../carousel";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div id="about" className="flex flex-col min-h-screen w-full justify-center items-center">
        <h1 className="text-6xl font-bold text-blue-800 mb-5">About Me</h1>
        <div className="flex flex-row flex-wrap w-4/5 h-5/8 justify-center items-center gap-15">
          <div className="flex basis-130">
            <div className="flex flex-col gap-2 text-lg">
              <p className="font-bold">
                Nice to meet you!
              </p>
              <p>
                I'm a recent Computer Science New Grad from the University of Toronto with professional experience in full-stack and cloud development.
              </p>
              <p>
                I'm particularly drawn to UI/UX and backend development, and finding ways to optimize usability and deliver seamless user experiences.
                I also love experimenting with new technologies and exploring how AI can enhance the products I build, and heavily value collaboration and knowledge sharing in my work.
              </p>
              <p>
                Outside of coding, you'll probably find me hanging out with family and friends, trying out new recipes &#x28;and sharing the results &#x1F642;&#x29;, jamming to music, or hitting the gym.
              </p>
            </div>
          </div>
          <div className="flex basis-80">
            <Carousel />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
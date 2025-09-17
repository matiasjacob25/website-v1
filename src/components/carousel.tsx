"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  { id: "item1", src: "/about1.jpg" },
  { id: "item2", src: "/about2.jpg" },
  { id: "item3", src: "/about3.jpg" },
  { id: "item4", src: "/about4.jpg" },
  // { id: "item5", src: "/about5.jpg" },
];

// framer sliding animation configs
const variants = {
  enter: { x: 300, opacity: 1 },
  center: { x: 0, opacity: 1 },
  exit: { x: -300, opacity: 1 },
};

export default function Carousel() {
  const [curr, setCurr] = useState(0);

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurr(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center w-full rounded-lg shadow-lg overflow-hidden">
      
      <div className="carousel w-full h-64 md:h-96 relative overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.img
            key={images[curr].id}
            src={images[curr].src}
            className="w-full h-full object-cover rounded-lg absolute inset-0"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </AnimatePresence>
      </div>
      
      {/* dots navigation */}
      <div className="relative flex items-center justify-center w-full py-4">
        {/* horizontal line */}
        <div className="absolute top-1/2 w-4/5 h-1 bg-amber-300 transform -translate-y-1/2"></div>
        {/* dots */}
        <div className="flex justify-between w-4/5 relative z-10">
          {images.map((img, index) => (
            <div
              key={img.id}
              className={`hover:scale-110 cursor-pointer w-4 h-4 rounded-full transition-colors duration-300 ${
                index === curr ? "bg-amber-700" : "bg-amber-500"
              }`}
              onClick={() => setCurr(index)}
            />
          ))}
        </div>
      </div>  

      {/* Numbering-based navigation */}
      {/* <div className="flex w-full justify-center gap-2 py-2 bg-amber-400">
        {images.map((img, index) => (
          <button
            key={img.id}
            className={`btn btn-xs rounded-sm ${index === curr ? "border-0 bg-amber-700" : ""}`}
            onClick={() => setCurr(index)}
          >
            {index + 1}
          </button>
        ))}
      </div> */}
    </div>
  )
}
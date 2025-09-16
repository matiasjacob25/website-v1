"use client";

import { useState, useEffect } from "react";

const images = [
  { id: "item1", src: "/about1.jpg" },
  { id: "item2", src: "/about2.jpg" },
  { id: "item3", src: "/about3.jpg" },
  { id: "item4", src: "/about4.jpg" },
  // { id: "item5", src: "/about5.jpg" },
];

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
      <div className="carousel w-full">
        {images.map((img, index) => (
          <div
            key={img.id}
            id={img.id}
            className={`carousel-item w-full ${index === curr ? "block" : "hidden"}`}
          >
            <img src={img.src} className="w-full h-64 md:h-96 object-cover" />
          </div>
        ))}
      </div>
      {/* Dots navigation */}
      <div className="flex w-full justify-center gap-2 py-2 bg-amber-400">
        {images.map((img, index) => (
          <button
            key={img.id}
            className={`btn btn-xs rounded-sm ${index === curr ? "border-0 bg-amber-700" : ""}`}
            onClick={() => setCurr(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}
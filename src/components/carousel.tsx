"use client";

import { useState, useEffect } from "react";

const images = [
  { id: "item1", src: "/about1.jpg" },
  { id: "item2", src: "/about2.jpg" },
  { id: "item3", src: "/about3.jpg" },
  { id: "item4", src: "/about4.jpg" },
  { id: "item5", src: "/about5.jpg" },
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

  const prevSlide = () => {
    setCurr(prev => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurr(prev => (prev + 1) % images.length);
  };

  return (
    <div className="flex flex-col items-center w-full">
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
      <div className="flex w-full justify-center gap-2 py-2">
        {images.map((img, index) => (
          <button
            key={img.id}
            className={`btn btn-xs ${index === curr ? "btn-primary" : ""}`}
            onClick={() => setCurr(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
// {/* 
//     <div className="flex flex-col items-center w-full">
//       <div className="carousel w-full">
//         <div id="item1" className="carousel-item w-full">
//           <img
//             src="about1.jpg"
//             className="w-full" />
//         </div>
//         <div id="item2" className="carousel-item w-full">
//           <img
//             src="about2.jpg"
//             className="w-full" />
//         </div>
//         <div id="item3" className="carousel-item w-full">
//           <img
//             src="about3.jpg"
//             className="w-full" />
//         </div>
//         <div id="item4" className="carousel-item w-full">
//           <img
//             src="about4.jpg"
//             className="w-full" />
//         </div>
//         <div id="item5" className="carousel-item w-full">
//           <img
//             src="about5.jpg"
//             className="w-full" />
//         </div>
//       </div>
//       <div className="flex w-full justify-center gap-2 py-2">
//         <a href="#item1" className="btn btn-xs">1</a>
//         <a href="#item2" className="btn btn-xs">2</a>
//         <a href="#item3" className="btn btn-xs">3</a>
//         <a href="#item4" className="btn btn-xs">4</a>
//         <a href="#item5" className="btn btn-xs">5</a>
//       </div>
//     </div> */}
  )
}
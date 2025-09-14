"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function TypingHeader() {
  const [text] = useTypewriter({
    words: ["Software Developer", "Frontend Developer", "React Enthusiast"],
    loop: 0, // 0 = infinite loop
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 3000, // pause before deleting
  });

  return (
    <h1 className="text-4xl font-bold">
      I'm a <span className="text-blue-400">{text}</span>
      <Cursor cursorColor="#4AA3FF" />
    </h1>
  );
}
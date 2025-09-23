"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function TypingHeader() {
  const [text] = useTypewriter({
    words: ["Software Developer", "Cloud Engineer", "Full-Stack Developer", "UI/UX Developer"],
    loop: 0, // 0 = infinite loop
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 3000, // pause before deleting
  });

  return (
    <h1 className="font-bold text-[clamp(1.5rem,2.5rem,2.5rem)]">
      I'm a <span className="text-blue-400">{text}</span>
      <Cursor cursorColor="#4AA3FF" />
    </h1>
  );
}
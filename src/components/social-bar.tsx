"use client";
import Socials from "./reusable/socials";

export default function SocialBar() {
  return (
    <div className="hidden md:flex fixed bottom-0 left-8 flex flex-col items-center space-y-4">
      <div className="w-[5px] h-20 bg-black dark:bg-white mt-2"></div>
      <Socials />
      {/* Optional: a small vertical line under icons */}
      <div className="w-[5px] h-50 bg-black dark:bg-white mt-2"></div>
    </div>
  );
}
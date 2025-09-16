"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="max-w-screen-xl fixed w-5/6 z-20 mt-4 start-1/2 -translate-x-1/2">
      <div className="flex bg-blue-800 rounded-lg justify-between items-center mx-auto px-6 py-2">
        <div className="flex text-wrap text-white">
          <h3 className="text-lg font-semibold">{`<Jacob's Portfolio>`}</h3>
        </div>
        <ul className="md:flex md:flex-row p-4 font-medium hidden space-x-8 text-white">
          <li><a className="hover:underline" href="#home">Home</a></li>
          <li><a className="hover:underline" href="#about">About</a></li>
          <li><a className="hover:underline" href="#experience">Experience</a></li>
          <li><a className="hover:underline" href="#projects">Projects</a></li>
          {/* <li><a href="#contact">Contact</a></li> */}
        </ul>

        {/* Hamburger Menu */}
        <div className="flex space-x-3 md:space-x-0">
          <a 
            href="/matiasjacob_resume_2025.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn border-0 bg-amber-500 hover:bg-amber-600 text-white rounded-md px-3 max-w-3xs"
          >
            Resume
          </a>
          <label className="btn btn-circle swap swap-rotate md:hidden">
            {/* this hidden checkbox controls the state */}
            <input 
              type="checkbox" 
              checked={menuOpen}
              onChange={() => setMenuOpen(!menuOpen)}/>
            {/* hamburger icon */}
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512">
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            {/* close icon */}
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512">
              <polygon
                points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
        {/* <div className="flex md:order-2 space-x-3 md:space-x-0">
          <button type="button" className="text-white bg-blue-400 rounded-md px-3 py-2">Resume</button>
          <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        </div> */}
      </div>
      
      {/* Hamburger Toggle Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-600 text-white rounded-b-lg mt-3">
          <ul className="flex flex-col p-4 font-medium space-y-4">
            <li><a className="hover:underline" href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a className="hover:underline" href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a className="hover:underline" href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
            <li><a className="hover:underline" href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            {/* <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li> */}
          </ul>
        </div>
      )}
    </nav>
  )
}
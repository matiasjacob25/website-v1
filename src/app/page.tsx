// import Carousel from "@/components/carousel";
import Footer from "@/components/reusable/footer";
// import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
// import Timeline from "@/components/timeline";
// import Card from "@/components/reusable/card";
// import ProjectGallery from "@/components/project-gallery";
// import SkillsDisplay from "@/components/skills-display";
// import Contact from "@/components/contact";
// import TypingHeader from "@/components/typing-header";
import SocialBar from "@/components/social-bar";
// import Socials from "@/components/reusable/socials";
// import { motion } from "framer-motion";
import Home from "@/components/root/home";
import About from "@/components/root/about";
import Experience from "@/components/root/experience";
import Projects from "@/components/root/projects";
import Skills from "@/components/root/skills";
import ScrollToTop from "@/components/utilities/scroll-to-top";

export default function App() {
  return (
    <>
      <ScrollToTop /> {/* utility component to scroll to top on page load/reload */}
      <Navbar />
      <SocialBar />
      {/* Sections */}
      <Home />
      <About />
      <Experience />
      <Projects />
      <Skills />
      {/* <Contact /> */}
      <Footer />

      {/* Experience */}
      {/* <div id="experience" className="flex flex-col min-h-screen justify-center items-center mb-30">
        <h1 className="text-6xl font-bold text-blue-800 mb-5">Experience</h1>
        <div className="w-3/5">
          <Timeline />
        </div>
      </div> */}

      {/* Projects */}
      {/* <div id="projects" className="flex flex-col min-h-screen w-screen justify-center items-center">
        <h1 className="text-6xl font-bold text-blue-800 mb-5">Projects</h1>
        <ProjectGallery />
      </div> */}

      {/* Skills */}
      {/* <div id="skills"className="flex flex-col min-h-screen w-full justify-center items-center">
        <h1 className="text-6xl font-bold text-blue-800 mb-5">Skills</h1>
        <SkillsDisplay />
      </div> */}

      {/* Contact */}
      {/* <div id="contact" className="flex flex-col min-h-screen w-full justify-center items-center">
        <div className="text-center w-full">
          <h1 className="text-6xl font-bold text-blue-800 mb-5">Get In Touch</h1>
          <h3 className="text-2xl lg:text-3xl font-bold leading-tight">Have a project in mind? Let's talk.</h3>
        </div>
        <Contact />
      </div> */}
      {/* </div> */}
    </>
  )
}

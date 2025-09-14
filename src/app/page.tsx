import Carousel from "@/components/carousel";
import Footer from "@/components/reusable/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Timeline from "@/components/timeline";
import Card from "@/components/reusable/card";
import ProjectGallery from "@/components/project-gallery";
import SkillsDisplay from "@/components/skills-display";
import Contact from "@/components/contact";
import TypingHeader from "@/components/typing-header";
import SocialBar from "@/components/social-bar";
import Socials from "@/components/reusable/socials";

export default function Home() {
  return (
    <>
      <Navbar />
      <SocialBar />
      {/* <div className="h-screen w-screen flex flex-col items-center"> */}
      {/* Home */}
      <div id="home" className="flex flex-wrap w-screen justify-center items-center min-h-[90vh]">
        <div className="flex flex-col basis-140 justify-center">
          <h2 className="text-4xl">Hello &#128075;</h2>
          <h2 className="text-4xl">My name is <b>Jacob Matias</b></h2>
          <TypingHeader />
          <p className="text-xl">passionate about solving complex problems, leveraging data and AI to drive insights, and collaborating to build software and tools with real-world impact.</p>
          <div className="flex flex-row space-x-4 mt-4 mb-2">
            <Socials />
          </div>
          <a 
            href="/matiasjacob_resume_2025.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            download
            className="btn mt-4 bg-amber-500 hover:bg-amber-600 text-white rounded-md px-3 py-2 max-w-3xs"
          >
            Download Resume
          </a>
        </div>
        <div className="stack stack-end basis-75">
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
        {/* image */}
        {/* <div className="avatar flex basis-64 justify-center mx-10">
          <div className="w-full h-full ring-blue-700 ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
            <img src="/profile.jpg" alt="profile picture" />
          </div>
        </div> */}
      </div>

      {/* About Me */}
      <div id="about" className="flex flex-col min-h-screen w-full justify-center items-center">
        <h1 className="text-6xl font-bold text-blue-800 mb-5">About Me</h1>
        <div className="flex flex-row flex-wrap w-4/5 h-5/8 justify-center items-center gap-15">
          <div className="flex basis-128">
            <p className="text-lg">
              I'm a Computer Science New Grad from the University of Toronto!
              I have professional experience in Full-stack and Cloud development, with a particular interest in frontend and backend development. I'm passionate about finding ways to optimize usability and user experience in software, I'm also interested in finding ways to leverage AI in these solutions.
              I'm always looking to learn and grow, and I'm excited to connect with like-minded individuals in the tech community.              
              In my spare time, I love eating good food with family and friends, music, art, cooking, building cool things with AI.
            </p>
          </div>
          <div className="flex basis-80">
            <Carousel />
          </div>
        </div>
      </div>

      {/* Experience */}
      <div id="experience" className="flex flex-col min-h-screen justify-center items-center mb-30">
        <h1 className="text-6xl font-bold text-blue-800 mb-5">Experience</h1>
        <div className="w-3/5">
          <Timeline />
        </div>
      </div>

      {/* Projects */}
      <div id="projects" className="flex flex-col min-h-screen w-screen justify-center items-center">
        <h1 className="text-6xl font-bold text-blue-800 mb-5">Projects</h1>
        <ProjectGallery />
      </div>

      {/* Skills */}
      <div id="skills"className="flex flex-col min-h-screen w-full justify-center items-center">
        <h1 className="text-6xl font-bold text-blue-800 mb-5">Skills</h1>
        <SkillsDisplay />
      </div>

      {/* Contact */}
      <div id="contact" className="flex flex-col min-h-screen w-full justify-center items-center">
        <div className="text-center w-full">
          <h1 className="text-6xl font-bold text-blue-800 mb-5">Get In Touch</h1>
          <h3 className="text-2xl lg:text-3xl font-bold leading-tight">Have a project in mind? Let's talk.</h3>
        </div>
        <Contact />
      </div>
      <Footer />
      {/* </div> */}
    </>
  )
}

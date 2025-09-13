import Carousel from "@/components/carousel";
import Footer from "@/components/reusable/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Timeline from "@/components/timeline";
import Card from "@/components/reusable/card";
import ProjectGallery from "@/components/project-gallery";
import SkillsDisplay from "@/components/skills-display";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="h-screen w-screen">
        {/* Home */}
        <div className="flex h-full justify-center items-center">
          <div className="flex flex-col basis-128 justify-center">
            <p>Hey! &#128075;</p>
            <p>My name is Jacob Matias</p>
            <p>I'm a &#123;Software Engineer, Cloud Engineer, Computer Science Student, Problem Solver&#125;</p>
            <p>I'm passionate about solving complex problems, leveraging data and AI to drive insights, and collaborating to build software and tools with real-world impact.</p>
            <div className="flex flex-row space-x-2">
              <button type="button">Github</button>
              <button type="button">LinkedIn</button>
              <button type="button">Email</button>
              <button type="button">Spotify</button>
            </div>
            <button className="mt-4 bg-blue-600 text-white rounded-md px-3 py-2 w-32">Download Resume</button>
          </div>
          {/* image */}
          <div className="avatar flex basis-64 justify-center mx-10">
            <div className="w-full h-full ring-blue-700 ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
              <img src="/profile.jpg" alt="profile picture" />
            </div>
          </div>
        </div>

        {/* About Me */}
        <div className="flex flex-col h-screen w-full justify-center items-center">
          <h1>About Me</h1>
          <div className="flex flex-row flex-wrap w-4/5 h-4/5 justify-center items-center space-x-10 space-y-10">
            <div className="flex basis-128">
              <p>
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
        <div className="flex flex-col h-screen w-full justify-center items-center">
          <h1>Experience</h1>
          <Timeline />
        </div>

        {/* Projects */}
        {/* <div className="flex flex-col h-screen w-full justify-center items-center">
          <h1>Projects</h1>
          <ProjectGallery />
        </div> */}

        {/* Skills */}
        <div className="flex flex-col h-screen w-full justify-center items-center">
          <h1>Skills</h1>
          <SkillsDisplay />
        </div>

        {/* Contact */}
        <div className="flex flex-col h-screen w-full justify-center items-center" id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </>


  //   <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-background">
  //     <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
  //       <Image
  //         className="dark:invert"
  //         src="/next.svg"
  //         alt="Next.js logo"
  //         width={180}
  //         height={38}
  //         priority
  //       />
  //       <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
  //         <li className="mb-2 tracking-[-.01em]">
  //           Get started by editing{" "}
  //           <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
  //             src/app/page.tsx
  //           </code>
  //           .
  //         </li>
  //         <li className="tracking-[-.01em]">
  //           Save and see your changes instantly.dsdddd
  //         </li>
  //       </ol>

  //       <div className="flex gap-4 items-center flex-col sm:flex-row">
  //         <a
  //           className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
  //           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           <Image
  //             className="dark:invert"
  //             src="/vercel.svg"
  //             alt="Vercel logomark"
  //             width={20}
  //             height={20}
  //           />
  //           Deploy now
  //         </a>
  //         <a
  //           className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
  //           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Read our docs
  //         </a>
  //       </div>
  //     </main>
  //     <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
  //       <a
  //         className="flex items-center gap-2 hover:underline hover:underline-offset-4"
  //         href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <Image
  //           aria-hidden
  //           src="/file.svg"
  //           alt="File icon"
  //           width={16}
  //           height={16}
  //         />
  //         Learn
  //       </a>
  //       <a
  //         className="flex items-center gap-2 hover:underline hover:underline-offset-4"
  //         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <Image
  //           aria-hidden
  //           src="/window.svg"
  //           alt="Window icon"
  //           width={16}
  //           height={16}
  //         />
  //         Examples
  //       </a>
  //       <a
  //         className="flex items-center gap-2 hover:underline hover:underline-offset-4"
  //         href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <Image
  //           aria-hidden
  //           src="/globe.svg"
  //           alt="Globe icon"
  //           width={16}
  //           height={16}
  //         />
  //         Go to nextjs.org →
  //       </a>
  //     </footer>
  //   </div>
  // );
)
}

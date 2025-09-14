"use client";

import { useState } from "react";
import Card from "./reusable/card";
const projects = [ 
  {
    title: "SoundSync Ensemble",
    description: "A multiplayer music webapp where users can create/join virtual rooms, play instruments in real time, record collaborative sessions, and listen back to their recordings.",
    skills: ["NextJS", "SocketIO", "MongoDB", "DigitalOcean", "LetsEncrypt", "Docker"],
    link: "https://github.com/matiasjacob25/project-digital-band",
    demo: "https://youtu.be/Xh_081S8iws?si=AAFiCYP87dYVyg0b"
  },
  {
    title: "Langchain NASA API Tool",
    description: "Open Source Contribution - a LangChain toolkit that fetches and returns space-related image and video resources from the NASA Image & Video Library based on user queries.",
    skills: ["Python", "LLM", "Prompt Engineering", "Jupyter Notebooks"],
    link: "https://github.com/langchain-ai/langchain/pull/13732"
  },
  {
    title: "Mighty Fighty",
    description: "A short platformer built entirely in MIPS Assembly, implementing core gameplay mechanics using low-level memory management, branching, and register operations. Gameplay mechanics include include health/score tracking, fail and win conditions, moving objects and platforms, multiple levels, and pickup effects.",
    skills: ["Assembly", "Game Design", "MIPS"],
    link: "https://github.com/matiasjacob25/mighty-fighty/tree/main",
    demo: "https://youtu.be/Q0J9jlxBQH8?si=fUxdJNYl5pkN_gBF"
  },
  {
    title: "PintOS Operating System",
    description: "Developed and optimized core operating system functionalities, including thread and process management, virtual memory, and file systems, utilizing multithreading techniques.",
    skills: ["C", "GDB", "Docker", "Assembly"],
    link: "https://github.com/matiasjacob25/PintOS-Operating-System"
  },
  {
    title: "MaestraAI",
    description: "Prototyped an AI-powered engine that generates personalized educational content based on user preferences and demographics. Leveraged OpenAI API(LLM), ElevenLabs API(TTS), and Wav2Lip to produce avatar-led educational videos",
    skills: ["NextJS", "Third-party APIs", "AI Integration", "TypeScript"],
    link: "https://github.com/matiasjacob25/MaestraAI"
  },
  {
    title: "VolunteerWorks",
    description: "TOHacks 2022 Winner - a web app connecting users with volunteering opportunities around them. Users can browse a map or list of opportunities, sign up for jobs, or create new postings.",
    skills: ["React", "Javascript", "ExpressJS", "Bootstrap", "CockroachDB"],
    link: "https://devpost.com/software/volunteerapp",
  },
  {
    title: "Characters",
    description: "Partnered with a startup representative @UofT The Bridge to conduct market research and develop a full-stack web app using 3-tier architecture in a team of 4. Users can browse and purchase story-linked apparel/NFTs, submit personal stories, and employees can manage submissions.",
    skills: ["Agile", "React", "ExpressJS", "NodeJS", "MongoDB"],
    link: "https://github.com/matiasjacob25/finalprojects22-characters-gp"
  },
  // {
  //   title: "CTF Challenges",
  //   description: "A collection of working solutions to Capture The Flag (CTF) cybersecurity challenges, tackling cryptography, network security, and web security.",
  //   skills: ["C", "TLS", "Wireshark", "Docker"],
  //   link: "https://github.com/matiasjacob25/Winter2024/tree/main/D27/ctf-challenges"
  // },
  {
    title: "RentCLI",
    description: "A terminal-based CLI application that simulates a housing marketplace where users can create accounts, post rental listings, and query available rentals based on criteria.",
    skills: ["Java", "SQL", "OOP"],
    link: "https://github.com/matiasjacob25/CSCC43-Project"
  },
  {
    title: "ClinicQueue",
    description: "A mobile app built with Android Studio & Java that lets clinicians post and manage appointment slots, while non-clinician users can view and book appointments. Features include user authentication, booking management, and persistent user data storage.",
    skills: ["Java", "Mobile", "Android Studio", "Firebase"],
    link: "https://github.com/matiasjacob25/ClinicQueue"
  }
];

export default function ProjectGallery() {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <div className="flex flex-col items-center w-full p-4 h-full">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 transition-all duration-500"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {displayedProjects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            skills={project.skills}
            link={project.link}
            demo={project.demo}
          />
        ))}
      </div>

      {projects.length > 6 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="btn btn-secondary rounded-full bg-amber-500 hover:bg-amber-600 border-0"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
}

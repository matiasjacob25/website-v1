"use client";

import { useState } from "react";
import Card from "./reusable/card";

const projects = [
  {
    title: "Project One",
    description: "This is a brief description of Project One.",
    skills: ["React", "TypeScript", "CSS"],
  },
  {
    title: "Project Two",
    description: "This is a brief description of Project Two.",
    skills: ["Next.js", "GraphQL", "Tailwind CSS"],
  },
  {
    title: "Project Three",
    description: "This is a brief description of Project Three.",
    skills: ["Django", "Python", "PostgreSQL"],
  },
  {
    title: "Project Four",
    description: "This is a brief description of Project Four.",
    skills: ["Flutter", "Dart", "Firebase"],
  },
  {
    title: "Project Five",
    description: "This is a brief description of Project Five.",
    skills: ["React Native", "Expo", "SQLite"],
  },
  {
    title: "Project Six",
    description: "This is a brief description of Project Six.",
    skills: ["Rust", "WASM", "Vite"],
  },
  {
    title: "Project Seven",
    description: "This is a brief description of Project Seven.",
    skills: ["Go", "Docker", "Kubernetes"],
  },
];

export default function ProjectGallery() {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <div className="flex flex-col items-center w-full p-4 h-full">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 transition-all duration-500"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {displayedProjects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            skills={project.skills}
          />
        ))}
      </div>

      {projects.length > 6 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="btn btn-secondary rounded-full"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
}

export default function SkillsDisplay() {

  const skills = [
    {
      category: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "Go", "Rust"],
    },
    {
      category: "Frontend",
      skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "DaisyUI", "HTML", "CSS", "JavaScript", "TypeScript"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Django", "Flask", "GraphQL", "REST APIs", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Tools",
      skills: ["Git", "Docker", "Kubernetes", "AWS", "Vercel", "Netlify", "Jest", "Cypress"],
    },
  ]

  return (
    <div className="w-full flex-col items-center">
      {skills.map((category) => (
        <div key={category.category} className="mb-6 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
          <ul className="flex flex-row flex-wrap gap-2">
            {category.skills.map((skill) => (
              <li key={skill} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
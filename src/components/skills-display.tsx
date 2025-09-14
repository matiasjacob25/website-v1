export default function SkillsDisplay() {

  const skills = [
    {
      category: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C", "SQL", "Java", "HTML", "CSS", "Bash"],
    },
    {
      category: "Frameworks",
      skills: ["React", "Angular", "Django", "NextJS", "ExpressJS", "TailwindCSS", "NodeJS"],

    },
    {
      category: "Tools",
      skills: ["Git", "Docker", "AWS", "Postman", "NewRelic", "Figma", "PgAdmin", "JUnit", "Jira"]
    },
    { category: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "DynamoDB & RDS", "Firebase"]
    }
  ];

  return (
    <div className="w-full flex flex-row flex-wrap justify-center space-x-10">
      {skills.map((category) => (
        <div key={category.category} className="mb-6 flex flex-col justify-start items-center">
          <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
          <ul className="flex flex-col gap-2 text-center">
            {category.skills.map((skill) => (
              <li key={skill} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-md">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
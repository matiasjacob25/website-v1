const experiences = [
  {
    date: "Sep 2024 - Apr 2025",
    title: "Software Developer Intern",
    company: "Temerity Analytics",
    description: "Developed secure backend features including user permissions systems, authenticated API communication across internal apps, PDF/CSV analytics reporting, and S3 image storage, while monitoring cloud resources to ensure reliability and operational stability. Built CI/CD pipelines with AWS (CodePipeline, CodeBuild, ECR, EC2) and Docker, deployed multi-region environments, and implemented a decentralized database architectures that improved maintainability and reduced account setup times.",
    skills: ["Python", "Typescript", "AWS", "Docker", "Django", "PostgreSQL"]
  },
  {
    date: "May 2024 - Aug 2024",
    title: "Software Developer - Contract",
    company: "University of Toronto",
    description: "Worked on the initial development of a Rosetta-Stone-style educational game for incoming first-year, ESL, CS/Math/Stats UofT students. Developed Python scripts to automate translation and database loading of terms using Google Cloud and DeepL APIs, and contributed to the design of a relational database schema for term and level mapping. Collaborated with developers, translators, and game designers to ensure language accuracy and gameplay alignment.",
    skills: ["Python", "NextJS", "MySQL", "Google Cloud", "DeepL"]
  },
  {
    date: "Sep 2023 - Apr 2024",
    title: "FLC Coordinator",
    company: "University of Toronto",
    description: "Supported and mentored First-Year Learning Community (FLC) Leaders through regular 1:1s, providing guidance and addressing challenges. Co-managed biweekly newsletters for all first-year CMS students, sharing updates, events, and academic tips. Helped plan and host biweekly 2-hour learning sessions, collaborating on activities and frequently stepping in during sessions to enhance student engagement and learning experiences.",
    skills: []
  },
  {
    date: "Jan 2023 - Aug 2023",
    title: "Software Developer Intern",
    company: "Caseware International",
    description: "Supported the design, development, and deployment of a new historical data extraction feature by implementing an ETL pipeline to extract and process historical data. Utilized AWS services including Lambda, Glue, SNS, SQS, RDS, and Step Functions to support cloud infrastructure and automated workflows. Integrated multiple Angular UI components and maintained API documentation using Redocly, ensuring smooth communication between backend services and frontend applications.",
    skills: []
  },
  {
    date: "Sep 2022 - Dec 2022",
    title: "FLC Leader",
    company: "University of Toronto",
    description: "Supported first-year CS/Math/Stats students as part of the First-Year Learning Community (FLC) by planning and facilitating biweekly events for ~100 students to help them transition into university life and the CMS program. Co-led interactive sessions for groups of ~40 students, coordinating icebreakers and activities to foster community engagement. Provided peer mentorship, answering questions about the CMS program, co-op opportunities, and student life at UofT.",
    skills: []
  }
]




export default function Timeline() {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {experiences.map((exp, idx) => (
          <li key={idx}>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className={`${idx % 2 === 0 ? "timeline-start md:text-end" : "timeline-end md:text-start"} mb-10`}>
              <time className="font-mono italic">{exp.date}</time>
              <div className="text-lg text-black font-bold">{exp.title}</div>
              <div className="text-md text-gray-600">@{exp.company}</div>
              <p className="mt-2 text-justify">{exp.description}</p>
            </div>
            <hr />
          </li>
        ))}
      </ul>

  )
}
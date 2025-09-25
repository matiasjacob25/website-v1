export default function Card(props: any) {
  return (
    <div className="card bg-base-100 w-80 h-110 md:w-96 md:h-96 shadow-sm flex flex-col justify-between items-center p-4 gap-4">
      <div className="flex flex-col justify-start items-start">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
        <ul className="flex w-full flex-row flex-wrap justify-start gap-2 mt-2 py-2">
          {props.skills.map((skill: string) => (
            <li key={skill} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full flex flex-row flex-wrap justify-end gap-2">
        {props.links.map((link: {label: string, link: string}, index: number) => (
          <a
            key={index}
            href={link.link} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="hover:scale-110 btn btn-primary bg-[#1DA1F2] border-0 rounded-md">
              {link.label}
            </button>
          </a>
        ))}
      </div>
    </div>
  )
}

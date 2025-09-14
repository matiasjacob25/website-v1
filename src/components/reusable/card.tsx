export default function Card(props: any) {
  return (
    <div className="card bg-base-100 w-96 h-96 shadow-sm flex flex-col justify-between items-center p-4 gap-4">
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
      <div className="w-full flex flex-row justify-end gap-2">
        {props.demo && 
        <a 
          href={props.demo} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button className="btn btn-primary bg-[#1DA1F2] border-0 rounded-md">
            Demo
          </button>
        </a>}
        <a 
          href={props.link} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button className="btn btn-primary bg-[#1DA1F2] border-0 rounded-md">
            Code
          </button>
        </a>
      </div>
    </div>
  )
}

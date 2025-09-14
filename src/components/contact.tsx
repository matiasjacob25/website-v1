
const contacts = {
  email: "matias.jacob2505@gmail.com",
  phone: "+1 (647) 927 3095",
  
}

export default function Contact() {
  return (
    <div
      className="max-w-screen-xl mt-10 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
      <div className="flex flex-col justify-between">
        <div>
          <div className="text-gray-700 mt-8">
            Hate forms? Send me an <span className="underline">email</span> instead.
          </div>
        </div>
      </div>
      <div className="">
        <div>
          <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
          <input 
            className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="Enter your full name"/>
        </div>
        <div className="mt-8">
          <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
          <input 
            className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="Enter your email"/>
        </div>
        <div className="mt-8">
          <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
          <textarea
            className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
        </div>
        <div className="mt-8">
          <button
            className="uppercase text-sm font-bold tracking-wide bg-amber-500 hover:bg-amber-600 text-gray-100 p-3 rounded-lg w-full">
            Send Message
          </button>
        </div>
      </div>
    </div>
  )
}
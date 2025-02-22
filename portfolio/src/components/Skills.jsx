import TechStackButton from "../components/ui/techstackbtn";

function Skills() {
    return (
        <>
        <section>
        <h1 className="mb-4 text-4xl font-extrabold leading-none text-center font-recoleta text-black tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Skills</h1>
        <div className="mx-8 overflow-hidden">
      <div className="max-w-7xl mx-auto my-2 px-0 sm:px-6 py-6 border-neutral-600 border-2 rounded-lg flex gap-0 sm:gap-4 items-center bg-foreground sm:flex-row flex-col">
        <div className="p-4 w-11/12">
          
          <div className="flex gap-2 flex-wrap">
            <TechStackButton name="React" icon="bg-cyan-400" />
            <TechStackButton name="Next.js" icon="bg-green-400" />
            <TechStackButton name="JavaScript" icon="bg-yellow-300" />
            <TechStackButton name="Linux" icon="bg-rose-400" />
            <TechStackButton name="Express.js" icon="bg-indigo-500" />
            <TechStackButton name="Node.js" icon="bg-orange-400" />
            <TechStackButton name="Tailwind CSS" icon="bg-lime-200" />
            <TechStackButton name="MongoDB" icon="bg-teal-500" />
            <TechStackButton name="Framer" icon="bg-pink-500" />
            <TechStackButton name="MongoDB" icon="bg-green-500" />
            <TechStackButton name="Java" icon="bg-violet-500" />
            <TechStackButton name="SpringBoot" icon="bg-red-500" />
            <TechStackButton name="Python" icon="bg-cyan-600" />
            <TechStackButton name="Hibernate/JPA" icon="bg-fuchsia-400" />
            <TechStackButton name="Junit" icon="bg-stone-300" />
            <TechStackButton name="Git" icon="bg-lime-200" />
            <TechStackButton name="Security" icon="bg-blue-500" />
          </div>
        </div>

        
      </div>
    </div>
      
        </section>
        </>
     
    )
}

export default Skills

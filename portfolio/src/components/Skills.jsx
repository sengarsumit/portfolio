import TechStackButton from "../components/ui/techstackbtn";

function Skills() {
    return (
        <>
        <section className="h-screen">
        
        <div className="max-w-6xl mx-auto my-12 px-6 sm:px-16" id="about">
      
        <h2 className="text-3xl font-extrabold mb-4 text-left font-recoleta">
          About Me
        </h2>
        <p className="mt-4 text-black mx-auto text-base xl:text-lg font-medium">
          {" "}
          I am a <b>Bangalore-based full-stack developer </b> completed my  B.Tech from Guru Tegh bahadur institute of technology (CGPA: <b>8.8/10</b>). Skilled in{" "}
          <b>Java, SpringBoot, React, JavaScript, Python, Linux, RestAPI, Next.js and Node.js </b>, I create
          scalable, user-friendly web applications. I am mostly focussed on backend development.
          <br />
          Software Engineer with experience at<b> Accenture, To The New, and Basil Infotech,</b>  specializing in Java Full Stack Development. Skilled in building RESTful APIs with Spring Boot, implementing authentication with Spring Security, and database integration using Hibernate. Developed responsive web applications at Basil Infotech using HTML, CSS, and JavaScript. Gained cybersecurity insights during an internship with Gurugram Police Cyber Security. Passionate about scalable software development and continuous learning.{" "}
        </p>
    </div>
    <div className="mt-40">
    <h1 className="mb-4 text-4xl font-extrabold leading-none  text-center font-recoleta text-black tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Skills</h1>
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
    </div>
    
      
        </section>
        </>
     
    )
}

export default Skills

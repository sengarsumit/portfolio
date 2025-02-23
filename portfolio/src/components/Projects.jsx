
import landing from '../assets/landing.png';
import spring from '../assets/spring.jpeg';
import vidtube from '../assets/vidtube.png';
function Projects() {
    return (
        <>
        <section className='h-screen'>
        <h1 className="mb-4 text-4xl font-extrabold leading-none text-center underline text-black tracking-tight text-gray-900 md:text-5xl lg:text-6xl">My Projects</h1>
        <div className='grid grid-cols-3 grid-rows-1 gap-5 p-25 '>    
            

    <div className=" bg-white border border-gray-200 rounded-lg shadow-sm ">
        <a href="https://landing-page-sigma-seven-91.vercel.app/" target="_blank" rel="noreferrer">
        <img className="rounded-t-lg" src={landing} alt="landing" />
        </a>
        <div className="p-5">
         <a href="https://github.com/sengarsumit/Landing-Page">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-">Saas Landing page</h5>
            </a>
        <p className="mb-3 font-normal text-gray-700 ">Developed a modern SaaS landing page with Tailwind CSS, TypeScript, Next.js, and Framer Motion, featuring a 
        visually appealing UI and engaging animations. </p>
        
    </div>
</div>
<div className=" bg-white border border-gray-200 rounded-lg shadow-sm ">
    <a href="https://github.com/sengarsumit/scm" target="_blank" rel="noreferrer">
        <img className="rounded-t-lg " src={spring} alt="landing" />
    </a>
    <div className="p-5">
        <a href="https://github.com/sengarsumit/scm">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-">Smart Contact Manager</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 ">• Efficient Contact Management: Developed a contact management application with a secure and smart way of storing 
and handling contacts. 
<br/>
• Authentication & Authorization: Implemented Spring Security for secure user authentication and authorization to 
ensure data protection. 
<br/>
• Self-Contained and Easy to Run: Built with Spring Boot, Thymeleaf, and SQLite3, allowing users to run the app 
with no configuration changes or additional setup.  </p>
        
    </div>
</div>
<div className=" bg-white border border-gray-200 rounded-lg shadow-sm ">
    <a href="https://github.com/sengarsumit/vidtube" target="_blank" rel="noreferrer">
        <img className="rounded-t-lg" src={vidtube} alt="landing" />
    </a>
    <div className="p-5">
        <a href="https://github.com/sengarsumit/vidtube">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-">Vidtube</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 ">• Tech Stack: Node.js, Express.js, MongoDB, JWT, bcrypt (Backend for VidTube, similar to YouTube) 
        <br/>
• Features: CRUD operations, user authentication, JWT security, bcrypt hashing, MongoDB integration, error 
handling & validation..  </p>
        
    </div>
</div>

        </div>
        </section>
        </>
        
    )
}

export default Projects

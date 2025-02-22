import React from 'react'
import java from '../assets/java.png';
import { motion } from "framer-motion";
import node from '../assets/node.png'; 
import coder from '../assets/coder.png';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
function Front() {
    return (
        <>
          <section className='h-170'>
          <motion.img
          src={java}
          alt="java Image"
          className="absolute md:top-24 sm:right-8 xl:right-36 size-48 lg:size-60 xl:size-72 top-16 -right-16 sm:block hidden"
          animate={{
            translateY: [-30, 30],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 3,
            ease: "easeInOut",
          }}
        />
         <motion.img
          src={node}
          alt="node Image"
          className="absolute size-48 lg:size-60 xl:size-72 bottom-32 left-4 xl:left-16 2xl:left-24 hidden md:block"
          animate={{
            translateY: [-30, 30],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 3,
            ease: "easeInOut",
          }}
        />
        <div className='  place-items-center'>
        <img src={coder} alt="coder" className="w-40 h-40 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 mx-auto  md:mt-20 lg:mt-24 xl:mt-28 2xl:mt-32" />
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2  text-center font-recoleta">Sumit Sengar</h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-center font-recoleta">Full Stack Developer</h2>
        <p className="text-center text-lg sm:text-xl lg:text-2xl font-medium font-recoleta">I am a Full Stack Developer  with a strong focus on backend development.</p>
          <div className='flex'>
          <a href="https://www.linkedin.com/in/-sumit-sengar/" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="linkedin" className="w-10 h-10 mt-2 mx-auto" /> 
            </a>
          <a href="https://github.com/sengarsumit/" target="_blank" rel="noreferrer">
          <img src={github} alt="github" className="w-10 h-10 mt-2 mx-4" /> 
          </a>  
          </div>
        </div>
        
          </section>
          
         
        </>
    )
}

export default Front

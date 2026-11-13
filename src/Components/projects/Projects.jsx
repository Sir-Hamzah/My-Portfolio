import  { useState } from 'react';
import firstImg from "../../assets/firstImg.png"

import "./projectstyle.css"
import {motion} from "motion/react"




const Projects = ({ProjectName , About , tech1, tech2 , tech3, tech4 , link}) => {


    const [rotate , setRotate] = useState({x : 0 , y: 0})


    const handleMove = (e)=>{
        const rect  = e.currentTarget.getBoundingClientRect(); 
        const x = (e.clientY - rect.top) / rect.height- 0.5; 
        const y = (e.clientX - rect.left) / rect.width - 0.5; 

        setRotate({
            x : x*-8, 
            y : y*8
        })
    }
    return (
        <div className='projectContainer'>

        <motion.div className='projectCard'

          onMouseMove={handleMove}
          onMouseLeave={()=>{
            setRotate({x : 0 , y:0})
          }}

          animate={{
            rotateX : rotate.x , 
            rotateY : rotate.y
          }}

          transition={{
            type : "spring", 
            stiffness : 300 , 
            damping : 15
          }}
        >

        <motion.img src={firstImg} alt="" className='cardImg' 

                initial={{opacity : 0 , filter: "blur(12px)" , scale: 0.96}}

                whileInView={{
                    opacity : 1 , 
                    filter : "blur(0px)", 
                    scale: 1,
                }}

                viewport={{
                    once : false , amount : 0.3
                }}
                transition={{
                    duration : 0.8 , 
                    ease : [0.22 , 1 , 0.36 , 1]
                }}
                />

            <section
                className='projectSection'
                
            >
                <h3 className='projectName'>{ProjectName}</h3>

                <p className='aboutProject'>{About}</p>

                <ul className='projectLang'>
                    <li>{tech1}</li>
                    <li>{tech1}</li>
                    <li>{tech3}</li>
                    <li>{tech4}</li>
                </ul>

                <motion.button className='projectBtn'
                onClick={()=>{
                    window.location.href= {link}
                }}
                
                whileHover={{
                    scale : 1.1 , y:-2 , 
                }}
                whileTap={{
                    scale : 0.9 , 
                    y: -3
                }}
                transition={{
                    type : "spring", 
                    stiffness : 300 , 
                    damping : 16
                }}
                >
                    visit 
                </motion.button>
            </section>

        </motion.div>
        </div>
    );
}

export default Projects;

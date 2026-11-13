import React from 'react';
import firstImg from "../../assets/firstImg.png"
import {motion} from "motion/react"
import './Infostyle.css'
const FirstComponent = () => {
    return (
        <motion.div className='visualContainer' 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.8 , ease: "easeInOut"}}
            
        >

                <img src={firstImg} alt="" className='heroImg'/>


                <div className='myInfo'>
                    <h1>  👋🏻 اهلاً,   <span  >  انا حمزة  </span>   </h1>
                    <h3>مطور مواقع </h3>

                    <h4> .أصنع تجارب رقميه جميلة وفعالة</h4>

                        <motion.button className='projects' 

                                whileHover={{ y: -5}}
                                whileTap={{scale : 1.9 , y:-2}}
                                transition={{type : "spring" ,stiffness: 300,  damping: 6}}

                        > Projects </motion.button>
                        <motion.button className='contact'
                        
                                whileHover={{ y: -5}}
                                whileTap={{scale : 1.9 , y:-2}}
                                transition={{type : "spring" ,stiffness: 300,  damping: 6}}>

                                   contact me</motion.button>
                </div>
        </motion.div>
    );
}

export default FirstComponent;

import React, { useEffect, useState } from 'react';

import "./skillsStyle.css"

const Skills = ( {name , level , pic}) => {

    const [count , setCount] = useState(0); 
    
    useEffect(()=>{
        const counter = setInterval(()=>{
        setCount((oldCount)=>{
            if(oldCount >= level){
                clearInterval(counter)
                return level; 
            }

            return oldCount+1;
        })


        },30)
        return()=>clearInterval(counter)
    }, [level])

    return (
        <div className='skillsContainer'>
            <section className='skillNameAndPic'>
            <img src={pic} alt=""  className='skillsImg'/>
            <h5>{name}</h5>
            </section>

            <p>{count}</p>

            <section className='progressBar'>
                <div className='progressFill' style={{width: `${count}%`}}>

                </div>

            </section>
            
        </div>
    );
}

export default Skills;

import React from 'react';


import "./skillsStyle.css"


import SliderImport from "react-slick";

const Slider = SliderImport.default ?? SliderImport;
import Skills from './Skills';

import cssPic from "../../assets/icons/css3.png"
import HtmlPic from "../../assets/icons/html5.png"
import JsPic from "../../assets/icons/javascript.png"
import threeJsPic from "../../assets/icons/threejs.png"
import sqlPic from "../../assets/icons/sql.png"
import reactPic from "../../assets/icons/react.png"
import nextPic from "../../assets/icons/nextjs-original-black.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SkillsCard = () => {

    const skillsValue = [
        {
            id:1 , 
            name: "React", 
            level : 90, 
            pic : reactPic
        }, 
        {
            id : 2, 
            name : "JavaScript", 
            level: 95, 
            pic: JsPic
        }, 

        {
            id : 3 , 
            name : "Next , in Progress" ,
            level :60,
            pic :nextPic,
        }, 

         {
            id : 4 , 
            name : "ThreeJs , in Progress" ,
            level : 50,
            pic : threeJsPic,
        }

        , 
        {
            id: 5 , 
            name : "SQL",
            level:   90, 
            pic : sqlPic
        },

        {
            id: 6, 
            name : "CSS",
            level:  100,
            pic : cssPic
        },

        {
            id: 7 , 
            name : "HTML",
            level:  100,
            pic : HtmlPic
        },
    ]


    const settigns = {
        dots : true, 
        infinite : true, 
        speed : 600, 

        slidesToShow : 3, 
        slidesToScroll : 1, 

        autoplay : true, 

        autoplaySpeed: 3000, 

        pauseOnHover : true, 
    }; 


    return (
        <div className='skillsSection'>
<div className="topicHeader">

                <h2>قسم المهارات   <span className='pulse-dot '></span></h2>

</div>
           <Slider {...settigns}>
           {skillsValue.map((skill)=>{
            return(
            <Skills 
                key={skill.id}
                name={skill.name}
                level={skill.level}
                pic={skill.pic}
            />)
           })}

            </Slider>


        </div>
    );
}

export default SkillsCard;

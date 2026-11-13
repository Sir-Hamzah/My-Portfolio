import React from 'react';



import SliderImport from "react-slick";

const Slider = SliderImport.default ?? SliderImport;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projects from './Projects';


const ProjectsComponent = () => {


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


        const projects = [
            {
                    id : 1,
                ProjectName : "Graduation Project" , 
                tech1 : "React",
                tech2 : "Python",
                tech3:"JavaScript", 
                tech4 : "SQL",
                About: "Online reservations - Maps"
                , link : "https://github.com/"
            },
             {
                    id : 2,
                ProjectName : "Store website" , 
                tech1 : "React",
                tech2 : "Nodejs",
                tech3:"ExpressJs", 
                tech4 : "SQL",
                About: "Store"
                                , link : "https://github.com/"

            }, {
                    id :3 ,
                ProjectName : "Reservation website" , 
                tech1 : "NextJs",
                tech2 : "SQL",
                tech3:"JS", 
                tech4 : "EXPRESSJS",
                About: "RESERVATIONS"
            }, {
                    id :4 ,
                ProjectName : "MEDICAL WEBSITE" , 
                tech1 : "REACT",
                tech2 : "SQL",
                tech3:"EXPRESS", 
                tech4 : null,
                About: "MEDICAL BLOGS"
            },
        ]

    return (

        <div>
             <Slider {...settigns}>
                    {
                        projects.map((project)=>{
                            return(
                                <Projects key={project.id} ProjectName={project.ProjectName} tech1={project.tech1} tech2={project.tech2} tech3={project.tech3} tech4={project.tech4} About={project.About} link={project.link}/>
                            )
                        })
                    }            
        </Slider>
        </div>
    );
}

export default ProjectsComponent;

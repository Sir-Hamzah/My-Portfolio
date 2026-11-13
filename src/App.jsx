import React from 'react';

import "./mainStyle.css" //app style 

import NavBar from './Components/boilerPlate/NavBar';
import FirstComponent from './Components/InfoComponentFirstOne/FirstComponent';
import AboutMeComponent from './Components/AboutMe/AboutMeComponent';
import SkillsCard from './Components/Skills/skillsCard';
import Projects from './Components/projects/Projects';
import ProjectsComponent from './Components/projects/ProjectsComponent';



const App = () => {
    return (
        <div className='appContainer'>

        <NavBar />
        < FirstComponent />

        <AboutMeComponent/>

        <SkillsCard  />


            <ProjectsComponent />
        </div>
    );
}

export default App;

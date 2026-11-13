import React from 'react';
import "./styles/Navigation.css"

import Logo from "../../assets/Logo.png"
const NavBar = () => {
    return (
        <div className='container'>

                <h1><span style={{color:"#7C3AED"}}> {'<'} </span> Hamm <span style={{color:"#7C3AED"}}> {"/>"} </span></h1>

                <section className='elementsSection'>
                    <ul className='Navbar'>
                        <li>Home</li>
                        <li>Projects</li>
                        <li>About Me</li>
                        <li>Contact Me</li>
                    </ul>
                </section>
            <section className='downLoadCv'>
                <button>'download icon' My CV</button>
            </section>
        </div>
    );
}

export default NavBar;

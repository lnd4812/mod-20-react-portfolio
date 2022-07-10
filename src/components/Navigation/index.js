import React from "react";
import "../../index.css"

function Navigation() {
            
       return(    
        <nav>
            <ul className="flex-row navlinks">
                <li className="mx-2">
                   <a href="#aboutme">About Me</a>
                </li>
                <li className='mx-1'>
                    <a href="#portfolio">Portfolio</a>
                </li>  
                <li className="mx-2">
                   <a href="#contact"><span>Contact</span></a>
                </li>
                <li className='mx-2'>
                    <a href="#resume">Resume</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
import React from "react";
import "../../index.css"

function Navigation() {

    const handleClick = (item) => {
        return item;
    }
            
       return(    
        <nav>
            <ul className="flex-row navlinks">
                <li className="mx-2">
                   <a href="#aboutme" onClick={() => handleClick('AboutMe')}>About Me</a>
                </li>
                <li className='mx-1'>
                    <a href="#portfolio" onClick={() => handleClick('Portfolio')}>Portfolio</a>
                </li>  
                <li className="mx-2">
                   <span onClick={() => handleClick('Contact')}>Contact</span>
                </li>
                <li className='mx-2'>
                    <a href="#resume"onClick={() => handleClick('Resume')}>Resume</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
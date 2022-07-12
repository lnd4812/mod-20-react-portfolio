import React from "react";
import "../../index.css"

function Navigation(props) {

    const {
        pages=[],
        setCurrentPage
    }= props;
            
    return(    
      <nav>
        <ul className="flex-row navlinks">
            <li className="mx-2">
                <a href="#aboutme" onClick={() => setCurrentPage(pages[0])}>About Me</a>
            </li>
            <li className='mx-1'>
                <a href="#portfolio" onClick={() => setCurrentPage(pages[1])}>Portfolio</a>
            </li>  
            <li className="mx-2">
                <span onClick={() => setCurrentPage(pages[2])}><a href="#contact">Contact</a></span>
            </li>
            <li className='mx-2'>
                <a href="#resume" onClick={() => setCurrentPage(pages[3])}>Resume</a>
            </li>
        </ul>
      </nav>
    );
};

export default Navigation;
import React from "react";
import "../../index.css"

function Navigation(props) {
    const {
        contactSelected,
        setContactSelected        
      } = props;    
        
       return(    
        <nav>
            <ul className="flex-row navlinks">
                <li className="mx-2">
                   <a href="#aboutme" onClick={() => setContactSelected(false)}>About Me</a>
                </li>
                <li className='mx-1'>
                    <a href="#portfolio" onClick={() => setContactSelected(false)}>Portfolio</a>
                </li>  
                <li className={`mx-2 contact-click ${contactSelected && 'navActive'}`}>
                   <span onClick={() => setContactSelected(true)}>Contact</span>
                </li>
                <li className='mx-2'>
                    <a href="#resume" onClick={() => setContactSelected(false)}>Resume</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
import React, {useState, useEffect} from "react";
import "../../index.css"
import ContactForm from "../ContactForm";

function Navigation(props) {
    const {
        
      } = props;    
        
    useEffect(() => {
        document.title = (props)
    });
    
   

    // function subjectSelected() {
    //     console.log(`${name} clicked`)
    // }

    return(    
        <nav>
            <ul className="flex-row navlinks">
                <li className="mx-2">
                   <a href="#aboutme" 
                //    onClick={() => setContactSelected(false)}
                   >
                   About Me
                   </a>
                </li>
                <li 
                className="mx-2"
                // {`mx-2 ${contactSelected && 'navActive'}`}
                >
                    <span 
                    // onClick={() => setContactSelected(true)}
                    >Contact</span>
                </li>
                <li className='mx-2'>
                    <a href="#portfolio">Portfolio</a>
                </li>  
                                          
                <li className='mx-2'>
                    <a href="#resume">Resume</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
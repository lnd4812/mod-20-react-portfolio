import React, {useEffect} from "react";
import "../../index.css"
import ContactForm from "../ContactForm";

function Navigation(props) {
    const {
        subjects = [],
        setCurrentSubject,
        contactSelected,
        currentSubject,
        setContactSelected,
    } = props;    
        
    // useEffect(() => {
    //     document.title = (currentSubject.name);
    // }, [currentSubject]);
    
    return(    
        <nav>
            <ul className="flex-row navlinks">
                <li className="mx-2">
                   <a href="#aboutme" onClick={() => setContactSelected(false)}>About Me</a>
                </li>
                <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                    <span onClick={() => setContactSelected(true)}>Contact</span>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                        <div className="subject-dropdown">
                            <div className="subject-link">
                                {subjects.map((subject) => (
                                    <li className=
                                    {`mx-1 ${currentSubject.name === subject.name && !contactSelected && "navActive"}`} key={subject.name}>
                                        <span onClick={() => {
                                            setCurrentSubject(subject);
                                            setContactSelected(false);
                                         }}>
                                        {(subject.name)}
                                        </span>
                                    </li>
                                ))}
                            </div>
                        </div>
                    </li>                                                
                <li>
                    <a href="../../assets/Laurel David.docx">Resume</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
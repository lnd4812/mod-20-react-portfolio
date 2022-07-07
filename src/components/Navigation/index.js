import React, {useEffect} from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import "../../index.css"
import Project from "../Project";
import ContactForm from '../ContactForm';
import them from "../../assets/main/theme.jpg";

function Navigation(props) {
    const {
        features = [],
        setCurrentFeature,
        contactSelected,
        currentFeature,
        setContactSelected,
    } = props;    
        
    // useEffect(() => {
    //     document.title = (currentFeature.name);
    // }, [currentFeature]);
    
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
                        <div className="feature-dropdown">
                            <div className="feature-link">
                                {features.map((feature) => (
                                    <li className=
                                    {`mx-1 ${currentFeature.name === feature.name && !contactSelected && "navActive"}`} key={feature.name}>
                                        <span onClick={() => {
                                            setCurrentFeature(feature);
                                            setContactSelected(false);
                                         }}>
                                        {(feature.name)}
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
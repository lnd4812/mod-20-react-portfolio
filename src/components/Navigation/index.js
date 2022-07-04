import React, {useEffect} from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
// import Project from "../Project";

function Navigation(props) {
    const {
        features=[],
        setCurrentFeature,
        contactSelected,
        currentFeature,
        setContactSelected,
    } = props;    
        
    
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentFeature.title);
    }, [currentFeature]);
    
    return(    
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#aboutme">About Me</a>
                </li>
                <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                    <span onClick={() => setContactSelected(true)}>Contact</span>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                {/* </li> */}
                {/* <li className="mx-1"> */}
                    {/* <span className="feature-link">Featured Projects</span> 
                    <ul className="feature-dropdown">                    */}
                        {features.map((feature) => (
                        <li className={`mx-1 ${currentFeature.title === feature.title && !contactSelected && "navActive"}`} key={feature.title}>
                            <span onClick={() => {
                               setCurrentFeature(feature);
                               setContactSelected(false);
                            }}>
                               {capitalizeFirstLetter(feature.title)}
                            </span>
                        </li>
                        ))}
                    {/* </ul>                                 */}
                </li>
                <li>
                    <a href="/">Resume</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
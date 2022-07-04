import React, {useEffect} from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import "../../index.css"
// import Project from "../Project";
// import ContactForm from '../ContactForm';
import self from "../../assets/for-header/LND2021.png"
import them from "../../assets/main/theme.jpg";
// import Project from "../Project";

function Navigation(props) {
    const {
        features=[],
        setCurrentFeature,
        contactSelected,
        currentFeature,
        setContactSelected,
    } = props;    
        
    
    // useEffect(() => {
    //     document.title = capitalizeFirstLetter(currentFeature.title);
    // }, [currentFeature]);
    
    return(    
        <nav className="flex-row nav-row">
            <h2>
                    <a className="self" href="/">
                        <span role="img" aria-label="self"><img src={self} className="bio-pic" style={{ width: "2%" }} alt="bio-pic" /></span>Laurel David Portfolio
                    </a>
                </h2>
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
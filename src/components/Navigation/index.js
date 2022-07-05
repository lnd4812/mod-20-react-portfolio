import React, {useEffect} from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import "../../index.css"
import Project from "../Project";
import ContactForm from '../ContactForm';
import self from "../../assets/for-header/LND2021.png"
import them from "../../assets/main/theme.jpg";

function Navigation(props) {
    const {
        features = [Features[i]],
        setCurrentFeature,
        contactSelected,
        currentFeature,
        setContactSelected,
    } = props;    
        
    // const handleClick = (item) => {
    //     console.log(item);
    //     return item;
    // };

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentFeature.name);
    }, [currentFeature]);
    
    return(    
        <nav className="flex-row nav-row">
            <h2>
                <a className="self" href="/">
                    <span role="img" aria-label="self"><img src={self} className="bio-pic" style={{ width: "5%" }} alt="bio-pic" /></span>Laurel David Portfolio
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
                        <div className="feature-dropdown">
                            <div className="feature-link">
                                {features.map((feature) => (
                                    <li className=
                                    {`mx-1 ${currentFeature.name === feature.name && !contactSelected && "navActive"}`} key={feature.name}>
                                        <span onClick={() => {
                                            setCurrentFeature(feature);
                                            setContactSelected(false);
                                         }}>
                                        {capitalizeFirstLetter(feature.name)}
                                        </span>
                                    </li>
                                ))}
                            </div>
                        </div>
                    </li>                                                
                <li>
                    <a href="#resume">Resume</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
import React, {useState} from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
// import Project from "../Project";

function Navigation() {
    
    const features =[
        {
            title: "feature1",
            url: "url1",
            repo: "github1",
        },    
        {
            title: "feature2",
            url: "url2",
            repo: "github2",
        },
            {title: "feature3",
            url: "url3",
            repo: "github3",
            },
        {
            title: "feature4",
            url: "url4",
            repo: "github4",
        },
        {
            title: "feature5",
            url: "url5",
            repo: "github5",
        },
        {title: "feature6",
            url: "url6",
            repo: "github6",
        },
    ];
    
    const [ currentFeature, setCurrentFeature ] = useState(features[0]);
    
    return(    
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#aboutme">About Me</a>
                </li>
                <li>
                    <span>Contact</span>
                </li>
                {/* <li className="mx-1"> */}
                    {/* <span className="feature-link">Featured Projects</span> 
                    <ul className="feature-dropdown">                    */}
                        {features.map((feature) => (
                        <li className={`mx-1 ${currentFeature.title === feature.title && "navActive"}`} key={feature.title}>
                            <span onClick={() => {
                               setCurrentFeature(feature)
                            }}>
                               {capitalizeFirstLetter(feature.title)}
                            </span>
                        </li>
                        ))}
                    {/* </ul>                                 */}
                {/* </li> */}
            </ul>
        </nav>
    );
};

export default Navigation;
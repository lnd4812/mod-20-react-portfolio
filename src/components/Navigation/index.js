import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Navigation() {
    
    const features =[
        {
            name: "feature-1",
            description: "description-1",
        },
        {
            name: "feature-2",
            description: "description-2",
        },
        {
            name: "feature-3",
            description: "description-3",
        },
        {
            name: "feature-4",
            description: "description-4",
        },
        {
            name: "feature-5",
            description: "description-1",
        },
        {
            name: "feature-6",
            description: "description-5",
        },
    ];
    
    function chosenFeature(name) {
        console.log(`${name} clicked`)
    }
    
    return(    
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#aboutme">About Me</a>
                </li>
                <li>
                    <span>Contact</span>
                </li>
                    {features.map((feature) => (
                    <li className="mx-1" key={feature.name}>
                        <span onClick={chosenFeature}>
                            {feature.name}
                        </span>
                    </li>
                ))}  
            </ul>
        </nav>
    );
};

export default Navigation;
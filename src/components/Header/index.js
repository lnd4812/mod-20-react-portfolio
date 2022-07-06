import React, {useState} from "react";
import Navigation from "../Navigation";
import Project from "../Project";
import ContactForm from '../ContactForm';
import self from "../../assets/for-header/LND2021.png"

function Header() {
    const [features] = useState([
        {
            name: "Food Finder Group Project 1",
            url: "",
            repo: "https://github.com/lnd4812/food-finder.git",
        },    
        {
            name: "Tech Blog application",
            url: "https://lnd4812.github.io/weather-dashboard/",
            repo: "https://github.com/lnd4812/weather-dashboard",
        },
        {
            name: "NoSQL",
            url: "",
            repo: "https://github.com/lnd4812//",
        },
        {
            name: "Team Profile Generator",
            url: "url5",
            repo: "https://github.com/lnd4812/team-profile-generator/",
        },
        {
            name: "Weather Dashboard",
            url: "https://lnd4812.github.io/weather-dashboard/",
            repo: "https://github.com/lnd4812/weather-dashboard",
        },
        {   
            name: "Password Generator",
            url: "url6",
            repo: "https://github.com/lnd4812/password-generator",
        },
    ]);
      
    const [currentFeature, setCurrentFeature] = useState(Project(features[0]));
    const { contactSelected, setContactSelected } = useState(false);
     
    return(
        <header>
          <Navigation>
                features={features}
                setCurrentFeature={setCurrentFeature}
                currentFeature={currentFeature}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            </Navigation>
        </header>
    )  
}

export default Header;
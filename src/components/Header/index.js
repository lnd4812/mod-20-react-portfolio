import React, {useState} from "react";
import Navigation from "../Navigation";

import Project from "../Project";
import ContactForm from '../ContactForm';
import self from "../../assets/for-header/LND2021.png"

function Header() {
    const [features] = useState([
        {
            title: "Food Finder Group Project 1",
            url: "",
            repo: "https://github.com/lnd4812/food-finder.git",
        },    
        {
            title: "Weather Dashboard",
            url: "https://lnd4812.github.io/weather-dashboard/",
            repo: "https://github.com/lnd4812/weather-dashboard",
        },
        {
            title: "Note-Taker",
            url: "https://note-taker-at-work.herokuapp.com/",
            repo: "https://github.com/lnd4812/note-taker/",
        },
        {
            title: "Workday Scheduler",
            url: "url4",
            repo: "https://github.com/lnd4812/workday-scheduler/",
        },
        {
            title: "Team Profile Generator",
            url: "url5",
            repo: "https://github.com/lnd4812/team-profile-generator/",
        },
        {title: "Password Generator",
            url: "url6",
            repo: "https://github.com/lnd4812/password-generator",
        },
    ]);

    const [currentFeature, setCurrentFeature] = useState(features[0]);
    const [contactSelected, setContactSelected] = useState(false);

    return(
        
        
        <header>
          <Navigation>
                features={features}
                setCurrentFeature{setCurrentFeature}
                currentFeature={currentFeature}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            </Navigation>
        </header>
    )  
}

export default Header;
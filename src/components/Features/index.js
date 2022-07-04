import React, {useState} from "react";

const FeatureList = ({ feature }) => {
    const [currentFeature, setCurrentFeature] = useState();

    const [features] = useState([     
            {
                title: "Food Finder Group Project 1",
                url: "https://bootcampprojectoneteamfour.github.io/food-finder",
                repo: "https://github/lnd4812/food-finder.git",
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
            {
                title: "Password Generator",
                url: "url6",
                repo: "https://github.com/lnd4812/password-generator",
            },
        ]);    
}

export default features;

import React, {useState} from 'react';


const Features = ({ feature }) => {
        const [currentFeature, setCurrentFeature] = useState();

    const [featurePhotos] = useState([     
            {
                name: "Food Finder Group Project 1",
                url: "https://bootcampprojectoneteamfour.github.io/food-finder",
                repo: "https://github/lnd4812/food-finder.git",
            },    
            {
                name: "Weather Dashboard",
                url: "https://lnd4812.github.io/weather-dashboard/",
                repo: "https://github.com/lnd4812/weather-dashboard",
            },
            {
                name: "Note-Taker",
                url: "https://note-taker-at-work.herokuapp.com/",
                repo: "https://github.com/lnd4812/note-taker/",
            },
            {
                name: "Workday Scheduler",
                url: "url4",
                repo: "https://github.com/lnd4812/workday-scheduler/",
            },
            {
                name: "Team Profile Generator",
                url: "url5",
                repo: "https://github.com/lnd4812/team-profile-generator/",
            },
            {
                name: "Password Generator",
                url: "url6",
                repo: "https://github.com/lnd4812/password-generator",
            },
        ]);    

        const currentFeaturePhotos = featurePhotos.filter(feature)

        return(
            <div>
                <div className="flex-row">
                    {currentFeaturePhotos.map((image, i) => (
                        <img
                            src={require(`../../assets/featurePhoto/${i}`).default}
                            alt={image.name}
                            className="img-thumbnail mx-1"
                            key={image.name}
                        />
                    ))}
                </div>
            </div>
        );
}

export default Features;






import React, {useState} from 'react';

const Project = ({ feature }) => {
    const [featurePhotos] = useState([     
        {
            name: "Food Finder Group Project 1",
            feature: "food-finder-group-project-1.png",
            url: "https://bootcampprojectoneteamfour.github.io/food-finder",
            repo: "https://github/lnd4812/food-finder.git",
        },    
        {
            name: "Tech Blog",
            feature: "tech-blog.png",
            url: "https://mod-14-tech-blog-challenge.jerokuapp.com/",
            repo: "https://github.com/lnd4812/mod-14-tech-blog-challenge.git",
        },
        {
            name: "Budget App",
            feature: 'budget-app.png',
            url: "https://polite-whistler-56063.herokuapp.com/",
            repo: "https://github.com/lnd4812/mod-19-pwa-budget-app/",
        },
        {
            name: "Workday Scheduler",
            feature: 'workday-scheduler.png',
            url: "https://lnd4812.github.io/workday-scheduler/",
            repo: "https://github.com/lnd4812/workday-scheduler/",
        },
        {
            name: "Weather Dashboard",
            feature: "weather-dashboard.png",
            url: "https://lnd4812.github.io/weather-dashboard/",
            repo: "https://github.com/lnd4812/weather-dashboard/",
        },
        {
            name: "Password Generator",
            feature: "password-generator.png",
            url: "https://lnd4812.github.io/password-generator/",
            repo: "https://github.com/lnd4812/password-generator",
        },
    ]);    
    
    const displayFeatures = featurePhotos.filter(featurePhoto => featurePhoto.feature === feature);
    
        return (
            <div>
                <div className="flex-row">
                    {displayFeatures.map((image, i) => (
                    <img
                        src={require(`../../assets/featureImages/${feature}${i}`).default}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        key={image.name}
                       />
                    ))}   
                </div>
            </div>
        )
    }

export default Project;






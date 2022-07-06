import React, {useState} from 'react';

const Features = ({ feature }) => {
    const [currentFeature, setCurrentFeature] = useState();

    const [featureImages] = useState([     
            {
                name: "Food Finder Group Project 1",
                feature: "project-1",
                url: "https://bootcampprojectoneteamfour.github.io/food-finder",
                repo: "https://github/lnd4812/food-finder.git",
            },    
            {
                name: "Tech Blog",
                feature: "mvc",
                url: "https://mod-14-tech-blog-challenge.jerokuapp.com/",
                repo: "https://github.com/lnd4812/mod-14-tech-blog-challenge.git",
            },
            {
                name: "Budget App",
                feature: "pwa",
                url: "https://polite-whistler-56063.herokuapp.com/",
                repo: "https://github.com/lnd4812/mod-19-pwa-budget-app/",
            },
            {
                name: "Workday Scheduler",
                feature: "3rd-party-apis",
                url: "https://lnd4812.github.io/workday-scheduler/",
                repo: "https://github.com/lnd4812/workday-scheduler/",
            },
            {
                name: "Weather Dashboard",
                feature: "server-side-apis",
                url: "https://lnd4812.github.io/weather-dashboard/",
                repo: "https://github.com/lnd4812/weather-dashboard/",
            },
            {
                name: "Password Generator",
                feature: "javascript",
                url: "https://lnd4812.github.io/password-generator/",
                repo: "https://github.com/lnd4812/password-generator",
            },
        ]);    

       const currentFeatures = featureImages.filter(featureImage => featureImage.feature === feature);

        return (
            <div>
                <div className="flex-row">
                    {currentFeatures.map((image, i) => (
                        <img
                            src={require(`../../assets/featureImage/${feature}/${i}`).default={currentFeature}}
                            alt={image.name}
                            className="img-thumbnail mx-1"
                            onClick={() => setCurrentFeature(image, i)}
                            key={image.name}
                        />
                    ))}
                </div>
            </div>
        );
}

export default Features;






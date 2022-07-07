import React, {useState} from 'react';

const SubjectListing = ({ subject }) => {
    const [subjectImages] = useState([     
        {
            name: "Food Finder Group Project 1",
            subject: "project-1",
            url: "https://bootcampprojectoneteamfour.github.io/food-finder",
            repo: "https://github/lnd4812/food-finder.git",
        },    
        {
            name: "Tech Blog",
            subject: "mvc",
            url: "https://mod-14-tech-blog-challenge.jerokuapp.com/",
            repo: "https://github.com/lnd4812/mod-14-tech-blog-challenge.git",
        },
        {
            name: "Budget App",
            subject: "pwa",
            url: "https://polite-whistler-56063.herokuapp.com/",
            repo: "https://github.com/lnd4812/mod-19-pwa-budget-app/",
        },
        {
            name: "Workday Scheduler",
            subject: "3rd-party-apis",
            url: "https://lnd4812.github.io/workday-scheduler/",
            repo: "https://github.com/lnd4812/workday-scheduler/",
        },
        {
            name: "Weather Dashboard",
            subject: "server-side-apis",
            url: "https://lnd4812.github.io/weather-dashboard/",
            repo: "https://github.com/lnd4812/weather-dashboard/",
        },
        {
            name: "Password Generator",
            subject: "javascript",
            url: "https://lnd4812.github.io/password-generator/",
            repo: "https://github.com/lnd4812/password-generator",
        },
    ]);    

    const currentSubjects = subjectImages.filter(subjectImage => subjectImage.subject === subject);

    return (
        <div className="flex-row">
        {currentSubjects.map((image) => (
                <img src={require(`../../assets/subjectImage/${subject}/0.png`).default}
                    alt={image.name}
                    className="img-thumbnail mx-1"
                    key={image.name}
                />
              ))}
        </div>
        
    );
}

export default SubjectListing;






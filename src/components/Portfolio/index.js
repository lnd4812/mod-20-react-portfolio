import React, { useState } from "react";
import Project from "../Project";

function Portfolio(props) {
  const [featurePhotos] = useState([
    {
      name: "Food Finder Group Project 1",
      feature: "food-finder-group-project-1",
      url: <a href="https://bootcampprojectoneteamfour.github.io/food-finder">https://bootcampprojectoneteamfour.github.io/food-finder</a>,
      repo: <a href="https://github.com/bootcampProjectOneTeamFour/food-finder">https://github.com/bootcampProjectOneTeamFour/food-finder</a>,
    },
    {
      name: "Tech Blog",
      feature: "tech-blog",
      url: <a href="https://mod-14-tech-blog-challenge.herokuapp.com">https://mod-14-tech-blog-challenge.herokuapp.com</a>,
      repo: <a href="https://github.com/lnd4812/mod-14-tech-blog-challenge.git">https://github.com/lnd4812/mod-14-tech-blog-challenge.git</a>,
    },
    {
      name: "Budget App",
      feature: "budget-app",
      url: <a href="https://polite-whistler-56063.herokuapp.com/">https://polite-whistler-56063.herokuapp.com/</a>,
      repo: <a href="https://github.com/lnd4812/mod-19-pwa-budget-app/">https://github.com/lnd4812/mod-19-pwa-budget-app/</a>,
    },
    {
      name: "Workday Scheduler",
      feature: "workday-scheduler",
      url: <a href="https://lnd4812.github.io/workday-scheduler/">https://lnd4812.github.io/workday-scheduler/</a>,
      repo: <a href="https://github.com/lnd4812/workday-scheduler/">https://github.com/lnd4812/workday-scheduler/</a>,
    },
    {
      name: "Weather Dashboard",
      feature: "weather-dashboard",
      url: <a href="https://lnd4812.github.io/weather-dashboard/">https://lnd4812.github.io/weather-dashboard/</a>,
      repo: <a href="https://github.com/lnd4812/weather-dashboard/">https://github.com/lnd4812/weather-dashboard/</a>,
    },
    {
      name: "Password Generator",
      feature: "password-generator",
      url: <a href="https://lnd4812.github.io/password-generator/">https://lnd4812.github.io/password-generator/</a>,
      repo: <a href="https://github.com/lnd4812/password-generator">https://github.com/lnd4812/password-generator</a>,
    },
  ]);

  return (
    <div className="project-image">
      {featurePhotos.map((project) => (
        <Project data={project} />
      ))}
    </div>
  );
}

export default Portfolio;

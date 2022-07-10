import React, { useState } from "react";
import Project from "../Project";

function Portfolio(props) {
  const [featurePhotos] = useState([
    {
      name: "Food Finder Group Project 1",
      feature: "food-finder-group-project-1",
      url: <a href="https://bootcampprojectoneteamfour.github.io/food-finder">bootcampprojectoneteamfour.github.io/food-finder</a>,
      repo: <a href="https://github.com/bootcampProjectOneTeamFour/food-finder">github.com/bootcampProjectOneTeamFour/food-finder</a>,
    },
    {
      name: "Tech Blog",
      feature: "tech-blog",
      url: <a href="https://mod-14-tech-blog-challenge.herokuapp.com">mod-14-tech-blog-challenge.herokuapp.com</a>,
      repo: <a href="https://github.com/lnd4812/mod-14-tech-blog-challenge.git">github.com/lnd4812/mod-14-tech-blog-challenge.git</a>,
    },
    {
      name: "Budget App",
      feature: "budget-app",
      url: <a href="https://polite-whistler-56053.herokuapp.com/">polite-whistler-56063.herokuapp.com/</a>,
      repo: <a href="https://github.com/lnd4812/mod-19-pwa-budget-app/">github.com/lnd4812/mod-19-pwa-budget-app/</a>,
    },
    {
      name: "Workday Scheduler",
      feature: "workday-scheduler",
      url: <a href="https://lnd4812.github.io/workday-scheduler/">lnd4812.github.io/workday-scheduler/</a>,
      repo: <a href="https://github.com/lnd4812/workday-scheduler/">github.com/lnd4812/workday-scheduler/</a>,
    },
    {
      name: "Weather Dashboard",
      feature: "weather-dashboard",
      url: <a href="https://lnd4812.github.io/weather-dashboard/">lnd4812.github.io/weather-dashboard/</a>,
      repo: <a href="https://github.com/lnd4812/weather-dashboard/">github.com/lnd4812/weather-dashboard/</a>,
    },
    {
      name: "Password Generator",
      feature: "password-generator",
      url: <a href="https://lnd4812.github.io/password-generator/">lnd4812.github.io/password-generator/</a>,
      repo: <a href="https://github.com/lnd4812/password-generator">github.com/lnd4812/password-generator</a>,
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

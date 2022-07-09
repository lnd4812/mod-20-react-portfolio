import React, {useState} from "react";
import Navigation from "../Navigation";
import "../../index.css";
import self from "../../assets/for-header/LND2021.png"

function Header() {
   
    // const [features] = useState([
    //     {
    //         name: "Food Finder Group Project 1",
    //         url: "https://bootcampprojectoneteamfour.github.io/food-finder",
    //         repo: "https://github/lnd4812/food-finder.git",
    //     },
    //     {
    //         name: "Tech Blog",
    //         url: "https://mod-14-tech-blog-challenge.jerokuapp.com/",
    //         repo: "https://github.com/lnd4812/mod-14-tech-blog-challenge.git", 
    //     },
    //     {
    //         name: "Budget App",
    //         url: "https://polite-whistler-56063.herokuapp.com/",
    //         repo: "https://github.com/lnd4812/mod-19-pwa-budget-app/",
    //     },
    //     {
    //         name: "Workday Scheduler",
    //         url: "https://lnd4812.github.io/workday-scheduler/",
    //         repo: "https://github.com/lnd4812/workday-scheduler/",
    //     },
    //     {
    //         name: "Weather Dashboard",
    //         url: "https://lnd4812.github.io/weather-dashboard/",
    //         repo: "https://github.com/lnd4812/weather-dashboard/",
    //     },
    //     {
    //         name: "Password Generator",
    //         url: "https://lnd4812.github.io/password-generator/",
    //         repo: "https://github.com/lnd4812/password-generator",
    //     }
    // ]);

          
    return(
        <header className="flex-row nav-row">
            <h2>
                <a className="self" href="#aboutme">
                    <span role="img" aria-label="self"><img src={self} className="bio-pic" style={{ width: "5%" }} alt="bio-pic" /></span>Laurel David Portfolio
                </a>
            </h2>
            <Navigation></Navigation>
        </header>
    )  
}

export default Header;
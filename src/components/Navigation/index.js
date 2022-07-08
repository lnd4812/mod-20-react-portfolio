import React, {useState} from "react";
import "../../index.css"
import ContactForm from "../ContactForm";

function Navigation(props) {
    // const {
    //     subjects = [],
    //     setCurrentSubject,
    //     contactSelected,
    //     currentSubject,
    //     setContactSelected,
    // } = props;    
        
    // useEffect(() => {
    //     document.title = (currentSubject.name);
    // }, [currentSubject]);
    
    const [subjects] = useState([
        {
            name: "Food Finder Group Project 1",
            url: "https://bootcampprojectoneteamfour.github.io/food-finder",
            repo: "https://github/lnd4812/food-finder.git",
        },
        {
            name: "Tech Blog",
            url: "https://mod-14-tech-blog-challenge.jerokuapp.com/",
            repo: "https://github.com/lnd4812/mod-14-tech-blog-challenge.git", 
        },
        {
            name: "Budget App",
            url: "https://polite-whistler-56063.herokuapp.com/",
            repo: "https://github.com/lnd4812/mod-19-pwa-budget-app/",
        },
        {
            name: "Workday Scheduler",
            url: "https://lnd4812.github.io/workday-scheduler/",
            repo: "https://github.com/lnd4812/workday-scheduler/",
        },
        {
            name: "Weather Dashboard",
            url: "https://lnd4812.github.io/weather-dashboard/",
            repo: "https://github.com/lnd4812/weather-dashboard/",
        },
        {
            name: "Password Generator",
            url: "https://lnd4812.github.io/password-generator/",
            repo: "https://github.com/lnd4812/password-generator",
        }
    ]);

    function subjectSelected() {
        console.log(`${name} clicked`)
    }

    return(    
        <nav>
            <ul className="flex-row navlinks">
                <li className="mx-2">
                   <a href="#aboutme" 
                //    onClick={() => setContactSelected(false)}
                   >About Me</a>
                </li>
                <li 
                className="mx-2"
                // {`mx-2 ${contactSelected && 'navActive'}`}
                >
                    <span 
                    // onClick={() => setContactSelected(true)}
                    >Contact</span>
                </li>
                <li>
                    <a href="#portfolio" className="mx-2">Portfolio</a>
                        {subjects.map((subject) => ( 
                            <li className="mx-1" key={subject.name}
                            // {`mx-1 ${currentSubject.name === subject.name && !contactSelected && "navActive"}`} key={subject.name}
                            >
                                <span
                                onClick={() => subjectSelected(subject.name)}

                                //     setCurrentSubject(subject);
                                //     setContactSelected(false);
                                // }}
                                    >
                                {(subject.name)}
                                </span> 
                            </li>
                        ))}
                    
                    </li>                                                
                <li>
                    <a href="../../assets/Laurel David.docx" className="mx-2">Resume</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
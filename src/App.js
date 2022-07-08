import React, {useState} from "react";
import Aboutme from "./components/Aboutme";
import Header from "./components/Header";
import Project from "./components/Project";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import './App.css';

function App() {
//   const [subjects] = useState([
//     {
//         name: "Food Finder Group Project 1",
//         // url: "https://bootcampprojectoneteamfour.github.io/food-finder",
//         // repo: "https://github/lnd4812/food-finder.git",
//     },    
//     {
//         name: "Tech Blog",
//         // url: "https://mod-14-tech-blog-challenge.jerokuapp.com/",
//         // repo: "https://github.com/lnd4812/mod-14-tech-blog-challenge.git",
//     },
//     {
//         name: "Budget App",
//         // url: "https://polite-whistler-56063.herokuapp.com/",
//         // repo: "https://github.com/lnd4812/mod-19-pwa-budget-app/",
//     },
//     {
//         name: "Workday Scheduler",
//         // url: "https://lnd4812.github.io/workday-scheduler/",
//         // repo: "https://github.com/lnd4812/workday-scheduler/",
//     },
//     {
//         name: "Weather Dashboard",
//         // url: "https://lnd4812.github.io/weather-dashboard/",
//         // repo: "https://github.com/lnd4812/weather-dashboard",
//     },
//     {   
//         name: "Password Generator",
//         // url: "https://lnd4812.github.io/password-generator/",
//         // repo: "https://github.com/lnd4812/password-generator",
//     },
// ]);
  
// const [currentSubject, setCurrentSubject] = useState(subjects[0]);
// const { contactSelected, setContactSelected } = useState(false);

  return (
    <div className="App">
      <Header
        // subjects={subjects}
        // setCurrentSubject={setCurrentSubject}
        // currentSubject={currentSubject}
        // contactSelected={contactSelected}
        // setContactSelected={setContactSelected}
        >
      </Header>     
      <main>
        {/* {!contactSelected ? (
          <> */}
          <Project></Project>
          <Aboutme></Aboutme>
         {/* </>
        ) : ( */}
          <ContactForm></ContactForm>
        {/* )} */}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

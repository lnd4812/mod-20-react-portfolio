import React, {useState} from "react";
import Aboutme from "./components/Aboutme";
import Header from "./components/Header";
import Project from "./components/Project";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import './App.css';

function App() {
  const [features] = useState([
    {
        name: "Food Finder Group Project 1",
        url: "",
        repo: "https://github.com/lnd4812/food-finder.git",
    },    
    {
        name: "Tech Blog application",
        url: "https://lnd4812.github.io/weather-dashboard/",
        repo: "https://github.com/lnd4812/weather-dashboard",
    },
    {
        name: "NoSQL",
        url: "",
        repo: "https://github.com/lnd4812//",
    },
    {
        name: "Team Profile Generator",
        url: "url5",
        repo: "https://github.com/lnd4812/team-profile-generator/",
    },
    {
        name: "Weather Dashboard",
        url: "https://lnd4812.github.io/weather-dashboard/",
        repo: "https://github.com/lnd4812/weather-dashboard",
    },
    {   
        name: "Password Generator",
        url: "url6",
        repo: "https://github.com/lnd4812/password-generator",
    },
]);
  
const [currentFeature, setCurrentFeature] = useState(features[0]);
const { contactSelected, setContactSelected } = useState(false);

  return (
    <div className="App">
      <Header
        features={features}
        setCurrentFeature={setCurrentFeature}
        currentFeature={currentFeature}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}>
      </Header>     
      <main>
        {!contactSelected ? (
          <>
          <Project currentFeature={currentFeature}></Project>
          <Aboutme></Aboutme>
         </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

import React, {useState} from "react";
import Aboutme from "./components/Aboutme";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import Resume from "./components/Resume"
import Footer from "./components/Footer";
import DownloadLink from "react-download-link";
import './App.css';

function App() {
    
  return (
    <div className="App">
        <Header>
        </Header>     
      <main>
       
          <Aboutme></Aboutme>
          
           <Portfolio></Portfolio>
           
            <Resume>
                      <DownloadLink
                      label="Save"
                      filename="myfile.txt"
                      exportFile={() => "My cached Data"}/>
                  </Resume>
            
          
             <ContactForm></ContactForm>
            
             </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

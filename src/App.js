import React from "react";
import theme from '../src/assets/main/theme.jpg';
import Aboutme from "./components/Aboutme";
import Header from "./components/Header";
import Project from "./components/Project";
import ContactForm from "./components/ContactForm";
import './App.css';

function App() {
  const { contactSelected, setContactSelected } =useState(false);

  return (
    <div className="App">
      <Header></Header>  
      <main>
      {!contactSelected ? (
        <>
       
        <Project></Project>
        <Aboutme></Aboutme>

        </>
        ) : (
          <ContactForm></ContactForm>
        )}

      </main>
    </div>
  );
}

export default App;

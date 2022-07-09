import React, {useState} from "react";
import Aboutme from "./components/Aboutme";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import Resume from "./components/Resume"
import Footer from "./components/Footer";
import './App.css';

function App(props) {
 const { currentSubject } = props;
      

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
          <Portfolio currentSubject={currentSubject}></Portfolio>
          <Aboutme></Aboutme>
         {/* </>
        ) : ( */}
          <ContactForm></ContactForm>
        {/* )} */}
        <Resume></Resume>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

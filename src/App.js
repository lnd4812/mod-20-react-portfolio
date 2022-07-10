import React, {useState} from "react";
import Aboutme from "./components/Aboutme";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import Resume from "./components/Resume"
import Footer from "./components/Footer";
import './App.css';

function App() {
const { contactSelected, setContactSelected } = useState(false);

  return (
    <div className="App">
      <Header
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}>
      </Header>     
      <main>
      {/* Create a switch case using pageSelected state */}
       {!contactSelected ? (
        <>
          <Aboutme></Aboutme>
          <Portfolio></Portfolio>
          <Resume></Resume>
        </>
       ):(
          <ContactForm></ContactForm>
       )}
       </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

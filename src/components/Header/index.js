import React, {useState} from "react";
import Navigation from "../Navigation";
import Project from "../Project";
import ContactForm from '../ContactForm';
import self from "../../assets/for-header/LND2021.png"

function Header() {
    
    return(
        <header>
          <Navigation>
                features={features}
                setCurrentFeature{setCurrentFeature}
                currentFeature={currentFeature}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            </Navigation>
        </header>
    )  
}

export default Header;
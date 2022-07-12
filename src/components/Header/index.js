import React from "react";
import Navigation from "../Navigation";
import "../../index.css";
import self from "../../assets/for-header/LND2021.png"

function Header() {
    // const handleClick=(props) => {
    //  return props;
        
      return(
        <header className="flex-row nav-row">
            <h2>
                <a className="self" href="#aboutme">
                    <span role="img" aria-label="self"><img src={self} className="bio-pic" style={{ width: "5%" }} alt="bio-pic" /></span>Laurel David Portfolio
                </a>
            </h2>
            <Navigation 
            //  handleClick={handleClick}
             >  
            </Navigation>
        </header>
    ) 
}

export default Header;
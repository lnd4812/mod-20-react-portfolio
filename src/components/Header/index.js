import React from "react";
import Navigation from "../Navigation";
import self from "../../assets/for-header/LND2021.png"

function Header() {
    return(
        <header>
            <h2>
                <a className="self" href="/">
                    <span role="img" aria-label="self"><img src={self} className="bio-pic" style={{ width: "2%" }} alt="bio-pic" /></span>Laurel David
                </a>
            </h2>
            <Navigation></Navigation>
        </header>
    )  
}

export default Header;
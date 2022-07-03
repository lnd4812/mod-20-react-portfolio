import React from "react";
import Navigation from "../Navigation";
import { capitalizeFirstLetter} from "../../utils/helpers";

function Header() {
    return(
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="self"></span>Laurel David
                </a>
            </h2>
        
            <Navigation></Navigation>
        </header>
    )  
}

export default Header;
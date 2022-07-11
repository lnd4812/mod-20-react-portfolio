import React from 'react';
import "../../index.css"
import ghwhite from "../../assets/logos/ghwhite.png";
import linkedin from "../../assets/logos/linkedin.png";
import facebook from "../../assets/logos/facebook.png";

function Footer() {

    return(
        <footer id="footer">
            <div className="social-links">
                <a href="https://github.com/lnd4812"><img src={ghwhite} alt="github logo" ></img></a>
                <a href="https://www.linkedin.com/in/laurel-david-99122574/"><img src={linkedin} alt="linkedIn logo" ></img></a>
                <a href="https://www.facebook.com/ln.david.5"><img src={facebook} alt="facebook logo" ></img></a>
            </div>

        </footer>
    );
};

export default Footer;
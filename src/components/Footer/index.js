import React from 'react';
import GitHub from "../../assets/logos/GitHub-Mark-64px.png";
import LinkedIn from "../../assets/logos/LinkedIn.png"


function Footer() {

    return(
    <footer id="social">
        <div className="social-links">
            <a href="https://github.com/lnd4812">GitHub<img src={GitHub} className="gitHubLogo" alt="gitHub Logo"/></a>
            <a href="https://www.linkedin.com/in/laurel-david-99122574/">Linked In<img src={LinkedIn} className="linkedInLogo" alt="Linked In Logo"></img></a>
            <a href="/">3rd profil<img src="/"></img></a>
        </div>

    </footer>
    );
};

export default Footer;
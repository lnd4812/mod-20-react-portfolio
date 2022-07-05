import React from 'react';
import GitHub from "../../assets/logos/GitHub-Mark-64px.png";
import LinkedIn from "../../assets/logos/LinkedIn.png"


function Footer() {

    return(
    <footer id="social">
        <div class="social-links">
            <a href="https://github.com/lnd4812"><img src={GitHub} className="gitHubLogo" alt="gitHub Logo"/>GitHub</a>
            <a href="https://www.linkedin.com/in/laurel-david-99122574/"><img src={LinkedIn} className="linkedInLogo" alt="Linked In Logo">LinkedIn</img></a>
            <a href="/"><img src="/">3rd profile?</img></a>
        </div>

    </footer>
    );
};

export default Footer;
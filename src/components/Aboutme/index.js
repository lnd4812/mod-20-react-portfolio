import React from 'react';
import theme from "../../assets/main/theme.jpg";

function Aboutme() {
    return(
        <section className="my-5 bio">
            <h1 id="aboutme">About Me</h1>
            <img src={theme} className="my-2" style={{ width: "100%" , opacity: .9}} alt="cover" />
            <div className="my-2 bio-blurb">
                <p>
                    I am a native of Cape Breton, Nova Scotia, having moved to Toronto not long after graduating from Dalhousie University with a B.Sc. in Mathematics. The majority of my career has been in the insurance and reinsurance industry and, in the course of my current position, was introduced to coding by way of being assigned to manage the company's website, which inspired my enrollment in this Bootcamp course. This portfolio was meant to be a basis for establishing a platform in which to feature work created over the course of this program.  I may have to stick to reinsurance.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                </p>
            </div>
        </section>
    );
};

export default Aboutme;
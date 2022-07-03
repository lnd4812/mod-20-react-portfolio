import React from 'react';
import theme from "../../assets/main/theme.jpg";

function Aboutme() {
    return(
        <section className="my-5">
            <h1 id="about">About Me</h1>
            <img src={theme} className="my-2" style={{ width: "100%" }} alt="cover" />
            <div className="my-2 bio-blurb">
                <p>
                    I am a native of Cape Breton, Nova Scotia, having moved to Toronto not long after graduating from Dalhousie University with a B.Sc. in Mathematics.<br></br>The majority of my career has been in the insurance and reinsurance industry and, in the course of my current position, was introduced to coding by way of being assigned to manage the company's website.<br></br>
                </p>
            </div>
        </section>
    );
};

export default Aboutme;
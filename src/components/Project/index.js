import React from 'react';
import Features from "../Features";
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Project(props) {
    const { currentFeature } = props;

    return(
        <section className="feature-ident">
            <h3>{(currentFeature.name)}</h3>
            <p>{currentFeature.url}</p>
            <p>{currentFeature.repo}</p>
            <Features feature={currentFeature.name}/>
        </section>
    );
}
export default Project;
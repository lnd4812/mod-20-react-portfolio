import React from 'react';
import Features from "../Features";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Project(props) {
    const { currentFeature } = props;

    return(
        <section>
            <h1>{capitalizeFirstLetter(currentFeature.name)}</h1>
            <p>{currentFeature.url}</p>
            <p>{currentFeature.repo}</p>
            <Features feature={currentFeature.name}/>
        </section>
    );
}
export default Project;
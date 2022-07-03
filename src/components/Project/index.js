import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";
import photo from "../../assets/features/password-generator.png";

function Project(props) {
    const currentFeature = {
        title: "feature-1",
        url: "url-1",
        repo: "github-1"
    };
    return(
        <section className="feature">
            <h1>{capitalizeFirstLetter(currentFeature.title)}</h1>
            <a href="/"><p>{currentFeature.url}</p></a>
            <a href="/"><p>{currentFeature.repo}</p></a>
            <div class="flex-row">
                <img src={photo}
                alt="project photo"
                className="img-thumbnail mx-1" />
            </div>
        </section>
    );
}

export default Project;
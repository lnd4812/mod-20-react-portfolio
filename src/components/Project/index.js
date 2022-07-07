import React from 'react';
import SubjectListing from "../SubjectListing";

function Project(props) {
    const { currentSubject } = props;

    return(
        <section className="subject-ident">
            <h3>{currentSubject.name}</h3>
            <p>{currentSubject.url}</p>
            <p>{currentSubject.repo}</p>
            <SubjectListing subject={currentSubject.name}/>
        </section>
    );
}
export default Project;
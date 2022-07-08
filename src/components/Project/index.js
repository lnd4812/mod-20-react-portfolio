import React from 'react';
import subjectImage from "../../assets/subjectImage/project-1/0.png";
// import SubjectListing from "../SubjectListing";

function Project(props) {
   const currentSubject  = {
    name: "Food Finder Group Project 1",
    url: "abc",
    repo: "def"
   };
   
    return(
        <section>
            <h3>{currentSubject.name}</h3>
            <p>{currentSubject.url}</p>
            <p>{currentSubject.repo}</p>
            <div className="flex-row">
                <img src={subjectImage}
                alt="food finder home page"
                className="img-thumbnail mx-1" />
            </div>
           
        </section>
    );
}
export default Project;
import React from 'react';
import PageContent from '../PageContent';
import Aboutme from "../Aboutme"
import Portfolio from "../Portfolio";
import ContactForm from "../ContactForm";
import Resume from "../Resume"


function Page({ currentPage }) {
    const renderPage = () => {
        switch (currentPage.name) {
            case 'aboutme':
                return <Aboutme />;
            case 'portfolio':
                return <Portfolio />;
            case 'contact':
                return <ContactForm />;
            case 'resume':
                return <Resume />;
            default:
                return <Aboutme />;
        }
    };
    
    return(
        <section>
            <PageContent>
                {
                   renderPage()
                }
            </PageContent>
        </section>
    )


}

export default Page;
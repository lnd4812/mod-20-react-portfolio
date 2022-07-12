import React, {useState} from "react";
import Navigation from "../Navigation";
import Page from "../Page";
import "../../index.css";
import self from "../../assets/for-header/LND2021.png"

function Header() {

    const[pages] = useState([
        {name: 'aboutme'}, 
        {name: 'portfolio'},
        {name: 'contact'},
        {name: 'resume'},
    ]);

    const [currentPage, setCurrentPage] = useState(pages[0]);

    return(
      <div>      
        <header className="flex-row nav-row">
            <h2>
                <a className="self" href="#aboutme">
                    <span role="img" aria-label="self"><img src={self} className="bio-pic" style={{ width: "5%" }} alt="bio-pic" /></span>Laurel David Portfolio
                </a>
            </h2>
            <Navigation 
                pages={pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
             >  
            </Navigation>
        </header>
        <main>
            <Page 
                currentPage={currentPage}>
            </Page>
        </main>
      </div>
    ) 
}

export default Header;
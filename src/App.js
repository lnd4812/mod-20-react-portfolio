import React from 'react';
import Aboutme from "./components/Aboutme";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import Resume from "./components/Resume"
import Footer from "./components/Footer";
import './App.css';

function App() {

    return (
        <div className="App">
            <Header>
            </Header>  
            <main>
                <Aboutme></Aboutme>
                <Portfolio></Portfolio>
                <ContactForm></ContactForm>
                <Resume></Resume>
            </main>
            <Footer></Footer>
        </div>
    ); 


// coding for conversion to SPA once I figure out how to do it correctly
// const display = useState([
      
// ]);

//     switch(display) {
//     case 'Portfolio':   
//         return (
//             <div className="App">
//                 <Header>
//                 </Header>  
//                 <main>
//                     <Portfolio></Portfolio>
//                 </main>
//                 <Footer></Footer>
//             </div>
//         ); 
    
//     case 'ContactForm':
//         return (
//             <div className="App">
//                 <Header>
//                 </Header>  
//                 <main>
//                     <ContactForm></ContactForm>
//                 </main>
//                 <Footer></Footer>
//             </div>
//         ); 
       
//     case 'Resume':
//         return (
//             <div className="App">
//                 <Header>
//                 </Header>  
//             <main>
//                 <Resume></Resume>
//             </main>
//             <Footer></Footer>
//          </div>
//         ); 
      
//      case 'Aboutme':    
//      default: 
//         return (
//             <div className="App">
//                 <Header>
//                 </Header>  
//                 <main>
//                     <Aboutme></Aboutme>
//                 </main>
//                 <Footer></Footer>
//             </div>
//       );
//     }
}

export default App;

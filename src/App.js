import React from "react";
import theme from '../src/assets/main/theme.jpg';
import Aboutme from "./components/Aboutme";
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header>
      </Header>  
      <main>
        <Aboutme></Aboutme>
      </main>
    </div>
  );
}

export default App;

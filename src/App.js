import React from "react";
import "./App.css";

import Banner from "./components/banner/banner";
import Intro from "./components/intro/intro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Projects from "./components/projects/Projects";
import Button from "@material-ui/core/Button";

import Forms from "./components/form/Form";
import Footers from "./components/footer/Footer";
import Navv from "./components/Nav/Nav";

function App() {
  return (
    <div>
      <Navv/>
      <Banner />

      <div className="main main-raised mb-3">
        <div className="container">
          <div className="section">
            {/* <h2 className="title">fgYour main section here</h2> */}
            
           <Intro/>
           <Projects/>
         
           <Forms/>
          </div>
        </div>
      </div>
     
      <Footers/>
    </div>
  );
}

export default App;

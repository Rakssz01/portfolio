import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./banner.css";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Particles from 'react-particles-js';

const Banner = () => {
  const matches = useMediaQuery('(max-width:600px)');
  const matchesc = useMediaQuery('(min-width:600px)');
let num=matches?70:30;
  return (
    
    <div>
      {console.log(num)}
      {matchesc?
 <Particles className="coll"
           params={{
            "particles": {
                "number": {
                    "value":70
                },
                "size": {
                    "value": 3
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    }
                }
            }
        }} 
            />:null}

            {matches?<Particles className="coll"
            params={{
             "particles": {
                 "number": {
                     "value":20
                 },
                 "size": {
                     "value": 3
                 }
             },
             "interactivity": {
                 "events": {
                     "onhover": {
                         "enable": true,
                         "mode": "repulse"
                     }
                 }
             }
         }} 
             />:null}
      
      
           
    
    <div className='container-fluid'>
   
      <div className="row max-height align-items-center">
        <div className="col-10 mx-auto banner text-center">
          <h1 className="text-capitalize">
            {/* welcome to <strong className="banner-title">grandma's</strong> */}
          </h1>
          {/* <a href="#store" class="btn banner-link text-uppercase my-2">
            explore
          </a> */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;

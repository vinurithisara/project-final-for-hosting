import React from 'react';
import {Image} from "react-bootstrap";
// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Home=props=> {
  
    
  // );

  

  
  return(
    <div   style={{ backgroundImage: "url(/100.jpg)",
    backgroundRepeat: 'no-repeat',
    width:'250px',backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'}}>
      
      <div className="card4" width="200" height="200" padding="30">
          <div className="card4-image">
            <img src="images/mtremind.jpg" width="200" height="200" padding="30"/>
          </div>
          <div className="card-body text-dark">
            <h4 style={{ color: 'white' }} className="cad-title"><b>Expiry Reminder</b></h4>
            <p className="card-text text-secondary">
            We Give You Expiry Reminder
            </p>
            <a href="http://localhost:3000/expiryReminder" className="btn btn-success">Start</a>
          </div>
          
        </div>
        <div className="card1" width="200" height="200" padding="30">
          <div className="card1-image">
            <img src="images/stremind.jpg" width="200" height="200" padding="30"/>
          </div>
          <div className="card-body text-dark">
            <h4 style={{ color: 'white' }} className="cad-title"><b>Stock Reminder</b></h4>
            <p className="card-text text-secondary">
            We Give You Stock Reminder
            </p>
            <a href="http://localhost:3000/stockReminder" className="btn btn-success">Start</a>
          </div>
          
        </div>
        <div className="card2" width="200" height="200" padding="30">
          <div className="card2-image">
            <img src="images/reorder.jpg" width="200" height="200" padding="30"/>
          </div>
          <div className="card-body text-dark">
            <h4 style={{ color: 'white' }} className="cad-title"><b>Re-Order Reminder</b></h4>
            <p style={{ color: 'white' }} className="card-text text-secondary">
             You Give You ReOrder Prediction
            </p>
            <a href="http://localhost:3000/reorder" className="btn btn-success">Start</a>
          </div>
          
        </div>


       

    </div>
    
      // <div className="card-wrapper">
        

        
      // </div>
   
  )
}


  



export default Home;














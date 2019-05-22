import React from 'react';

export const Shipping =(props) => (
    <div className="tjn-shipping tjn-flex tjn-flex-col tjn-flex-center tjn-align-start">
      <div className="tjn-align-start tjn-mini-header"> Shipping & Returns</div>
      <div className="tjn-mini-header2"> Get it soon. Estimated delivery: {props.eta[0].replace("-", " ")}-{props.eta[1].slice(-2)} </div>
      <div> Need it sooner? Upgrade shipping in the cart</div>
      <div> From {props.location}</div>
      <div> {props.shipprice}  to United States, 84103-1506</div>
      <div className="tjn-mini-header2">No returns or exchanges</div>
    </div>
  )


//add the api that i used in the weather app that grabs users ip address and geolocates the zipcode.
//add a dynamic shipping/returns policy
//create some dynamic phrasing for  the need it sooner. 
import React from 'react';

export const Shipping =(props) => (
    <div className="tjn-shipping tjn-flex tjn-flex-col tjn-flex-center tjn-align-start">
      <div className="tjn-align-start tjn-mini-header"> Shipping & Returns</div>
      <div className="tjn-shippingInfo">
          <div className="tjn-mini-header2"> Get it soon. Estimated delivery: {props.eta[0].replace("-", " ")}-{props.eta[1].slice(-2)} </div>
          <div className="tjn-needItSoon">Need it sooner? Upgrade shipping in checkout!</div>
          <div className="tjn-toFromShipping"> 
            <div className="tjn-from">From {props.location.split(", ")[1]}
            </div>
            <div className="tjn-to"> {props.shipprice}  to <u>United States, 84103-1506</u></div>
            </div>
          </div>
          <div className="tjn-mini-header2">No returns or exchanges</div>
    </div>
  )


//add the api that i used in the weather app that grabs users ip address and geolocates the zipcode.
//add a dynamic shipping/returns policy
//create some dynamic phrasing for  the need it sooner. 
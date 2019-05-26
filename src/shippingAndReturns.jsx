import React from 'react';

const miniHeaderStyle  = {
  fontFamily: '"Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif',
  fontSze: '16px',
  paddinBottom: '2vh',
  fontWeight: '550',
}
const needItSoon = {  
  fontSize: `12px`,
  opacity: `.7`,
  marginBottom:`8px`,
}
const miniHeader2 = {
  fontWeight: '560',
  paddingTop: '3vw',
  fontSize: '14px',
  paddingBottom: '.85vw',
}

const marginAddToFrom = function (vh) {
  return {
    marginBottom: `${vh}vh`,
    fontSize: '14px'
  }
}

export const Shipping =(props) => (
    <div className="tjn-shipping tjn-flex tjn-flex-col tjn-flex-center tjn-align-start">
      <div style={miniHeaderStyle}  className="tjn-align-start tjn-mini-header"> Shipping & Returns</div>
      <div className="tjn-shippingInfo">
          <div  style={miniHeader2} className="tjn-mini-header2"> Get it soon. Estimated delivery: {props.eta[0].replace("-", " ")}-{props.eta[1].slice(-2)} </div>
          <div style={needItSoon} className="tjn-needItSoon">Need it sooner? Upgrade shipping in checkout!</div>
          <div className="tjn-toFromShipping"> 
            <div style={marginAddToFrom(1)} className="tjn-from">From {props.location.split(", ")[1]}
            </div>
            <div style={marginAddToFrom(2)} className="tjn-to"> {props.shipprice}  to <u>United States, 84103-1506</u></div>
            </div>
          </div>
          <div   style={miniHeader2}  className="tjn-mini-header2">No returns or exchanges</div>
    </div>
  )


//add the api that i used in the weather app that grabs users ip address and geolocates the zipcode.
//add a dynamic shipping/returns policy
//create some dynamic phrasing for  the need it sooner. 
import React from 'react';

export const Shipping =(props) => (
    <div className="tjn-shipping tjn-flex tjn-flex-col">
      <div className="tjn-align-start tjn-mini-header"> Shipping </div>
      <div> Get it soon. Estimated delivery: {props.eta[1]} </div>
      <div> need it sooner? Upgrade shipping in the cart</div>
      <div> From {props.location}</div>
      <div> Free shipping to United States, 84103-1506</div>
    </div>
  )



// import React from 'react';

// export var Main = () =>  (
//     <div><h1>I fry dumplings</h1></div>
//   )
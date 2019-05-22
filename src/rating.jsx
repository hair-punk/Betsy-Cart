import React from 'react';
import {Stars} from './stars.jsx';

 export var Rating  = function (props){

  
    return  (
    <div className="tjn-flex tjn-flex-row tjn-rating-bar">
    <a  className="tjn-rating" href="https://www.etsy.com/shop/SeaminglyPossible?ref=simple-shop-header-name&listing_id=512152848">{props.storeName}</a> 
    <div className="tjn-rating"><Stars  starAvg={props.stars}/>
    </div>
    <div className="tjn-rating">({props.numStars})</div>
    </div>
  )
  // number of reviews = {props.numStars} average reveiw = {props.stars} / 5
}

// import React from 'react';

// export var Main = () =>  (
//     <div><h1>I fry dumplings</h1></div>
//   )

{/* <i className="fas fa-star"></i> // full star
<i className="fas fa-star-half-alt"></i> //half-empty star
<i className="far fa-star"></i> // empty star */}


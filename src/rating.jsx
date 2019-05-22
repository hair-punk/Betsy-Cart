import React from 'react';
import {Stars} from './stars.jsx';

 export var Rating  = function (props){
 
  
    return  (
    <div className="tjn-flex tjn-flex-row tjn-rating-bar">
    <a  className="tjn-rating tjn-storename" href="https://www.etsy.com/shop/SeaminglyPossible?ref=simple-shop-header-name&listing_id=512152848">{props.storeName}</a> 
    <div className="tjn-rating tjn-avgstars"><Stars  starAvg={props.stars}/>
    </div>
    <div className="tjn-rating tjn-numstars">({props.numStars})</div>
    </div>
  )
}


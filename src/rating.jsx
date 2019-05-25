import React from 'react';
import {Stars} from './stars.jsx';

 export var Rating  = function (props){

  const numStars = {
    textDecoration: "none",
    color: "#757575",
    fontSize: "14px",
  }
  const ratingBarDiv = {
    height: "18px",
    alignItems: "center",
    marginBottom: "14px",
    display: "flex",
    flexDirection: "row",
    minWidth: "320px"
  }
  const rating = {
    textDecoration: "none",
    color: "#757575",
    fontSize: "14px",
    paddingRight: "1.2vw",
  }
  
    return  (
    <div style={ratingBarDiv} className="tjn-flex tjn-flex-row tjn-rating-bar">
    <a  style={rating} className="tjn-rating tjn-storename" href="https://www.etsy.com/shop/SeaminglyPossible?ref=simple-shop-header-name&listing_id=512152848">{props.storeName}</a> 
    <div className="tjn-rating tjn-avgstars"><Stars  starAvg={props.stars}/>
    </div>
    <div style={numStars} className="tjn-rating tjn-numstars">({props.numStars})</div>
    </div>
  )
}


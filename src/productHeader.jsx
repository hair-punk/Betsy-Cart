import React from 'react';

export const Header = function(props) {
    return  (
    <div className="tjn-flex tjn-flex-col">
      <div className="tjn-itemTitle tjn-align-start">{props.itemtitle}</div>
      <div className="tjn-flex tjn-flex-row tjn-flex-between tjn-price-and-message">
        <div className="tjn-itemPrice">{props.itemprice}+ </div> <button>Message Seller</button>
      </div>
    </div>
  )
}
 //


//add in the you save $etc
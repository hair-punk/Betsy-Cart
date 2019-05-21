import React from 'react';

export const Header = function(props) {
    return  (
    <div className="tjn-flex tjn-flex-col">
      <div className="tjn-itemTitle">{props.itemtitle}.</div>
      <div className="tjn-flex tjn-flex-row tjn-flex-between tjn-price-and-message">
        <div>{props.itemprice}+ </div> <button>Message Seller</button>
      </div>
    </div>
  )
}



// import React from 'react';

// export var Main = () =>  (
//     <div><h1>I fry dumplings</h1></div>
//   )
import React from 'react';

export  const Deets = (props) =>  (
    <div className=" tjn-flex tjn-flex-col tjn-deets">
    <div className="tjn-align-start tjn-mini-header">Item details</div>
      <div><p>{props.description[0]}</p></div>
      <div><p>{props.description[1]}</p></div>
      <div><p>{props.description[2]}</p></div>
      <div><p>{props.description[3]}</p></div>
      <div><p>{props.description[4]}</p></div>
      <div><p>{props.description[5]}</p></div>
      <div><p>{props.description[6]}</p></div>
    </div>
  )


  // + Learn more about this item
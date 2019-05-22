import React from 'react';

export  const Deets = (props) =>  (
    <div  className=" tjn-flex tjn-flex-col tjn-deets">
    <div   className="tjn-align-start tjn-mini-header">Item details</div>
      <div className="tjn-deet-p tjn-deet-p1"  >{props.description[0]}</div>
      <div className="tjn-deet-p tjn-deet-p2" >{props.description[1]}</div>
      <div className="tjn-deet-p tjn-deet-p3" >{props.description[2]}</div>
      <div className="tjn-deet-p tjn-deet-p4" >{props.description[3]}</div>
      <div className="tjn-deet-p tjn-deet-p5" >{props.description[4]}</div>
      <div className="tjn-deet-p tjn-deet-p6" >{props.description[5]}</div>
      <div className="tjn-deet-p tjn-deet-p7" >{props.description[6]}</div>
    </div>
  )


  // + Learn more about this item
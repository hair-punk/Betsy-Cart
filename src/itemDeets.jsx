import React from 'react';
const deetsStyleTJN = {
  color: "red",
}

export  const Deets = (props) =>  (
  
    <div style={deetsStyleTJN} className=" tjn-flex tjn-flex-col tjn-deets">
    <div   className="tjn-align-start tjn-mini-header">Item details</div>
      <div  className="tjn-deet-p tjn-deet-p1"  >{props.description[0]}</div>
      <div   className="tjn-deet-p tjn-deet-p2" >{props.description[1]}</div>
      <div className="tjn-deet-p tjn-deet-p3" >{props.description[2]}</div>
      <div className="tjn-deet-p tjn-deet-p4" >{props.description[3]}</div>
      <div className="tjn-deet-p tjn-deet-p5" >{props.description[4]}</div>
      <div className="tjn-deet-p tjn-deet-p6" >{props.description[5]}</div>
      <div className="tjn-deet-p tjn-deet-p7" >{props.description[6]}</div>
      <div className="tjn-deet-p tjn-deet-p8" >{props.description[7]}</div>
      <div className="tjn-deet-p tjn-deet-p9" >{props.description[8]}</div>
      <div className="tjn-deet-p tjn-deet-p10" >{props.description[9]}</div>
      <div className="tjn-deet-p tjn-deet-p11" >{props.description[10]}</div>
      <div className="tjn-deet-p tjn-deet-p12" >{props.description[11]}</div>
      <div className="tjn-deet-p tjn-deet-p13" >{props.description[12]}</div>
      <div className="tjn-deet-p tjn-deet-p14" >{props.description[13]}</div>
      <div className="tjn-deet-p tjn-deet-p15" >{props.description[14]}</div>
    </div>
  )


  // + Learn more about this item
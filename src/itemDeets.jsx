import React from 'react';
const deetsStyleTJN = {
  alignItems: "flex-start",
  height: "auto",
  maxHeight: "70vh",
  overflowY: "scroll",
}

const miniHeaderStyle  = {
  fontFamily: '"Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif',
  fontSze: '16px',
  paddinBottom: '2vh',
  fontWeight: '550',
  paddingBottom: '6px'
}
const deetP = function(num = Math.floor(Math.random() * 35) ) {
  
    return {
    fontSize: `14px`,
    fontWeight: `400`,
    lineHeight: `1.6`,
    opacity: `.97`,
    paddingBottom: `${num}px`,
    }
}
export  const Deets = (props) =>  (
  
    <div style={deetsStyleTJN} className=" tjn-flex tjn-flex-col tjn-deets">
    <div style={miniHeaderStyle}  className="tjn-align-start tjn-mini-header">Item details</div>
      <div  style={deetP()}  className="tjn-deet-p tjn-deet-p1"  >{props.description[0]}</div>
      <div   style={deetP()}  className="tjn-deet-p tjn-deet-p2" >{props.description[1]}</div>
      <div style={deetP()}  className="tjn-deet-p tjn-deet-p3" >{props.description[2]}</div>
      <div style={deetP()}  className="tjn-deet-p tjn-deet-p4" >{props.description[3]}</div>
      <div style={deetP()}  className="tjn-deet-p tjn-deet-p5" >{props.description[4]}</div>
      <div style={deetP()}  className="tjn-deet-p tjn-deet-p6" >{props.description[5]}</div>
      <div style={deetP()}  className="tjn-deet-p tjn-deet-p7" >{props.description[6]}</div>
      <div style={deetP()}  className="tjn-deet-p tjn-deet-p8" >{props.description[7]}</div>
      <div style={deetP(0)}  className="tjn-deet-p tjn-deet-p9" >{props.description[8]}</div>
      <div style={deetP(0)}  className="tjn-deet-p tjn-deet-p10" >{props.description[9]}</div>
      <div style={deetP(0)}  className="tjn-deet-p tjn-deet-p11" >{props.description[10]}</div>
      <div style={deetP(0)}  className="tjn-deet-p tjn-deet-p12" >{props.description[11]}</div>
      <div style={deetP(0)}  className="tjn-deet-p tjn-deet-p13" >{props.description[12]}</div>
      <div style={deetP(0)}  className="tjn-deet-p tjn-deet-p14" >{props.description[13]}</div>
      <div style={deetP(0)}  className="tjn-deet-p tjn-deet-p15" >{props.description[14]}</div>
    </div>
  )


  // + Learn more about this item
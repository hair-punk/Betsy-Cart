import React from 'react';

const peopleWantStyle = {
  fontSize: "14px",
  lineHeight: "1.4",
  textAlign: "left",
}
const bold = {
  fontWeight: "bold",
}

export const PeopleWantThis = (props) => {
  const Bold = (parent) => <Text style={{fontWeight: 'bold'}}>{parent.children}</Text>
  if( props.want !== null && props.want.split(" ")[0] > 5) {
  return(
    <div style={peopleWantStyle}><img src="https://i.imgur.com/oaNvn0w.png" /><div><span style={bold}>Other people want this. </span>{props.want}</div></div>
  )
  
  } else {
    return <span></span>
  }
}
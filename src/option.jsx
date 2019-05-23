import React from 'react';


export const Option = (props) =>  {
  // if(props.option === "Select your size"){
 return( <option key={props.key} className="tjn-flex, tjn-flex-row tjn-flex-between" value={props.option}>{props.option}</option> )


  // } else {
  //   return( <option value={props.option}>{props.option}</option> )
  // }
}


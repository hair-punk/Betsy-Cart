import React from 'react';


export const Option = (props) =>  {
  if(props.option === "xSmall"){
 return( <option className="tjn-flex, tjn-flex-row tjn-flex-between" value={props.option}>{props.option}</option> )
  } else {
    return( <option value={props.option}>{props.option}</option> )
  }
}


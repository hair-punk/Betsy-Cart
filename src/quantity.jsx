import React from 'react';


export const Quantity = (props) =>  {
 return( <option key={props.key} className="tjn-flex, tjn-flex-row tjn-flex-between" value={props.quantity}>{props.quantity}</option> )
}


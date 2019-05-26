import React from 'react';


export const Quantity = (props) =>  {
 return( <option key={props.key}  value={props.quantity}>{props.quantity}</option> )
}


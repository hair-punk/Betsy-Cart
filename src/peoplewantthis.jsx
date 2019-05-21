import React from 'react';


export const PeopleWantThis = (props) => {

if(props.want !==null) {
return(
   <div><img src="https://i.imgur.com/oaNvn0w.png" />{props.want}</div>
)
}else {
  return <span></span>
}
}
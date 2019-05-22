import React from 'react';


export const PeopleWantThis = (props) => {

if(props.want !==null && props.want.split(" ")[1] > 6) {
return(
   <div><img src="https://i.imgur.com/oaNvn0w.png" />{props.want}</div>
)
}else {
  return <span></span>
}
}
import React from 'react';


export const PeopleWantThis = (props) => {
  const Bold = (parent) => <Text style={{fontWeight: 'bold'}}>{parent.children}</Text>
if(props.want !==null && props.want.split(" ")[1] > 6) {
return(
   <div className="tjn-peopleWant tjn-flex tjn-flex-row tjn-flex-around"><img src="https://i.imgur.com/oaNvn0w.png" /><div><span className="tjn-bold">Other people want this. </span>{props.want}</div></div>
)
}else {
  return <span></span>
}
}
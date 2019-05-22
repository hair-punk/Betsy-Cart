import React from 'react';
import {Option} from "./option.jsx"
import {PeopleWantThis} from "./peoplewantthis.jsx"
var optionHead = ""


export const Options = (props) => {
  if(props.options[0] !== "xSmall") {
    optionHead = "Color"
  } else {
    optionHead = "Size"
  }

return(
    <div className="tjn-flex tjn-flex-col tjn-flex-around tjn-optionsParent">
      <div className="tjn-optionHead">{optionHead}</div>

        <select className="tjn-options-drop-down">
          {props.options.map((elem) => <Option cursor={'&#8671;'} key={elem+"0230"} option={elem} />
          )}
         
        </select>
    
      <button className="tjn-buyIt">Buy it now</button>
      <button className="tjn-addToKart">Add to cart</button>
      <div>
        <PeopleWantThis want={props.peoplewantthis} />
      </div>
    </div>
)
}


// add state to options button
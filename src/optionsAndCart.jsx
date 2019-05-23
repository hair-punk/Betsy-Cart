import React from 'react';
import {Option} from "./option.jsx"
import {PeopleWantThis} from "./peoplewantthis.jsx"
var optionHead = ""


export const Options = (props) => {
  if(props.options[0] !== "Select your size") {
    optionHead = "Color"
  } else {
    optionHead = "Size"
  }

return(
    <div className="tjn-flex tjn-flex-col tjn-flex-around tjn-optionsParent">
      <div className="tjn-optionHead">{optionHead}</div>
     
      {/* <select className="tjn-quantity-drop-down">
          {props.options.map((elem) => <Quantity  key={elem+props.id} quantity={elem} />
          )}
         
         
        </select> */}
        <select className="tjn-options-drop-down">
          {props.options.map((elem) => <Option   key={elem+props.id} option={elem} />
          )}
          {/* cursor={'&#8671;'} */}
         
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
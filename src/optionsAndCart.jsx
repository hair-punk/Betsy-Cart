import React from 'react';
import {Option} from "./option.jsx"
import {PeopleWantThis} from "./peoplewantthis.jsx"
import {Quantity} from "./quantity.jsx"
var optionHead = ""





export const Options = (props) => {
  if(props.options[0] !== "Select your size") {
    optionHead = "Color"
  } else {
    optionHead = "Size"
  }
  var quantArray = [];
  for(let i=1; i<= props.quantity; i++){
    quantArray.push(i)
  }

return(
    <div className="tjn-flex tjn-flex-col tjn-flex-around tjn-optionsParent">
        
        <div className="tjn-quantityHead">Quantity</div>
        <select className="tjn-quantity-drop-down">
          {quantArray.map((elem) => <Quantity  key={elem+props.id} quantity={elem} />
          )}
        </select>


        <div className="tjn-optionHead">{optionHead}</div>
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
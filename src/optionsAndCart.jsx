import React from 'react';
import {Option} from "./option.jsx"
import {PeopleWantThis} from "./peoplewantthis.jsx"
import {Quantity} from "./quantity.jsx"
var optionHead = ""

const dropDownHeadStyle = {
  color: "#444444",
  fontSize: "16px",
  marginBottom: "3px",
  fontWeight: "500",
}

const dropDownStyle = {
  backgroundColor: `#ffffff`,
  borderColor: `rgba(0,0,0,0.15)`,
  boxShadow: `1px 1px 0 rgba(0, 0, 0, 0.05)`,
  alignItems: `center`,
  borderWidth: `1px`,
  borderBottomColor: `rgba(0,0,0,0.2)`,
  color: `#222222`,
  paddingRight:`30px`, 
  textIndent: `0.01px`,
  fontSize: `14px`,
  height: `38px`,
  paddingLeft: `12px`,
  width: `99%`,
  alignItems: `center`,
  whiteSpace: `pre`,
  textRendering: `auto`,
  marginBottom: `12px`,
}

const buyItStyle = {
  fontWeight: `650`,
  width: `99%`,
  alignItems: `center`,
  border: `solid #222222 2px`,
  borderRadius: `3px`,
  fontSize: '15px',
  padding: "8px 12px",
  marginTop: '6px',
  marginBottom: '12px',
}

const addToCartStyle =  {
  width: `99%`,
  alignItems: `center`,
  border: `solid #222222 2px`,
  borderRadius: `3px`,
  fontSize: '15px',
  padding: "8px 12px",
  marginTop: '6px',
  marginBottom: '12px',
  color: '#FFFFFF',
  backgroundColor: '#222222',
  fontWeight: '650',

}


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
    <div >
        
        <div style={dropDownHeadStyle}>Quantity</div>
        <select style={dropDownStyle}>
          {quantArray.map((elem) => <Quantity  key={elem+props.id} quantity={elem} />
          )}
        </select>


        <div style={dropDownHeadStyle}>{optionHead}</div>
        <select style={dropDownStyle}>
          {props.options.map((elem) => <Option   key={elem+props.id} option={elem} />
          )}
          {/* cursor={'&#8671;'} */}
         
        </select>
    
      <button style={buyItStyle}>Buy it now</button>
      <button style={addToCartStyle}>Add to cart</button>
      <div>
        <PeopleWantThis want={props.peoplewantthis} />
      </div>
    </div>
)
}


// add state to options button
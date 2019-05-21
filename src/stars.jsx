import React from 'react';
import {starObj}  from "./starObj.js"


export var Stars = function(props)  {

  
    return  (
    <div>
    <i className={starObj[props.starAvg.toString()][0]}></i>
    <i className={starObj[props.starAvg.toString()][1]}></i> 
    <i className={starObj[props.starAvg.toString()][2]}></i>
    <i className={starObj[props.starAvg.toString()][3]}></i> 
    <i className={starObj[props.starAvg.toString()][4]}></i>
    </div>
  )
}


import React from 'react';
import { starObj } from './starObj.js'; // just a way to use fontAwesome to dynamically render

export var Stars = function(props) {
	return (
		<div>
			<i className={starObj[props.starAvg.toString()][0]} />
			<i className={starObj[props.starAvg.toString()][1]} />
			<i className={starObj[props.starAvg.toString()][2]} />
			<i className={starObj[props.starAvg.toString()][3]} />
			<i className={starObj[props.starAvg.toString()][4]} />
		</div>
	);
};

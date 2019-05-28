import React from 'react';

const deetP = function(num = Math.floor(Math.random() * 35)) {
	return {
		fontSize: `14px`,
		fontWeight: `400`,
		lineHeight: `1.6`,
		opacity: `.97`,
		paddingBottom: `${num}px`,
	};
};
export const Deet = props => {
	var arr = props.descriptionArr;

	return arr.map((info, index) => {
		if (index === props.descriptionArr.length - 1) {
			return <div style={deetP(0)}>{info}</div>;
		} else {
			return <div style={deetP()}>{info}</div>;
		}
	});
};

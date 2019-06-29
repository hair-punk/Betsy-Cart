import React from 'react';

export const Option = props => {
	return (
		<option key={props.uid} value={props.option}>
			{props.option}
		</option>
	);
};

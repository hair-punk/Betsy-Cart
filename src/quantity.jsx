import React from 'react';

export const Quantity = props => {
	return (
		<option key={props.uid + props.quantity} value={props.quantity}>
			{props.quantity}
		</option>
	);
};

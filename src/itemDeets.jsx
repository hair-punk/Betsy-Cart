import React from 'react';
import { Deet } from './deet.jsx';

const deetsStyleTJN = {
	alignItems: 'flex-start',
	height: 'auto',
	maxHeight: '70vh',
	overflowY: 'scroll',
};

const miniHeaderStyle = {
	fontFamily: '"Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif',
	fontSze: '16px',
	paddinBottom: '2vh',
	fontWeight: '550',
	paddingBottom: '6px',
};

export const Deets = props => (
	<div style={deetsStyleTJN}>
		<div style={miniHeaderStyle}>Item details</div>
		<Deet descriptionArr={props.description} />
	</div>
);


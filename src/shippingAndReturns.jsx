import React from 'react';

const miniHeaderStyle = {
	fontFamily:
		'"Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif',
	fontSze: '16px',
	paddinBottom: '2vh',
	fontWeight: '550',
};
const needItSoon = {
	fontSize: `12px`,
	opacity: `.7`,
	marginBottom: `8px`,
};
const miniHeader2 = {
	fontWeight: '560',
	paddingTop: '3vw',
	fontSize: '14px',
	paddingBottom: '.85vw',
};

const marginAddToFrom = function (vh) {
	return {
		marginBottom: `${vh}vh`,
		fontSize: '14px',
	};
};

export const Shipping = props => {

	return (
		<div>
			<div style={miniHeaderStyle}> Shipping & Returns</div>
			<div>
				<div style={miniHeader2}>
					{' '}
					Get it soon. Ready to ship in {props.deliveryMin} to{props.deliveryMax} business days.
				</div>
				<div style={needItSoon}>Need it sooner? Upgrade shipping in checkout!</div>
				<div>
					<div style={marginAddToFrom(1)}>From {props.location.split(', ')[1]}</div>
					<div style={marginAddToFrom(2)}>
						{' '}
						{props.shipprice} to{' '}
						<u>
							{props.country}, {props.zip}
						</u>
					</div>
				</div>
			</div>
			<div style={miniHeader2}>No returns or exchanges</div>
		</div>
	)
};

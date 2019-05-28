import React from 'react';

const mainStyle = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
};
const titleStyle = {
	alignSelf: 'flex-start',
	fontSize: '20px',
	marginBottom: '10px',
	color: '#333333',
	fontFamily: "'Guardian-EgypTT',Arial,sans-serif",
};
const itemPriceStyle = {
	fontSize: '18px',
	fontWeight: '700',
	color: '#22222',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	width: '99%',
};

const messageSellerStyle = {
	color: '#22222',
	textDecoration: 'none',
	marginBottom: '12px',
	height: `28px`,
	padding: `4px 12px`,
	backgroundColor: '#FFFFFF',
	borderColor: 'rgba(0,0,0,0.15)',
	borderRadius: '3px',
	borderStyle: 'solid',
	borderWidth: '1px',
	fontFamily: `"Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif`,
	lineHeight: '1.4',
	textAlign: 'center',
	display: 'block',
	boxSizing: 'border-box',
	fontSize: '12px',
	fontWeight: 'bold',
};

// .tjn-sellerButton {
//   color: #222222;
//   text-decoration: none;
//   margin-bottom: 12px;
//   font-weight: bold;
//   font-size: 12px;
//   height: 28px;
//   padding: 4px 12px;
//   background-color: #FFFFFF;
//   border-color: rgba(0,0,0,0.15);
//   border-radius: 3px;
//   border-style: solid;
//   border-width: 1px;
//   font-family: inherit;
//   line-height: 1.4;
//   text-align: center;

// }
// .tjn-sellerButton:hover {
//   background-color: rgb(236, 236, 236);
//   border-color: rgba(0, 0, 0, 0.301);
// }
// .tjn-sellerButton:active, .tjn-sellerButton:focus {
//   background-color: rgb(231, 231, 231);
//   border-color: rgba(0, 0, 0, 0.521);
// }

export const Header = function(props) {
	return (
		<div style={mainStyle}>
			<div style={titleStyle}>{props.itemtitle}</div>
			<div style={itemPriceStyle}>
				<div>{props.itemprice}+ </div> <button style={messageSellerStyle}>Message Seller</button>
			</div>
		</div>
	);
};
//

//add in the you save $etc

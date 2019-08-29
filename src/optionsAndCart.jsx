import React from 'react';
import { Option } from './option.jsx';
import { PeopleWantThis } from './peoplewantthis.jsx';
import { Quantity } from './quantity.jsx';
var optionHead = '';

export class Options extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			styles: {
				dropDownHeadStyle: {
					color: '#444444',
					fontSize: '16px',
					marginBottom: '3px',
					fontWeight: '500',
				},
				dropDownStyleQ: {
					backgroundColor: `#ffffff`,
					borderColor: `rgba(0,0,0,0.15)`,
					boxShadow: `1px 1px 0 rgba(0, 0, 0, 0.05)`,
					alignItems: `center`,
					borderWidth: `1px`,
					borderBottomColor: `rgba(0,0,0,0.2)`,
					color: `#222222`,
					paddingRight: `30px`,
					textIndent: `0.01px`,
					fontSize: `14px`,
					height: `38px`,
					paddingLeft: `12px`,
					width: `99%`,
					alignItems: `center`,
					whiteSpace: `pre`,
					textRendering: `auto`,
					marginBottom: `12px`, // commit comment
				},
				dropDownStyleOpt: {
					backgroundColor: `#ffffff`,
					borderColor: `rgba(0,0,0,0.15)`,
					boxShadow: `1px 1px 0 rgba(0, 0, 0, 0.05)`,
					alignItems: `center`,
					borderWidth: `1px`,
					borderBottomColor: `rgba(0,0,0,0.2)`,
					color: `#222222`,
					paddingRight: `30px`,
					textIndent: `0.01px`,
					fontSize: `14px`,
					height: `38px`,
					paddingLeft: `12px`,
					width: `99%`,
					alignItems: `center`,
					whiteSpace: `pre`,
					textRendering: `auto`,
					marginBottom: `12px`,
				},

				buyItStyle: {
					fontWeight: `650`,
					width: `99%`,
					alignItems: `center`,
					border: `solid #222222 2px`,
					borderRadius: `3px`,
					fontSize: '15px',
					padding: '8px 12px',
					marginTop: '6px',
					marginBottom: '12px',
				},

				addToCartStyle: {
					width: `99%`,
					alignItems: `center`,
					border: `solid #222222 2px`,
					borderRadius: `3px`,
					fontSize: '15px',
					padding: '8px 12px',
					marginTop: '6px',
					marginBottom: '12px',
					color: '#FFFFFF',
					backgroundColor: '#222222',
					fontWeight: '650',
				},
			},
		};

		this.activeHoverChange = this.activeHoverChange.bind(this);
		this.activeHoverExit = this.activeHoverExit.bind(this);
	}
	activeHoverChange(event) {
		var style = event.target.name;
		if (style === 'buyItStyle') {
			this.setState(
				(this.state.styles.buyItStyle = {
					color: '#FFFFFF',
					backgroundColor: '#222222',
					fontWeight: `650`,
					width: `99%`,
					fontWeight: `650`,
					alignItems: `center`,
					border: `solid #222222 2px`,
					borderRadius: `3px`,
					fontSize: '15px',
					padding: '8px 12px',
					marginTop: '6px',
					marginBottom: '12px',
				}),
			);
		} else if (style === 'addToCartStyle') {
			this.setState(
				(this.state.styles.addToCartStyle = {
					color: '#FFFFFF',
					backgroundColor: '#222222',
					fontWeight: `650`,
					width: `99%`,
					fontWeight: `650`,
					alignItems: `center`,
					border: `solid #222222 2px`,
					borderRadius: `3px`,
					fontSize: '15px',
					padding: '8px 12px',
					marginTop: '6px',
					marginBottom: '12px',
					opacity: '.8',
				}),
			);
		} else if (style === 'dropDownStyleQ' || 'dropDoswnStyleOpt') {
			this.setState(
				(this.state.styles[style] = {
					backgroundColor: `rgb(236, 236, 236)`,
					borderColor: `rgb(0, 0, 0, 0.301)`,
					boxShadow: `1px 1px 0 rgba(0, 0, 0, 0.05)`,
					alignItems: `center`,
					borderWidth: `1px`,
					borderBottomColor: `rgba(0,0,0,0.2)`,
					color: `#222222`,
					paddingRight: `30px`,
					textIndent: `0.01px`,
					fontSize: `14px`,
					height: `38px`,
					paddingLeft: `12px`,
					width: `99%`,
					alignItems: `center`,
					whiteSpace: `pre`,
					textRendering: `auto`,
					marginBottom: `12px`,
				}),
			);
		}
		return;
	}

	activeHoverExit(event) {
		var style = event.target.name;
		if (style === 'buyItStyle') {
			this.setState(
				(this.state.styles.buyItStyle = {
					color: '#222222',
					backgroundColor: '#FFFFFF',
					fontWeight: `650`,
					width: `99%`,
					fontWeight: `650`,
					alignItems: `center`,
					border: `solid #222222 2px`,
					borderRadius: `3px`,
					fontSize: '15px',
					padding: '8px 12px',
					marginTop: '6px',
					marginBottom: '12px',
				}),
			);
		} else if (style === 'addToCartStyle') {
			this.setState(
				(this.state.styles.addToCartStyle = {
					color: '#FFFFFF',
					backgroundColor: '#222222',
					fontWeight: `650`,
					width: `99%`,
					fontWeight: `650`,
					alignItems: `center`,
					border: `solid #222222 2px`,
					borderRadius: `3px`,
					fontSize: '15px',
					padding: '8px 12px',
					marginTop: '6px',
					marginBottom: '12px',
				}),
			);
		} else if (style === 'dropDownStyleQ' || 'dropDoswnStyleOpt') {
			this.setState(
				(this.state.styles[style] = {
					backgroundColor: `#ffffff`,
					borderColor: `rgba(0,0,0,0.15)`,
					boxShadow: `1px 1px 0 rgba(0, 0, 0, 0.05)`,
					alignItems: `center`,
					borderWidth: `1px`,
					borderBottomColor: `rgba(0,0,0,0.2)`,
					color: `#222222`,
					paddingRight: `30px`,
					textIndent: `0.01px`,
					fontSize: `14px`,
					height: `38px`,
					paddingLeft: `12px`,
					width: `99%`,
					alignItems: `center`,
					whiteSpace: `pre`,
					textRendering: `auto`,
					marginBottom: `12px`,
				}),
			);
		}

		return;
	}

	render() {
		if (this.props.options[0] !== 'Select your size') {
			optionHead = 'Color';
		} else {
			optionHead = 'Size';
		}
		var quantArray = [];
		for (let i = 1; i <= this.props.quantity; i++) {
			quantArray.push(i);
		}

		return (
			<div>
				<div style={this.state.styles.dropDownHeadStyle}>Quantity</div>
				<select
					name="dropDownStyleQ"
					onMouseOver={this.activeHoverChange}
					onMouseOut={this.activeHoverExit}
					style={this.state.styles.dropDownStyleQ}
				>
					{quantArray.map(elem => <Quantity uid={elem + this.props.id} quantity={elem} />)}
				</select>

				<div style={this.state.styles.dropDownHeadStyle}>{optionHead}</div>
				<select
					style={this.state.styles.dropDownStyleOpt}
					name="dropDownStyleOpt"
					onMouseOver={this.activeHoverChange}
					onMouseOut={this.activeHoverExit}
				>
					{this.props.options.map(elem => <Option uid={elem + this.props.id} option={elem} />)}
					{/* cursor={'&#8671;'} */}
				</select>

				<button
					onMouseOver={this.activeHoverChange}
					onMouseOut={this.activeHoverExit}
					name={'buyItStyle'}
					style={this.state.styles.buyItStyle}
				>
					Buy it now
				</button>
				<button
					name={'addToCartStyle'}
					onMouseOver={this.activeHoverChange}
					onMouseOut={this.activeHoverExit}
					style={this.state.styles.addToCartStyle}
				>
					Add to cart
				</button>
				<div>
					<PeopleWantThis want={this.props.peoplewantthis} />
				</div>
			</div>
		);
	}
}

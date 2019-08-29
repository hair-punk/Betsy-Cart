const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');
const axios = require('axios');

import { Deets } from './itemDeets.jsx';
import { Options } from './optionsAndCart.jsx';
import { Rating } from './rating.jsx'; // styled
import { Shipping } from './shippingAndReturns.jsx';
import { Header } from './productHeader.jsx';

const appStyleTJN = {
	fontFamily: `"Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif`,
};

const hrStyle = {
	marginBottom: '21px',
	marginTop: '21px',
	width: '97%',
	color: '#E1E3DF',
	fontSize: '10px',
	lineHeight: '1.4',
	fontWeight: '200',
	opacity: '.3',
};


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userCountryName: 'WonkaVille',
			userZipCode: '55555',
		};

		this.clickHandle = this.clickHandle.bind(this);
	}
	clickHandle(e) {
		e.preventDefault();
	}

	componentDidMount() {
	}

	render() {
		if (this.props.data.length != 0) {
			return (
				<div style={appStyleTJN}>
					<Rating
						style={appStyleTJN}
						company={this.props.data['company']}
						stars={this.props.data['stars']}
						numStars={this.props.data.numStars}
					/>
					<Header
						itemtitle={this.props.data['title']}
						itemprice={this.props.data['price']}
						randomItemClick={this.clickHandle}
					/>
					<Options
						id={this.props.data['tjnid']}
						quantity={this.props.data['quantity']}
						options={this.props.data['colors']}
						peoplewantthis={this.props.data['peopleWantThis']}
						carthover={this.hoverHandle}
					/>
					<hr style={hrStyle} />
					<Deets description={this.props.data['description']} />

					<hr style={hrStyle} />
					<Shipping
						country={this.state['userCountryName']}
						zip={this.state['userZipCode']}
						shipprice={this.props.data['shipprice']}
						location={this.props.data['location']}
						deliveryMin={this.props.data['deliveryMin']}
						deliveryMax={this.props.data['deliveryMax']}
					/>
					<hr style={hrStyle} />
				</div>
			)
		}
		else {
			return (<div></div>)
		}
	}
}
export default App;


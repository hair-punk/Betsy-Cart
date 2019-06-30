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

var pathname = window.location.href;
var pathname = 'http://13.57.248.127:3006/';
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			userCountryName: 'WonkaVille',
			userZipCode: '55555',
		};

		this.clickHandle = this.clickHandle.bind(this);
		this.hoverHandle = this.hoverHandle.bind(this);
	}
	clickHandle() {
		// var random = Math.floor(Math.random() * 99).toString();
		// $.get(pathname + 'items/' + '2', (err, results) => {
		// 	if (err) {
		// 		console.log('error in ajax get requets');
		// 		console.log(err);
		// 	} else {
		// 		console.log(JSON.stringify(results));
		// 	}
		// });
		// console.log('------------------------------------');
		// console.log('pathname:');
		// console.log(pathname);
		// console.log('------------------------------------');

		// axios
		// 	.get(pathname + 'items/' + random)
		// 	// fetch('/items/19', {})
		// 	.then(results => {
		// 		console.log(results)
		// 		console.log(results.data)
		// 		this.setState({
		// 			items: results.data,
		// 		});
		// 		console.log('updated items/cart from db');
		// 		// console.log(JSON.stringify(results.data));
		// 	})
		// 	.catch(err => {
		// 		if (err) {
		// 			console.log('------------------------------------');
		// 			console.log('err in app.jsx');
		// 			console.log(err);
		// 			console.log('err', err);
		// 			console.log('------------------------------------');
		// 		}
		// 	});
	}

	hoverHandle() { }

	componentDidMount() {
		axios
			.get(pathname + 'items/' + Math.floor(Math.random() * 10000000))
			// fetch('/items/19', {})
			.then(results => {
				console.log(results);
				console.log(results.data)
				this.setState({
					items: [results.data],
				});
				console.log('updated item from db');
				console.log(JSON.stringify(results.data));
			})
			.catch(err => {
				if (err) {
					console.log('------------------------------------');
					console.log('err in app.jsx');
					console.log(err);
					console.log('err', err);
					console.log('------------------------------------');
				}
			});
		console.log(this.state)
		fetch(`https://api.ipdata.co/?api-key=${'b51463ddf7aa16352e4b06e04d01275f68bedeb5d2dc8908fa99844f'}`)
			.then(results => results.json())
			.then(jsonResults => {
				console.log('- - - - - requested your IPaddress to get geolcation');
				// console.log(jsonResults.postal);
				this.setState({
					userCountryName: jsonResults.country_name,
					userZipCode: jsonResults.postal,
				});
			})
			.catch(e => {
				console.log('@-!!!!!!!!!------------------------@');
				console.log(e);
				console.log('@------------!!!!!!!!!!!!!!!!------@');
			});
	}

	render() {
		if(this.state.items.length !=0){
		return (
			<div style={appStyleTJN}>
				<Rating
					style={appStyleTJN}
					company={this.state.items[0]['company']}
					stars={this.state.items[0]['stars']}
					numStars={this.state.items[0].numStars}
				/>
				<Header
					itemtitle={this.state.items[0]['title']}
					itemprice={this.state.items[0]['price']}
					randomItemClick={this.clickHandle}
				/>
				<Options
					id={this.state.items[0]['tjnid']}
					quantity={this.state.items[0]['quantity']}
					options={this.state.items[0]['colors']}
					peoplewantthis={this.state.items[0]['peopleWantThis']}
					carthover={this.hoverHandle}
				/>
				<hr style={hrStyle} />
				<Deets description={this.state.items[0]['description']} />

				<hr style={hrStyle} />
				<Shipping
					country={this.state['userCountryName']}
					zip={this.state['userZipCode']}
					shipprice={this.state.items[0]['shipprice']}
					location={this.state.items[0]['location']}
					deliveryMin={this.state.items[0]['deliveryMin']}
					deliveryMax={this.state.items[0]['deliveryMax']}
				/>
				<hr style={hrStyle} />
			</div>
		)}
		else{
		return (<div></div>)
}
	}
}

ReactDOM.render(<App className="tjn-app" />, document.getElementById('tjn-root'));

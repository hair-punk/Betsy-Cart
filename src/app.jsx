const React = require('react');
const ReactDOM = require('react-dom');
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
			items: [
				{
					description: [
						'Libero accusantium illo ut sit cumque.',
						'Corrupti quod voluptatem autem quidem officiis.',
						'Odit est ipsa officia sit illo labore labore. Repellat eos doloremque amet ut quo nulla eligendi ullam.',
						'Voluptatibus ut nisi voluptates.',
						'Quia fuga quisquam aliquam nihil.',
						'Soluta consequatur impedit hic. Dolore at voluptas. Magnam ullam autem sint labore magnam nihil omnis laudantium.',

						'Temporibus quia.',
						'Corporis voluptatum officia dolor.',
						'Aut itaque sit aut exercitationem sint vero. Unde ipsa laboriosam et ipsum qui. Mollitia molestias provident error iusto commodi.',
					],
					buyoptions: ['Select a color', 'Orange', 'Yellow'],
					eta: ['May-30', 'May-31'],
					_id: '5cedee0a0c13f948dd2e4e26',
					storeName: 'Synergistic Upgradable, LLC',
					title: 'Practical PracticalPizza |  Handcrafted Incredible Handmade ivory',
					url: 'http://josh.com',
					price: '$207.57',
					quantity: 19,
					shipprice: '$6.19',
					location: 'East Donavon, California',
					stars: 3.5,
					numStars: 66,
					peopleWantThis: null,
					tjnid: 'tjn-id299',
					__v: 0,
				},
			],
		};

		this.clickHandle = this.clickHandle.bind(this);
		this.hoverHandle = this.hoverHandle.bind(this);
	}
	clickHandle() {
		var random = Math.floor(Math.random() * 99).toString();
		axios
			.get('http://localhost:3002/items/' + random)
			// fetch('/items/19', {})
			.then(results => {
				this.setState({
					items: results.data,
				});
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
	}

	hoverHandle() {}

	componentDidMount() {
		axios
			.get('http://localhost:3002/items/2')
			// fetch('/items/19', {})
			.then(results => {
				this.setState({
					items: results.data,
				});
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
	}

	render() {
		return (
			<div style={appStyleTJN}>
				<Rating
					style={appStyleTJN}
					storeName={this.state.items[0]['storeName']}
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
					options={this.state.items[0]['buyoptions']}
					peoplewantthis={this.state.items[0]['peopleWantThis']}
					carthover={this.hoverHandle}
				/>
				<hr style={hrStyle} />
				<Deets description={this.state.items[0]['description']} />

				<hr style={hrStyle} />
				<Shipping
					shipprice={this.state.items[0]['shipprice']}
					location={this.state.items[0]['location']}
					eta={this.state.items[0]['eta']}
				/>
				<hr style={hrStyle} />
			</div>
		);
	}
}

ReactDOM.render(<App className="tjn-app" />, document.getElementById('tjn-root'));

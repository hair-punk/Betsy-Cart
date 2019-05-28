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
					buyoptions: ['Select an option', 'fuchsia', 'lime', 'purple', 'maroon'],
					eta: ['May-22', 'May-25'],
					_id: '5ce3505e133ed98819ec9849',
					storeName: 'granular Incredible fault-tolerant',
					title: 'AwesomeComputer',
					description: [
						'Iste aut ratione voluptates consequatur.',
						'Quaerat consequuntur aut alias sunt in odio eveniet. Maxime ea omnis.',
						'Tempora omnis est est ab corrupti a corrupti. Qui minima rerum neque autem quos ipsa dicta. Aliquid animi voluptatum et excepturi quasi amet nemo. Et iste soluta qui animi ab odio nam. Dolore ad sit.',
						'Temporibus eos qui doloribus voluptatem quia consequatur.',
						'Dolor consequatur inventore et consequatur et consequuntur culpa.',
						'Esse enim ratione nam quisquam hic hic eveniet.',
					],
					url: 'https://reymundo.info',
					price: '$95.72',
					quantity: 18,
					shipprice: '$3.18',
					location: 'West Hillary, Ohio',
					stars: 4,
					numStars: 18,
					peopleWantThis: '80 people want to buy this stupid peice of trash',
					tjnid: 'tjn-id8',
				},
			],
		};

		this.clickHandle = this.clickHandle.bind(this);
		this.hoverHandle = this.hoverHandle.bind(this);
	}
	clickHandle() {}

	hoverHandle() {}

	componentDidMount() {
		axios
			.get('/items/13')
			.then(results => {
				this.setState({
					items: results.data,
				});
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
		return;
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
					messageseller={this.clickHandle}
				/>
				<Options
					id={this.state.items[0]['tjnid']}
					quantity={this.state.items[0]['quantity']}
					options={this.state.items[0]['buyoptions']}
					peoplewantthis={this.state.items[0]['peopleWantThis']}
					cartclick={this.clickHandle}
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

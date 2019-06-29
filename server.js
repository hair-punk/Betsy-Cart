require('newrelic');
const db = require('./dbHelpers/postgres-controller.js')
const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
const app = express();

const port = 3006;

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});
app.use(bodyParser.json());
app.use(express.urlencoded());
app.use(express.static('public'));

// - - - - - -  - - - - - -  - - - - - -  - - - - - -  - - - - - -  - - - - - -
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
}); // - - - - - -  - - - - - -  - - - - - -  - - - - - -  - - - - - -  - - - - - -

// - - - - - -  - - - - - -  - - - - - -  - - - - - -  - - - - - -  - - - - - -
app.get('/items/:id', function (req, res) {
	req.socket.setKeepAlive(false);
	db.getOne(req.params.id, (err, data) => {
		if (err || data.length === 0) {
			res.status(404).send('error, item not found' + err);
		} else {
			// console.log(data);
			res.status(200).send(data);
		}
	});
});

app.listen(port, () => {
	console.log('slowly strolling at port ' + port);
});

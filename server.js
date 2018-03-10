//Install express server
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const api = require('./server/routes/api');
const port = 3000;
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname + '/dist')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', api);

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(port, function(){
	console.log("Server running on localhost:" + port);
});
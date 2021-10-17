const express = require('express');
const app = express();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get(['/', 'index.html'], (req, res) => {
	// kort: res.send('Hello World!'));
	res.sendFile(__dirname + '/index.html');
});

app.get('/gettest', (req, res) => {
	res.send('Dank voor het opvragen van de gettest');
});

app.post('/posttest', (req, res) => {
	console.dir(req.body);
	// res.send('Je hebt het volgende opgestuurd: ' + req.body);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
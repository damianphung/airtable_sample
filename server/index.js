// https://blog.bitsrc.io/using-airtable-as-a-handy-cloud-storage-for-your-apps-ae6cce0efe11
// https://www.freecodecamp.org/news/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0/


// connecting to backend with static site
// https://www.smashingmagazine.com/2018/02/dynamic-website-static-content-cdn/
const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

const express = require('express');
const cors = require('cors');
const db = require('./db');
const path = require('path');

const app = express();

// app.use(cors());
app.use(express.json());

// Serve any static files
const STATIC_ASSETS_DIR = 'public';
app.use(express.static(path.join(__dirname, STATIC_ASSETS_DIR)));

// Handle React routing, return all requests to React app
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, STATIC_ASSETS_DIR, 'index.html'));
});


app.use(require('./app').default);

var port = 5001;
app.listen(5001, () => {
    console.log('listenitng on port ' + port);
});


// https://blog.bitsrc.io/using-airtable-as-a-handy-cloud-storage-for-your-apps-ae6cce0efe11

const AIRTABLE_DATABASE = ''
const API_KEY = '';

const express = require('express');
const cors = require('cors');
// const db = require('./db').default;

const app = express();
app.use(cors());
app.use(express.json());


var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: API_KEY
});




const BASE_NAME = AIRTABLE_DATABASE;
const TABLE_NAME = 'MyTable';
const VIEW_NAME = '';


var base = Airtable.base(BASE_NAME);
const table = base(TABLE_NAME);
function db() 
{
    table.create({
        "Name": "My pet",
        "Notes": "My pet is a dog"
        }, (err, record) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(record.getId());
        });               
}

function query(id)
{
    table.find(id, (err, record) => {
        if (err) {
          console.error(err);
          return;
        }
        /* here we have the record object we can inspect */
        console.log(record);
      });
}


app.get('/login', (request, response) => {
    console.log('got req');
    response.json({
        message: "Hello!"
    });
});

app.get('/db', (request, response) => {
    console.log('got req');
    db();
});

app.get('/query', (request, response) => {
    console.log('got req');
    query("recdKNEeIKy8x13ds");
});


app.listen(5000, () => {
    console.log('listenitng on port 5000');
});

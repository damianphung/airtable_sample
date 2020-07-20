const BASE_NAME = process.env.BASE_NAME;
const TABLE_NAME = process.env.TABLE_NAME;
const VIEW_NAME = process.env.VIEW_NAME;
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;

var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: AIRTABLE_API_KEY
});

var base = Airtable.base(BASE_NAME);
const table = base(TABLE_NAME);

async function create() 
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

async function query(id)
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

module.exports = {
    create,
    query
}
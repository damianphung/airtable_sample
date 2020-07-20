// If this were on a different host, need to specify full URL to the backend to process request
const API_URL = 'http://localhost:5001/login/facebook';

function fbLogin()
{
    fetch(API_URL, {
        method: 'GET',
        // body: JSON.stringify(mew),
        // headers: {
        //     'content-type' : 'application/json'
        // }
    });
}

const API_URL = 'http://localhost:5001/login/facebook';
const form = document.querySelector('form');


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

form.addEventListener('submit', (event) => {
    // on form, it attempts to send the data. Lets prevent this default
    event.preventDefault();

    fetch(API_URL, {
        method: 'GET',
        // body: JSON.stringify(mew),
        // headers: {
        //     'content-type' : 'application/json'
        // }
    });
});
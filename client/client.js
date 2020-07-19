const API_URL = 'http://localhost:5000/login';
const form = document.querySelector('form');


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
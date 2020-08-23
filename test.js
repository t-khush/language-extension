//ratio holds the value of words to be changed (maybe make this a slidable later)
//https://www.youtube.com/watch?v=IvRSezqrZqo -- browserify
//https://www.youtube.com/watch?v=zFwJUcuxK9Y -- translation


var ratio = 0.2; 

const translate = require('@vitalets/google-translate-api');
 
translate('Ik spreek Engels', {to: 'en'}).then(res => {
    console.log(res.text);
    //=> I speak English
    //console.log(res.from.language.iso);
    //=> nl
}).catch(err => {
    console.error(err);
});


/*

Works fine if you run node test.js in terminal
Error in browser -- 

Uncaught TypeError: exec is not a function
    at Object.exports.<computed> [as user] (bundle.js:19572)
    at Object.85.dot-prop (bundle.js:14794)
    at o (bundle.js:1)
    at bundle.js:1
    at Object.76.configstore (bundle.js:13768)
    at o (bundle.js:1)
    at bundle.js:1
    at Object.74../languages (bundle.js:13486)
    at o (bundle.js:1)
    at bundle.js:1

*/
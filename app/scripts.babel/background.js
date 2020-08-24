'use strict';
console.log('\'Allo \'Allo! Event Page for Browser Action');

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.setBadgeText({text: '1'});

const translate = require('@vitalets/google-translate-api');

console.log('\'Allo \'Allo! script');
translate('Ik spreek Engels', {to: 'en'}).then(res => {
  console.log(res.text);
  //=> I speak English
  console.log(res.from.language.iso);
  //=> nl
}).catch(err => {
  console.error(err);
});
'use strict';

console.log('\'Allo \'Allo! Event Page for Browser Action');
chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});
chrome.browserAction.setBadgeText({
  text: '1'
});

var translate = require('@vitalets/google-translate-api');

console.log('\'Allo \'Allo! script');
translate('Ik spreek Engels', {
  to: 'en'
}).then(function (res) {
  console.log(res.text); //=> I speak English

  console.log(res.from.language.iso); //=> nl
})["catch"](function (err) {
  console.error(err);
});
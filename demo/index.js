/* eslint-env browser */
const jsonToCsv = require('../');

const jsonEl = document.getElementById('json');
const csvEl = document.getElementById('csv');
const jsonToCsvButton = document.getElementById('jsonToCsv');

jsonToCsvButton.addEventListener('click', () => {
  csvEl.value = jsonToCsv(jsonEl.value);
});

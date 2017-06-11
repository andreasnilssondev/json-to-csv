/* eslint-env browser */
const json2csv = require('json-2-csv').json2csv;

const jsonEl = document.getElementById('json');
const csvEl = document.getElementById('csv');
const jsonToCsvButton = document.getElementById('jsonToCsv');

jsonToCsvButton.addEventListener('click', () => {
  let json = JSON.parse(jsonEl.value);

  if (!Array.isArray(json)) {
    json = Object.keys(json).map(key => json[key]);
  }

  json2csv(json, (err, csv) => {
    if (err) {
      alert(err);
    }

    csvEl.value = csv;
  });
});

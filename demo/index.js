/* eslint-env browser */
const json2csv = require('json-2-csv').json2csv;

const jsonEl = document.getElementById('json');
const csvEl = document.getElementById('csv');
const jsonToCsvButton = document.getElementById('jsonToCsv');

jsonToCsvButton.addEventListener('click', () => {
  const objects = JSON.parse(jsonEl.value);
  const array = Object.keys(objects).map(user => objects[user]);
  json2csv(array, (err, csv) => {
    if (err) {
      alert(err);
    }

    csvEl.value = csv;
  });
});

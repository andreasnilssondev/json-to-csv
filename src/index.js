function jsonToCsv(json) {
  const users = JSON.parse(json);
  const headers = 'email, displayName\n';
  const values = Object.keys(users).map(userID => `${users[userID].email},${users[userID].displayName}\n`).join('');
  return headers + values;
}

const jsonEl = document.getElementById('json');
const csvEl = document.getElementById('csv');
const jsonToCsvButton = document.getElementById('jsonToCsv');

jsonToCsvButton.addEventListener('click', function () {
  csvEl.value = jsonToCsv(jsonEl.value);
});

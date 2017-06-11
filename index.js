module.exports = (json) => {
  const users = JSON.parse(json);
  const userKey = Object.keys(users)[0];
  const userObject = users[userKey];
  const headers = Object.keys(userObject);
  const headersString = `${Object.keys(userObject).join(',')}\n`;
  const values = Object.keys(users).map(userID => (
    `${headers.map(header => users[userID][header]).join(',')}\n`
  )).join('');

  return headersString + values;
};

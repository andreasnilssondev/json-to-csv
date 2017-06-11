# json-to-csv
Convert your JSON to CSV. Only works with the example JSON structure below.
[Demo](https://nandreas.github.io/json-to-csv/demo/index.html)

# Usage
(not yet)
```
const jsonToCsv = require('./json-to-csv');

const json = {
  "randomuserid1233": {
    "email": "email111@mail.com",
    "displayName": "firstname1111 lastname"
  },
  "randomuserid43423": {
    "email": "email22222@mail.com",
    "displayName": "firstname2222 lastname"
  }
};

jsonToCsv(json)
```

output:
```
email, displayName
email111@mail.com,firstname1111 lastname
email22222@mail.com,firstname2222 lastname
```

# Development
- `$ npm install`
- `$ npm run dev`

# Deploy
- `npm run deploy`
- Commit the changes

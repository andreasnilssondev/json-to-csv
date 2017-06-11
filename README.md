# json-to-csv
Convert your JSON object to CSV directly in the browser using [json-2-csv](https://www.npmjs.com/package/json-2-csv)

[Demo](https://nandreas.github.io/json-to-csv/demo/index.html)

# Example
Also works if your objects are not in an array, but note that the order of object keys are **not** guaranteed, so you might have to set the order manually.

Input
```
{
  "key1": {
    "a": 1,
    "b": 2
  },
  "key2": {
    "a": 3,
    "b": 4
  }
}
```

output:
```
a, b
1,2
3,4
```

# Development
- `$ npm install`
- `$ npm run dev`

# Deploy
- `npm run deploy`
- Commit the changes

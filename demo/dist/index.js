(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* eslint-env browser */
const jsonToCsv = require('../');

const jsonEl = document.getElementById('json');
const csvEl = document.getElementById('csv');
const jsonToCsvButton = document.getElementById('jsonToCsv');

jsonToCsvButton.addEventListener('click', () => {
  csvEl.value = jsonToCsv(jsonEl.value);
});

},{"../":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);

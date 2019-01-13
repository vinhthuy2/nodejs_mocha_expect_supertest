"use strict";
const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found',
    name: 'Tool v1'
  });
});

const users = [{
    name: 'Thuy',
    age: '25'
  },
  {
    name: 'XXX',
    age: '30'
  }
]

app.get('/users', (req, res) => {
  res.status(200).send(users);
});

app.listen(3000);

module.exports.app = app;
const express = require('express');
const db = require('./lib/database');
const dbfuncs = require('./lib/database/helpers');

const app = express();

app.get('/ping', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.get('/', async (req, res) => {
  try {
    const things = await dbfuncs.getThings();
    res.status(200).json(things);
  } catch (error) {
    console.trace(`router error: ${error}`)
  }
});

app.post('/', async (req, res) => {
  try {
    const response = await dbfuncs.addThings();
    res.status(200).json(response);
  } catch (error) {
    console.trace(error);
  }
});

async function init() {
  await db.connect()
  return app
}

module.exports = init;

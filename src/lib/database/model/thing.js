const mongoose = require('mongoose');

const thingSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model(
  'thing',
  thingSchema,
  'things',
);

const ThingModel = require('../../../src/lib/database/model/thing');

async function deleteAllThings() {
  try {
    await ThingModel.deleteMany({});
  } catch (error) {
    console.trace(error);
  }
}

async function addThingsToDb(num) {
  const number = num > 1 ? num : 1;
  try {
    for (let i = 0; i < number; i++) {
      await ThingModel.create({
        name: `Name-${i}`
      })
    }
  } catch (error) {
    console.trace(error);
  }
}

module.exports = {
  deleteAllThings,
  addThingsToDb,
}
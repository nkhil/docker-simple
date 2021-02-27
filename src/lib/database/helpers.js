const ThingModel = require('./model/thing');

async function getThings() {
  try {
    return await ThingModel.find().exec();
  } catch (error) {
    console.log(error);
  }
}

async function addThings() {
  try {
    return await ThingModel.create({ name: 'Thing23' });
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getThings,
  addThings,
}

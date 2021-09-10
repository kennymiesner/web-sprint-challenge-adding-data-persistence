const db = require('../../data/dbConfig')

function getResources() {
  return db('resources')
}

function addResource() {
  return Promise.resolve(`POST new resource`)
}

module.exports = {
  getResources,
  addResource,
}
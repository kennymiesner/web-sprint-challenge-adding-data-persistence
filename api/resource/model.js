// const db = require('../../data/dbConfig')

function getResources() {
  return Promise.resolve(`GET all resources`)
}

function addResource() {
  return Promise.resolve(`POST new resource`)
}

module.exports = {
  getResources,
  addResource,
}
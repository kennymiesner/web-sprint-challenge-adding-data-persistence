// const db = require('../../data/dbConfig')

function getProjects() {
  return Promise.resolve(`GET all projects`)
}

function addProject() {
  return Promise.resolve(`POST new project`)
}

module.exports = {
  getProjects,
  addProject,
}
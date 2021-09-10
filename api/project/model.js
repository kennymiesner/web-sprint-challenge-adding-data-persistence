const db = require('../../data/dbConfig')

function getProjects() {
  return db('projects')
}

function addProject() {
  return Promise.resolve(`POST new project`)
}

module.exports = {
  getProjects,
  addProject,
}
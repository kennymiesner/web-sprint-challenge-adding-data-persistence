const db = require('../../data/dbConfig')

function getTasks() {
  return db('tasks')
}

function addTask() {
  return Promise.resolve(`POST new task`)
}

module.exports = {
  getTasks,
  addTask,
}
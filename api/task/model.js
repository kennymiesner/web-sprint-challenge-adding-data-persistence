// const db = require('../../data/dbConfig')

function getTasks() {
  return Promise.resolve(`GET all tasks`)
}

function addTask() {
  return Promise.resolve(`POST new task`)
}

module.exports = {
  getTasks,
  addTask,
}
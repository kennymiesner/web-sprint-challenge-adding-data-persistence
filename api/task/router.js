const router = require('express').Router()
const Tasks = require('./model')

router.get('/', (req, res, next) => {
  Tasks.getTasks()
    .then(tasks => {
      res.json(tasks)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  const task = req.body

  Tasks.addTask(task)
    .then(task => {
      res.status(201).json(task)
    })
    .catch(next)
})

module.exports = router
const router = require('express').Router()
const Projects = require('./model')

router.get('/', (req, res, next) => {
  Projects.getProjects()
    .then(projects => {
      res.json(projects)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  const project = req.body

  Projects.addProject(project)
    .then(project => {
      res.status(201).json(project)
    })
    .catch(next)
})

module.exports = router
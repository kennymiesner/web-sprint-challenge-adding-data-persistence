const router = require('express').Router()
const Resources = require('./model')

router.get('/', (req, res, next) => {
  Resources.getResources()
    .then(resources => {
      res.json(resources)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  const resource = req.body

  Resources.addResource(resource)
    .then(resource => {
      res.status(201).json(resource)
    })
    .catch(next)
})

module.exports = router
const express = require('express')
const router = express.Router()

const { login, dashboard } = require('../controllers/controller')
const authenticationMiddleware = require('../middleware/auth')

router.post('/login', login)
router.get('/dashboard', authenticationMiddleware, dashboard)

module.exports = router
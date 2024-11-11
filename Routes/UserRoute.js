const express= require('express')
const { register } = require('../Controller/UserController')

const router= express.Router()

router.post('/register',register)

module.exports =router
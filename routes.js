const express = require('express')
const router = express.Router()

const jsonService = require('./services/json.service')

router.get('/json/:fileName', jsonService.getByFilename);

module.exports = router
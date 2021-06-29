const express = require('express')
const router = express.Router()

const jsonService = require('./services/json.service')
const activityService = require('./services/activity.service')

//Json routing
router.get('/json/:fileName', jsonService.getByFilename);

//Activity routing
router.get('/activity/:fileName', activityService.getByFilename);
router.get('/mean-activity/', activityService.getAllMean);
router.get('/mean-activity/:fileName', activityService.getMeanByFilename);

module.exports = router
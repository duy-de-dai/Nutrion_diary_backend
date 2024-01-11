const express = require('express');
const router = express.Router();
const DayController = require('../controllers/DayController')



router.post('/add', DayController.addDay);




module.exports = router;
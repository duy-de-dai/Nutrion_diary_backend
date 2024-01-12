const express = require('express');
const router = express.Router();
const DayController = require('../controllers/DayController')



router.post('/add', DayController.addMealInDay);
router.delete('/delete', DayController.deleteDay);
router.get('/get', DayController.getDay);




module.exports = router;
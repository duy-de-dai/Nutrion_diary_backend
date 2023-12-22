const express = require('express');
const router = express.Router();
const MealController = require('../controllers/MealController')



router.post('/add', MealController.addMeal);



module.exports = router;
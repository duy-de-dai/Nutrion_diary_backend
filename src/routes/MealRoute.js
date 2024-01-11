const express = require('express');
const router = express.Router();
const MealController = require('../controllers/MealController')



router.post('/add', MealController.addMeal);
router.delete('/delete/:id', MealController.deleteMeal);
router.get('/:id', MealController.getMeal);



module.exports = router;
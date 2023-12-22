const express = require('express');
const router = express.Router();
const FoodController = require('../controllers/FoodController')



router.post('/add', FoodController.addFood);
router.get('/:foodId', FoodController.getFoodById);
router.get('/', FoodController.getAllFoods);
router.delete('/delete/:foodId', FoodController.deleteFood);
router.put('/update/:foodId', FoodController.updateFood);


module.exports = router;
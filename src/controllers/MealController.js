const MealModel = require('../models/MealModel')
const jwt = require("jsonwebtoken");


exports.addMeal = async (req, res) => {
    try {
        data = req.body;
        user_id= data.user_id;
        meal_name = data.meal_name;
        foods= data.foods;
       
        
        result = await MealModel.addMealWithFood(meal_name,user_id,foods)
        res.json(result);
    } catch (error) {
        console.error('Error adding meal with food:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
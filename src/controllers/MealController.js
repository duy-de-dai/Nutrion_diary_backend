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
exports.deleteMeal = async (req, res) => {
    try {
        const mealId = req.params.id; // Lấy mealId từ URL hoặc req.body, tùy thuộc vào cách bạn định nghĩa API endpoint

        await MealModel.deleteMeal(mealId);

        res.json({ success: true });
    } catch (error) {
        console.error('Error deleting meal:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.getMeal = async (req, res) => {
    try {
        const mealId = req.params.id; // Lấy mealId từ URL hoặc req.body, tùy thuộc vào cách bạn định nghĩa API endpoint
        console.log('====================================');
        console.log(mealId);
        console.log('====================================');
        result = await MealModel.getMeal(mealId);

        res.json(result);
    } catch (error) {
        console.error('Error add meal:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
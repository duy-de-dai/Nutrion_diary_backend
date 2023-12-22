const FoodModel = require('../models/FoodModel');

exports.addFood = async (req, res) => {
  try {
    const data = req.body;
    const food = new FoodModel(data);

    const result = await food.addFood();

    return res.status(201).json(result);
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
};

exports.updateFood = async (req, res) => {
  try {
    const { foodId } = req.params;
    console.log(foodId);
    const foodData = req.body;
    console.log(foodData);

    const food = new FoodModel({ id: foodId, ...foodData });

    const updatedFood = await food.updateFood();

    return res.json(updatedFood);
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
};

exports.getFoodById = async (req, res) => {
  try {

    const foodId  = req.params.foodId;

    const food = await FoodModel.getFoodById(foodId);

    if (!food) {
      return res.status(404).json({ message: 'Food not found' });
    }

    return res.json(food);
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
};

exports.getAllFoods = async (req, res) => {
  try {
    const foods = await FoodModel.getAllFoods();

    return res.json(foods);
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
};

exports.deleteFood = async (req, res) => {
  try {
    const { foodId } = req.params;

    const result = await FoodModel.deleteFood(foodId);
    console.log('Delete successfull');
    return res.json(result);
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
};

const db = require('../knex/database')

class MealFoodModel {
  constructor(meal_food) {
    this.id = meal_food.id || null;
    this.user_id = meal_food.user_id || null;
    this.meal_id = meal_food.meal_id || null;
    this.food_id = meal_food.food_id || null;
    this.quantity = meal_food.quantity || null;
  }
  async add() {

    // Chèn dữ liệu vào bảng 'foods' sử dụng Knex
    const [meal_food_id] = await db('meal_food').insert({
      name: this.name,
      user_id: this.user_id,
      meal_id: this.meal_id,
      food_id: this.food_id,
      quantity:this.quantity
    });

    // Truy vấn để lấy thông tin của người dùng vừa chèn
    const meal_food = await db('meal_food').where('id', meal_food_id).first();

    return meal_food;
  }
  async updateMeal() {
    // Cập nhật dữ liệu trong bảng 'foods' sử dụng Knex
    await db('meals').where('id', this.id).update({
      name: this.name,
      
    });

    // Truy vấn để lấy thông tin của món ăn sau khi cập nhật
    const updatedFood = await db('foods').where('id', this.id).first();

    return updatedFood;
  }

  
}




module.exports = MealFoodModel;
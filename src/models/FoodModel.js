const db = require('../knex/database')

class FoodModel {
  constructor(food) {
    this.id = food.id || null;
    this.name = food.name || null;
    this.calories = food.calories || null;
    this.protein = food.protein || null;
    this.fat = food.fat || null;
    this.carb = food.carb || null;
    this.type = food.type || null;
    this.user_id = food.user_id || null;
  }
  async addFood() {

    // Chèn dữ liệu vào bảng 'foods' sử dụng Knex
    const [foodId] = await db('foods').insert({
      name: this.name,
      calories: this.calories,
      protein: this.protein,
      fat: this.fat,
      carb: this.carb,
      type: this.type,
      user_id: this.user_id

    });

    // Truy vấn để lấy thông tin của người dùng vừa chèn
    const food = await db('foods').where('id', foodId).first();

    return food;
  }
  async updateFood() {
    // Cập nhật dữ liệu trong bảng 'foods' sử dụng Knex
    await db('foods').where('id', this.id).update({
      name: this.name,
      calories: this.calories,
      protein: this.protein,
      fat: this.fat,
      carb: this.carb,
      type: this.type,
    });

    // Truy vấn để lấy thông tin của món ăn sau khi cập nhật
    const updatedFood = await db('foods').where('id', this.id).first();

    return updatedFood;
  }

  static async getFoodById(foodId) {
    // Lấy thông tin của một món ăn dựa trên id
    const food = await db('foods').where('id', foodId).first();
    return food;
  }

  static async getAllFoods() {
    // Lấy danh sách tất cả món ăn
    const foods = await db('foods');
    return foods;
  }

  static async deleteFood(foodId) {
    // Xóa một món ăn từ bảng 'foods' sử dụng Knex
    await db('foods').where('id', foodId).del();
    return {
      foodId: foodId
    }
  }


}




module.exports = FoodModel;
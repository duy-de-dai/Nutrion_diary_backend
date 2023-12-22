const db = require('../knex/database')

class MealModel {
  constructor(meal) {
    this.id = meal.id || null;
    this.name = meal.name || null;
    this.user_id = meal.user_id || null;
  }
 static async addMealWithFood(name, user_id, foods) {
    try {
      // Bắt đầu một transaction
      return await db.transaction(async (trx) => {
        // Chèn dữ liệu vào bảng 'meals'
        const [mealId] = await trx('meals').insert({
          name,
          user_id,
        });

        
        // Tạo mảng chứa dữ liệu để chèn vào bảng 'meal_food'
        const mealFoodData = foods.map((food) => ({
          meal_id: mealId,
          food_id: food.food_id,
          quantity: food.quantity,
          user_id:user_id
        }));

        // Chèn dữ liệu vào bảng 'meal_food'
        await trx('meal_food').insert(mealFoodData);

        // Trả về thông tin của bữa ăn và thực phẩm đã chèn
        const meal = await trx('meals').where('id', mealId).first();
        const mealFoods = await trx('meal_food').where('meal_id', mealId);

        return { meal, mealFoods };
      });
    } catch (error) {
      console.error('Error adding meal with food:', error);
      throw error;
    }
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




module.exports = MealModel;
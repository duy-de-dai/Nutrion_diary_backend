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
          user_id: user_id
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
  // Hàm xóa bữa ăn
  static async deleteMeal(mealId) {
    try {
      return await db.transaction(async (trx) => {
        // Xóa dữ liệu từ bảng 'meal_food' trước
        await trx('meal_food').where('meal_id', mealId).del();

        // Xóa dữ liệu từ bảng 'meals'
        await trx('meals').where('id', mealId).del();

        return { success: true };
      });
    } catch (error) {
      console.error('Error deleting meal:', error);
      throw error;
    }
  }

  static async getMeal(mealId) {
    try {
      // Truy vấn thông tin bữa ăn từ bảng 'meals'
      const meal = await db('meals').where('id', mealId).first();

      // Truy vấn thông tin thực phẩm của bữa ăn từ bảng 'meal_food'
      const mealFoods = await db('meal_food').select('food_id', 'quantity').where('meal_id', mealId);
      

      return { meal, mealFoods };
    } catch (error) {
      console.error('Error getting meal:', error);
      throw error;
    }
  }
  
  // Hàm lấy tất cả bữa ăn của một người dùng
  static async getAllMeals(userId) {
    try {
      // Truy vấn tất cả bữa ăn của người dùng từ bảng 'meals'
      const meals = await db('meals').where('user_id', userId);

      // Duyệt qua từng bữa ăn để lấy thông tin thực phẩm từ bảng 'meal_food'
      const mealsWithFoods = await Promise.all(meals.map(async (meal) => {
        const mealFoods = await db('meal_food').select('food_id', 'quantity').where('meal_id', meal.id);
        return { meal, mealFoods };
      }));

      return mealsWithFoods;
    } catch (error) {
      console.error('Error getting all meals:', error);
      throw error;
    }
  }

}




module.exports = MealModel;
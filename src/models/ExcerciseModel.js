const db = require('../knex/database');

class ExcerciseModel {
  constructor(excercise) {
    this.id = excercise.id || null;
    this.name = excercise.name || null;
    this.time = excercise.time || null;
    this.calories = excercise.calories || null;
    this.user_id = excercise.user_id || null;
  }

  async addExcercise() {
    try {
      const data = {
        name: this.name,
        time: this.time,
        calories: this.calories,
        user_id: this.user_id,
      };

      // Chèn dữ liệu vào bảng 'excercises'
      const [excerciseId] = await db('excercises').insert(data);
      const insertedExcercise = await db('excercises').where('id', excerciseId).first();

      // Trả về bài tập vừa chèn
      return insertedExcercise;
    } catch (error) {
      console.error('Error adding excercise:', error);
      throw error;
    }
  }

  static async getExcerciseById(excerciseId) {
    try {
      const excercise = await db('excercises').where('id', excerciseId).first();
      return excercise;
    } catch (error) {
      console.error('Error getting excercise by ID:', error);
      throw error;
    }
  }

  async updateExcercise() {
    try {
      const data = {
        name: this.name,
        time: this.time,
        calories: this.calories,
        user_id: this.user_id,
      };

      await db('excercises').where('id', this.id).update(data);
      const updatedExcercise = await db('excercises').where('id', this.id).first();

      // Trả về bài tập vừa cập nhật
      return updatedExcercise;
    } catch (error) {
      console.error('Error updating excercise:', error);
      throw error;
    }
  }

  static async deleteExcercise(excerciseId) {
    try {
      const excercise = await db('excercises').where('id', excerciseId).first();

      if (!excercise) {
        return {
          message: 'Excercise not found',
        };
      }

      await db('excercises').where('id', excercise.id).del();
      return {
        excerciseId: excercise.id,
        message: 'Excercise deleted successfully',
      };
    } catch (error) {
      console.error('Error deleting excercise:', error);
      throw error;
    }
  }
}

module.exports = ExcerciseModel;

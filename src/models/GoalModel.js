const db = require('../knex/database');

class GoalModel {
  constructor(goal) {
    this.id = goal.id || null;
    this.name = goal.name || null;
    this.goal_date = goal.goal_date || null;
    this.weight = goal.weight || null;
    this.user_id = goal.user_id || null;
  }

  async addGoal() {
    try {
      const data = {
        name: this.name,
        goal_date: this.goal_date,
        weight: this.weight,
        user_id: this.user_id,
      };

      // Chèn dữ liệu vào bảng 'goals'
      const [goalId] = await db('goals').insert(data);
      const insertedGoal = await db('goals').where('id', goalId).first();

      // Trả về mục tiêu vừa chèn
      return insertedGoal;
    } catch (error) {
      console.error('Error adding goal:', error);
      throw error;
    }
  }

  static async getGoalById(goalId) {
    try {
      const goal = await db('goals').where('id', goalId).first();
      return goal;
    } catch (error) {
      console.error('Error getting goal by ID:', error);
      throw error;
    }
  }

  async updateGoal() {
    try {
      const data = {
        name: this.name,
        goal_date: this.goal_date,
        weight: this.weight,
        user_id: this.user_id,
      };

      await db('goals').where('id', this.id).update(data);
      const updatedGoal = await db('goals').where('id', this.id).first();

      // Trả về mục tiêu vừa cập nhật
      return updatedGoal;
    } catch (error) {
      console.error('Error updating goal:', error);
      throw error;
    }
  }

  static async deleteGoal(goalId) {
    try {
      const goal = await db('goals').where('id', goalId).first();

      if (!goal) {
        return {
          message: 'Goal not found',
        };
      }

      await db('goals').where('id', goal.id).del();
      return {
        goalId: goal.id,
        message: 'Goal deleted successfully',
      };
    } catch (error) {
      console.error('Error deleting goal:', error);
      throw error;
    }
  }
}

module.exports = GoalModel;

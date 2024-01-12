const db = require('../knex/database');

class DayModel {
  constructor(day) {
    this.id = day.id || null;
    this.date = day.date || null;
    this.breakfast_id = day.breakfast_id || null;
    this.lunch_id = day.lunch_id || null;
    this.snacks_id = day.snacks_id || null;
    this.dinner_id = day.dinner_id || null;
    this.user_id = day.user_id || null;
    this.excercise_id = day.excercise_id || null;
  }

  async addMealInDay() {
    try {
      const data = {
        date: this.date,
        breakfast_id: this.breakfast_id,
        lunch_id: this.lunch_id,
        snacks_id: this.snacks_id,
        dinner_id: this.dinner_id,
        user_id: this.user_id,
        excercise_id: this.excercise_id,
      }

      const day = await db('days').where('date', data.date).first();
      console.log(day);
      if (!day) {
        // Chèn dữ liệu vào bảng 'days'
        const [dayId] = await db('days').insert(data);
        const insertedDay = await db('days').where('id', dayId).first();
        // Trả về  ngày vừa chèn
        return insertedDay;
      }
      else {
        await db('days').where('id', day.id).update(data);
        const insertedDay = await db('days').where('id', day.id).first();
        // Trả về  ngày vừa chèn
        return insertedDay;
      }

    } catch (error) {
      console.error('Error adding day:', error);
      throw error;
    }
  }


  static async getDay(date) {
    const day = await db('days').where('date', date).first();
    if (!day) {
      return {
        message: 'Not find day'
      };
    }
    else {
      return day;
    }
  }

  static async deleteDay(date) {

    const day = await db('days').where('date', date).first();

    if (!day) {
      return {
        message: 'Not find day'
      };
    }
    else {

      await db('days').where('id', day.id).del();
      return {
        dayId: day.id,
        date: date
      };
      return day;
    }

  }


}

module.exports = DayModel;

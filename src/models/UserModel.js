const db = require('../knex/database')

class UserModel {
    constructor(user) {
        this.id = user.id || null;
        this.username = user.username || null;
        this.email = user.email || null;
        this.name = user.name || null;
        this.password = user.password || null;
        this.gender = user.gender || null;
        this.weight = user.weight || null;
        this.height = user.height || null;
        this.age = user.age || null;
    }
    async save() {
      
        // Chèn dữ liệu vào bảng 'users' sử dụng Knex
        const [insertedId] = await db('users').insert({
          username: this.username,
          email: this.email,
          name: this.name,
          password: this.password,
          gender: this.gender,
          weight: this.weight,
          height: this.height,
          age: this.age,
        });
      
        // Truy vấn để lấy thông tin của người dùng vừa chèn
        const insertedUser = await db('users').where('id', insertedId).first();
      
        return insertedUser;
      }
}


module.exports = UserModel;
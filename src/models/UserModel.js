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
    this.refreshToken = user.refreshToken || null;
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
  static login = async (email, password) => {
    const user = await db("users").where("email", email).first();

    if (user) {
      if (user.password === password) {
        return { success: true, user: user };
      }
      return { success: false, error: "Incorrect password" };
    }
    return { success: false, error: "Incorrect email" };
  };

  static async updateToken(id, refreshToken) {
    try {
      const rows = await db('users')
        .where({ id: id })
        .update({ refreshToken: refreshToken });

      console.log(rows);

      return rows;
    } catch (error) {
      console.error(error);
      throw error; // Ném lỗi để bắt ở nơi gọi hàm nếu có lỗi
    }
  }
  static async updateUser(userId, userData) {
    console.log(userId);
    console.log(userData);
    try {
      const result = await db("users").update(userData).where("id", userId);
      return {
        success: true,
        statusCode: 200,
        message: "Update user successful",
      };
    } catch (error) {
      console.error("Update user error: ", error);
      return {
        success: false,
        statusCode: 500,
        message: "Failed to update user",
      };
    }
  }

}




module.exports = UserModel;
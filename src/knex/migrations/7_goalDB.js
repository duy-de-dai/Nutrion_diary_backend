exports.up = (knex) => {
    return knex.schema.createTable('goals', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.integer('goal_date');
      table.float('weight');
      // Thêm cột user_id và tạo ràng buộc khóa ngoại với cột id trong bảng users
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE');
    });
  };
  
  exports.down = (knex) => {
    return knex.schema.dropTable('meal_food');
  };
  
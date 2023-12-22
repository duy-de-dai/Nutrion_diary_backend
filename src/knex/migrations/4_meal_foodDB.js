exports.up = (knex) => {
    return knex.schema.createTable('meal_food', (table) => {
      table.increments('id').primary();
      table.integer('meal_id').unsigned().notNullable().references('id').inTable('meals').onDelete('CASCADE');
      table.integer('food_id').unsigned().notNullable().references('id').inTable('foods').onDelete('CASCADE');
      table.integer('quantity').unsigned().notNullable();
      // Thêm cột user_id và tạo ràng buộc khóa ngoại với cột id trong bảng users
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE');
    });
  };
  
  exports.down = (knex) => {
    return knex.schema.dropTable('meal_food');
  };
  
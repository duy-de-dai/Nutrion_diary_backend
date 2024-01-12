exports.up = (knex) => {
    return knex.schema.createTable('excercises', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.integer('time');
      table.integer('calories');
      // Thêm cột user_id và tạo ràng buộc khóa ngoại với cột id trong bảng users
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE');
    });
  };
  
  exports.down = (knex) => {
    return knex.schema.dropTable('excercises');
  };
  
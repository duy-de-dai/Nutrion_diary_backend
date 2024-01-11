exports.up = (knex) => {
    return knex.schema.createTable('days', (table) => {
      table.increments('id').primary();
      table.date('date'); 
      table.integer('breakfast_id').unsigned().references('meals.id');
      table.integer('lunch_id').unsigned().references('meals.id');
      table.integer('snacks_id').unsigned().references('meals.id');
      table.integer('dinner_id').unsigned().references('meals.id');
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE');
      table.integer('excercise_id').unsigned().references('excercises.id');
    });
  };
  
  exports.down = (knex) => {
    return knex.schema.dropTable('days');
  };
  
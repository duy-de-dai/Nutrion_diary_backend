exports.up = (knex)=>{
    return knex.schema.createTable('meal_food', (table) => {
        table.increments('id').primary();
        table.integer('meal_id').unsigned().notNullable().references('id').inTable('meals').onDelete('CASCADE');
        table.integer('food_id').unsigned().notNullable().references('id').inTable('foods').onDelete('CASCADE');
      });
}

exports.down = (knex)=>{
    return knex.schema.dropTable('meal_food');
}
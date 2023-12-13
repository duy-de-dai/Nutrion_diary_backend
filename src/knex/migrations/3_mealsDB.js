exports.up = (knex)=>{
    return knex.schema.createTable('meals', (table) => {
        table.increments('id').primary();
        table.string('name');
        table.integer('time');
        table.integer('user_id').unsigned().notNullable().references('users.id')
        
      });
}

exports.down = (knex)=>{
    return knex.schema.dropTable('meals');
}
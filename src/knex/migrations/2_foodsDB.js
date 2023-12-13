exports.up = (knex)=>{
    return knex.schema.createTable('foods', (table) => {
        table.increments('id').primary();
        table.string('name');
        table.string('type');
        table.string('description');
        table.string('imageUrl')
        table.float('calories');
        table.float('protein');
        table.float('fat')
        table.float('carb')
        table.string('vitamin')

      });
}

exports.down = (knex)=>{
    return knex.schema.dropTable('foods');
}
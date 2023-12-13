exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments('id').primary();
        table.string('username').notNullable().unique();
        table.string('email').unique();
        table.string('password').notNullable();
        table.string('name').notNullable();
        table.integer('age').unsigned();
        table.integer('gender').unsigned().notNullable();
        table.float('weight').unsigned();
        table.float('height').unsigned()
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('users');
};
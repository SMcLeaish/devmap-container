exports.up = function (knex) {
    return knex.schema.createTable('branch', table => {
        table.increments('id').primary();
        table.string('branch').notNullable();
    })
};

exports.down = function (knex) {
    return (
        knex.schema.dropTableIfExists('branch')
    )
};
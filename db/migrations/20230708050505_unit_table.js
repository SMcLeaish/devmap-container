/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('unit', table => {
        table.increments('id').primary();
        table.string('unit').notNullable();
        // table.integer('personnel_id').unsigned().notNullable();
        // table.foreign('personnel_id').references('personnel.id');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return (
        knex.schema.dropTableIfExists('unit')
    )
};

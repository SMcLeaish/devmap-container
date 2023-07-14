/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('installation', table => {
        table.increments('id').primary();
        table.string('installation').notNullable();
        // table.integer('unit_id').unsigned().notNullable();
        // table.foreign('unit_id').references('unit.id');
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
        knex.schema.dropTableIfExists('installation')
    )
};

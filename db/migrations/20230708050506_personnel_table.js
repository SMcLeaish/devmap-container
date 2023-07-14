/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('personnel', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('clearance').defaultTo(null);
        table.boolean('has_skill_identifier').notNullable();
        table.string('arrived_on_station').notNullable();
        table.boolean('is_civilian').notNullable();
        table.string('mos').defaultTo(null);                            
        table.string('rank').defaultTo(null);
        table.string('email').defaultTo(null);
        table.string('geocode');
        table.string('mgrs').defaultTo(null);                           
        table.integer('branch_id').unsigned().notNullable();
        table.foreign('branch_id').references('branch.id');
        table.integer('unit_id').unsigned().notNullable();              
        table.foreign('unit_id').references('unit.id');
        table.integer('installation_id').unsigned().notNullable();      
        table.foreign('installation_id').references('installation.id');
        table.string('photo');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return (
        knex.schema.dropTableIfExists('personnel')
    )
};

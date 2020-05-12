
exports.up = function(knex) {
    return knex.schema.createTable("cars", tbl => {

        tbl.increments();
        tbl.string("vin", 17).notNullable().unique();
        tbl.string("make", 255).notNullable();
        tbl.string("model", 255).notNullable();
        tbl.integer("milage", 255).notNullable();
        tbl.string("transmission", 255);
        tbl.string("status", 255);
    
        tbl.timestamps(true, true); // created_at and updated_at
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");  
};

// the 255 is max characters

//notNullable means its required, it cant be NULL

//budgeting like with money use decimals, otherwise use integer for whole numbers

//will be db.3 file that you open in SQLite
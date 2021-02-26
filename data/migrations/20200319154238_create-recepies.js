exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments("id");
      tbl.string("name", 255).notNullable();
      tbl.string("description", 1000).notNullable();
    })
    .createTable("ingredients", tbl => {
      tbl.increments("id");
      tbl.string("name", 255).notNullable();
      tbl.string("units", 255).notNullable();
    })
    .createTable("steps", tbl => {
      tbl.increments("id");
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl.integer("step_number").notNullable();
      tbl.string("description", 555).notNullable();
    })
    .createTable("recipe_ingredients", tbl => {
      tbl.primary(["recipe_id", "ingredient_id"]);
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl.float("quantity").notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipe_ingredients");
};

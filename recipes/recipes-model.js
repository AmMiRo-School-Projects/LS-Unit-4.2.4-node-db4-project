const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db
    .select(
      "ingredients.name",
      "recipe_ingredients.quantity",
      "ingredients.units"
    )
    .from("recipe_ingredients")
    .join(
      "ingredients",
      "recipe_ingredients.ingredient_id",
      "=",
      "ingredients.id"
    )
    .where("recipe_ingredients.recipe_id", "=", recipe_id);
}

function getInstructions(recipe_id) {
  return db
    .select("recipes.name", "steps.step_number", "steps.description")
    .from("recipes")
    .join("steps", "recipes.id", "=", "steps.recipe_id")
    .where("recipes.id", "=", recipe_id);
}

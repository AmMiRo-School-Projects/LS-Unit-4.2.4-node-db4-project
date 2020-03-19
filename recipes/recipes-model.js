const db = require("../data/db-config");

module.exports = {
  getRecipes
};

function getRecipes() {
  return db
    .select("recipes.id, recipes.name, recipes.description")
    .from("recipes");
}

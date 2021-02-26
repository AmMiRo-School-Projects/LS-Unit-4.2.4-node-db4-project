const express = require("express");

const Recipes = require("./recipes-model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes();
    res.status(200).json(recipes);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "there was an error", error: err });
  }
});

router.get("/:id/ingredients", async (req, res) => {
  try {
    const ingredients = await Recipes.getShoppingList(req.params.id);
    res.status(200).json(ingredients);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "there was an error", error: err });
  }
});

router.get("/:id/steps", async (req, res) => {
  try {
    const ingredients = await Recipes.getInstructions(req.params.id);
    res.status(200).json(ingredients);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "there was an error", error: err });
  }
});

module.exports = router;

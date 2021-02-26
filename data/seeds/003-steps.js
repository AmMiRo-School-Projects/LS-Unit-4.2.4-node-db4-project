exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("steps").insert([
        {
          id: 1,
          recipe_id: 1,
          step_number: 1,
          description: "Add water from to glass"
        },
        {
          id: 2,
          recipe_id: 2,
          step_number: 1,
          description: "Slice and cook beef"
        },
        {
          id: 3,
          recipe_id: 2,
          step_number: 2,
          description: "Chop and cook broccoli"
        },
        {
          id: 4,
          recipe_id: 2,
          step_number: 3,
          description: "Combine beef, broccoli, and sauce"
        },
        {
          id: 5,
          recipe_id: 3,
          step_number: 1,
          description: "Find a biscuit"
        },
        {
          id: 6,
          recipe_id: 3,
          step_number: 2,
          description: "Make gravy"
        },
        {
          id: 7,
          recipe_id: 3,
          step_number: 3,
          description: "Pour gravy over biscuit and serve"
        }
      ]);
    });
};

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          id: 1,
          name: "Glass of Water",
          description: "Pour a glass of water!"
        },
        {
          id: 2,
          name: "Beef and Broccoli",
          description: "Beef and broccoli with sauce over rice"
        },
        {
          id: 3,
          name: "Biscuts and Gravy",
          description: "Savory biscuts and gravy breakfast"
        }
      ]);
    });
};

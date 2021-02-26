exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, name: "Water", units: "oz" },
        { id: 2, name: "Beef", units: "oz" },
        { id: 3, name: "Broccoli", units: "cups" },
        { id: 4, name: "sauce", units: "oz" },
        { id: 5, name: "Biscuits", units: "biscuit" },
        { id: 6, name: "Gravy", units: "oz" }
      ]);
    });
};

const mongoose = require('mongoose');

const FoodCategorySchema = new mongoose.Schema({
    name: String,
    foods: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food'
      }
    ]
  });


const FoodCategory = mongoose.models.FoodCategory || mongoose.model("FoodCategory", FoodCategorySchema);

module.exports = { FoodCategory };
const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    stock: Number,
    category: String,
  });


const Food = mongoose.models.Food || mongoose.model("Food", FoodSchema);

// Export the model
module.exports = { Food };
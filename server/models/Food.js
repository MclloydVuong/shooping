const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    stock: Number,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FoodCategory'
    } 
  });


const Food = mongoose.models.Food || mongoose.model("Food", FoodSchema);

module.exports = { Food };
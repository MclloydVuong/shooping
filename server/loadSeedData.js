const { Food } = require("./models/Food");

const loadSeedData = async () => {
    await Food.deleteMany({});
    const apple = new Food({
      name: "Apple",
      price: 2,
      description: "A red fruit",
      stock: 10,
      category: "fruit",
    });
  
    const orange = new Food({
      name: "Orange",
      price: 3,
      description: "A orange fruit",
      stock: 5,
      category: "fruit",
    });
  
    const broccoli = new Food({
      name: "Broccoli",
      price: 1,
      description: "A green vegetable",
      stock: 2,
      category: "vegetable",
    });
  
    await apple.save();
    await orange.save();
    await broccoli.save();
    return
  };

module.exports = {  loadSeedData  };
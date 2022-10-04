const { Food } = require("./models/Food");
const { FoodCategory } = require("./models/FoodCategory");


const loadSeedData = async () => {
    await FoodCategory.deleteMany({});
    await Food.deleteMany({});

    const fruit = new FoodCategory({ name: "Fruit" });
    const vegetable = new FoodCategory({ name: "Vegetable" });
    const cheese = new FoodCategory({ name: "Cheese" });

    await fruit.save();
    await vegetable.save();
    await cheese.save();

    const apple = new Food({
      name: "Apple",
      price: 2,
      description: "A red fruit",
      stock: 10,
      category: fruit,
    });
    fruit.foods.push(apple);
  
    const orange = new Food({
      name: "Orange",
      price: 3,
      description: "A orange fruit",
      stock: 5,
      category: fruit,
    });
    fruit.foods.push(orange);
  
    const broccoli = new Food({
      name: "Broccoli",
      price: 1,
      description: "A green vegetable",
      stock: 2,
      category: vegetable,
    });
    vegetable.foods.push(broccoli);
  
    await apple.save();
    await orange.save();
    await broccoli.save();
    await fruit.save();
    await vegetable.save();
    await cheese.save();

    return
  };

module.exports = {  loadSeedData  };
const { ApolloServer, gql } = require("apollo-server");
const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  stock: Number,
  category: String,
});

const Food = mongoose.model("Food", FoodSchema);

const typeDefs = gql`
  type Food {
    name: String
    price: Int
    description: String
    stock: Int
    category: String
  }

  type Query {
    foods: [Food]
  }
`;

const resolvers = {
  Query: {
    foods: async () => await Food.find({}),
  },
};

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

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    Food,
  }),
});

mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => loadSeedData())
  .then(() => server.listen())
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  })
  .catch(console.error)

const { ApolloServer, gql } = require("apollo-server");
const mongoose = require("mongoose");
const { Food } = require("./models/Food");
const { loadSeedData } = require("./loadSeedData");
const { FoodCategory } = require("./models/FoodCategory");

const typeDefs = gql`
  type Food {
    name: String
    price: Int
    description: String
    stock: Int
    category: String
  }
  
  type FoodCategory {
    name: String
  }

  type Query {
    foods(categoryName: String!): [Food]
    foodCategories: [FoodCategory]
  }

`;

const resolvers = {
  Query: {
    foods: async (_, {categoryName}) => {
      const foodCategory = await FoodCategory.findOne({name: categoryName}).populate('foods')
      const foods = foodCategory.foods
      return foods
    },
    foodCategories: async () => await FoodCategory.find({}),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    Food,
    FoodCategory
  }),
});

mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => loadSeedData())
  .then(() => server.listen())
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  })
  .catch(console.error);

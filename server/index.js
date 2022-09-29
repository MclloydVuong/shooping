const { ApolloServer, gql } = require("apollo-server");
const mongoose = require("mongoose");
const { Food } = require("./models/Food");
const { loadSeedData } = require("./loadSeedData");

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
  .catch(console.error);

import { createServer } from "@graphql-yoga/node";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schemas";

const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
  endpoint: "/api",
  // graphiql: false // uncomment to disable GraphiQL
});

export default server;

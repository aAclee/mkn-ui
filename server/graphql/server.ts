import { ApolloServer } from 'apollo-server-koa';
import { typeDefs } from './root.type-defs';
import { resolvers } from './root.resolvers';

// TODO: Use dependency injection for server creation
export const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
});

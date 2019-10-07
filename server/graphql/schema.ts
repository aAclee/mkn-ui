import { GraphQLSchema } from 'graphql';
import RootQueryType from './root';

export default new GraphQLSchema({
  query: RootQueryType,
});
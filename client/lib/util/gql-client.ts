import ApolloClient from 'apollo-boost';

const GQL_URI = 'http://localhost:3000/graphql';
let client: ApolloClient<unknown>;

function createClient<T>(): ApolloClient<T> {
  return new ApolloClient({
    uri: GQL_URI,
  });
}

export function getClient(): ApolloClient<unknown> {
  if (!client) {
    client = createClient<unknown>();
  }

  return client;
}


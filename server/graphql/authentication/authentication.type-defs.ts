export const typeDefs = `
  type Token {
    token: String
  }

  type Query {
    authenticate(username: String!, password: String!): Token
  }
`;
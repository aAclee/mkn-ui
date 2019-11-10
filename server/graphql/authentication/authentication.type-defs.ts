export const typeDefs = `
  type Token {
    token: String
  }

  extend type Query {
    authenticate(username: String!, password: String!): Token
  }
`;
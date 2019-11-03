export const typeDefs = `
  type Campaign {
    id: Int
    name: String
  }

  extend type Query {
    campaign(id: Int!): Campaign
  }
`;
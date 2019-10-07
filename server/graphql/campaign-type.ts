import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} from 'graphql';

const CampaignType = new GraphQLObjectType({
  name:  'CampaignType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  }),
});

export default CampaignType;

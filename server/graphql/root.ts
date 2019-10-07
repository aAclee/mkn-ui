import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';

import { Campaign } from '@mkn-types/campaign';

import CampaignType from './campaign-type';
import { Fields } from './types';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: (): Fields => ({
    campaign: {
      type: CampaignType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(): Promise<Campaign> {
        return new Promise((resolve): void => {
          resolve({ id: 1, name: 'Story of a King' });
        });
      },
    },
  }),
});

export default RootQuery;
import { Campaign } from '@mkn-types/campaign';

const campaigns = [
  { id: 1, name: 'Diablo - Lord of the Nine Hells' },
  { id: 2, name: 'Adventures of Tiko the Forest Gnome' },
  { id: 3, name: 'Isekai - My 100th try at this again' },
];

export const resolvers = {
  Query: {
    campaign: (_parent: any, { id }: Campaign): Campaign =>
      campaigns.find(c => c.id === id),
  },
};
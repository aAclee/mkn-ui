import { resolvers as authentication } from './authentication/authentication.resolvers';
import { resolvers as campaign } from './campaign/campaign.resolvers';

export const resolvers = [
  authentication,
  campaign,
];
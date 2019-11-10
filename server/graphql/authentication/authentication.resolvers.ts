import { authenticate } from '../../lib/util/request';

type Login = {
  username: string;
  password: string;
}

export const resolvers = {
  Query: {
    authenticate: async (_parent: any, {
      username, 
      password,
    }: Login): Promise<{ token: string }> => {
      try {
        const { data } =  await authenticate(username, password);
        return data;
      } catch (e) {
        if (e.status === 401) {
          throw new Error(e.data.error);
        }

        throw new Error(e);
      }
    },
  },
};
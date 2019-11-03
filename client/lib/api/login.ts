import { gql } from "apollo-boost";
import { getClient } from '@util/gql-client';

type LoginQueryResponse = {
  authenticate: {
    token: string;
  },
}

export async function postLogin(
  username: string,
  password: string,
): Promise<string> {
  const client = getClient();
  try {
    const { data } = await client.query<LoginQueryResponse>({
      query: gql`
        {
          authenticate(username: "${username}", password: "${password}") {
            token
          }
        }
      `,
    });

    return data.authenticate.token;
  } catch(e) {
    if (e.message) {
      // TODO: Hard-coded regex is not a good idea
      const [_, message] = /GraphQL error: (.*)/.exec(e.message);
      throw new Error(message);
    }

    throw new Error(e);
  }
}
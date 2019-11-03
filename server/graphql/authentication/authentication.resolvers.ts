const auth: {[k: string]: string} = {
  'admin.mkn@gmail.com': 'password'
}

type Login = {
  username: string;
  password: string;
}

export const resolvers = {
  Query: {
    authenticate: (_parent: any, {
      username, 
      password,
    }: Login): { token: string } => {
      if (auth[username] === password) {
        return { token: '234dfd.134324.df23' };
      }

      throw new Error('Username or password is incorrect!')
    },
  },
};
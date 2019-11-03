import { post } from '@util/request';


export async function postLogin(
  username: string,
  password: string,
): Promise<string> {
  const { token } = await post<{ token: string }>({ username, password });
  return token;
}
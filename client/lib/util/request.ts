const API_URL = 'http://localhost:8000';

export async function post<R, T = unknown>(data: T): Promise<R> {
  const resp = await fetch(API_URL + '/api/auth', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return resp.json();
}

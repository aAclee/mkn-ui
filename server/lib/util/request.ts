import axios, { AxiosResponse } from 'axios';

const API_URI = 'http://localhost:8000';

export function authenticate(username: string, password: string): Promise<AxiosResponse<{token: string}>> {
  return axios.post(API_URI + '/api/auth', {username, password})
    .catch(err => Promise.reject(err.response));
}
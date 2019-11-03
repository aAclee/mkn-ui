import { Dispatch } from 'react';

export type DispatchFn<A, T> = (d: Dispatch<A>) => Promise<T>;

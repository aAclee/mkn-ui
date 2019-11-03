import { useDispatch } from 'react-redux';

import { DispatchFn } from '@client-types/dispatch';

export function useFunctionDispatch<T = unknown>(
  func: (...args: T[]) => DispatchFn<unknown, unknown>,
): (...args: T[]) => void {
  const dispatch = useDispatch();
  const dispatchFn = (...args: T[]): void => {
    func(...args)(dispatch);
  };

  return dispatchFn;
}

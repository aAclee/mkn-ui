import { Dispatch } from 'react';
import { postLogin } from '@api/login';

// Types
import { DispatchFn } from '@client-types/dispatch';
import {
  SystemPayload,
  SystemActionTypes,
  UPDATE_SYSTEM,
} from '@client-types/system';

export function updateSystemAction(
  newSystemState: SystemPayload,
): SystemActionTypes {
  return {
    type: UPDATE_SYSTEM,
    payload: newSystemState,
  };
}

/* eslint-disable no-console*/
export const login = (
  username: string,
  password: string
): DispatchFn<SystemActionTypes, void> => async (
  dispatch: Dispatch<SystemActionTypes>,
): Promise<void> => {
  try {
    const token = await postLogin(username, password);
    dispatch(updateSystemAction({ token }));
  } catch (e) {
    console.error(e);
  }
};
/* eslint-enable no-console*/

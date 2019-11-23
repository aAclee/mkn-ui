import { useDispatch } from 'react-redux';
import { postLogin } from '@api/login';

/**
 * TODO: Consider refactoring the usage of dispatch. Currently
 * useDispatch is invoked in each function and can be lazy
 * loaded as needed. There should be no need to create a new
 * dispatch with every action.
 */

// Types
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
export const login = async (
  username: string,
  password: string
): Promise<void> => {
  try {
    const token = await postLogin(username, password);
    useDispatch()(updateSystemAction({ token }));
  } catch (e) {
    console.error(e.message);
  }
};
/* eslint-enable no-console*/

export const logout = (): void => {
  useDispatch()(updateSystemAction({ token: null }));
};
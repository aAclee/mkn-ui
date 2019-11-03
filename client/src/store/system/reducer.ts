import {
  SystemState,
  SystemActionTypes,
  UPDATE_SYSTEM,
} from '@client-types/system';

const initialState: SystemState = {
  token: null,
  session: '',
};

export function systemReducer(
  state = initialState,
  action: SystemActionTypes,
): SystemState {
  switch (action.type) {
    case UPDATE_SYSTEM: {
      return {
        ...state,
        ...action.payload,
      };
    }

    default:
      return state;
  }
}

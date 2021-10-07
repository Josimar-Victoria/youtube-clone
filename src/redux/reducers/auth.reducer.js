import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOG_PROFILE,
  LOGIN_SUCCESS,
} from "../actionType";

const initialState = {
  accessToken: null,
  user: null,
  loading: null,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        accessToken: payload,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        accessToken: null,
        loading: false,
        error: payload,
      };
    case LOG_PROFILE:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};

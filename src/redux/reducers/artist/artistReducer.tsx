import { UnknownAction } from "@reduxjs/toolkit";

const initialState = {
  loggedUser: {},
};

export default function artistReducer(
  state = initialState,
  action: UnknownAction
) {
  switch (action.type) {
    case "LOGGED_USER":
      return {
        ...state,
        loggeduser: action.payload,
      };
    default:
      return state;
  }
}

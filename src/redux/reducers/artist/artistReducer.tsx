import { UnknownAction } from "@reduxjs/toolkit";
import { AmpContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";

const initialState = {
  loggedUser: {},
  modal: {},
};

export default function artistReducer(
  state = initialState,
  action: UnknownAction
) {
  switch (action.type) {
    case "LOGGED_USER":
      return {
        ...state,
        loggedUser: action.payload,
      };
    case "MODAL":
      return {
        ...state,
        modal: action.payload,
      };
    default:
      return state;
  }
}

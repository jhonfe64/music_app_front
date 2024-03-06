import { ArtistInterface } from "@/interfaces/artistInterfaces";

const LOGGED_USER = "LOGGED_USER";
const MODAL = "MODAL";

const loggedUserAction = (user: ArtistInterface) => {
  return {
    type: LOGGED_USER,
    payload: user,
  };
};

const modalAction = (modalId: string) => {
  return {
    type: MODAL,
    payload: modalId,
  };
};

export { loggedUserAction, modalAction };

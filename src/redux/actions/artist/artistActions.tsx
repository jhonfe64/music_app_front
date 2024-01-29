import { ArtistInterface } from "@/interfaces/artistInterfaces";

const LOGGED_USER = "LOGGED_USER";

const loggedUserAction = (user: ArtistInterface) => {
  return {
    type: LOGGED_USER,
    payload: user,
  };
};

export { loggedUserAction };

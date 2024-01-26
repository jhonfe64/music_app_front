const LOGGED_USER = "LOGGED_USER";
import { LoggedUserInterface } from "@/interfaces/artistInterfaces";

const loggedUser = (user: LoggedUserInterface) => {
  return {
    type: LOGGED_USER,
    payload: user,
  };
};

export default { loggedUser };

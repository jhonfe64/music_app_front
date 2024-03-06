import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { ArtistInterface } from "@/interfaces/artistInterfaces";

const selectUserData = () => {
  const state: RootState = useSelector((state: RootState) => state);
  const artist = state.artist.loggedUser as ArtistInterface;
  return artist;
};

const selectModalId = () => {
  const modalId = useSelector(
    (state: RootState) => state.artist.modal as string
  );
  return modalId;
};

export { selectUserData, selectModalId };

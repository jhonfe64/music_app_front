"use client";
import React, { useEffect, useState } from "react";
import useFetch from "@/hooks/useFetch";
import { artist } from "@/endpoints/artist";

const initialArtist = {
  artisticName: "",
  created_at: "",
  email: "",
  image: "",
  lastname: "",
  name: "",
  role: "",
  _id: "",
};

function Profile({ params }: { params: any }) {
  const [userData, setUserData] = useState(initialArtist);
  const [DataError, setDataError] = useState();

  const { error, data } = useFetch(
    artist.singleArtist + params.id,
    "get",
    true
  );

  console.log("data", data);

  useEffect(() => {
    if (data !== null && data?.artist?._id) {
      setUserData(data.artist);
    }
  }, [data]);

  useEffect(() => {
    if (error !== null && error.message) {
      setDataError(error.message);
    }
  }, [error]);

  return <div>PROFILE</div>;
}

export default Profile;

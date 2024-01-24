"use client";
import React, { useState, useEffect } from "react";
import useFetch from "@/hooks/useFetch";
import { artist } from "@/endpoints/artist";
import { useSession } from "next-auth/react";

function Profile() {
  const { data: session, status } = useSession();
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    if (session) {
      setTrigger(true);
    }
  }, [session]);

  const { data, error } = useFetch(
    artist.singleArtist,
    "get",
    status === "authenticated" && true
  );

  return <div>{data?.artist?.name}</div>;
}

export default Profile;

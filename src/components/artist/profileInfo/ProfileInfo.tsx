"use client";
import React, { useState, useEffect } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Suspense } from "react";
import Loading from "@/app/artist/dashboard/profile/loading";

const EditProfile = React.lazy(() => import("../editprofile/EditProfile"));
// import EditProfile from "../editprofile/EditProfile";
import RestorePassword from "../restorePassword/RestorePassword";

import { artist } from "@/endpoints/artist";
import { useSession } from "next-auth/react";
import { ArtistInterface } from "@/interfaces/artistInterfaces";
import useFetch from "@/hooks/useFetch";
import { loggedUserAction } from "@/redux/actions/artist/artistActions";
import { useDispatch } from "react-redux";

const initialFullUser = {
  artisticName: "",
  created_at: "",
  email: "",
  image: "",
  lastname: "",
  name: "",
  role: "",
  _id: "",
};

function ProfileInfo() {
  const dispatch = useDispatch();
  const { status } = useSession();

  const [profielData, setProfileData] =
    useState<ArtistInterface>(initialFullUser);

  const { data, error } = useFetch(
    artist.SINGLE_ARTIST,
    "get",
    status === "authenticated" ? true : false
  );

  useEffect(() => {
    if (data) {
      setProfileData(data.artist);
    }
  }, [data]);

  useEffect(() => {
    dispatch(loggedUserAction(profielData));
  }, [profielData]);

  return (
    <Suspense fallback={<Loading />}>
      <div className="card mt-8">
        <Accordion activeIndex={0}>
          <AccordionTab
            header="Información básica"
            pt={{
              root: {
                className:
                  "border border-slate-200 rounded-lg  ease-in-out ease-in duration-300 mb-4 transition overflow-hidden",
              },
              header: {
                className: "bg-slate-100 p-4 font-semibold",
              },
              content: {
                className: "p-4",
              },
              headerIcon: {
                className: "hidden",
              },
            }}
          >
            <div>
              <EditProfile />
            </div>
          </AccordionTab>
          <AccordionTab
            header="Contraseña"
            pt={{
              root: {
                className:
                  "border border-slate-200 rounded-lg  ease-in-out ease-in duration-300 mb-4 transition overflow-hidden",
              },
              header: {
                className: "bg-slate-100 p-4 font-semibold",
              },
              content: {
                className: "p-4",
              },
              headerIcon: {
                className: "hidden",
              },
            }}
          >
            <div className="m-0">
              <RestorePassword />
            </div>
          </AccordionTab>
        </Accordion>
      </div>
    </Suspense>
  );
}

export default ProfileInfo;

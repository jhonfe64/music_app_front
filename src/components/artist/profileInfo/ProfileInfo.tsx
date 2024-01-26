"use client";
import React, { useState, useEffect } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import EditProfile from "../editprofile/EditProfile";
import RestorePassword from "../restorePassword/RestorePassword";
import { artist } from "@/endpoints/artist";
import { useSession } from "next-auth/react";
import { InitialFullUserInterface } from "@/interfaces/userInterfaces";
import useFetch from "@/hooks/useFetch";

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
  const { data: session, status } = useSession();
  const [profielData, setProfileData] =
    useState<InitialFullUserInterface>(initialFullUser);

  const { data, error } = useFetch(
    artist.singleArtist,
    "get",
    status === "authenticated" ? true : false
  );

  useEffect(() => {
    if (data) {
      console.log("data", data);
      setProfileData(data.artist);
    }
  }, [data]);

  return (
    <div className="card mt-8">
      <div>{data?.artist?.name}</div>
      <Accordion activeIndex={0}>
        <AccordionTab
          header="Información básica"
          pt={{
            root: {
              className:
                "border border-slate-200 rounded-lg  ease-in-out ease-in duration-300 mb-4 transition overflow-hidden",
            },
            header: {
              className: "bg-slate-50 p-4 font-semibold",
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
              className: "bg-slate-50 p-4 font-semibold",
            },
            content: {
              className: "p-4",
            },
            headerIcon: {
              className: "hidden",
            },
          }}
        >
          <p className="m-0">
            <RestorePassword />
          </p>
        </AccordionTab>
      </Accordion>
    </div>
  );
}

export default ProfileInfo;

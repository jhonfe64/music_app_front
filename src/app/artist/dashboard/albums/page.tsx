"use client";
import React from "react";
import { useState } from "react";
import AlbumsList from "@/components/artist/albumsList/AlbumsList";
import { Button } from "primereact/button";
import NewAlbumModal from "@/components/artist/modals/NewAlbumModal";

function Albums() {
  const [visibility, setVisibility] = useState(false);
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12">
        <h1 className="font-semibold text-xl mt-8 mb-8">Albums</h1>
        <Button
          onClick={() => setVisibility(true)}
          label="Agregar album"
          pt={{
            root: {
              className:
                "bg-soft-blue border-0 rounded-xl  px-7 text-center flex justify-center hover:bg-less-soft-blue -mt-1",
            },
            label: {
              className: "border-0 py-1 text-black font-semibold ",
            },
          }}
        >
          <span className="text-sm ml-3">
            <i className="pi pi-plus"></i>
          </span>
        </Button>
        <NewAlbumModal visibility={visibility} setVisibility={setVisibility} />
      </div>
      <div className="col-span-12">
        <AlbumsList />
      </div>
    </div>
  );
}

export default Albums;

"use client";
import React from "react";
import { useState } from "react";
import AlbumsList from "@/components/artist/albumsList/AlbumsList";
import { Button } from "primereact/button";
import { modalAction } from "@/redux/actions/artist/artistActions";
import { useDispatch } from "react-redux";
const NewAlbumModal = React.lazy(
  () => import("@/components/artist/modals/NewAlbumModal")
);

function Albums() {
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12">
        <h1 className="font-semibold text-xl mt-8 mb-8">Albums</h1>
        <Button
          onClick={() => dispatch(modalAction("add_album"))}
          label="Agregar album"
          pt={{
            root: {
              className:
                "bg-soft-blue border-0 rounded-xl  px-7 text-center flex justify-center items-center hover:bg-less-soft-blue -mt-1",
            },
            label: {
              className: "border-0 py-1 text-black font-semibold ",
            },
          }}
        >
          <span className="pl-4">
            <i className="pi pi-plus"></i>
          </span>
        </Button>
        <NewAlbumModal />
      </div>
      <div className="col-span-12">
        <AlbumsList />
      </div>
    </div>
  );
}

export default Albums;

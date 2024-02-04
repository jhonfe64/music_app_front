import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

function NewAlbumModal({
  visibility, setVisibility}: {visibility: any;setVisibility: any;}) {
  return (
    <div>
      <div className=" relative col-start-7 card flex justify-content-center mx-8">
        <Dialog
          pt={{
            root: {
              className: "max-w-3xl mx-4 sm:mx-8",
            },
            mask: {
              className: "bg-[rgba(0,0,0,0.4)]",
            },
            header: {
              className: "mb-8 font-semibold text-xl",
            },
          }}
          className="border p-8 rounded-lg bg-white"
          header="Nuevo album"
          visible={visibility}
          onHide={() => setVisibility(false)}
        >
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Dialog>
      </div>
    </div>
  );
}

export default NewAlbumModal;

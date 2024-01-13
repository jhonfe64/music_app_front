import React from "react";
import { Image } from "primereact/image";
import { Button } from "primereact/button";

function Jumbotron() {
  return (
    <div className="jumbotron grid container mx-auto grid-cols-12 gap-4 p-4  sm:px-8 items-center pt-60  ">
      <div className="col-span-12 lg:col-span-6 text-white row-start-1 row-end-2">
        <h1 className="text-center lg:text-start text-7xl sm:text-9xl font-semibold mb-8">
          Nueva Musica
        </h1>
        <h2 className="text-3xl sm:text-4xl text-center lg:text-start   mt-3 font-light mb-10">
          Nuevos artistas
        </h2>
        <div className="flex  justify-center  lg:justify-start">
          <Button
            label="Prueba ahora"
            pt={{
              root: {
                className:
                  "border-0 font-semibold  bg-soft-blue hover:bg-less-soft-blue rounded-xl  px-14 py-2",
              },
              label: { className: "text-black text-base sm:text-xl" },
            }}
          />
        </div>
      </div>
      <div className="col-span-12 lg:col-start-7 lg:col-end-13 -mb-4 flex justify-center lg:justify-end">
        <Image
          pt={{
            root: {
              className: "w-72 lg:w-80 xl:w-auto",
            },
          }}
          src="./images/audifonos.png"
          alt="banda tocando"
          width="400"
        />
      </div>
    </div>
  );
}

export default Jumbotron;

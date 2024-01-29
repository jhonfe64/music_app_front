import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

function RestorePassword() {
  return (
    <>
      <form className="mt-8">
        <label htmlFor="password" className="text-sm block mb-2 font-semibold">
          <span className="text-red-400">*</span> Nueva contraseña
        </label>
        <InputText
          autoComplete="off"
          id="password"
          pt={{
            root: {
              className:
                "outline-none border border-slate-200 rounded-lg  py-2 w-full mb-5 px-4",
            },
          }}
        />
        <label
          htmlFor="confirmPassword"
          className="text-sm block mb-2 font-semibold"
        >
          <span className="text-red-400">*</span> Confirmar contraseña
        </label>
        <InputText
          autoComplete="off"
          id="confirmPassword"
          placeholder="Nombres"
          pt={{
            root: {
              className:
                "outline-none border border-slate-200 rounded-lg  py-2 w-full mb-5 px-4",
            },
          }}
        />

        <div className="flex justify-end">
          <Button
            label="Enviar"
            pt={{
              root: {
                className:
                  "py-1.5   mt-4 bg-soft-blue border-0 rounded-xl  px-10 text-center flex justify-center hover:bg-less-soft-blue",
              },
              label: {
                className: "border-0 py-1 text-black font-semibold ",
              },
            }}
          ></Button>
        </div>
      </form>
    </>
  );
}

export default RestorePassword;

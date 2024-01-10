import React from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import "./signUpForm.css";

function SignUpForm() {
  return (
    <div className="signUpForm">
      <form className=" w-full  md:w-8/12 max-w-lg mx-auto pt-44" action="">
        <Image
          pt={{
            image: {
              className: "mx-auto w-20 mb-5",
            },
          }}
          src="../images/LogoMusic.png"
          alt="banda tocando"
        />
        <h1 className="text-center text-white text-2xl mb-16 mt-16 font-semibold">
          Registrate
        </h1>
        <InputText
          placeholder="Nombres"
          pt={{
            root: {
              className:
                "text-white border-0 border-b  border-light-gray  outline-none bg-transparent rounded-none  py-2 w-full mb-5",
            },
          }}
        />
        <InputText
          placeholder="Apellidos"
          pt={{
            root: {
              className:
                "text-white border-0 border-b  border-light-gray  outline-none bg-transparent rounded-none  py-2 w-full mb-5",
            },
          }}
        />
        <InputText
          placeholder="Nombre de usuario"
          pt={{
            root: {
              className:
                "text-white border-0 border-b  border-light-gray  outline-none bg-transparent rounded-none  py-2 w-full mb-5",
            },
          }}
        />
        <InputText
          placeholder="Email"
          pt={{
            root: {
              className:
                "text-white border-0 border-b  border-light-gray  outline-none   rounded-none py-2 w-full mb-5 ",
            },
          }}
        />
        <Password
          placeholder="Password"
          pt={{
            root: {
              className: "w-full ",
            },
            input: {
              className:
                "text-white border-0 border-b  border-light-gray  outline-none   rounded-none py-2 w-full mb-5",
            },
            panel: {
              className: "hidden",
            },
          }}
        />
        <Password
          placeholder="confirmar Password"
          pt={{
            root: {
              className: "w-full",
            },
            input: {
              className:
                "text-white border-0 border-b  border-light-gray  outline-none   rounded-none  py-2 w-full mb-8",
            },
            panel: {
              className: "hidden",
            },
          }}
        />
        <Button
          pt={{
            root: {
              className:
                "w-full bg-blue-400 border-0 rounded-0 px-5 py-3 text-center flex justify-center",
            },
            label: {
              className: "border-0  text-white px-1",
            },
          }}
          label="Enviar"
        />
      </form>
    </div>
  );
}

export default SignUpForm;

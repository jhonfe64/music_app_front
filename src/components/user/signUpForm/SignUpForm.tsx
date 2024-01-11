"use client";
import React from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import "./signUpForm.css";

function SignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<any>();

  
  const onSubmit: SubmitHandler<any> = (data: any) => {
    console.log("data", data);
  };

  //console.log(watch("password3")); // watch input value by passing the name of it

  return (
    <div className="signUpForm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-full  md:w-8/12 max-w-lg mx-auto pt-44"
        action=""
      >
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
          {...register("name", { required: true })}
        />
        {errors.name && (
          <p className="text-red-400 mb-4 text-light text-sm">
            Ingresa tus nombres
          </p>
        )}
        <InputText
          placeholder="Apellidos"
          pt={{
            root: {
              className:
                "text-white border-0 border-b  border-light-gray  outline-none bg-transparent rounded-none  py-2 w-full mb-5",
            },
          }}
          {...register("lastname", { required: true })}
        />
        {errors.lastname && (
          <p className="text-red-400 mb-4 text-light text-sm">
            Ingresa tus apellidos
          </p>
        )}
        <InputText
          placeholder="Nombre de usuario"
          pt={{
            root: {
              className:
                "text-white border-0 border-b  border-light-gray  outline-none bg-transparent rounded-none  py-2 w-full mb-5",
            },
          }}
          {...register("nick", {
            required: true,
          })}
        />
        {errors.nick && (
          <p className="text-red-400 mb-4 text-light text-sm">
            Ingresa tu nick
          </p>
        )}
        <InputText
          placeholder="Email"
          pt={{
            root: {
              className:
                "text-white border-0 border-b  border-light-gray  outline-none   rounded-none py-2 w-full mb-5 ",
            },
          }}
          {...register("email", {
            required: true,
            pattern: /^[^s@]+@[^s@]+.[^s@]+$/,
          })}
        />
        {errors?.email?.type === "required" && (
          <p className="text-red-400 mb-4 text-light text-sm">
            Ingresa tu Email
          </p>
        )}
        {errors?.email?.type === "pattern" && (
          <p className="text-red-400 mb-4 text-light text-sm">
            Formato invalido
          </p>
        )}
        <div>
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Password
                placeholder="Ingresa tu contraseña"
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
                {...field}
              />
            )}
          />
        </div>
        {errors?.password?.type === "required" && (
          <p className="text-red-400 mb-4 text-light text-sm">
            Ingresa tu contraseña
          </p>
        )}
        <div>
          <Controller
            name="confirmPassword"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Password
                placeholder="Ingresa tu contraseña"
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
                {...field}
              />
            )}
          />
        </div>
        {errors?.confirmPassword?.type === "required" && (
          <p className="text-red-400 mb-4 text-light text-sm">
            Confirma tu contraseña
          </p>
        )}

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

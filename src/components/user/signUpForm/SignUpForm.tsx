"use client";
import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { SignUpInterface } from "@/interfaces/userInterfaces";
import useFetch from "@/hooks/useFetch";
import { user } from "@/endpoints/user";

import "./signUpForm.css";

//CREAR INTERFACE PARA ESTA DATA IMPORTARLA AQUI Y TIPAR

function SignUpForm() {
  const [formData, setFormData] = useState<SignUpInterface>();
  const [trigger, setTrigger] = useState(false);
  const [confirmPasswordAlert, setConfirmPasswordAlert] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<SignUpInterface>();

  const onSubmit: SubmitHandler<SignUpInterface> = (data: SignUpInterface) => {
    if (data) {
      if (data.password === data.confirmPassword) {
        delete data.confirmPassword;
        setFormData(data);
        setTrigger(true);
      }
    }
  };

  const { data, error } = useFetch(user.signUpUser, "post", trigger, formData);
  console.log("esta es la data", data);
  console.log("este es el error", error);

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  useEffect(() => {
    if (
      password &&
      password.length > 0 &&
      confirmPassword &&
      confirmPassword.length > 0
    ) {
      if (password === confirmPassword) {
        setConfirmPasswordAlert(false);
      } else {
        setConfirmPasswordAlert(true);
      }
    }
  }, [password, confirmPassword]);

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
          autoComplete="off"
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
          autoComplete="off"
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
          autoComplete="off"
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
          autoComplete="off"
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

        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Password
              {...field}
              placeholder="Ingresa tu contraseña"
              value={field.value ? field.value : ""}
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
          )}
        />
        {errors?.password?.type === "required" && (
          <p className="text-red-400 mb-4 text-light text-sm">
            Ingresa tu contraseña
          </p>
        )}

        <Controller
          name="confirmPassword"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Password
              {...field}
              placeholder="Confirma tu contraseña"
              value={field.value ? field.value : ""}
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
          )}
        />
        {errors?.confirmPassword?.type === "required" && (
          <p className="text-red-400 mb-4 text-light text-sm">
            Confirma tu contraseña
          </p>
        )}
        {confirmPasswordAlert && (
          <p className="text-red-400 mb-4 text-light text-sm">
            Las contrseñas no coincidem
          </p>
        )}
        <h1 className="bg-red">{confirmPasswordAlert}</h1>
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

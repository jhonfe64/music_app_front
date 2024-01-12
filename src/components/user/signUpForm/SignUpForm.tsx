"use client";
import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import InputError from "@/components/common/inputError/InputError";
import { SignUpInterface } from "@/interfaces/userInterfaces";
import useFetch from "@/hooks/useFetch";
import Link from "next/link";
import { user } from "@/endpoints/user";
import ToastifyNotification from "@/components/common/toastifyNotification/ToastifyNotification";

//mostrar el error usando la libreria
//colocar el borde active
//colocarle hover a los btns

import "./signUpForm.css";

function SignUpForm() {
  const [formData, setFormData] = useState<SignUpInterface>();
  const [trigger, setTrigger] = useState(false);
  const [confirmPasswordAlert, setConfirmPasswordAlert] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
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

  useEffect(() => {
    if (data?.status === "success" && data.user._id) {
      reset();
    }
  }, [data]);

  return (
    <div className="signUpForm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-full  md:w-8/12 max-w-lg mx-auto"
        action=""
      >
        <Link href="/">
          <Image
            pt={{
              image: {
                className: "mx-auto w-20 mb-5",
              },
            }}
            src="../images/LogoMusic.png"
            alt="banda tocando"
          />
        </Link>

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
          {...register("name", {
            required: "Ingresa tus nombres",
            pattern: /^[a-zA-Z0-9\s_-]*$/,
          })}
          autoComplete="off"
        />
        {errors?.name?.type === "required" && (
          <InputError error={errors?.name?.message} />
        )}
        {errors?.name?.type === "pattern" && (
          <InputError error={"Solo se permiten letras y numeros"} />
        )}
        <InputText
          placeholder="Apellidos"
          pt={{
            root: {
              className:
                "text-white border-0 border-b  border-light-gray  outline-none bg-transparent rounded-none  py-2 w-full mb-5",
            },
          }}
          {...register("lastname", {
            required: "Ingresa tus apellidos",
            pattern: /^[a-zA-Z0-9\s_-]*$/,
          })}
          autoComplete="off"
        />
        {errors?.lastname?.type === "required" && (
          <InputError error={errors?.lastname?.message} />
        )}
        {errors?.lastname?.type === "pattern" && (
          <InputError error={"Solo se permiten letras y numeros"} />
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
            required: "Ingresa tu nick",
            pattern: /^[a-zA-Z0-9\s_-]*$/,
          })}
          autoComplete="off"
        />
        {errors?.nick?.type === "required" && (
          <InputError error={errors?.nick?.message} />
        )}
        {errors?.nick?.type === "pattern" && (
          <InputError error={"Solo se permiten letras y numeros"} />
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
            required: "Ingresa tu email",
            pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+$/,
          })}
          autoComplete="off"
        />
        {errors?.email?.type === "required" && (
          <InputError error={errors?.email?.message} />
        )}
        {errors?.email?.type === "pattern" && (
          <InputError error={"Formato invalido"} />
        )}

        <Controller
          name="password"
          control={control}
          rules={{
            required: "Ingresa tu contraseña",
            pattern: /^(?=.*[a-zA-Z\d])[a-zA-Z\d*\-?]{5,}$/,
          }}
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
                    "text-white border-0 border-b  border-light-gray  outline-none   rounded-none  py-2 w-full mb-5",
                },
                panel: {
                  className: "hidden",
                },
              }}
            />
          )}
        />
        {errors?.password?.type === "required" && (
          <InputError error={errors?.password?.message} />
        )}
        {errors?.password?.type === "pattern" && (
          <InputError
            error={
              "La contraseña debe tener minimo 5 caracteres incluyendo -?*"
            }
          />
        )}

        <Controller
          name="confirmPassword"
          control={control}
          rules={{
            required: "Confirma tu contraseña",
            pattern: /^(?=.*[a-zA-Z\d])[a-zA-Z\d*\-?]{5,}$/,
          }}
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
                    "text-white border-0 border-b  border-light-gray  outline-none   rounded-none  py-2 w-full mb-5",
                },
                panel: {
                  className: "hidden",
                },
              }}
            />
          )}
        />
        {errors?.confirmPassword?.type === "required" && (
          <InputError error={errors.confirmPassword.message} />
        )}
        {confirmPasswordAlert && (
          <p className="text-red-400 mb-4 text-light text-sm">
            Las contrseñas no coinciden
          </p>
        )}
        {errors?.confirmPassword?.type === "pattern" && (
          <InputError
            error={
              " La contraseña debe tener minimo 5 caracteres incluyendo -?*"
            }
          />
        )}
        <h1 className="bg-red">{confirmPasswordAlert}</h1>
        <Button
          label="Enviar"
          pt={{
            root: {
              className:
                "w-full py-1.5  mt-4 bg-blue-400 border-0 rounded-0 px-5 text-center flex justify-center",
            },
            label: {
              className: "border-0 py-1 text-white ",
            },
          }}
        />
      </form>
      {error?.message && (
        <ToastifyNotification message={error.message} type={"warning"} />
      )}
    </div>
  );
}

export default SignUpForm;

"use client";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { LoginInterface } from "@/interfaces/userInterfaces";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import InputError from "@/components/common/inputError/InputError";
import Link from "next/link";
import { Image } from "primereact/image";
import { Button } from "primereact/button";
import "./loginForm.css";
import useFetch from "@/hooks/useFetch";
import { user } from "@/endpoints/user";

const initialFormData = {
  email: "",
  password: "",
};

function LoginForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [trigger, setTigger] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginInterface>();

  const onSubmit = (data: LoginInterface) => {
    setFormData(data);
    setTigger(true);
  };

  // url: string,
  // type: string,
  // trigger: boolean,
  // body: any

  const { data, error } = useFetch(user.loginUser, "POST", true, formData);

  console.log(data);
  console.log(error);

  return (
    <div className="loginForm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-full  md:w-8/12 max-w-lg mx-auto"
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
          Inicia sesión
        </h1>
        <InputText
          placeholder="Email"
          {...register("email", { required: "Ingresa tu email" })}
          pt={{
            root: {
              className:
                "text-white border-0 border-b  border-light-gray  outline-none   rounded-none py-2 w-full mb-5 bg-transparent ",
            },
          }}
        />
        {errors?.email?.type === "required" && (
          <InputError error={errors?.email?.message} />
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

        <Button
          label="Enviar"
          pt={{
            root: {
              className:
                "w-full py-1.5  mt-4 bg-soft-blue border-0 rounded-xl  px-5 text-center flex justify-center hover:bg-less-soft-blue",
            },
            label: {
              className: "border-0 py-1 text-black font-semibold ",
            },
          }}
        />
      </form>
    </div>
  );
}

export default LoginForm;

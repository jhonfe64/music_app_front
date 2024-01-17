"use client";
import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { LoginInterface } from "@/interfaces/userInterfaces";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import InputError from "@/components/common/inputError/InputError";
import Link from "next/link";
import { Image } from "primereact/image";
import { Button } from "primereact/button";
import useFetch from "@/hooks/useFetch";
import { artist } from "@/endpoints/artist";
import ToastifyNotification from "@/components/common/toastifyNotification/ToastifyNotification";
import { ToastifyEnum } from "@/interfaces/common";
import { useRouter } from "next/navigation";
import "./loginForm.css";

const initialFormData = {
  email: "",
  password: "",
};

function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState(initialFormData);
  const [formDataError, setFormDataError] = useState("");
  const [trigger, setTrigger] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<LoginInterface>();

  const onSubmit: SubmitHandler<LoginInterface> = (data: LoginInterface) => {
    setFormData(data);
    setTrigger(true);
    setFormDataError("");
  };

  const { data, error } = useFetch(
    artist.loginArtist,
    "post",
    trigger,
    formData
  );

  useEffect(() => {
    if (data?.token) {
      setFormData(initialFormData);
      setTrigger(false);
      reset();
      router.push("/artist/dashboard");
    }
  }, [data]);

  useEffect(() => {
    setTrigger(false);
    setFormData(initialFormData);
    if (error) {
      setFormDataError(error.message);
    }
  }, [error]);

  return (
    <div className="artistLoginForm">
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
          Inicia sesión como artista
        </h1>
        <InputText
          autoComplete="off"
          placeholder="Email"
          {...register("email", { required: "Ingresa tu email" })}
          pt={{
            root: {
              className:
                "text-white  bg-transparent  border-0 border-b  border-light-gray  outline-none   rounded-none py-2 w-full mb-5",
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
      {formDataError?.length > 0 && (
        <ToastifyNotification
          message={formDataError}
          type={ToastifyEnum.error}
        />
      )}
    </div>
  );
}

export default LoginForm;

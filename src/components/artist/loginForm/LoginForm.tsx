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
import ToastifyNotification from "@/components/common/toastifyNotification/ToastifyNotification";
import { ToastifyEnum } from "@/interfaces/common";
import { useRouter } from "next/navigation";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import "./loginForm.css";

function LoginForm() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [formDataError, setFormDataError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<LoginInterface>();

  const onSubmit: SubmitHandler<LoginInterface> = async (
    data: LoginInterface
  ) => {
    setFormDataError("");
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
      role: "artist" as string,
    });
    if (!result?.error) {
      router.push(`/artist/dashboard/`);
      reset();
    } else {
      setFormDataError("Email o contraseña erroneos");
    }
  };

  return (
    <div className="artistLoginForm">
      <Button onClick={() => signOut()} className="text-white" label="salir" />
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
        >
          {!session && status !== "loading" && <p>Cargando00</p>}
        </Button>
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

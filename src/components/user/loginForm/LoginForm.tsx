"use client";
import React from "react";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import InputError from "@/components/common/inputError/InputError";
import useFetch from "@/hooks/useFetch";
import { user } from "@/endpoints/user";
import ToastifyNotification from "@/components/common/toastifyNotification/ToastifyNotification";
import { ToastifyEnum } from "@/interfaces/common";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Link from "next/link";
import { Image } from "primereact/image";

const initialFormData = {
  email: "",
  password: "",
};

function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm<any>();

  const onSubmit: SubmitHandler<any> = (data: any) => {
    if (data) {
      if (data.password === data.confirmPassword) {
        delete data.confirmPassword;
      }
    }
  };

  return (
    <div>
      <form
        action=""
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
      </form>
    </div>
  );
}

export default LoginForm;

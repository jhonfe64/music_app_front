import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import InputError from "@/components/common/inputError/InputError";
import { Password } from "primereact/password";
import ToastifyNotification from "@/components/common/toastifyNotification/ToastifyNotification";
import { ToastifyEnum } from "@/interfaces/common";
import { UpdatePasswordInterface } from "@/interfaces/artistInterfaces";
import { artist } from "@/endpoints/artist";
import useFetch from "@/hooks/useFetch";

const initialFormData = {
  password: "",
  confirmPassword: "",
};

function RestorePassword() {
  const {
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm<UpdatePasswordInterface>();

  const [newPassword, setnewPassword] =
    useState<UpdatePasswordInterface>(initialFormData);
  const [newPasswordError, setnewPasswordError] = useState("");
  const [newPasswordSuccess, setnewPasswordSuccess] = useState("");
  const [passwordAlert, setpasswordAlert] = useState("");
  const [trigger, setTrigger] = useState(false);

  const onSubmit: SubmitHandler<UpdatePasswordInterface> = async (data) => {
    if (data.password === data.confirmPassword) {
      setnewPassword({
        password: data.password,
      });
      setTrigger(true);
      setnewPasswordSuccess("");
      setnewPasswordError("");
    }
  };

  const inputpassword = watch("password");
  const inputConfirmPassword = watch("confirmPassword");

  useEffect(() => {
    if (inputpassword != inputConfirmPassword) {
      inputConfirmPassword &&
        inputConfirmPassword?.length > 0 &&
        setpasswordAlert("La contraseñas no coinciden");
    } else {
      setpasswordAlert("");
    }
  }, [inputpassword, inputConfirmPassword]);

  const { error, data } = useFetch(
    artist.UPDATE_PASSWORD,
    "put",
    trigger,
    newPassword
  );

  useEffect(() => {
    if (data && data.status === "success") {
      setnewPassword(initialFormData);
      setnewPasswordSuccess("Se actualizó la contraseña");
      setTrigger(false);
      reset();
      setnewPasswordError("");
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      setnewPasswordError(error.message);
      setTrigger(false);
      reset();
      setnewPasswordSuccess("");
    }
  }, [error]);

  return (
    <>
      <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="password" className="text-sm block mb-2 font-semibold">
          <span className="text-red-400">*</span> Nueva contraseña
        </label>
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
              value={field.value ? field.value : ""}
              pt={{
                root: {
                  className: "w-full",
                },
                input: {
                  className:
                    "outline-none border border-slate-200 rounded-lg  py-2 w-full mb-5 px-4 w-full",
                },
                panel: {
                  className: "hidden",
                },
              }}
            />
          )}
        />
        {errors?.password?.type === "required" && (
          <InputError error={errors.password?.message} />
        )}
        {errors?.password?.type === "pattern" && (
          <InputError
            error={
              "La contraseña debe tener minimo 5 caracteres incluyendo -?*"
            }
          />
        )}
        <label
          htmlFor="confirmPassword"
          className="text-sm block mb-2 font-semibold"
        >
          <span className="text-red-400">*</span> Confirmar contraseña
        </label>
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
                    "outline-none border border-slate-200 rounded-lg  py-2 w-full mb-5 px-4 w-full",
                },
                panel: {
                  className: "hidden",
                },
              }}
            />
          )}
        />
        {passwordAlert?.length > 0 && <InputError error={passwordAlert} />}
        {errors?.confirmPassword?.type === "required" && (
          <InputError error={errors.confirmPassword.message} />
        )}
        {errors?.confirmPassword?.type === "pattern" && (
          <InputError
            error={
              " La contraseña debe tener minimo 5 caracteres incluyendo -?*"
            }
          />
        )}

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
      {newPasswordError?.length > 0 && (
        <ToastifyNotification
          message={newPasswordError}
          type={ToastifyEnum.error}
        />
      )}
      {newPasswordSuccess?.length > 0 && (
        <ToastifyNotification
          message={newPasswordSuccess}
          type={ToastifyEnum.success}
        />
      )}
    </>
  );
}

export default RestorePassword;

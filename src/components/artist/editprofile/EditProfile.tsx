import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { ArtistInterface } from "@/interfaces/artistInterfaces";
import { UpdateArtistInterface } from "@/interfaces/artistInterfaces";
import InputError from "@/components/common/inputError/InputError";
import useFetch from "@/hooks/useFetch";
import ToastifyNotification from "@/components/common/toastifyNotification/ToastifyNotification";
import { artist as artistEndpoint } from "@/endpoints/artist";
import { ToastifyEnum } from "@/interfaces/common";

const initialFormData = {
  artisticName: "",
  name: "",
  lastname: "",
  email: "",
};

function EditProfile() {
  const state: RootState = useSelector((state: RootState) => state);
  const artist = state.artist.loggedUser as ArtistInterface;
  const [editprofileData, setEditProfileData] =
    useState<UpdateArtistInterface>(initialFormData);
  const [trigger, setTrigger] = useState(false);
  const [formDataError, setFormDataError] = useState("");
  const [formDataSuccess, setFormDataSuccess] = useState("");

  useEffect(() => {
    if (artist._id.length > 0) {
      setValue("artisticName", artist?.artisticName);
      setValue("name", artist?.name);
      setValue("lastname", artist?.lastname);
      setValue("email", artist?.email);
    }
  }, [artist]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UpdateArtistInterface>();

  const onSubmit: SubmitHandler<any> = (data) => {
    if (data) {
      setEditProfileData(data);
      setTrigger(true);
      setFormDataSuccess("");
    }
    setFormDataError("");
  };

  const { data, error } = useFetch(
    artistEndpoint.UPDATE_ARTIST,
    "put",
    trigger,
    editprofileData
  );

  console.log("este es ele rror", error);

  useEffect(() => {
    setTrigger(false);
    setEditProfileData(initialFormData);
    if (data) {
      setFormDataSuccess("Se ha actualizado el perfil");
    }
  }, [data]);

  useEffect(() => {
    setTrigger(false);
    if (error) {
      setFormDataError("No se pudo actualizar el perfil");
    }
  }, [error]);

  return (
    <>
      <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
        <label
          htmlFor="artisticName"
          className="text-sm block mb-2 font-semibold"
        >
          <span className="text-red-400">*</span> Nombre artístico
        </label>
        <InputText
          {...register("artisticName", {
            required: "Ingresa tu nombre artistico",
            pattern: /^[a-zA-Z0-9\s_-]*$/,
          })}
          autoComplete="off"
          id="artisticName"
          pt={{
            root: {
              className:
                "outline-none border border-slate-200 rounded-lg  py-2 w-full mb-5 px-4",
            },
          }}
        />
        {errors.artisticName?.type === "required" && (
          <InputError error={errors.artisticName.message} />
        )}
        {errors.artisticName?.type === "pattern" && (
          <InputError error={"Solo se permiten letras y numeros"} />
        )}
        <label htmlFor="names" className="text-sm block mb-2 font-semibold">
          <span className="text-red-400">*</span> Nombres
        </label>
        <InputText
          {...register("name", {
            pattern: /^[a-zA-Z0-9\s_-]*$/,
          })}
          autoComplete="off"
          id="names"
          pt={{
            root: {
              className:
                "outline-none border border-slate-200 rounded-lg  py-2 w-full mb-5 px-4",
            },
          }}
        />
        {errors.name?.type === "required" && (
          <InputError error={errors.name.message} />
        )}
        {errors.name?.type === "pattern" && (
          <InputError error={"Solo se permiten letras y numeros"} />
        )}
        <label htmlFor="lastnames" className="text-sm block mb-2 font-semibold">
          <span className="text-red-400">*</span> Apellidos
        </label>
        <InputText
          {...register("lastname", {
            required: "Ingresa tus apellidos",
            pattern: /^[a-zA-Z0-9\s_-]*$/,
          })}
          autoComplete="off"
          id="lastnames"
          pt={{
            root: {
              className:
                "outline-none border border-slate-200 rounded-lg  py-2 w-full mb-5 px-4",
            },
          }}
        />
        {errors.lastname?.type === "required" && (
          <InputError error={errors.lastname.message} />
        )}
        {errors.lastname?.type === "pattern" && (
          <InputError error={"Solo se permiten letras y numeros"} />
        )}
        <label htmlFor="email" className="text-sm block mb-2 font-semibold">
          <span className="text-red-400">*</span> Email
        </label>
        <InputText
          {...register("email", {
            required: "Ingresa tu email",
            pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+$/,
          })}
          autoComplete="off"
          id="email"
          pt={{
            root: {
              className:
                "outline-none border border-slate-200 rounded-lg  py-2 w-full mb-5 px-4",
            },
          }}
        />
        {errors.email?.type === "required" && (
          <InputError error={errors.email.message} />
        )}
        {errors?.email?.type === "pattern" && (
          <InputError error={"Formato invalido"} />
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
      {formDataSuccess.length > 0 && (
        <ToastifyNotification
          message={formDataSuccess}
          type={ToastifyEnum.success}
        />
      )}
      {formDataError.length > 0 && (
        <ToastifyNotification
          message={formDataError}
          type={ToastifyEnum.error}
        />
      )}
    </>
  );
}

export default EditProfile;

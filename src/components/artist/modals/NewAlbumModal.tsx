import React, { useState, useEffect } from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { addLocale } from "primereact/api";
import { Dropdown } from "primereact/dropdown";
import useFetch from "@/hooks/useFetch";
import { album } from "@/endpoints/artist";
import { useForm, SubmitHandler } from "react-hook-form";
import InputError from "@/components/common/inputError/InputError";
import { NewAlbumInterface } from "@/interfaces/artistInterfaces";
import { useSession } from "next-auth/react";

const newAlbumInitial = {
  artist: "",
  title: "",
  description: "",
  year: "",
  gendre: "",
};

function NewAlbumModal({
  visibility,
  setVisibility,
}: {
  visibility: boolean;
  setVisibility: any;
}) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<NewAlbumInterface>();

  const { data: session, status } = useSession();

  const [trigger, setTrigger] = useState(false);
  const [formTrigger, setFormTrigger] = useState(false);
  const [albumToSave, setAlbumToSave] =
    useState<NewAlbumInterface>(newAlbumInitial);
  const [selectedGendre, setSelectedGendre] = useState("");

  const onSubmit: SubmitHandler<NewAlbumInterface> = (data) => {
    if (data) {
      setFormTrigger(true);
      const date = new Date(data.year);
      const year = date.getFullYear();
      data["year"] = JSON.stringify(year);
      data["artist"] = session?.user?.id;
      setAlbumToSave(data);
    }
  };

  useEffect(() => {
    if (visibility) {
      setTrigger(true);
    }
  }, [visibility]);

  //para obtener los generos musicales
  const { data, error } = useFetch(album.MUSIC_GENDRES, "get", trigger);

  let today = new Date();
  let month = today.getMonth();
  let year = today.getFullYear();
  let nextMonth = month === 11 ? 0 : month + 1;
  let nextYear = nextMonth === 0 ? year + 1 : year;
  let maxDate = new Date();
  maxDate.setMonth(nextMonth);
  maxDate.setFullYear(nextYear);

  //para guardar el nuevo album
  const { data: albumData, error: albumError } = useFetch(
    album.CREATE_ABUM,
    "post",
    formTrigger,
    albumToSave
  );

  useEffect(() => {
    if (albumData) {
      setFormTrigger(false);
      setAlbumToSave(newAlbumInitial);
      reset();
      setSelectedGendre("");
    }
  }, [albumData]);

  console.log("el suaurio guardado", albumData);
  console.log("trigger", formTrigger);
  console.log("alBumData", albumData);

  addLocale("es", {
    clear: "Limpiar",
  });
  return (
    <div>
      <div className=" relative  card flex justify-content-center mx-8">
        <Dialog
          pt={{
            root: {
              className: "w-full max-w-3xl mx-4 sm:mx-8",
            },
            mask: {
              className: "bg-[rgba(0,0,0,0.4)]",
            },
            header: {
              className: "mb-8 font-semibold text-xl",
            },
          }}
          className="border p-8 rounded-lg bg-white"
          header="Nuevo album"
          visible={visibility}
          onHide={() => setVisibility(false)}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full">
              <label
                htmlFor="artisticName"
                className="text-sm block mb-2 font-semibold"
              >
                <span className="text-red-400">*</span> Titulo
              </label>
              <InputText
                {...register("title", {
                  required: "Ingresa el titulo del album",
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
              {errors?.title?.type === "required" && (
                <InputError error={errors?.title?.message} />
              )}
              {errors?.title?.type === "pattern" && (
                <InputError error={"Solo se permiten letras o numeros"} />
              )}

              <label
                htmlFor="artisticName"
                className="text-sm block mb-2 font-semibold"
              >
                <span className="text-red-400">*</span> Descripcion
              </label>
              <InputText
                {...register("description", {
                  required: "Ingresa la descripciòn del album",
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
              {errors?.description?.type === "required" && (
                <InputError error={errors?.description?.message} />
              )}
              {errors?.description?.type === "pattern" && (
                <InputError error={"Solo se permiten letras o numeros"} />
              )}
              <div className="card  justify-content-center">
                <label
                  htmlFor="artisticName"
                  className="text-sm block mb-2 font-semibold"
                >
                  <span className="text-red-400">*</span> Año de lanzamiento
                </label>
                <Calendar
                  {...register("year", {
                    required: "Selecciona el año de lanzamiento de tu album",
                  })}
                  pt={{
                    input: {
                      root: {
                        className:
                          "outline-none border border-slate-200 rounded-lg  py-2 w-full mb-5 px-4",
                      },
                    },
                    root: {
                      className: "outline-none w-full block",
                    },
                    panel: {
                      className:
                        "bg-white p-4 rounded-lg border-t-0  border  border-slate-200",
                    },
                    group: {
                      className: "border-b border-indigo-50 pb-2",
                    },
                    tableBodyRow: {
                      className: "pt-4 bg-red-400",
                    },
                  }}
                  locale="es"
                  view="year"
                  maxDate={maxDate}
                  dateFormat="yy"
                />
                {errors?.year?.type === "required" && (
                  <InputError error={errors?.year?.message} />
                )}
              </div>
              <div>
                <label
                  htmlFor="artisticName"
                  className="text-sm block mb-2 font-semibold"
                >
                  <span className="text-red-400">*</span> Genero musical
                </label>
                <Dropdown
                  {...register("gendre", {
                    required: "Selecciona el genero musical",
                  })}
                  options={data?.gendres}
                  optionLabel="name"
                  className="w-full md:w-14rem"
                  value={selectedGendre}
                  onChange={(e) => setSelectedGendre(e.value)}
                  pt={{
                    root: {
                      className:
                        "outline-none border border-slate-200 rounded-lg  py-2 w-full mb-5 px-4",
                    },
                    panel: {
                      className:
                        "bg-white p-4 rounded-lg border-t-0  border  border-slate-200",
                    },
                    item: {
                      className: "mb-2",
                    },
                  }}
                />
                {errors?.gendre?.type === "required" && (
                  <InputError error={errors?.gendre?.message} />
                )}
              </div>
            </div>
            <div className="flex justify-end">
              <Button
                label="Guardar"
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
        </Dialog>
      </div>
    </div>
  );
}

export default NewAlbumModal;

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
    formState: { errors },
  } = useForm<any>();

  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  const [date, setDate] = useState(null);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    if (visibility) {
      setTrigger(true);
    }
  }, [visibility]);

  const { data, error } = useFetch(album.MUSIC_GENDRES, "get", trigger);

  let today = new Date();
  let month = today.getMonth();
  let year = today.getFullYear();
  let nextMonth = month === 11 ? 0 : month + 1;
  let nextYear = nextMonth === 0 ? year + 1 : year;
  let maxDate = new Date();
  maxDate.setMonth(nextMonth);
  maxDate.setFullYear(nextYear);

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
              <div className="card  justify-content-center">
                <label
                  htmlFor="artisticName"
                  className="text-sm block mb-2 font-semibold"
                >
                  <span className="text-red-400">*</span> Año de lanzamiento
                </label>
                <Calendar
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
                      className: "bg-white p-4 rounded-lg shadow-sm",
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
              </div>
              <div>
                <label
                  htmlFor="artisticName"
                  className="text-sm block mb-2 font-semibold"
                >
                  <span className="text-red-400">*</span> Genero musical
                </label>
                <Dropdown
                  options={data && data.gendres}
                  optionLabel="name"
                  className="w-full md:w-14rem"
                  pt={{
                    root: {
                      className:
                        "outline-none border border-slate-200 rounded-lg  py-2 w-full mb-5 px-4",
                    },
                  }}
                />
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

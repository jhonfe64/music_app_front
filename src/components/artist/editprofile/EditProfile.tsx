import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useForm, SubmitHandler } from "react-hook-form";

// type Inputs = {
//   example: string;
//   exampleRequired: string;
// };

function EditProfile() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>();
  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  return (
    <>
      <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
        <label
          htmlFor="artisticName"
          className="text-sm block mb-2 font-semibold"
        >
          * Nombre artístico
        </label>
        <InputText
          {...register("artisticName")}
          autoComplete="off"
          id="artisticName"
          placeholder="Nombre artistico"
          pt={{
            root: {
              className:
                "outline-none border border-slate-200 rounded-lg  py-2 w-full mb-5 px-4",
            },
          }}
        />
        <label htmlFor="names" className="text-sm block mb-2 font-semibold">
          * Nombres
        </label>
        <InputText
          autoComplete="off"
          id="names"
          placeholder="Nombres"
          pt={{
            root: {
              className:
                "outline-none border border-slate-200 rounded-lg  py-2 w-full mb-5 px-4",
            },
          }}
        />
        <label htmlFor="lastnames" className="text-sm block mb-2 font-semibold">
          * Apellidos
        </label>
        <InputText
          autoComplete="off"
          id="lastnames"
          placeholder="Apellidos"
          pt={{
            root: {
              className:
                "outline-none border border-slate-200 rounded-lg  py-2 w-full mb-5 px-4",
            },
          }}
        />
        <label htmlFor="email" className="text-sm block mb-2 font-semibold">
          * Email
        </label>
        <InputText
          autoComplete="off"
          id="email"
          placeholder="Correo electronico"
          pt={{
            root: {
              className:
                "outline-none border border-slate-200 rounded-lg  py-2 w-full mb-5 px-4",
            },
          }}
        />
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
    </>
  );
}

export default EditProfile;

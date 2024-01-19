import React from "react";
import Link from "next/link";
import { Image } from "primereact/image";
import { Button } from "primereact/button";
import { signOut } from "next-auth/react";

function DashboardLayout({ children }: any) {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-2 bg-dark-blue min-h-screen h-full text-white">
          <Link className="p-8" href="/">
            <Image
              pt={{
                image: {
                  className: "w-12 mb-5 ml-6",
                },
              }}
              src="/images/LogoMusic.png"
              alt="banda tocando"
            />
          </Link>
          <ul>
            <Link
              href="/artist/dashboard/home"
              className="whitespace-nowrap pt-4 pb-4 pl-4 pr-4 hover:bg-king-blue text-sm block "
            >
              <i className="pi pi-home pr-3"></i>
              Inicio
            </Link>

            <Link
              href="/artist/dashboard/profile"
              className="pt-4 whitespace-nowrap pb-4 pl-4 pr-4 hover:bg-king-blue text-sm block"
            >
              <i className="pi pi-user pr-3"></i>
              Perfil
            </Link>

            <li className="whitespace-nowrap overflow-hidden text-ellipsis pt-6 pb-4 pl-4 pr-4 text-sm font-bold">
              Desempeño y promocion
            </li>
            <Link
              href="/artist/dashboard/estadistics"
              className="whitespace-nowrap overflow-hidden text-ellipsis pt-4 pb-4 pl-4 pr-4 hover:bg-king-blue text-sm block"
            >
              <i className="pi pi-chart-line pr-3"></i>
              Estadisticas
            </Link>
            <Link
              href="/artist/dashboard/events"
              className="whitespace-nowrap overflow-hidden text-ellipsis pt-4 pb-4 pl-4 pr-4 block hover:bg-king-blue text-sm"
            >
              <i className="pi pi-ticket pr-3"></i>
              Eventos
            </Link>
            <Link
              href="/artist/dashboard/merchandising"
              className="whitespace-nowrap overflow-hidden text-ellipsis pt-4 pb-4 pl-4 pr-4 hover:bg-king-blue text-sm block"
            >
              <i className="pi pi-shopping-bag pr-3"></i>
              Merchandising
            </Link>
            <li className="whitespace-nowrap overflow-hidden text-ellipsis pt-6 pb-4 pl-4 pr-4 text-sm font-bold">
              Musica
            </li>
            <Link
              href="/artist/dashboard/albums"
              className="whitespace-nowrap overflow-hidden text-ellipsis pt-4 pb-4 pl-4 pr-4 hover:bg-king-blue text-sm block"
            >
              <i className="pi pi-megaphone pr-3"></i>
              Albums
            </Link>
            <Link
              href="/artist/dashboard/songs"
              className="whitespace-nowrap overflow-hidden text-ellipsis pt-4 pb-4 pl-4 pr-4 hover:bg-king-blue text-sm block"
            >
              <i className="pi   pi-microphone pr-3"></i>
              Canciones
            </Link>
            <Link
              href="/artist/dashboard/help"
              className="whitespace-nowrap overflow-hidden text-ellipsis pt-4 pb-4 pl-6 pr-6 hover:bg-king-blue block"
            >
              <i className="pi pi-wrench pr-3"></i>
              Ayuda
            </Link>
          </ul>
        </div>
        <div className="col-span-10 min-h-screen h-full">
          <header className="bg-gray-50 p-8 flex justify-between">
            <div className="flex items-center">
              <div className="w-12 rounded-full overflow-hidden flex">
                <Image
                  className="w-full rounded-full"
                  src="/images/no_pic.png"
                />
              </div>
              <p className="pl-4 text-dark-gray font-semibold">
                <span>John</span>
              </p>
            </div>
            <nav className="flex items-center">
              <ul className="flex items-center">
                <li className="mr-4">
                  <Button
                    // onClick={() => signOut()} //dividir esto en componentes
                    //para q toda el layout no sea de cliente
                    label="Salir"
                    pt={{
                      root: {
                        className:
                          "w-full  bg-soft-blue border-0 rounded-xl  px-7 text-center flex justify-center hover:bg-less-soft-blue -mt-1",
                      },
                      label: {
                        className: "border-0 py-1 text-black font-semibold ",
                      },
                    }}
                  />
                </li>
                <li className="text-lg">
                  <i className="pi pi-envelope pr-4 text-dark-gray relative">
                    <div className="w-5 text-xs h-5 bg-red-600 absolute right-2 -top-3 rounded-full flex justify-center items-center text-white">
                      2
                    </div>
                  </i>
                </li>
                <li className="text-lg">
                  <i className="pi pi-bell text-dark-gray relative">
                    <div className="w-5 text-xs h-5 bg-red-600 absolute -right-2 -top-3 rounded-full flex justify-center items-center text-white">
                      2
                    </div>
                  </i>
                </li>
              </ul>
            </nav>
          </header>
          <div className="p-8">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;

import React from "react";
import { Button } from "primereact/button";
import Link from "next/link";
import { Image } from "primereact/image";

function Header() {
  return (
    <header className="flex bg-black justify-between items-center p-4 sm:p-8 py-5 fixed right-0 left-0 top-0 z-50">
      <div className="logo w-20">
        <Image
          src="./images/LogoMusic.png"
          className="w-100 border"
          alt="logo"
        />
      </div>
      <nav>
        <ul className="items-center text-white hidden sm:flex">
          <li className=" mr-4">
            <Button
              label="Nosotros"
              pt={{
                root: {
                  className: "border-0  rounded px-3 py-1",
                },
                label: { className: "text-white font-light" },
                icon: { className: "mr-4" },
              }}
            />
          </li>
          <li className="mr-4">
            <Button
              label="Inicia sesion"
              pt={{
                root: {
                  className: "border-0  rounded px-3 py-1",
                },
                label: { className: "text-white font-light" },
                icon: { className: "mr-4" },
              }}
            />
          </li>
          <li>
            <Link
              className="text-black rounded-xl font-semibold border-0 bg-soft-blue hover:bg-less-soft-blue  px-7 py-[7px]"
              href="/user/sign-up"
            >
              <i className="pi pi-user-plus mr-5  "></i>
              Registrate
            </Link>
          </li>
        </ul>
        <ul>
          <li className="block sm:hidden">
            <Button
              icon="pi pi-align-justify"
              pt={{
                root: {
                  className: "border-0  text-black rounded",
                },
                label: { className: "text-white font-light" },
              }}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

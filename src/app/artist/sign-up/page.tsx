import React from "react";
import { Image } from "primereact/image";
import SignUpForm from "@/components/artist/signUpForm/SignUpForm";
import "./signUp.css";

function ArtistSignUp() {
  return (
    <div className="grid grid-cols-12 min-h-screen h-full">
      <div className="hidden md:block md:col-span-4  bg-[url('/images/artist7.png')] w-full h-full object-cover object-center bg-no-repeat bg-center"></div>
      <div className="signUpFormContainer bg-[url('/images/artist7mobile.png')]  col-span-12 md:col-span-8 p-5 md:p-10 text-justify text-white  flex items-center justify-center">
        <SignUpForm />
      </div>
    </div>
  );
}
export default ArtistSignUp;

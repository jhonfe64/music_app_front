import React from "react";
import SignUpForm from "@/components/user/signUpForm/SignUpForm";

function SignUp() {
  return (
    <div className=" min-h-screen h-full felx  px-8 bg-black m-0 p-0">
      <div className="pt-16 sm:pt-44 pb-16">
        <SignUpForm />;
      </div>
    </div>
  );
}

export default SignUp;

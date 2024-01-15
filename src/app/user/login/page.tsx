import React from "react";
import LoginForm from "@/components/user/loginForm/LoginForm";

function Login() {
  return (
    <div className="min-h-screen h-full flex justify-center w-full items-center  px-8 m-0 p-0 bg-black">
      <div className="w-full pt-16 pb-16">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;

import React from "react";
import LoginForm from "@/components/user/loginForm/LoginForm";

function Login() {
  return (
    <div className="min-h-screen h-full felx  px-8 m-0 p-0 bg-black">
      <div className="pt-16 sm:pt-44 pb-16">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;

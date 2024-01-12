import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ToastifyNotification({
  message,
  type,
}: {
  message: string;
  type: any;
}) {
  const notify = () => {
    toast[type](message, {
      toastId: message, //para no repetir
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  useEffect(() => {
    if (message.length > 0) notify();
  }, [notify]);

  return <ToastContainer />;
}

export default ToastifyNotification;

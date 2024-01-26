"use client";
import React from "react";
import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";
import "./globals.css";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PrimeReactProvider
        value={{
          unstyled: false,
          pt: {},
          ptOptions: { mergeSections: true, mergeProps: true },
        }}
      >
        <SessionProvider>{children}</SessionProvider>
      </PrimeReactProvider>
    </Provider>
  );
};

export default Providers;

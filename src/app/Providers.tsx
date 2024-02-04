"use client";
import React from "react";
import { PrimeReactProvider } from "primereact/api";
import "./globals.css";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { LayoutInterface } from "@/interfaces/common";

const Providers = ({ children }: LayoutInterface) => {
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

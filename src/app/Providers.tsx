import React from "react";
import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";
import "./globals.css";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
      {children}
    </PrimeReactProvider>
  );
};

export default Providers;

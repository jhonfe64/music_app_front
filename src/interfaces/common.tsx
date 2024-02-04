import { ReactNode } from "react";

export enum ToastifyEnum {
  info = "info",
  warning = "warning",
  error = "error",
  success = "success",
}

export interface ToastifyInterface {
  type: ToastifyEnum;
  message: string;
}

export interface LayoutInterface {
  children: ReactNode;
}

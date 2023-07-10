import { createContext } from "react";

export interface IAlertDialogContext {
  dialogMessage?: string;
  setDialogMessage: (dialogMessage?: string) => void;
}
export const AlertDialogContext = createContext({} as IAlertDialogContext);

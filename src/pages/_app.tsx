import AlertDialog from "@/layouts/alert-dialog";
import { AlertDialogContext } from "@/store/context";
import "@/styles/global.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [dialogMessage, setDialogMessage] = useState<string | undefined>(
    undefined
  );

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AlertDialogContext.Provider value={{ dialogMessage, setDialogMessage }}>
        {dialogMessage && (
          <div id="backdrop" onClick={() => setDialogMessage(undefined)}></div>
        )}
        {dialogMessage && (
          <AlertDialog
            backdropMessage={dialogMessage}
            btnClickHandler={() => setDialogMessage(undefined)}
          />
        )}
        <Component {...pageProps} />
      </AlertDialogContext.Provider>
    </>
  );
}

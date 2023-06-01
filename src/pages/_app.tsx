import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import { AppProps } from "next/app";
import { AuthProvider } from "@/contexts/AuthContext";
import { SessionProvider } from "next-auth/react";

import "../styles/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import theme from "@/theme";
import "src/components/react-dropzone-uploader/styles.css";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  weight: "400",
  subsets: ["latin"],
});

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <main className={ubuntu.className}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SessionProvider session={session}>
          <AuthProvider>
            <ToastContainer />
            <Component {...pageProps} />;
          </AuthProvider>
        </SessionProvider>
      </ThemeProvider>
    </main>
  );
}

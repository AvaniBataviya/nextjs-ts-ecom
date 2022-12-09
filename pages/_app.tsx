import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import Header from "../src/components/layout/Header";
import theme from "../src/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Ecommerce app</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Nextjs, typecript ecommerce app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
}

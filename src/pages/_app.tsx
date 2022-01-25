import type { AppProps as NextAppProps } from "next/app";
import * as React from "react";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, ThemeProvider } from "@/providers";

interface AppProps extends NextAppProps {
  emotionCache?: import("@emotion/cache").EmotionCache;
}

export default function App(props: AppProps) {
  const { Component, emotionCache, pageProps } = props;
  return (
    <CacheProvider cache={emotionCache}>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, minimum-scale=1.0, width=device-width, viewport-fit=cover"
        />
      </Head>
      <ThemeProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

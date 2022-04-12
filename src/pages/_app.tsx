import type { AppProps as NextAppProps } from "next/app";
import * as React from "react";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, ThemeProvider } from "@/providers";

interface AppProps extends NextAppProps {
  emotionCache?: import("@emotion/cache").EmotionCache;
}

const App: React.FC<AppProps> = ({ Component, emotionCache, pageProps }) => (
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

export default App;

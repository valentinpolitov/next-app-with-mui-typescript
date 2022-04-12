import * as React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import { theme, createEmotionCache } from "@/lib";
import { googleFontsUrl } from "@/lib/utils/fonts";

type DocumentInitialProps = import("next/document").DocumentInitialProps & {
  emotionStyleTags: JSX.Element[];
};

export default class Document extends NextDocument<DocumentInitialProps> {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="stylesheet" href={googleFontsUrl} />
          {/* Inject MUI styles first to match with the prepend: true configuration. */}
          {this.props.emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

Document.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  const serverEmotionCache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(serverEmotionCache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={serverEmotionCache} {...props} />;
        },
    });

  const initialProps = await NextDocument.getInitialProps(ctx);
  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map(({ key, ids, css }) => (
    <style
      data-emotion={[key, ...ids].join(" ")}
      key={key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: css }}
    />
  ));

  const documentInitialProps: DocumentInitialProps = {
    ...initialProps,
    emotionStyleTags,
  };

  return documentInitialProps;
};

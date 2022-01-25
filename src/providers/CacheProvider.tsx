import { CacheProvider as EmotionCacheProvider } from "@emotion/react";
import createEmotionCache from "@/lib/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

const CacheProvider: React.FC<{
  cache?: import("@emotion/cache").EmotionCache;
}> = ({ children, cache = clientSideEmotionCache }) => (
  <EmotionCacheProvider value={cache}>{children}</EmotionCacheProvider>
);

export default CacheProvider;

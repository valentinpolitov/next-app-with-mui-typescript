import { CacheProvider as EmotionCacheProvider } from "@emotion/react";
import createEmotionCache from "@/lib/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

export interface CacheProviderProps {
  children?: React.ReactNode;
  cache?: import("@emotion/cache").EmotionCache;
}

const CacheProvider: React.FC<CacheProviderProps> = ({
  children,
  cache = clientSideEmotionCache,
}) => <EmotionCacheProvider value={cache}>{children}</EmotionCacheProvider>;

export default CacheProvider;

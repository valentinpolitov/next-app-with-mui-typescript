import createCache from "@emotion/cache";

const createEmotionCache = (options: import("@emotion/cache").Options = { key: "css" }) => createCache(options);

export default createEmotionCache;
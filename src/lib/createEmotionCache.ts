import createCache from "@emotion/cache";

const createEmotionCache = (
  options?: Partial<import("@emotion/cache").Options>
) => createCache({ key: "css", prepend: true, ...options });

export default createEmotionCache;

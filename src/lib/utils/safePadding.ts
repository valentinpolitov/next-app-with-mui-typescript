type SafePaddingSize = string | number | null;
type SafePadding = (
  px: SafePaddingSize | SafePaddingSize[],
  pb?: SafePaddingSize,
  pt?: SafePaddingSize
) => {};

const safePadding: SafePadding = (px, pb = null, pt = null) => ({
  ...(px && Array.isArray(px)
    ? {
        paddingLeft: `max(env(safe-area-inset-left), ${px[0]})`,
        paddingRight: `max(env(safe-area-inset-right), ${px[1]})`,
      }
    : {
        paddingLeft: `max(env(safe-area-inset-left), ${px})`,
        paddingRight: `max(env(safe-area-inset-right), ${px})`,
      }),
  ...(pb !== null && {
    paddingBottom: `max(env(safe-area-inset-bottom), ${pb})`,
  }),
  ...(pt !== null && {
    paddingTop: `max(env(safe-area-inset-top), ${pt})`,
  }),
});

export default safePadding;

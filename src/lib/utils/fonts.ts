export const fontsArray = [
  "'SF Pro Text'",
  "'SF Pro Icons'",
  "-apple-system",
  "BlinkMacSystemFont",
  "Roboto",
  "'Segoe UI'",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "'Fira Sans'",
  "'Droid Sans'",
  "'Helvetica Neue'",
  "Helvetica",
  "Arial",
  "sans-serif",
  "'Apple Color Emoji'",
  "'Segoe UI Emoji'",
  "'Segoe UI Symbol'",
];

export const fontFamily = fontsArray.join(", ");

export const headingFontFamily = Object.assign([], fontsArray, {
  1: "'SF Pro Display'",
}).join(", ");

const googleFonts: { name: string; weights: number[] }[] = [
  { name: "Roboto", weights: [300, 400, 500, 700] },
];

const googleFontsString = googleFonts
  .map(({ name, weights }) => {
    let str = "family=" + name.split(" ").join("+");
    if (weights?.length) {
      str += ":wght@" + weights.join(";");
    }
    return str;
  })
  .join("&");

export const googleFontsUrl = encodeURI(
  `https://fonts.googleapis.com/css2?${googleFontsString}&display=swap`
);

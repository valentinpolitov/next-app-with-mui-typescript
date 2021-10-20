import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const fonts = [
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

export const theme = createTheme({
  typography: {
    fontFamily: ["'SF Pro Text'", ...fonts].join(", "),
    h1: { fontFamily: ["'SF Pro Display'", ...fonts].join(", ") },
    h2: { fontFamily: ["'SF Pro Display'", ...fonts].join(", ") },
    h3: { fontFamily: ["'SF Pro Display'", ...fonts].join(", ") },
    h4: { fontFamily: ["'SF Pro Display'", ...fonts].join(", ") },
  },
});

export default responsiveFontSizes(theme);

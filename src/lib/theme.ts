import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { fontFamily, headingFontFamily, safePadding } from "./utils";
import Link from "@/components/link";

export const theme = createTheme({
  typography: {
    fontFamily,
    h1: { fontFamily: headingFontFamily },
    h2: { fontFamily: headingFontFamily },
    h3: { fontFamily: headingFontFamily },
    h4: { fontFamily: headingFontFamily },
  },
  palette: {
    primary: { main: "#5378CF" },
    secondary: { main: "#CE9868" },
    success: { main: "#7CCFAF" },
    warning: { main: "#CFB372" },
    error: { main: "#CF715D" },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: Link,
      },
    },
    MuiLink: {
      defaultProps: {
        // @ts-ignore
        component: Link,
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          minWidth: 320,
          ...(!ownerState.disableGutters && {
            ...safePadding(theme.spacing(2)),
            [theme.breakpoints.up("sm")]: {
              ...safePadding(theme.spacing(3)),
            },
          }),
        }),
      },
    },
  },
});

export default responsiveFontSizes(theme);

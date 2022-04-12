import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import theme from "@/lib/theme";

export interface ThemeProviderProps {
  children?: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);

export default ThemeProvider;

import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import theme from "@/lib/theme";

const ThemeProvider: React.FC = ({ children }) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);

export default ThemeProvider;

import { createTheme } from "@mui/material";
import { VisitorColors as Colors } from "./styles";

const { palette } = createTheme();
const theme = createTheme({
  palette: {
    primary: palette.augmentColor({ color: { main: Colors.Primary } }),
    secondary: palette.augmentColor({ color: { main: Colors.Secondary } }),
    error: palette.augmentColor({ color: { main: Colors.Error } }),
    success: palette.augmentColor({ color: { main: Colors.Success } }),
    info: palette.augmentColor({ color: { main: Colors.Info } }),
    warning: palette.augmentColor({ color: { main: Colors.Warning } }),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",
          fontWeight: "500"
        }
      }
    }
  }
});

export default theme;

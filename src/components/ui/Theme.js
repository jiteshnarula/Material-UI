import { createMuiTheme } from "@material-ui/core";
const arcOrangeColor = "#ff3300";
const arcWhiteColor = "#ffff";
const theme = createMuiTheme({
  palette: {
    common: {
      arcOrange: arcOrangeColor,
      arcWhite: arcWhiteColor,
    },
    primary: {
      main: arcOrangeColor,
    },
    secondary: {
      main: arcWhiteColor,
    },
  },
  typography: {
    tab: {
      opacity: 1,
      fontWeight: "bold",
      textTransform: "none",
      fontSize: "1rem",
    },
  },
});

export default theme;

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
    h3: {
      fontWeight: 100,
    },
  },
  MuiToolbar: {
    root: {
      padding: 0,
    },
    gutters: {
      padding: 0,
    },
  },
});

export default theme;

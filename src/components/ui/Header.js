import React, { Fragment } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import logo from "../../assets/logo.svg";

//Inline CSS:
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    marginBottom: "3em",
  },
  disableDefaultPadding: {
    padding: 0,
  },
  logo: {
    height: "7em",
  },
}));

// ELEVATE SCROLL
function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
const Header = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar className={classes.disableDefaultPadding}>
            <img src={logo} className={classes.logo} alt="Company Logo" />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar className={classes.toolbarMargin} />
    </Fragment>
  );
};
export default Header;

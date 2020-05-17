import React, { Fragment, useState } from "react";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tabs,
  Tab,
  Button,
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
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 20,
    marginLeft: "25px",
  },
  buttonStyles: {
    backgroundColor: "#FFBA60",
    color: "white",
    borderRadius: "50px",
    minWidth: 20,
    marginLeft: "50px",
    marginRight: "25px",
    fontStyle: "italic",
    fontSize: "1rem",
    opacity: 1,
    fontWeight: "bold",
    textTransform: "none",
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
  const [value, setValue] = useState(0);
  const handleChange = (e, value) => {
    setValue(value);
  };
  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar className={classes.disableDefaultPadding}>
            <img src={logo} className={classes.logo} alt="Company Logo" />
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
            >
              <Tab className={classes.tab} label="Home" />
              <Tab className={classes.tab} label="Services" />
              <Tab className={classes.tab} label="The Revolution" />
              <Tab className={classes.tab} label="About Us" />
              <Tab className={classes.tab} label="Contact Us" />
            </Tabs>
            <Button
              size="medium"
              variant="contained"
              className={classes.buttonStyles}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar className={classes.toolbarMargin} />
    </Fragment>
  );
};
export default Header;

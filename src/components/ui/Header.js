import React, { Fragment, useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tabs,
  Tab,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

//Inline CSS:
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    marginBottom: "3em",
  },
  disableDefaultPadding: {
    padding: 0,
  },
  logo: {
    height: "5em",
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
  logoContainer: {
    padding: 0,
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
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    console.log(e.currentTarget);
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  useEffect(() => {
    // fixing the refresh issue
    if (value !== 0 && window.location.pathname === "/") {
      setValue(0);
    } else if (value !== 1 && window.location.pathname === "/services") {
      setValue(1);
    } else if (value !== 2 && window.location.pathname === "/revolution") {
      setValue(2);
    } else if (value !== 3 && window.location.pathname === "/about") {
      setValue(3);
    } else if (value !== 4 && window.location.pathname === "/contact") {
      setValue(4);
    } else if (value !== 5 && window.location.pathname === "/estimate") {
      setValue(5);
    }
  }, [value]);
  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar className={classes.disableDefaultPadding}>
            <IconButton
              onClick={() => setValue(0)}
              className={classes.logoContainer}
              component={Link}
              to="/"
              disableRipple
              onMouseOver={{ backgroundColor: "yellow" }}
            >
              <img src={logo} className={classes.logo} alt="Company Logo" />
            </IconButton>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
            >
              <Tab
                className={classes.tab}
                to="/"
                component={Link}
                label="Home"
              />
              <Tab
                aria-controls={anchorEl !== null ? "simple-menu" : null}
                aria-haspopup={anchorEl !== null ? true : false}
                onMouseOver={handleClick}
                className={classes.tab}
                to="/services"
                component={Link}
                label="Services"
              />
              <Tab
                className={classes.tab}
                component={Link}
                label="The Revolution"
                to="/revolution"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/about"
                label="About Us"
              />
              <Tab
                className={classes.tab}
                component={Link}
                label="Contact Us"
                to="/contact"
              />
            </Tabs>
            <Button
              size="medium"
              variant="contained"
              className={classes.buttonStyles}
              component={Link}
              to="/estimate"
            >
              Free Estimate
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
            >
              <MenuItem
                onClick={handleClose}
                component={Link}
                to="/customsoftware"
              >
                Custom Software Development
              </MenuItem>
              <MenuItem
                component={Link}
                to="/customsoftware"
                onClick={handleClose}
              >
                Mobile Development
              </MenuItem>
              <MenuItem
                component={Link}
                to="/customsoftware"
                onClick={handleClose}
              >
                Website Development
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar className={classes.toolbarMargin} />
    </Fragment>
  );
};
export default Header;

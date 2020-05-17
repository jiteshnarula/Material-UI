import React, { Fragment } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

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
  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h3" color="  ">
              Bloging Website
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </Fragment>
  );
};
export default Header;

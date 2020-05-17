import React from "react";
import Header from "./ui/Header";
import {
  Container,
  Box,
  Fab,
  Zoom,
  useScrollTrigger,
  CssBaseline,
  Toolbar,
  Slide,
} from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     position: "fixed",
//     bottom: theme.spacing(2),
//     right: theme.spacing(2),
//   },
// }));
// function ScrollTop(props) {
//   const { children, window } = props;
//   const classes = useStyles();
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     target: window,
//     disableHysteresis: true,
//     threshold: 100,
//   });

//   const handleClick = (event) => {
//     const anchor = (event.target.ownerDocument || document).querySelector(
//       "#back-to-top-anchor"
//     );

//     if (anchor) {
//       anchor.scrollIntoView({ behavior: "smooth", block: "center" });
//     }
//   };

//   return (
//     <Zoom in={trigger}>
//       <div onClick={handleClick} role="presentation" className={classes.root}>
//         {children}
//       </div>
//     </Zoom>
//   );
// }

function App(props) {
  return (
    // <div className="App">
    //   <CssBaseline />
    //   <Header />
    //   <Toolbar id="back-to-top-anchor" />
    //   <Container>
    //     <Box my={2}>
    //       {[...new Array(120)]
    //         .map(
    //           () => `Cras mattis consectetur purus sit amet fermentum.
    // Cras justo odio, dapibus ac facilisis in, egestas eget quam.
    // Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    // Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
    //         )
    //         .join("\n")}
    //     </Box>
    //   </Container>
    //   <ScrollTop>
    //     <Fab color="secondary" size="small" aria-label="scroll back to top">
    //       <KeyboardArrowUpIcon />
    //     </Fab>
    //   </ScrollTop>
    // </div>

    <ThemeProvider theme={theme}>
      <Header />
      Hello!
    </ThemeProvider>
  );
}

export default App;

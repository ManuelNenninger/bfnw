import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from "@mui/material/Zoom";
import TabsGroup from "../atoms/newsFeed/tabsButton";
import theme from "../../../styles/theme";


function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 400
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      //https://developer.mozilla.org/de/docs/Web/API/Element/scrollIntoView
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

export default function BackToTop(props) {
  return (
    <React.Fragment>
    <Box sx={{mt: theme.spacing(3),}}>
      <CssBaseline />
      <AppBar
        sx={{
          "&.MuiAppBar-root": {
            backgroundColor: "#FFFFFF",
            position: "static",
            boxShadow: "none",
            borderTop: 1,
            borderBottom: 1,
            p: theme.spacing(2,0),
            borderColor: theme.palette.borderColor.main,
          }
        }}
      >
        <Toolbar id="back-to-top-anchor">
          <TabsGroup />
        </Toolbar>
      </AppBar>
      <Box component="main_newsFeed">
        <Box sx={{ my: 2 }}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box>
      </Box>
      <ScrollTop {...props}>
        <Fab sx={{backgroundColor: theme.palette.secondary.light}} size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      </Box>
    </React.Fragment>
  );
}

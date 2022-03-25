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
import NewsCardGenerator from "../atoms/newsFeed/newsCard/newsCardGenerator";
import theme from "../../../styles/theme";
import { useEffect, useRef } from "react";

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



export default function BackToTop(props) {
  //Setze hier den Anfangswert, für wie viele Cards am anfang gezeigt werden.
  const [bottomOfNewsFeedCounter, setBottomOfNewsFeedCounter] = React.useState(0);
  const [selectedInterest, setSelectedInterest] = React.useState(0);


  function OnScrollEvent() {
    // console.log('Window height (px):' + window.innerHeight)
    // console.log('Currently scrolled from top (px):' + window.pageYOffset)
    // console.log('Document height(px):' + document.body.offsetHeight)
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      //setBottomOfNewsFeedCounter(prev => prev + 1)
      console.log("You reached the bottom of the window.");
    }
  }

useEffect(() => {
    window.addEventListener("scroll", OnScrollEvent);
}, []);

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
          <TabsGroup
            selectedInterest={selectedInterest}
            setSelectedInterest={setSelectedInterest}
          />
        </Toolbar>
      </AppBar>
        <Box id="mainNewsFeed" sx={{my: 4,mx: "auto", maxWidth: '1600px'}}  >
          <NewsCardGenerator
            bottomOfNewsFeedCounter={bottomOfNewsFeedCounter}
            selectedInterest={selectedInterest}
          />
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

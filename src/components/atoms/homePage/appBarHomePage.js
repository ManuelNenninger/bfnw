import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import CallToActionButton from "./callToActionButton";
import IconButton from '@mui/material/IconButton';
import MoreIcon from '@mui/icons-material/MoreVert';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import theme from "../../../../styles/theme"

const ColorButton = styled(Button)(({ theme }) => ({
  marginRight: 10,
  '&:hover': {
    background: "rgba( 255, 255, 255, 0.4 )",
  },
}));

export default function ButtonAppBar() {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
     setMobileMoreAnchorEl(null);
   };

   const handleMobileMenuOpen = (event) => {
     setMobileMoreAnchorEl(event.currentTarget);
   };

   const handleClickScroll = (event) => {
     console.log(event.target.value);
     // "==" statt "==="
     if(event.target.value == "1"){
       const anchor = (event.target.ownerDocument || document).querySelector(
         "#back-to-about-anchor"
       );
       if (anchor) {
         //https://developer.mozilla.org/de/docs/Web/API/Element/scrollIntoView
         anchor.scrollIntoView({
           behavior: "smooth",
           block: "center"
         });
       }
     } else {
       const anchor = (event.target.ownerDocument || document).querySelector(
         "#back-to-processPlan-anchor"
       );
       if (anchor) {
         //https://developer.mozilla.org/de/docs/Web/API/Element/scrollIntoView
         anchor.scrollIntoView({
           behavior: "smooth",
           block: "center"
         });
       }
     }

   };

   const mobileMenuId = 'primary-search-account-menu-mobile';
   const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem value="1" onClick={handleClickScroll} >
        <p>About Us</p>
      </MenuItem>
      <MenuItem value="2" onClick={handleClickScroll}>
        <p>How it works</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="primary">
        <Toolbar >
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: theme.palette.homePageButtonColor.main, fontWeight: 500 }}>
            Finyon
          </Typography>
          <Box sx={{ display: { md: 'flex', xs: 'none' } }}>
          <ColorButton color="inherit" value="1" onClick={handleClickScroll}>About Us</ColorButton>
          <ColorButton color="inherit" value="2" onClick={handleClickScroll}>How it works</ColorButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
          <CallToActionButton/>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}

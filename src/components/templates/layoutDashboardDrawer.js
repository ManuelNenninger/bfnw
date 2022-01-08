import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import FeedbackIcon from '@mui/icons-material/Feedback';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Appbar from '../organisms/appbar';
import Link from 'next/link'
import theme from "../../../styles/theme";
import Tooltip from '@mui/material/Tooltip';


const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [searchContent, setSearchContent] = React.useState("AAPL");


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        <ListItem  key="Brand">
          <Typography variant="h6" >SphereIO</Typography>
        </ListItem>
        <ListItem  key="Welcome">
          <Typography  variant="subtitle2" gutterBottom >Wilkommen zur Beta Version 1</Typography>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key="Dashboard">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button key="Dashboard">
          <ListItemIcon>
            <ShowChartIcon />
          </ListItemIcon>
          <ListItemText primary="News" />
        </ListItem>
        {/*Dieser Tooltip und span kann weg, sobald die Funktion implementiert ist*/}
        <Tooltip title="Diese Funktion ist derzeit noch nicht verfügbar" placement="bottom-end">
          <span>
            <ListItem button disabled key="Analyse">
              <ListItemIcon>
                <AnalyticsIcon />
              </ListItemIcon>
              <ListItemText primary="Analyse" />
            </ListItem>
          </span>
        </Tooltip>
      </List>
      <Divider />
      <List>
        {/*Dieser Tooltip und span kann weg, sobald die Funktion implementiert ist*/}
        <Tooltip title="In der Demo Version ist kein Account hinterlegt" placement="bottom-end">
          <span>
            <ListItem button disabled key="Accout Settings">
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Accout Settings" />
            </ListItem>
          </span>
        </Tooltip>
      </List>
      <Divider />
      <List>
        <ListItem button key="Feedback" sx={{backgroundColor: theme.palette.primary.main, '&:hover, &:focus':{bgcolor: theme.palette.primary.light}}} >
          <ListItemIcon>
            <FeedbackIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography  variant="subtitle1" gutterBottom >Was können wir verbessern?</Typography>
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* Start appbar aus organismus*/}
      <Appbar
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
        setSearchContent={setSearchContent}
      />
      {/*Ende appbar aus organismus*/}
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { xs: '100%', md: `calc(100% - ${drawerWidth}px)` },  }}>
        {/*Hier werden alle Dash-Board Komponenten als Children weitergegeben. ResponsiveDrawer ist eine Layout Componente in _app.js*/}
        {props.children}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import PublicIcon from "@mui/icons-material/Public";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import theme from "../../../../styles/theme";
import Tooltip from '@mui/material/Tooltip';


export default function ScrollableTabsButtonAuto(props) {
  const [valueOne, setValueOne] = React.useState(0);
  const [selectedNewsFeedView, setSelectedNewsFeedView] = React.useState(0);
  const { selectedInterest, setSelectedInterest } = props;

  const handleChangeSelectedInterest = (event, newValue) => {
    setSelectedInterest(newValue);
  };
  const handleChangeOne = (event, newValue) => {
    setValueOne(newValue);
  };
  const handleChangeSelectedNewsFeedView = (event, newValue) => {
    setSelectedNewsFeedView(newValue);
  };
  return (
    <Box>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item xs={3} sx={{ borderRight: 1, borderColor: theme.palette.borderColor.dark }} zeroMinWidth>
          <Tabs
            textColor="primary"
            indicatorColor="primary"
            value={valueOne}
            onChange={handleChangeOne}
            variant="scrollable"
            aria-label="scrollable auto tabs example"
          >
            <Tab icon={<PersonPinIcon />} label="Market News" />
            <Tooltip title="Diese Funktion ist derzeit noch nicht verfügbar" placement="bottom">
              <span>
                <Tab icon={<PublicIcon />} disabled label="Personal News" />
              </span>
            </Tooltip>
          </Tabs>
        </Grid>
        <Grid item xs={6} sx={{ borderRight: 1, borderColor: theme.palette.borderColor.dark }} zeroMinWidth>
          <Tabs
            textColor="primary"
            indicatorColor="primary"
            scrollButtons={true}
            allowScrollButtonsMobile
            value={selectedInterest}
            onChange={handleChangeSelectedInterest}
            variant="scrollable"
            aria-label="Interessens Auswahl"
          >
            <Tab icon={<AccountBalanceIcon />} label="Alle Themen" />
            <Tab icon={<ShowChartIcon />} label="Aktien" />
            <Tab icon={<DeviceHubIcon />} label="Crypto" />
            <Tab icon={<HomeWorkIcon />} label="Börse generell" />
          </Tabs>
        </Grid>
        <Grid item xs={3} zeroMinWidth>
          <Tabs
            textColor="primary"
            indicatorColor="primary"
            scrollButtons={true}
            allowScrollButtonsMobile
            value={selectedNewsFeedView}
            onChange={handleChangeSelectedNewsFeedView}
            variant="scrollable"
            aria-label="News Feed Ansicht"
          >
            <Tab icon={<DashboardRoundedIcon />} label="Card" />
            <Tooltip title="Diese Funktion ist derzeit noch nicht verfügbar" placement="bottom">
              <span>
                <Tab icon={<FormatListBulletedRoundedIcon />} label="List" disabled />
              </span>
            </Tooltip>
          </Tabs>
        </Grid>
      </Grid>
    </Box>
  );
}

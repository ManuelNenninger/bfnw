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
import theme from "../../../../styles/theme";

export default function ScrollableTabsButtonAuto() {
  const [valueOne, setValueOne] = React.useState(0);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeOne = (event, newValue) => {
    setValueOne(newValue);
  };

  return (
    <Box>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item xs="auto" sx={{ borderRight: 1, borderColor: theme.palette.borderColor.dark }} zeroMinWidth>
          <Tabs
            textColor="primary"
            indicatorColor="primary"
            value={valueOne}
            onChange={handleChangeOne}
            variant="scrollable"
            aria-label="scrollable auto tabs example"
          >
            <Tab icon={<PersonPinIcon />} label="Personal News" />
            <Tab icon={<PublicIcon />} label="Market News" />
          </Tabs>
        </Grid>
        <Grid item xs zeroMinWidth>
          <Tabs
            textColor="primary"
            indicatorColor="primary"
            scrollButtons={true}
            allowScrollButtonsMobile
            value={value}
            onChange={handleChange}
            variant="scrollable"
            aria-label="scrollable auto tabs example"
          >
            <Tab icon={<ShowChartIcon />} label="Aktien" />
            <Tab icon={<DeviceHubIcon />} label="Crypto" />
            <Tab icon={<AccountBalanceIcon />} label="Generell" />
            <Tab icon={<HomeWorkIcon />} label="Immobilien" />
          </Tabs>
        </Grid>
      </Grid>
    </Box>
  );
}

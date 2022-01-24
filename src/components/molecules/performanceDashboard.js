import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MainChart from "../atoms/mainDashboardChart/chartMain";
import CostumeLegend from "../atoms/mainDashboardChart/customLegend";
import PerformanceTable from "./performanceTable";

export default function BoxSx(props) {
  const [weekdaySelection, setWeekdaySelection] = useState("week");


  return (
    <Box sx={{
        width: "100%",
        paddingTop: 2,
      }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Box sx={{
                    width: "100%",
                    height: "100%",
                  }} >
                  <CostumeLegend setWeekdaySelection={setWeekdaySelection}/>
                  <MainChart weekdaySelection={weekdaySelection} />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{
                    width: "100%",
                    pl: {xs: "none", md: 2},
                    borderLeft: {xs: "none", md: 1},
                    borderColor: 'borderColor.main',
                  }}>
                  <PerformanceTable/>
            </Box>
          </Grid>
        </Grid>
    </Box>
  );
}

import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MainChart from "../atoms/mainDashboardChart/chartMain";
import CostumeLegend from "../atoms/mainDashboardChart/customLegend";
import PerformanceTable from "./PerformanceTable";

export default function BoxSx(props) {
  const [weekdaySelection, setWeekdaySelection] = useState("week");


  return (
    <Box sx={{
        width: "100%",
        paddingTop: 2,
      }}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Box sx={{
                    width: "100%",
                    height: "100%",
                  }} >
                  <CostumeLegend setWeekdaySelection={setWeekdaySelection}/>
                  <MainChart weekdaySelection={weekdaySelection} searchContent={props.searchContent}/>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{
                    width: "100%",
                    pl: 2,
                    borderLeft: 1,
                    borderColor: 'borderColor.main',
                  }}>
                  <PerformanceTable/>
            </Box>
          </Grid>
        </Grid>
    </Box>
  );
}

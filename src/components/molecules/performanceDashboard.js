import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MainChart from "../atoms/mainDashboardChart/chartMain";
import CostumeLegend from "../atoms/mainDashboardChart/customLegend";


export default function BoxSx() {

  return (
    <Box sx={{
        width: "100%",
        height: "100%",
        paddingTop: 5,
      }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Box sx={{
                    width: "100%",
                    height: "100%",
                  }} >
                  <CostumeLegend />
                  <MainChart/>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{
                    width: "100%",
                    height: "100px",
                  backgroundColor: 'blue',

                  }} />
          </Grid>
        </Grid>
    </Box>
  );
}

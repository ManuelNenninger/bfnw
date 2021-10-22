import * as React from 'react';
import {
  styled,
  createTheme
} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AppleIcon from '@mui/icons-material/Apple';
import EuroIcon from '@mui/icons-material/Euro';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';



export default function RecipeReviewCard() {
const theme = createTheme();



  return (
    <Box sx={{ width: 400, height: '100%',  borderRight: 1, borderLeft: 1  }}>
  <Box sx={{padding: theme.spacing(1, 2)}}>
    <Grid container
          spacing={0}
          direction="row"
          justifyContent="space-between"
          alignItems="center">

      <Grid item xs={6} zeroMinWidth>

      <Grid container
          spacing={0}
          direction="column"
          alignItems="flex-start">

        <Grid item xs={12}>
          <Grid container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={0.5}>
            <Grid item >
              <AppleIcon/>
            </Grid>
            <Grid item >
              <Typography variant="h6"  component="div">
                Apple Inc.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={0.5}
              sx={{marginTop: theme.spacing(0.5)}}>
            <Grid item >
              <ArrowDropUpIcon sx={{ color: "#4caf50" }}/>
            </Grid>
            <Grid item >
              <Typography variant="body2" color="#4caf50" component="div">
                2,1%
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={0.5}>
            <Grid item >
              <EuroIcon/>
            </Grid>
            <Grid item >
              <Typography variant="h5"  component="div">
                130
              </Typography>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
      </Grid>
      <Grid item xs={6}>
      <Box
      sx={{
        width: 190,
        height: 100,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
      </Grid>
    </Grid>
  </Box>
</Box>
  );
}

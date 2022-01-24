import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import theme from "../../../../styles/theme";

export default function convinceCard({ icon, header, text }) {
  return (
    <>
      <Grid item xs={12} sm={4}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          textAlign="center"
        >
          <Grid item xs={12}>
            {icon}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom component="div" sx={{fontWeight: 500}}>
              {header}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom component="div" sx={{color: theme.palette.text.subtitleColor}} >
              {text}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

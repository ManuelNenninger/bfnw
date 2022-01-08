import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function convinceCard({ icon, header, text }) {
  return (
    <>
      <Grid item xs={12} sm={4}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item xs={12}>
            {icon}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom component="div">
              {header}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2" gutterBottom component="div">
              {text}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

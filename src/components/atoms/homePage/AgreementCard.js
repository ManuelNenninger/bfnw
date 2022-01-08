import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function agreementCard({ icon, header, text }) {
  return (
    <>
      <Grid item xs={12} sm={4} >
        {icon}
        <Typography variant="h6" gutterBottom component="div">
          {header}
        </Typography>
        <Typography variant="subtitle2" gutterBottom component="div">
          {text}
        </Typography>
      </Grid>
    </>
  );
}

import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import theme from "../../../../styles/theme";


export default function agreementCard({ icon, header, text }) {
  return (
    <>
      <Grid item xs={12} sm={4} >
        {icon}
        <Typography variant="h5" gutterBottom component="div" sx={{fontWeight: 500}} >
          {header}
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div" sx={{color: theme.palette.text.subtitleColor}}>
          {text}
        </Typography>
      </Grid>
    </>
  );
}

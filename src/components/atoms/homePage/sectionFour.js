import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import CallToActionButton from "./callToActionButton";
import Box from "@mui/material/Box";
import EMailSubscriptionInput from "./eMailSubscriptionInput";
import theme from "../../../../styles/theme"

export default function sectionFour() {
  return (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={10}
      >
        <Grid item xs={12} md={5}>
        <Box sx={{ borderBottom: 2}} >
          <Typography sx={{py: 1, backgroundColor: "rgba(255,255,255, 0.5)",}} variant="h3" gutterBottom component="div">
            About
          </Typography>
          </Box>
          <Typography sx={{pt: 2}} variant="subtitle1" gutterBottom component="div">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Typography>
        </Grid>

        <Grid item xs={12} md={7}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={1}
          >
            <Grid item xs={12} sx={{ pb: 2 }}>
              <CallToActionButton/>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom component="div">
                Willst Du mitbekommen wann die App fertig ist? <br /> Dann hinterlasse uns deine Mail Adresse
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
              <EMailSubscriptionInput/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
}

import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CallToActionButton from "./callToActionButton";
import SendIcon from '@mui/icons-material/Send';
import EMailSubscriptionInput from "./eMailSubscriptionInput";
import Image from 'next/image'




export default function AutoGrid() {
  return (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12} sm={6}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={1}
          >
            <Grid item>
              <Typography variant="h2" gutterBottom component="div">
                Wir helfen Dir einfacher neue Investments zu finden
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                Unterstützung bei Deiner Recherche nach neuen Aktien, ETF´s oder Kryptowährungen
                sowie die aktuellsten News zu deinen Investitionen, sodass Du keine Gelegenheit mehr verpasst.
              </Typography>
            </Grid>
            <Grid item sx={{ pb: 2 }}>
              <CallToActionButton/>
            </Grid>
            <Grid item >
              <Typography variant="subtitle1" gutterBottom component="div">
                Willst Du mitbekommen, wann die App fertig ist? <br /> Dann hinterlasse uns Deine Mail-Adresse
              </Typography>
            </Grid>
            <Grid item sx={{ display: "flex", alignItems: "center", }}>
              <EMailSubscriptionInput/>
            </Grid>
          </Grid>
        </Grid>
        {/*----------------------------*/}
        <Grid item xs={12} sm={6}>
          <Image src="/landingPageImageTwo.png" alt="raster_preview" width={1630} height={1300} loading="eager" layout="responsive" />
          {/*<Image src="/landingPageImageThree.png" alt="raster_preview" width={6912} height={3456} loading="eager" layout="responsive" />*/}
        </Grid>
      </Grid>
  );
}

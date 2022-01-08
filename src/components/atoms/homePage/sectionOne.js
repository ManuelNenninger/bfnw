import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CallToActionButton from "./callToActionButton";
import SendIcon from '@mui/icons-material/Send';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

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
                Wir helfen Dir bei der Recherche nach neuen Aktien, ETF´s oder Kryptowährungen
                 und zeigen dir die aktuellsten News zu deinen Investitionen, sodass Du keine Gelegenheit mehr verpasst.
              </Typography>
            </Grid>
            <Grid item sx={{ pb: 1 }}>
              <CallToActionButton/>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" gutterBottom component="div">
                Willst Du mitbekommen wann die App fertig ist? <br /> Du
                bekommst als erstes mit, Dann hinterlasse uns deine Mail Adresse
              </Typography>
            </Grid>
            <Grid item sx={{ display: "flex", alignItems: "center" }}>
              <TextField
                id="outlined-required"
                label="E-Mail Adresse"
                type="search"
                variant="outlined"
                fullWidth
              />
              <Button variant="outlined" color="homePageButtonColor"  sx={{ ml: 1, py: 2, minWidth: 120}} endIcon={<SendIcon />}>
                Subscribe
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {/*----------------------------*/}
        <Grid item xs={12} sm={6}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item>
              <Box
                sx={{
                  height: 500,
                  width: 200,
                  backgroundColor: "primary.dark",
                  borderRadius: 5
                }}
              />
            </Grid>
            <Grid item>
              <Box
                sx={{
                  height: 500,
                  width: 200,
                  backgroundColor: "primary.dark",
                  borderRadius: 5,
                  mt: 5
                }}
              />
            </Grid>
            <Grid item>
              <Box
                sx={{
                  height: 500,
                  width: 200,
                  backgroundColor: "primary.dark",
                  borderRadius: 5
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
}

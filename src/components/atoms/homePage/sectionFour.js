import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CallToActionButton from "./callToActionButton";
import Box from "@mui/material/Box";
import EMailSubscriptionInput from "./eMailSubscriptionInput";

export default function sectionFour() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
      spacing={2}
    >
      <Grid item xs={12} md={7} sx={{ pr: 10 }}>
        <Box sx={{ borderBottom: 2 }}>
          <Typography
            sx={{
              py: 1,
              backgroundColor: "rgba(255,255,255, 0.5)",
              fontWeight: 400,
            }}
            gutterBottom
            variant="h2"
            component="div"
          >
            About
          </Typography>
        </Box>
        <Typography
          sx={{ pt: 2, fontWeight: 400 }}
          variant="h6"
          component="div"
        >
          Hi, ich bin Manuel und ich will Dir dabei helfen, ein besserer
          Investor zu werden.
        </Typography>
        <Typography
          sx={{ pt: 4, fontWeight: 400 }}
          variant="subtitle1"
          component="div"
        >
          In der Welt der Finanzen geschehen viele Ereignisse - rund um die Uhr.
          Viele davon beeinflussen auch deine Investment Entscheidungen, wobei
          es schwer ist, sich immer auf dem Laufenden zu halten. Das ist
          zumindest mein Problem – gewesen.
        </Typography>
        <Typography
          sx={{ pt: 2, fontWeight: 400 }}
          variant="subtitle1"
          component="div"
        >
          <Typography
            sx={{ pt: 2, fontWeight: 500 }}
            variant="subtitle1"
            component="span"
          >
            Finyon soll dir dabei helfen, dich immer über die aktuellen Themen
            zu informieren, welche für dich als Anleger relevant sein könnten.
          </Typography>
          Egal ob Du jeden Tag an der Börse handelst, passiv investierst oder
          dich einfach nur über die Finanzwelt und ihre Ereignisse
          interessierst.
        </Typography>
        <Typography
          sx={{ pt: 2, fontWeight: 400 }}
          variant="subtitle1"
          gutterBottom
          component="div"
        >
          Diese Web-App ist ein der Prototyp. Falls Du dir eine vollumfängliche
          Webversion wünscht – mit allen Funktionen – hinterlasse mir deine
          Mail. Oder teile deine Meinung über die Feedback Funktion, damit ich
          das Produkt so gestalten kann, dass es Dich auch wirklich unterstützt.
        </Typography>
      </Grid>
      <Grid item xs={12} md={5} sx={{ width: "100%" }}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={1}
          sx={{}}
        >
          <Grid item>
            <Typography
              sx={{ fontWeight: 400 }}
              variant="h2"
              component="div"
              gutterBottom
            >
              Mehr?
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom component="div">
              Willst Du mitbekommen wann die App fertig ist? <br /> Dann
              hinterlasse uns deine Mail Adresse
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
            <EMailSubscriptionInput />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AgreementCard from "./AgreementCard";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Content = [
  {
    icon: <VisibilityIcon sx={{ fontSize: 40 }} />,
    header: "1. Teste die Demo Version",
    text: "Klicke auf die Live Demo, um zum Dashboard zu gelangen. Dort kannst Du die App testen. Einige Funktionen sind noch nicht umgesetzt und deshalb ausgegraut.",
  },
  {
    icon: <ForumRoundedIcon sx={{ fontSize: 40 }} />,
    header: "2. Dein Feedback, dein Produkt",
    text: "Fehlt Dir eine Funktion? Würdest Du gerne etwas hinzufügen oder verändern? Oder ist Dir sogar ein Problem aufgefallen? Sag es uns über die Feedback Funktion. Deine Meinung fließt in die App mit ein.",
  },
  {
    icon: <VpnKeyRoundedIcon sx={{ fontSize: 40 }} />,
    header: "3. Erhalte dauerhaft freien Zugang",
    text: "Deine Zeit ist wertvoll. Dafür, dass Du uns etwas davon schenkst, geben wir dir dauerhaft freien Zugang zur App.",
  },
];

export default function sectionTwo() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={10}
    >
      <Grid item sm={12} md={3}>
        <Typography variant="h3" gutterBottom component="div">
          Du willst die App testen?
        </Typography>
        <Box sx={{ backgroundColor: "rgba(255,255,255, 0.5)" }}>
          <Typography
            sx={{ p: 2, borderBottom: 2 }}
            variant="h3"
            component="span"
          >
            So gehts:
          </Typography>
          <ArrowForwardIosIcon />
        </Box>
      </Grid>
      <Grid item sm={12} md={9}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={3}
        >
          {Content.map(function (contentObject, index) {
            return AgreementCard(contentObject);
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

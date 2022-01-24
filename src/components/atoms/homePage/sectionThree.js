import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ConvinceCard from "./convinceCard";
import FeedRoundedIcon from '@mui/icons-material/FeedRounded';
import PersonPinCircleRoundedIcon from '@mui/icons-material/PersonPinCircleRounded';
import MultilineChartRoundedIcon from '@mui/icons-material/MultilineChartRounded';
import FaceRetouchingNaturalRoundedIcon from '@mui/icons-material/FaceRetouchingNaturalRounded';
import Box from "@mui/material/Box";

const Content = [
  {
    icon: <FeedRoundedIcon sx={{ fontSize: 50 }}/>,
    header: "Deine News, von überall",
    text:
      "Verschwende keine Zeit das Internet nach Neuigkeiten abzusuchen. Wir sammeln alle für dich relevanten Themen in einem Feed, sodass Du immer auf dem akutllsten Stand bist - in nur wenigen Minuten."
  },
  {
    icon: <FaceRetouchingNaturalRoundedIcon sx={{ fontSize: 50 }}/>,
    header: "Auf dich angepasst",
    text:
      "Um deine Zeit nicht mit unnötigen Themen zu verschwenden, zeigen wir nur was dich auch interresiert. Du kannst den Inhalt des Dashboards auf dich anpassen, wie Du es möchtest."
  },
  {
    icon: <MultilineChartRoundedIcon sx={{ fontSize: 50 }}/>,
    header: "Tools, zu deiner Unterstützung",
    text:
      "Um dich bei deiner Analyse zu unterstützen, ermöglichen wir Dir den Zugriff auf wichtige Kennzahlen zu jeder Aktie. Über unser Analyse-Tool erhälst Du mit einem Blick alle wichtigen Daten und kannst somit deine Entscheidungen schnell und einfach treffen."
  }
];

export default function BoxSx() {
  return (
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sx={{ pb: 7 }}>
          <Box sx={{borderBottom: 2}} >
          <Typography sx={{p: 1, backgroundColor: "rgba(255,255,255, 0.5)",}} variant="h3" gutterBottom component="div">
            Wie wollen wir dich unterstützen?
          </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            spacing={8}
          >
            {Content.map(function (contentObject, index) {
              return ConvinceCard(contentObject);
            })}
          </Grid>
        </Grid>
      </Grid>
  );
}

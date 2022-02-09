import * as React from "react";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from '@mui/material/Link';
import theme from "../../../../styles/theme";

export default function EmbellishedText(props) {
  let menstions = [];

  //<----- Wenn mentions vorhanden sind, push in das menstions-Array  ----->
  if (props.articleObject.contentData.entitiesForText?.mentions != null) {
    //<----- Fuege die mentions in das mentions-Array hinzu ----->
    props.articleObject.contentData.entitiesForText.mentions.map(function (
      mention,
      index
    ) {
      menstions.push("@" + mention.username);
    });
  }

  //<----- Teile den gesamten Text in einzele Woerter und ueberpruefe, ob die Mention vorhanden ist, oder Links, oder... ----->
  return props.articleObject.contentData.headline
    .split(" ")
    .map(function (word, index) {
      if (menstions.includes(word)) {
        return (
          <Typography
            variant="h6"
            sx={{ color: theme.palette.mentionsColor.main }}
            component="span"
          >
            {word + " "}
          </Typography>
        );
      } else {
        if (word.includes("https")) {
          return (
            <Link href={word} underline="hover" target="_blank">
              <Typography
                variant="h6"
                sx={{ color: theme.palette.primary.dark }}
                component="span">
                  {"Link "}
              </Typography>
            </Link>
          );
        } else {
          return word + " ";
        }
      }
    })
}

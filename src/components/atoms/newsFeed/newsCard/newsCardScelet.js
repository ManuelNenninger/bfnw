import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from '@mui/icons-material/Twitter';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ArticleIcon from '@mui/icons-material/Article';
import GetPublisherDateDifference from "../getPublisherDateDifference";
import theme from "../../../../../styles/theme";
import EmbellishedText from "../EmbellishedTextGenerator";

export default function MediaCard(props) {
  const [pubDate, setPubDate] = React.useState()
  React.useEffect(() => {
    const publisherDate = GetPublisherDateDifference({
      publisherDate: props.articleObject.contentData.publisherDate
    });
    setPubDate(publisherDate);
  }, []);

  const iconSelection = {
    "The New York Times": (<ArticleIcon sx={{ backgroundColor: "#adb5bd", borderRadius: "50%", p: 0.5, }} />),
    "Twitter": (<TwitterIcon sx={{ backgroundColor: theme.palette.mentionsColor.main, borderRadius: "50%", p: 0.5, }} />),
  };

  const placeHolderImageURL = {
    "The New York Times": false,
    "Twitter": "https://pbs.twimg.com/media/EYeX7akWsAIP1_1.jpg",
  }



  return (
    <Card sx={{  p: 1, border: 1, borderColor: "#bdbdbd" }}>
      <CardHeader
        avatar={iconSelection[props.articleObject.contentData.source]}
        action={
          <IconButton aria-label="settings" target="_blank" href={props.articleObject.contentData.linkToArticle}>
            <OpenInNewIcon />
          </IconButton>
        }
        subheader={props.articleObject.contentData.source}
      />
      <CardMedia
        sx={{ border: 1, borderRadius: 2, borderColor: "#bdbdbd", height: "100%", maxHeight: "300px",}}
        component="img"
        height="140"
        image={props.articleObject.contentData.imageUrl ? props.articleObject.contentData.imageUrl : placeHolderImageURL[props.articleObject.contentData.source]}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="body2" component="div">
          {pubDate} ago
        </Typography><span></span>
        <Typography gutterBottom variant="h6" component="div">
          <EmbellishedText {...props}/>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.articleObject.contentData.contentText}
        </Typography>
      </CardContent>
      <CardActions>
        {/*Hier könnten Actionen stehen wie Buttons etc. */}
      </CardActions>
    </Card>
  );
}

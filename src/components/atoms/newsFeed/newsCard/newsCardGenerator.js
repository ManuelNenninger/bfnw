import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Masonry from 'react-masonry-css'
import NewsCardScelet from "./newsCardScelet";
import CircularProgress from "@mui/material/CircularProgress";
import DataRequestRequestNYT from "../newYorkTimeData/dataRequestNYT";
import DataRequestRequestTwitter from "../TwitterData/dataRequestTwitter";
import DataRequestRequestYouTube from "../youTubeData/dataRequestYouTube";
import useSWR from "swr";


export default function ContentGridGenerator(props) {
  const [loading, setLoading] = React.useState(true);
  const { selectedInterest } = props;
  const SLIDE_COUNT_NEWS_CARD = props.numberOfNewsCards;
  const slidesNews = Array.from(Array(SLIDE_COUNT_NEWS_CARD));

  const { data: dataNYT, error: errorNYT } = useSWR(["api/dataRequestNYT", props], DataRequestRequestNYT);
  if (errorNYT) console.log("Error bei NYT API: " + errorNYT);

  const { data: dataTwitter, error: errorTwitter } = useSWR(["api/dataRequestTwitter", props ], DataRequestRequestTwitter);
  if (errorTwitter) console.log("Error bei Twitter API: " + errorTwitter);

  const { data: dataYouTube, error: errorYouTube } = useSWR(["api/dataRequestYouTube", props], DataRequestRequestYouTube);
  if (errorYouTube) console.log("Error bei YouTube API: " + errorYouTube);

  //<------ Hier wird der Datenrequest durchgefuhrt, nachdem der Bottom erreicht wurde ------>
  // React.useEffect(() => {
  //   if(props.bottomOfNewsFeedCounter > 0){
  //     setLoading(true);
  //     //Hier wird die open-Values der Asset gespeichert
  //     console.log("Ok. Jetzt sollten neue geladen werden");
  //   }
  //
  // }, [props.bottomOfNewsFeedCounter]);

//<------ Breakpoints for Masonry Grid ------>
  const breakpointColumnsObj = {
    default: 4,
    1400: 3,
    1200: 2,
    600: 1,
  };

  function Cards() {
    return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
          {dataNYT ?
            (dataNYT.map((articleObject, index) => (
              <Grid key={index + "_NYT_Card"} item>
                <NewsCardScelet articleObject={articleObject} cardIndex={index}/>
              </Grid>
            )))
            : null
          }
          {dataTwitter ?
            (dataTwitter.map((articleObject, index) => (
              <Grid key={index + "_Twitter_Card"} item>
                <NewsCardScelet articleObject={articleObject} cardIndex={index}/>
              </Grid>
            )))
            : null
          }
          {dataYouTube ?
            (dataYouTube.map((articleObject, index) => (
              <Grid key={index + "_YouTube_Card"} item>
                <NewsCardScelet articleObject={articleObject} cardIndex={index}/>
              </Grid>
            )))
            : null
          }
      </Masonry>
    </>
    );
  }

  return (
    <>
      {
        (!dataNYT && !dataTwitter && !dataYouTube) ? (
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <CircularProgress color="inherit" size={50} />
          </Grid>
          ) : (
          <Cards/>
        )
      }
    </>
  );
}

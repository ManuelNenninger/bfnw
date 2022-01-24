import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Masonry from 'react-masonry-css'
import NewsCardScelet from "./newsCardScelet";
import CircularProgress from "@mui/material/CircularProgress";
import DataRequestRequestNYT from "../newYorkTimeData/dataRequestNYT";
import DataRequestRequestTwitter from "../TwitterData/dataRequestTwitter";


export default function ContentGridGenerator(props) {
  const [loading, setLoading] = React.useState(true);
  const [dataResponseArrayNYT, setdataResponseArrayNYT] = React.useState();
  const [dataResponseArrayTwitter, setdataResponseArrayTwitter] = React.useState();
  const { selectedInterest } = props;
  const SLIDE_COUNT_NEWS_CARD = props.numberOfNewsCards;
  const slidesNews = Array.from(Array(SLIDE_COUNT_NEWS_CARD));

  const InitialRequestFunction = async function() {
    //Starte die Request an die API gleichzeitig, da sonst multiple await request viel Zeit beanspruchen
    //Anschließend wartet Promise.allSettled auf die Daten.
    //Destructuring die response von Promise.allSettled
    //in status steht, ob das promise resolved oder rejected wurde (z.B weil die api-request nicht ging)
    //Wenn ja, dann steht die response von der api in "value"
    const resNYT_promise = DataRequestRequestNYT(props);
    const resTwitter_promise = DataRequestRequestTwitter(props);
    const [resNYT, resTwitter] = await Promise.allSettled([resNYT_promise, resTwitter_promise]);

    if (resNYT.status === "fulfilled") {
      setdataResponseArrayNYT(resNYT.value);
    }
    if (resTwitter.status === "fulfilled") {
      setdataResponseArrayTwitter(resTwitter.value);
    }
    setLoading(!true);
  };

  //<------ Hier wird der initiale Request der Daten durchgeführt ------>
  React.useEffect(() => {
    setLoading(true);
    InitialRequestFunction();
  }, [selectedInterest]);

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
    600: 2,
  };

  function Cards() {
    return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
          {
            dataResponseArrayNYT.map((articleObject, index) => (
              <Grid key={index + "_NYT_Card"} item>
                <NewsCardScelet articleObject={articleObject} cardIndex={index}/>
              </Grid>
            ))
          }
          {
            dataResponseArrayTwitter.map((articleObject, index) => (
              <Grid key={index + "_Twitter_Card"} item>
                <NewsCardScelet articleObject={articleObject} cardIndex={index}/>
              </Grid>
            ))
          }
      </Masonry>
    </>
    );
  }

  return (
    <>
      {
        (loading && props.bottomOfNewsFeedCounter === 0) ? (
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

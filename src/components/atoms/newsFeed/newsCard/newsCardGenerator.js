import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import NewsCardScelet from "./newsCardScelet";
import CircularProgress from "@mui/material/CircularProgress";
import DataRequestRequestNYT from "../newYorkTimeData/dataRequestNYT";
import DataRequestRequestTwitter from "../TwitterData/dataRequestTwitter";




export default function ContentGridGenerator(props) {
  const [loading, setLoading] = React.useState(true);
  const [dataResponseArrayNYT, setdataResponseArrayNYT] = React.useState();
  const [dataResponseArrayTwitter, setdataResponseArrayTwitter] = React.useState();
  const SLIDE_COUNT_NEWS_CARD = props.numberOfNewsCards;
  const slidesNews = Array.from(Array(SLIDE_COUNT_NEWS_CARD));

 const InitialRequestFunction = async function () {
   //Starte die Request an die API gleichzeitig, da sonst multiple await request viel Zeit beanspruchen
   //Anschließend wartet Promise.allSettled auf die Daten.
   //Destructuring die response von Promise.allSettled
   //in status steht, ob das promise resolved oder rejected wurde (z.B weil die api-request nicht ging)
   //Wenn ja, dann steht die response von der api in "value"
   const resNYT_promise =  DataRequestRequestNYT();
   const resTwitter_promise =  DataRequestRequestTwitter();
   const [resNYT, resTwitter] = await Promise.allSettled([resNYT_promise, resTwitter_promise]);

   if(resNYT.status === "fulfilled") {
     setdataResponseArrayNYT(resNYT.value);
   }
   if(resTwitter.status === "fulfilled") {
     console.log(resTwitter.value);
     setdataResponseArrayTwitter(resTwitter.value);
   }
   setLoading(!true);
 };

//Test fuer Twitter
 // const TestTest = async function () {
 //   let resTest = await DataRequestRequestTwitter();
 //   console.log(resTest);
 // };


  React.useEffect(() => {
    setLoading(true);
    //Hier wird die open-Values der Asset gespeichert
    InitialRequestFunction();
    // TestTest();
  }, []);

  function Cards(){
    return(
      <>
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
      </>
    );
  }

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={{ xs: 3, md: 4 }}
      >
      {/*{slidesNews.map((slide, index) => (
        <Grid item key={index}>*/}
          {loading ? (
            <CircularProgress color="inherit" size={50} />
          ) : (
          <Cards/>
          )}
        </Grid>
      {/*))}
      </Grid>*/}
    </>
  );
}
